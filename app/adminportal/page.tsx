'use client';

import styles from './adminPortal.module.css';
import AdminNav from '../components/adminSideNav/adminSideNav';
import { useRouter } from 'next/navigation';
import signOutAdminAction from '../signOutAdminAction';

export default function AdminPortal() {
    const router = useRouter();

    const handleLogout = async () => {
        const result = await signOutAdminAction();
        if (result.success) {
            router.push('/accountdetails');
        } else {
            console.error('Logout failed:', result.error);
        }
    };
 
    return (
        <section id="admin">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Welcome to the Admin Portal!</h1>
                        <button onClick={handleLogout} className="btn btn-theme"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</button>
                    </div>

                    <div className={styles.content}>
                        <p>Here, you have complete control over courses and user roles. With our powerful tools, you can edit courses as needed and tailor the user experience by assigning different roles to users. Take control and shape a customized learning environment that fits your unique needs. Empower your team with the tools they need to succeed. Get started today!</p>
                        <img src="/images/SiliconAdminPortal.png" alt="Admin Portal" className={styles.adminPortalImg} />
                    </div>                
                </div>
            </div>      
        </section>      
    )};