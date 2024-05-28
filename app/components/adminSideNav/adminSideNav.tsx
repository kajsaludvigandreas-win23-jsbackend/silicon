'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './adminSideNav.module.css';
import { useUser } from '@/app/context/UserContext';

export default function AdminNav() {
    const { user, loading, error } = useUser();
    const [email, setEmail] = useState('');

    useEffect(() => {
        const getUserEmailFromCookie = () => {
            const userEmailCookie = document.cookie
                .split('; ')
                .find(cookie => cookie.startsWith('UserEmail='));
            if (userEmailCookie) {
                const userEmail = userEmailCookie.split('=')[1];
                setEmail(decodeURIComponent(userEmail));
            }
        };

        getUserEmailFromCookie();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className={styles.adminNav}>
            <div className={styles.imageDiv}>
                <img className={styles.navImage} src={user?.profileImageUri || "/images/avatarBig.svg"} alt="User Image" />
            </div>
            <div className={styles.navNameInfo}>
                <h2 className={styles.h5}>{user ? `${user.firstName} ${user.lastName}` : 'John Doe'}</h2>
                <p className={styles.name}>{user?.email || email}</p>
            </div>
            <div className={styles.navButtons}>
                <Link href="/adminportal" className={`btn-theme btn ${styles.sideNavLinks}`}><i className="fa-regular fa-gear btn-icon"></i>Admin Portal</Link>
                <Link href="/admincourses" className={`btn-theme btn ${styles.sideNavLinks}`}><i className="fa-regular fa-newspaper btn-icon"></i>Courses</Link>
                <Link href="/adminuserroles" className={`btn-theme btn ${styles.sideNavLinks}`}><i className="fa-regular fa-user btn-icon"></i>Users</Link>
                <Link href="/adminsubscribers" className={`btn-theme btn ${styles.sideNavLinks}`}><i className="fa-regular fa-envelope btn-icon"></i>Subscribers</Link>
                <Link className={`btn-theme btn ${styles.sideNavLinks}`} href="/logoutadmin"><i className="fa-regular fa-lock-open btn-icon"></i>Sign Out Admin</Link>
            </div>
        </div>
    );
}
