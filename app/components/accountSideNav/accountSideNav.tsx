import Link from 'next/link';
import styles from './accountSideNav.module.css'

export default function AccountNav() {
    return ( 
        <div className={styles.accountNav}>
        <div className={styles.imageDiv}>
            <img className={styles.navImage} src="/images/avatarBig.svg" alt="User Image" />
        </div>
        <div className={styles.navNameInfo}>
            <h2 className={styles.h5}>John Doe</h2>
            <p className={styles.name}>john.doe@hotmail.com</p>
        </div>
        <div className={styles.navButtons}>
            <Link href="/accountdetails" className={`btn-theme btn ${styles.sideNavLinks}`}><i className="fa-regular fa-gear btn-icon"></i>Account Details</Link>
            <Link href="/accountsecurity" className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-regular fa-lock btn-icon"></i>Security</Link>
            <Link href="/accountsaveditems" className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-light fa-bookmark btn-icon"></i>Saved Courses</Link>
            <Link href="accountmycourses" className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-light fa-bookmark btn-icon"></i>My Courses</Link>
            <Link href="accountnotifications" className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-light fa-bookmark btn-icon"></i>Notifications</Link>
            <Link href="accountmessages" className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-light fa-bookmark btn-icon"></i>Messages</Link>
            <Link href="logout" className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-light fa-right-from-bracket btn-icon"></i>Sign Out</Link>
        </div>
    </div>
    );
}