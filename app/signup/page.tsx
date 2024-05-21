'use client';

import { useRouter } from 'next/navigation';
import styles from './SignUp.module.css';
import Link from 'next/link';
import { ChangeEvent, FormEvent, useRef, useState } from 'react';

export default function SignUp() {
    const router = useRouter();
    const [error, setError] = useState<string>('');
    const checkboxRef = useRef<HTMLInputElement | null>(null)
    const [signUpForm, setSignUpForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
    })

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSignUpForm(data => ({...data, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const res = await fetch('https://accountprovider-lak.azurewebsites.net/api/SignUp?code=f7Esh9fi24AuSJ-swYNQ5osjk7ZELwxhZKw55i7JZrSfAzFu1kkUxw%3D%3D', {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(signUpForm)
        })

        try {
            if (res.status === 200) {
                router.push("/verifyaccount?email=" + signUpForm.email)
            } else {
                let result = await res.json()
                setError(result.error)
            }
        }
        catch {
            setError('Something went wrong..')
        }
    }

    
  return (
    <section id="signUp">
        {error && <div className="error">{error}</div>}
        <div className={`container ${styles.container}`}>
            <form onSubmit={handleSubmit} className="signUpForm" noValidate>
                <h1 className={styles.title}>Create account</h1>
                <p >Already have an account? <Link className={styles.signIn} href="/">Sign in here...</Link></p>

                <div className={styles.content}>
                    <div id="formFirstName" className={styles.inputGroup}>
                        <label htmlFor="firstName">First name</label>
                        <input value={signUpForm.firstName} onChange={onChange} className="input" type="text" name="firstName" />
                    </div>

                    <div id="formLastName" className={styles.inputGroup}>
                        <label htmlFor="firstName">Last name</label>
                        <input value={signUpForm.lastName} onChange={onChange} className="input" type="text" name="lastName" />
                    </div>

                    <div id="formEmail" className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input value={signUpForm.email} onChange={onChange} className="input" type="text" name="email" />
                    </div>

                    <div id="formPassword" className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input value={signUpForm.password} onChange={onChange} className="input" type="password" name="password" />
                    </div>

                    <div id="formConfirmPassword" className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm password</label>
                        <input value={signUpForm.confirmPassword} onChange={onChange} className="input" type="password" name="confirmPassword" />
                    </div>

                    <div className={styles.checkboxGroup}>
                        <input ref={checkboxRef} type="checkbox" name="terms" />
                        <label htmlFor="terms">I agree to the <Link className={styles.terms} href="/terms">terms and conditions</Link></label>
                    </div>
                    
                    <button className={`btn btn-theme ${styles.btnTheme}`} type="submit">Sign up</button>
                </div>
            </form>
        </div>
    </section>
  );
}