import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function animBox() {
  ScrollTrigger.defaults({
    toggleActions: "restart pause pause pause",
  });

  return gsap.fromTo(
    ".animBox",
    {
      scale: 0.1,
    },

    {
      scale: 1,
      stagger: 0.2,
      duration: 1,

      scrollTrigger: {
        trigger: "#section3",
        start: "top 50%",

        // end: "bottom bottom",

        // scrub: true,
        markers: true,
      },
    }
  );
}

export default animBox;
