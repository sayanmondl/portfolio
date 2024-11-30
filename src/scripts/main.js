const navOpenButton = document.getElementById("navOpen");
const navCloseButton = document.getElementById("navClose");
const navSidebar = document.getElementById("navSidebar");

navOpenButton.addEventListener("click", () => {
  navSidebar.classList.add("visible");
});

navCloseButton.addEventListener("click", () => {
  navSidebar.classList.remove("visible");
});

const workButtons = document.querySelectorAll(".work-buttons button");
const projects = document.querySelectorAll(".work-projects .project");

workButtons.forEach((button) => {
  button.addEventListener("click", function () {
    workButtons.forEach((btn) => {
      btn.classList.remove("active");
    });
    button.classList.toggle("active");
    const category = button.textContent.toLowerCase();

    projects.forEach((project) => {
      if (category === "all") {
        project.style.display = "block";
      } else if (project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    });
  });
});

document.querySelector(".work-buttons button:first-child").click();

const skillLabel = document.querySelector(".skills-buttons p");
const carouselContainer = document.querySelector(".carousel-container");
const leftButton = document.getElementById("leftButton");
const rightButton = document.getElementById("rightButton");
const skillItems = document.querySelectorAll(".skills-info-child");

let currentIndex = 0;

const updateSkillLabel = () => {
  const currentSkill = skillItems[currentIndex].getAttribute("data-skill");
  skillLabel.textContent = currentSkill;
};

const moveCarousel = (direction) => {
  const maxIndex = skillItems.length - 1;

  if (direction === "right") {
    currentIndex++;
    if (currentIndex > maxIndex) {
      currentIndex = maxIndex;
    }
  } else if (direction === "left") {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = 0;
    }
  }

  const translateX = -(currentIndex * 100);
  carouselContainer.style.transform = `translateX(${translateX}vw)`;
  updateSkillLabel();
};

leftButton.addEventListener("click", () => moveCarousel("left"));
rightButton.addEventListener("click", () => moveCarousel("right"));

updateSkillLabel();

const form = document.getElementById("dataForm");
const responseMessage = document.getElementById("responseMessage");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycby_pxXnCM067nLd2IQtFUzazwhcGE7PLffLhhnskCNeBKyXjVZ7nLGngLJAs8O5C7ym_Q/exec",
      {
        method: "POST",
        body: new URLSearchParams(data),
      }
    );

    if (response.ok) {
      responseMessage.textContent = "Form submitted successfully!";
      form.reset();
    } else {
      responseMessage.textContent = "Something went wrong. Please try again.";
      responseMessage.style.color = "red";
    }
  } catch (error) {
    responseMessage.textContent = "An error occurred: " + error.message;
    responseMessage.style.color = "red";
  }
});
