import styles from "./adminSignIn.module.css";

export default function AdminSignIn() {
  
    return (
      <section id="adminSignIn">
        {/* {signInForm?.error && <div className="error">{signInForm?.error}</div>} */}
  
        <div className={`container ${styles.container}`}>
          <form className={styles.signInForm} noValidate>
            <div className={styles.content}>
              <h1 className={styles.title}>Sign in to become an admin</h1>
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
          </form>
        </div>
      </section>
    );
  }
  