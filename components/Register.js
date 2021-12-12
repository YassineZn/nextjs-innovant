import React from "react";
import styles from "../styles/register.module.scss";

export const Register = ({ title, icon, text, click, check }) => {
  return (
    <div onClick={click}>
      <div
        className={`${styles.register}  ${
          title == "Sign In" ? styles["margin"] : styles[""]
        }`}
      >
        <img className={styles.check} src={check} alt="" />
        <div className={styles.logo}>
          <img src={icon} alt="" />
        </div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
