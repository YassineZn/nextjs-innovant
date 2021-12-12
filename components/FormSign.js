import styles from "../styles/form.module.scss";

export const FormSign = () => {
  return (
    <div>
      <form className={styles.mainForm}>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
