import Link from 'next/link';
import styles from './accountNotification.module.css'
import AccountNav from '../components/accountSideNav/accountSideNav';
import ToggleSwitchDarkMode from '../components/toggleSwitchDarkMode/toggleSwitchDarkMode';
import ToggleSwitchSubscribe from '../components/toggleSwitchSubscribe/toggleswitchSubscribe';

export default function AccountSecurity() {
    return (
        <section className={styles.notifications}>
            <div className={`container ${styles.container}`}>
                <AccountNav />

                <div className={styles.accountNotifications}>
                    <form method='post' noValidate>
                        <h2 className={styles.title}>Notifications</h2>

                        <div id="formEmail" className={styles.notificationEmail}>
                            <label htmlFor="email">Preferred email for notifications</label>
                            <input className="input" type="email" id="email" placeholder='example@gmail.com' />
                        </div>
                        
                        <div className={styles.subscribe}>
                          <ToggleSwitchSubscribe/>  
                            <div className={styles.buttontext}>
                                <h4>Subscribe to newsletter</h4>
                                <p>Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper</p>
                            </div>
                        </div>

                        <div className={styles.darkMode}>
                        <ToggleSwitchDarkMode />
                            <div className={styles.buttontext}>
                                <h4>Use dark mode theme in application</h4>
                                <p>Tortor massa porttitor enim tristique neque fermentum sed</p>
                            </div>
                        </div>    
                        
                        <div className={styles.notificationsButtons}>
                            <button className="btn-gray btn" type="reset">Cancel</button>
                            <button className="btn-theme btn" type="submit">Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
};