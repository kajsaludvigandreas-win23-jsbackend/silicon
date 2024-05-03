import Link from 'next/link';
import styles from './accountSideNav.module.css'

export default function AccountNav() {
    return ( 
        <div className={styles.accountNav}>
        <div className={styles.navImage}>
       <img src="/images/avatarBig.svg" alt="User Image" />
        </div>
        <div className={styles.navNameInfo}>
            <h2 className="h5">John Doe</h2>
            <p >john.doe@hotmail.com</p>
        </div>
        <div className={styles.navButtons}>
            <Link href="/accountdetails" className="btn-theme"><i className="fa-regular fa-gear"></i>Account Details</Link>
            <Link href="/accountsecurity" className="btn-gray"><i className="fa-regular fa-lock"></i>Security</Link>
            <Link href="/accountsaveditems" className="btn-gray"><i className="fa-light fa-bookmark"></i>Saved Courses</Link>
            <Link href="accountmycourses" className="btn-gray"><i className="fa-light fa-bookmark"></i>My Courses</Link>
            <Link href="logout" className="btn-gray"><i className="fa-light fa-right-from-bracket"></i>Sign Out</Link>
        </div>
    </div>
    );
}