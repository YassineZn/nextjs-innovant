import styles from "../styles/form.module.scss";
import { signIn } from "next-auth/react";

export const FormSign = ({ click }) => {
  return (
    <div className="provider">
      <form
        className={styles.mainForm}
        action="/api/auth/callback/credentials"
        method="POST"
      >
        <input
          type="text"
          name="username"
          id="input-username-for-credentials-provider"
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          id="input-password-for-credentials-provider"
          placeholder="Password"
          required
        />
        <input type="submit" value="Submit" onClick={click} />
      </form>
    </div>
  );
};
