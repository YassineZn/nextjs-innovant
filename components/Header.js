import Link from "next/link";

import styles from "../styles/layout.module.scss";

export const Header = () => {
  return (
    <header>
      <nav className={styles.topNav}>
        <Link href="#">Sign in</Link>
        <Link href="#">Sign up</Link>
      </nav>

      <nav className={styles.mainNav}>
        <div className={styles.logo}>
          <div className={styles.orange}>
            <div className={styles.blue}></div>
          </div>
        </div>

        <ul>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
