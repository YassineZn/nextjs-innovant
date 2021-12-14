import Head from "next/head";
import Image from "next/image";
import { Component } from "react";
import { Register } from "../components/Register";
import { FormRegister } from "../components/FormRegister";
import styles from "../styles/Home.module.css";
import { FormSign } from "../components/FormSign";
import Link from "next/link";
import Router from "next/router";
import React from "react";

class signup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password2: "",
      users: [],
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  handleSubmit = (e) => {
    if (this.state.password != this.state.password2) {
      alert("Passwords does not match");
    }
    this.setState({ users: [this.state.firstName] });
    e.preventDefault();
  };

  render() {
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
}
export default signup;
