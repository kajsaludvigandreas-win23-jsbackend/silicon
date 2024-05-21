import Link from "next/link";
import styles from "./verifyAccount.module.css";

export default function VerifyAccount() {
  return (
    <section id="verifyAccount">
      <div className={`container ${styles.container}`}>
        <form className={styles.verifyForm} action="/signin" method="post">

          <div className={styles.verifyContent}>
            <h1 className={styles.title}>Verify your Account</h1>
           
              <div id="formEmail" className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input className={styles.input} type="email" id="email" name="email" />
              </div>

              <div id="formPassword" className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input className={styles.input} type="password" id="password" name="password" />
              </div>

              <div id="formVerification" className={styles.inputGroup}>
                <label htmlFor="verificationCode">Verification code</label>
                <input className={styles.input} type="text" id="verificationCode" name="verificationCode" />
              </div>

              <button className={`btn btn-theme ${styles.btnTheme}`} type="submit">Verify</button>
          </div>
          </form>
          </div>
          </section>
  )};