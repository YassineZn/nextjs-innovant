import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";
export default function signin() {
  return (
    <div>
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          <div className={styles.registerContainer}>
            <Register
              title={"Register"}
              icon={"./register.svg"}
              text={"Browse and find what you need"}
              link="signup"
            />
            <Register
              title={"Sign In"}
              icon={"./log-in.svg"}
              check="/checkmark.svg"
              text={"Browse and find what you need"}
              link="signin"
            />
          </div>
          <FormSign />
        </div>
      </div>
    </div>
  );
}
