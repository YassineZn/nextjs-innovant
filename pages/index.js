import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";
import Router from "next/router";
import { signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  console.log("session", session);
  return (
    <div className={styles.flexContainer}>
      <div className={styles.container}>
        {session ? (
          <button onClick={() => signOut()}>Log out</button>
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
