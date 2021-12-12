import styles from "../styles/form.module.scss";

export const FormRegister = () => {
  return (
    <div>
      <form action="" className={styles.mainForm}>
        <div className={styles.name}>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
        </div>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="Password" placeholder="Repeat Password" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
