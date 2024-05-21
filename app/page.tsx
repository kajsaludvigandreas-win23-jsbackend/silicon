import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <section id="signIn">
      <div className={`container ${styles.container}`}>
        <form className={styles.signInForm} action="/signin" method="post">

          <div className={styles.content}>
            <h1 className={styles.title}>Sign in</h1>
            <p>Don't have an account yet?<Link className={styles.signUp} href="/signup">Sign up here...</Link></p>
              <div id="formEmail" className={styles.inputGroup}>
                <label htmlFor="email">Email</label>
                <input className="input" type="email" id="email" name="email" />
              </div>

              <div id="formPassword" className={styles.inputGroup}>
                <label htmlFor="password">Password</label>
                <input className="input" type="password" id="password" name="password" />
              </div>

              <button className={`btn btn-theme ${styles.btnTheme}`} type="submit">Sign in</button>
          </div>

          <div className={styles.line}></div>

          <p className={styles.text}>Or sign in with:</p>

          <div className={styles.social}>
            <a href="/auth/facebook" className="btn btn-gray">
              <i className="btn-icon fab fa-facebook-f"></i>
              Facebook
            </a>
            <a href="/auth/google" className="btn btn-gray">
              <i className="btn-icon fab fa-google"></i>
              Google
            </a>
          </div>
        </form>
      </div>
    </section>
  );
}
