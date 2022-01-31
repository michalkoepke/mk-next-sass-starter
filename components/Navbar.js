import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { MdMenu } from "react-icons/md";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const navToggle = () => {
    setNavOpen(!navOpen);
    console.log("menu clicked");
  };

  return (
    <>
      <div className={styles.navi}>
        <div className={styles.navi__box}>
          <div className={styles.logo}>
            <Image
              src="/logoipsum-white-01.svg"
              width={200}
              height={40}
              alt="logoipsum logo"
            />
          </div>
          <div className={styles.menu}>
            <div className={styles.menu__links}>
              <Link href="/">
                <a>Home</a>
              </Link>

              <Link href="/about">
                <a>About</a>
              </Link>
              <Link href="/coins">
                <a>Link 3</a>
              </Link>
              <Link href="/coins">
                <a>Link 4</a>
              </Link>
            </div>

            {navOpen ? (
              <MdOutlineClose className={styles.menuIcon} onClick={navToggle} />
            ) : (
              <MdMenu className={styles.menuIcon} onClick={navToggle} />
            )}
          </div>
        </div>
      </div>

      <div className={navOpen ? styles.mobileMenuActive : styles.mobileMenu}>
        <Link href="/">
          <a>Home</a>
        </Link>

        <Link href="/coins">
          <a>Link 2</a>
        </Link>
        <Link href="/coins">
          <a>Link 3</a>
        </Link>
        <Link href="/coins">
          <a>Link 4</a>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
