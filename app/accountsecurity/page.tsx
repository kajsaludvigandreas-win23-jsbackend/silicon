import Link from 'next/link';
import styles from './AccountSecurity.module.css'
import AccountNav from '../components/accountSideNav/accountSideNav';

export default function AccountSecurity() {
    return (
        <section className="security">
            <div className={`container ${styles.container}`}>
                <AccountNav />
                <div className={styles.accountSecurity}>
                    <form className={styles.securityForm}>
                        <h2 className={styles.title}>Security</h2>
                        <h4 className={styles.subtitle}>Password</h4>
                        <div className={styles.securityContent}>
                            <div className={`${styles.password} ${styles.securityGroup}`}>
                                <label htmlFor="password">Current password</label>
                                <input className="input" type="text" id="password" />
                            </div>

                            <div className={`${styles.newPassword} ${styles.securityGroup}`}>
                                <label htmlFor="newPassword">New password</label>
                                <input className="input" type="text" id="newPassword" />
                            </div>

                            <div className={`${styles.confirm} ${styles.securityGroup}`}>
                                <label htmlFor="confirmPassword">Confirm new password</label>
                                <input className="input" type="text" id="confirmPassword" />
                            </div>
                        </div>

                        <div className={styles.securityButtons}>
                            <button className="btn-gray btn" type="reset">Cancel</button>
                            <button className="btn-theme btn" type="submit">Change Password</button>
                        </div>
                    </form>

                    <hr/>

                    <form className={styles.delete}>
                        <h4 className={styles.deleteTitle}>Delete Account</h4>
                        <p className="description">When you delete your account, your public profile will be deactivated immediately.
                         If you change your mind before the 14 days are up, sign in with your email and password, and we’ll send you a link to reactivate your account.</p>
                        <div className={styles.checkboxGroup}>
                            <input type="checkbox" id="confirmDelete" />
                            <label htmlFor="checkboxDelete">Yes, I want to delete my account</label>
                        </div> 
                        
                        <div className={styles.deleteButton}>
                            
                            <button className="btn-danger btn" type="submit">Delete</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};