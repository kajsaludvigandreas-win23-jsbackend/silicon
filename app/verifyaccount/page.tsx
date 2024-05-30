'use client';

import styles from "./verifyAccount.module.css";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function VerifyAccount() {
  const router = useRouter()
  const email = useSearchParams().get('email')
  const [error, setError] = useState<string>('')
  const [verificationCode, setVerificationCode] = useState<string>('')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      let form = {email, verificationCode}
      const res = await fetch('https://accountprovider-lak.azurewebsites.net/api/Verify?code=N1hBBTeLk248zkFPViXTvVCXmIogQ7Yk3ksZoomPC8TaAzFu7Crf0g%3D%3D', {
        method: 'post',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      if (res.status === 200) {
        router.push("/")
      } else {
        let result = await res.json()
        setError(result.error)
      }
    }
    catch {
      setError('Something went wrong, please try again later.')
    }
  }

  return (
    <section id="verifyAccount">
      <div className={`container ${styles.container}`}>
        {error && <div className="error">{error}</div>}

        <form onSubmit={handleSubmit} className={styles.verifyForm} noValidate>
          <div className={styles.verifyContent}>
            <h1 className={styles.title}>Verify your Account</h1>

              <div id="formVerification" className={styles.inputGroup}>
                <label htmlFor="verificationCode">Verification code</label>
                <input value={verificationCode} onChange={(e => setVerificationCode(e.target.value))} className={styles.input} type="text" id="verificationCode" name="verificationCode" />
              </div>

              <button className={`btn btn-theme ${styles.btnTheme}`} type="submit">Verify</button>
          </div>
        </form>
      </div>
    </section>
  )};