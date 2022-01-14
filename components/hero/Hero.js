import React from "react";

import styles from "./Hero.module.scss";

const Hero = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.gridHero}>
          <div className={styles.left}>
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

          <div className={styles.right}>
            {/* <img src="https://picsum.photos/400/500" /> */}
            {/* <p>Lorem ipsum dolor</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
