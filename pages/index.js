import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";
import { Logo } from "../components/Logo";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        {session ? (
          <div className={styles.bigContainer}>
            <div className={styles.logoContainer}>
              <Logo />
            </div>
            <p className={styles.p}>The Logo Above is made in Pure CSS :D</p>
          </div>
        ) : (
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
                  text={"Browse and find what you need"}
                  link="signin"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
