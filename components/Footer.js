import React from "react";
import styles from "./Footer.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.stopka}>
      <div className={styles.footer__container}>
        <div className={styles.left}>
          <div className={styles.logoBox}>
            <Image
              className={styles.image}
              src="/logoipsum-white-01.svg"
              width={200}
              height={40}
              alt="logoipsum logo"
            />
          </div>

          <p>
            Test footer Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Consequuntur excepturi nostrum quibusdam, facilis eius sequi?
          </p>
        </div>

        <div className={styles.right}>
          <div className={styles.box}>
            <h2>Contact</h2>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className={styles.box}>
            <h2>Other</h2>
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
