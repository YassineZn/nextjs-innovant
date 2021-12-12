import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      toRegister: true,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleClick1 = this.handleClick1.bind(this);
  }
  handleClick() {
    this.setState({ toRegister: true });
  }
  handleClick1() {
    this.setState({ toRegister: false });
  }
  render() {
    return (
      <div className={styles.flexContainer}>
        <div className={styles.container}>
          <div className={styles.registerContainer}>
            <Register
              title={"Register"}
              icon={"./register.svg"}
              text={"Browse and find what you need"}
              click={this.handleClick}
            />
            <Register
              title={"Sign In"}
              icon={"./log-in.svg"}
              text={"Browse and find what you need"}
              click={this.handleClick1}
            />
          </div>
          {this.state.toRegister ? <FormRegister /> : <FormSign />}
        </div>
      </div>
    );
  }
}
