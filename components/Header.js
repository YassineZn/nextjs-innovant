import Link from "next/link";

import styles from "../styles/layout.module.scss";

export const Header = () => {
  return (
    <header>
      <nav className={styles.topNav}>
        <Link href="/signin">Sign in</Link>
        <Link href="/signup">Sign up</Link>
      </nav>

      <nav className={styles.mainNav}>
        <Link href="/">
          <div className={styles.logo}>
            <div className={styles.orange}>
              <div className={styles.blue}></div>
            </div>
          </div>
        </Link>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/">About</Link>
          </li>
          <li>
            <Link href="/">Contact us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
