import Link from "next/link";

import styles from "../styles/layout.module.scss";
export const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <Link href="/">
          <div className={styles.logo}>
            <div className={styles.orange}>
              <div className={styles.blue}></div>
            </div>
          </div>
        </Link>
        <p> &copy; All Right Reserved.</p>
      </footer>
    </div>
  );
};
