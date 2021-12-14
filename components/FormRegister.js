import React from "react";
import { Component } from "react/cjs/react.production.min";
import styles from "../styles/form.module.scss";

export const FormRegister = (handleChange, state) => {
  return (
    <div>
      <form action="" className={styles.mainForm}>
        <div className={styles.name}>
          <input
            type="text"
            id="firstName"
            value={state.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input type="text" id="lastName" placeholder="Last Name" required />
        </div>
        <input type="email" id="email" placeholder="Email" required />
        <input type="password" id="password" placeholder="Password" required />
        <input
          type="Password"
          id="password2"
          placeholder="Repeat Password"
          required
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

// const btn = document.getElementById("btn");
// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   const firstName = document.getElementById("firstName");
//   const lastName = document.getElementById("lastName");
//   console.log(firstName);
// });
