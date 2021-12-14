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
            <form
              action=""
              className={styles.mainForm}
              onSubmit={this.handleSubmit}
            >
              <div className={styles.name}>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  placeholder="First Name"
                  required
                />
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={this.handleChange}
                  value={this.state.lastName}
                  placeholder="Last Name"
                  required
                />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                name="email"
                onChange={this.handleChange}
                value={this.state.email}
              />
              <input
                type="password"
                id="password"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                required
              />
              <input
                type="Password"
                id="password2"
                name="password2"
                value={this.state.password2}
                onChange={this.handleChange}
                placeholder="Repeat Password"
                required
              />
              <input type="submit" value="Submit" />
            </form>
            <h1>{this.state.users[0]}</h1>;
          </div>
        </div>
      </div>
    );
  }
}
export default signup;
