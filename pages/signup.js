import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";
import Link from "next/link";
import Router from "next/router";

export default function signup() {
  return (
    <div>
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          <div className={styles.registerContainer}>
            <Register
              title={"Register"}
              icon={"./register.svg"}
              check="/checkmark.svg"
              text={"Browse and find what you need"}
              link="signup"
            />

            <Register
              title={"Sign In"}
              icon={"./log-in.svg"}
              text={"Browse and find what you need"}
              link="signin"
            />
          </div>
          <FormRegister />
        </div>
      </div>
    </div>
  );
}
