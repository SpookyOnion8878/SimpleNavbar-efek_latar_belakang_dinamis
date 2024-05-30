import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link href="/" className={styles.navLink}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className={styles.navLink}>
            Services
          </Link>
        </li>
        <li>
          <Link href="/contact" className={styles.navLink}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
