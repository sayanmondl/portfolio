import { animate } from "motion";

animate(
  ".animate-div",
  { x: [-50, 0], opacity: [0, 1] },
  { ease: "circInOut", duration: 0.8, delay: 0.4 }
);

animate(".header-img ", { opacity: [0, 1] }, { ease: "circInOut", delay: 0.8 });
