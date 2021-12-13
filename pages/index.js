import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";
import Router from "next/router";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      toRegister: true,
      check1: "/checkmark.svg",
      check2: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick() {
    this.setState({ toRegister: true });
    this.setState({ check1: "/checkmark.svg" });
    this.setState({ check2: "" });
  }
  handleClick1() {
    this.setState({ toRegister: false });
    this.setState({ check1: "" });
    this.setState({ check2: "/checkmark.svg" });
  }

  session = false;
  render() {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          {this.session ? (
            <h1>Hello</h1>
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
}
