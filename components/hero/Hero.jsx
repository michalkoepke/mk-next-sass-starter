import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import useIsomorphicLayoutEffect from "../../anim/useIsomorphicLayoutEffect";

import styles from "./Hero.module.scss";

const Hero = () => {
  //refs

  // const tl = useRef(null);
  const heroText = useRef([]);
  const CTAref = useRef(null);

  const heroWrapper = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const elements = heroWrapper.current.children;

    const array = Array.from(elements);

    const title = array[0];
    const subtitle = array[1];
    const paragraph = array[2];
    const button = array[3];

    gsap.set([title, subtitle, paragraph, button], { autoAlpha: 0 });

    const tl = gsap.timeline({
      defaults: { duration: 1, ease: "power3.inOut" },
    });

    tl.fromTo(title, { y: "-=100" }, { autoAlpha: 1, y: "+=100" })
      .fromTo(subtitle, { y: "-=100" }, { autoAlpha: 1, y: "+=100" }, "-=0.9")
      .fromTo(paragraph, { y: "-=100" }, { autoAlpha: 1, y: "+=100" }, "-=0.9")
      .to(button, { autoAlpha: 1 }, "-=0.9");

    // return () => {
    //   CTAref.current && CTAref.current.kill();
    // };
  }, []);

  return (
    <section className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.gridHero}>
            <div className={styles.left} ref={heroWrapper}>
              <h1
                ref={(element) => {
                  heroText.current[0] = element;
                }}
                id="hero-title"
              >
                Some Main Title
              </h1>
              <h2
                ref={(element) => {
                  heroText.current[1] = element;
                }}
                id="hero-subtitle"
              >
                Subtitle goes here
              </h2>
              <div className={styles.description}>
                <p
                  ref={(element) => {
                    heroText.current[2] = element;
                  }}
                  id="hero-paragraph"
                >
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                  ipsa eaque sed tenetur ab, porro vel quia sit dolore itaque!
                </p>
              </div>
              <button
                className={styles.buttonStandart}
                ref={CTAref}
                id="hero-paragraph"
              >
                CTA Button
              </button>
            </div>
            <div></div>

            {/* <div className={styles.right}></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
