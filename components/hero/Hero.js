import React, { useRef, useEffect } from "react";
import gsap from "gsap";

import styles from "./Hero.module.scss";

const Hero = () => {
  //refs

  // const tl = useRef(null);
  const heroText = useRef(null);

  //useEffect

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 1.2, ease: "power3.inOut" },
    });

    tl.from(heroText.current, { opacity: 0, y: -100, stagger: 0.5 }).to(
      heroText.current,
      {
        opacity: 1,
        y: 0,
      }
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.gridHero}>
          <div className={styles.left} ref={heroText}>
            <h1>Some Main Title</h1>
            <h2>Subtitle goes here</h2>
            <div className={styles.description}>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam
                ipsa eaque sed tenetur ab, porro vel quia sit dolore itaque!
              </p>
            </div>
            <button className={styles.buttonStandart}>CTA Button</button>
          </div>

          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
