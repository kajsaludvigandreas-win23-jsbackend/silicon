import Link from 'next/link';
import styles from './AccountDetails.module.css'
import AccountNav from '../components/accountSideNav/accountSideNav';

export default function AccountDetails() {
    return (
        <section id="account">
            <div className={`container ${styles.container}`}>
            <AccountNav/>
            <div className={styles.accountDetails}>
                <h1>Account Details</h1>
                <form className={styles.basic} action='/accountdetails'method='post'>
                <h3 className={styles.title}>Account Info</h3>
                <div className={styles.basicContent}>
                    <div className={`${styles.basicFirstName} ${styles.basicGroup}`}>
                        <label htmlFor="firstName">First Name</label>
                        <input className={styles.inputBasic} type="text" id="firstName" />
                    </div>

                    <div className= {`${styles.basicLastName} ${styles.basicGroup}`}>
                        <label htmlFor="lastName">Last Name</label>
                        <input className={styles.inputBasic} type="text" id="lastName" />
                    </div>

                    <div className= {`${styles.basicEmail} ${styles.basicGroup}`}>
                        <label htmlFor="email">Email</label>
                        <input className={styles.inputBasic} type="email" id="email" />
                    </div>

                    <div className={`${styles.basicPhone} ${styles.basicGroup}`}>
                        <label htmlFor="phone">Phone Number</label>
                        <input className={styles.inputBasic} type="text" id='phone' />
                    </div>

                    <div className={`${styles.basicBio} ${styles.basicGroup}`}>
                        <div className={styles.opt}>
                        <label htmlFor='bio'>Bio</label>
                        <p className={styles.bio}> (optional)</p>
                        </div>
                        <textarea className={styles.bioInput}></textarea>
                        </div>
                </div>
                <div className={styles.basicButtons}>
                    <button className="btn-gray btn" type="reset">Cancel</button>
                    <button className="btn-theme btn" type="submit">Save Changes</button>
                </div>
                </form>

                <form className={styles.addressInfo}>
                <h3 className={styles.title}>Address Info</h3>
                    <div className={styles.addressContent}>
                    <div className={`${styles.addressLine1} ${styles.addressGroup}`}>
                        <label htmlFor="addressLine1">Address Line 1</label>
                        <input className={styles.inputAddress} type="text" id="addressLine1" />
                    </div>

                    <div className= {`${styles.addressLine2} ${styles.addressGroup}`}>
                        <label htmlFor="addressLine2">Address Line 2</label>
                        <input className={styles.inputAddress} type="text" id="addressLine2" />
                    </div>

                    <div className= {`${styles.postalCode} ${styles.addressGroup}`}>
                        <label htmlFor="postalCode">Postal Code</label>
                        <input className={styles.inputAddress} type="text" id="postalCode" />
                    </div>

                    <div className={`${styles.city} ${styles.addressGroup}`}>
                        <label htmlFor="city">City</label>
                        <input className={styles.inputAddress} type="text" id='city' />
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
       
        
        
    )};