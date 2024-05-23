'use client';

import Link from 'next/link';
import styles from './accountSideNav.module.css'
import signOutAction from '@/app/signOutAction';
import { usePathname, useRouter } from 'next/navigation';

export default function AccountNav() {
    const router = useRouter();
    const pathname = usePathname();

    const handleLogout = async () => {
        const result = await signOutAction();
        if (result.success) {
            router.push('/');
        } else {
            console.error('Logout failed:', result.error);
        }
    };

    const isActive = (path: string) => pathname === path;

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
            <Link href="/accountdetails" className={`btn ${isActive('/accountdetails') ? 'btn-theme' : 'btn-gray'} ${styles.sideNavLinks}`}><i className="fa-regular fa-gear btn-icon"></i>Account Details</Link>
            <Link href="/accountsecurity" className={`btn ${isActive('/accountsecurity') ? 'btn-theme' : 'btn-gray'} ${styles.sideNavLinks}`}><i className="fa-regular fa-lock btn-icon"></i>Security</Link>
            <Link href="/accountsavedcourses" className={`btn ${isActive('/accountsavedcourses') ? 'btn-theme' : 'btn-gray'} ${styles.sideNavLinks}`}><i className="fa-light fa-bookmark btn-icon"></i>Saved Courses</Link>
            <Link href="/accountmycourses" className={`btn ${isActive('/accountmycourses') ? 'btn-theme' : 'btn-gray'} ${styles.sideNavLinks}`}><i className="fa-sharp fa-regular fa-cart-shopping btn-icon"></i>My Courses</Link>
            <Link href="/accountnotification" className={`btn ${isActive('/accountnotification') ? 'btn-theme' : 'btn-gray'} ${styles.sideNavLinks}`}><i className="fa-sharp fa-regular fa-bell btn-icon"></i>Notifications</Link>
            <Link href="/accountmessages" className={`btn ${isActive('/accountmessages') ? 'btn-theme' : 'btn-gray'} ${styles.sideNavLinks}`}><i className="fa-regular fa-messages btn-icon"></i>Messages</Link>
            <button onClick={handleLogout} className={`btn-gray btn ${styles.sideNavLinks}`}><i className="fa-light fa-right-from-bracket btn-icon"></i>Sign Out</button>
        </div>
    </div>
    );
}