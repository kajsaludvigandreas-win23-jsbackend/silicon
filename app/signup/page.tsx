import styles from './SignUp.module.css';
import Link from 'next/link';

export default function SignUp() {
  return (
    <section id="signUp">
        <div className={`container ${styles.container}`}>
            <form className="signUpForm" action="/signup" method="post">
                <h1 className={styles.title}>Create account</h1>
                <p >Already have an account? <Link className={styles.signIn} href="/">Sign in here...</Link></p>

                <div className={styles.content}>
                    <div id="formFirstName" className={styles.inputGroup}>
                        <label htmlFor="firstName">First name</label>
                        <input className="input" type="text" id="firstName" />
                    </div>

                    <div id="formLastName" className={styles.inputGroup}>
                        <label htmlFor="firstName">Last name</label>
                        <input className="input" type="text" id="lastName" />
                    </div>

                    <div id="formEmail" className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input className="input" type="email" id="email" />
                    </div>

                    <div id="formPassword" className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input className="input" type="password" id="password" />
                    </div>

                    <div id="formConfirmPassword" className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input className="input" type="confirmPassword" id="confirmPassword" />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input type="checkbox" id="terms" />
                        <label htmlFor="terms">I agree to the <Link className={styles.terms} href="/terms">terms and conditions</Link></label>
                    </div>
                    
                    <button className={`btn btn-theme ${styles.btnTheme}`} type="submit">Sign up</button>
                </div>
            </form>
        </div>
    </section>
  );
}