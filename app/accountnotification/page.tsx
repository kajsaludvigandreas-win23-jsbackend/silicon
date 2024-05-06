import Link from 'next/link';
import styles from './accountNotification.module.css'
import AccountNav from '../components/accountSideNav/accountSideNav';

export default function AccountSecurity() {
    return (
        <section className={styles.notifications}>
            <div className={`container ${styles.container}`}>
                <AccountNav />

                <div className={styles.accountNotifications}>
                    <form method='post' noValidate>
                        <h2 className={styles.title}>Notifications</h2>

                        <div id="formEmail" className={styles.noteificationEmail}>
                            <label htmlFor="email">Preferred email for notifications</label>
                            <input className="input" type="email" id="email" />
                        </div>

                        <div id="subscribe" className={styles.btnSwitch}>

                            <div className={styles.switchBox}>
                                <input type="checkbox" className={styles.switch} />
                            <label htmlFor="subscribe" className={`${styles.slider} ${styles.round}`}></label>
                            </div>
                            <div className={styles.buttontext}>
                                <h6>Subscribe to newsletter</h6>
                                <p>Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper</p>
                            </div>

                        </div>
                        <div id="theme-switch" className={styles.btnSwitch}>

                            <div className={styles.btnSwitch}>
                               
                                <div className={styles.switchBox}>
                                    <input type="checkbox" className={styles.switch} />
                                    <label htmlFor="switch" className={`${styles.slider} ${styles.round}`}>
                                    </label>
                                    </div>
                                </div>

                            <div className={styles.buttontext}>
                                <h6>Use dark mode theme in application</h6>
                                <p>Tortor massa porttitor enim tristique neque fermentum sed</p>
                            </div>
                        </div>
                        <div className={styles.addressButtons}>
                            <button className="btn-gray btn" type="reset">Cancel</button>
                            <button className="btn-theme btn" type="submit">Save Changes</button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    )
};