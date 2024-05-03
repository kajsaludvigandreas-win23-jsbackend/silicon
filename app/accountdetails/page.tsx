import Link from 'next/link';
import styles from './AccountDetails.module.css'
import AccountNav from '../components/accountSideNav/accountSideNav';

export default function AccountDetails() {
    return (
        <section id="account">
            <div className={`container ${styles.container}`}>
            <AccountNav/>
            <div className={styles.accountDetails}>
                <h1>Details</h1>
                <form className={styles.basic} action='/accountdetails'method='post'>
                <h3>Basic Info</h3>
                <div className={styles.basicContent}>
                    <div id='basicFirstName' className={styles.basicGroup}>
                        <label htmlFor="firstName">First Name</label>
                        <input className={styles.input} type="text" id="firstName" />
                    </div>

                    <div id='basicLastName' className={styles.basicGroup}>
                        <label htmlFor="lastName">Last Name</label>
                        <input className={styles.input} type="text" id="lastName" />
                    </div>

                    <div id="basicEmail" className= {styles.basicGroup}>
                        <label htmlFor="email">Email</label>
                        <input className={styles.input} type="email" id="email" />
                    </div>

                    <div id='basicPhone' className={styles.basicGroup}>
                        <label htmlFor="phone">Phone Number</label>
                        <input className={styles.input} type="text" id='phone' />
                    </div>

                    <div id="basicBio" className={styles.basicGroup}>
                        <div className={styles.opt}>
                        <label htmlFor='bio'>Bio</label>
                        <p className={styles.bio}> (optional)</p>
                        </div>
                        <textarea className={styles.bioInput}></textarea>
                        </div>
                </div>
                <div className={styles.basicButtons}>
                    <button className="btn-gray" type="reset">Cancel</button>
                    <button className="btn-theme" type="submit">Save Changes</button>
                </div>
                </form>
            </div>

            </div>
        
        </section>
       
        
        
    )};