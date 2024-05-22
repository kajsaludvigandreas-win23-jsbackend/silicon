'use client';

import Link from "next/link";
import styles from "./page.module.css";
import { useFormState } from "react-dom";
import signInAction from "./signInAction";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const [signInForm, setSignInForm] = useFormState(signInAction, {success: false})
  const router = useRouter()

  useEffect(() => {
    if (signInForm.success) {
      router.push('/accountdetails')
    }
  }, [signInForm])


  return (
    <section id="signIn">
      {signInForm?.error && <div className="error">{signInForm?.error}</div>}

      <div className={`container ${styles.container}`}>
        <form action={setSignInForm} className={styles.signInForm} noValidate>

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

              <div className={styles.checkboxGroup}>
                <input type="checkbox" name="isPersistent" />
                <label>Remember me</label>
              </div>

              <button className={`btn btn-theme ${styles.btnTheme}`} type="submit">Sign in</button>

              <div className={styles.line}></div>
              
              <div className={styles.verifyText}>
                <p className={styles.text}>If you already have a verification code?</p>
                <Link href="/verifyaccount" className={styles.text}>click here...</Link>
              </div>
          </div>
        </form>
      </div>
    </section>
  );
}
