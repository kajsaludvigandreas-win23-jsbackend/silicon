import Link from 'next/link';
import styles from './adminPortal.module.css';
import AdminNav from '../components/adminSideNav/adminSideNav';

export default function AdminPortal() {
    return (
        <section id="admin">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Welcome to the Admin Portal!</h1>
                        <Link className="btn btn-theme" href="/logoutadmin"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</Link>
                    </div>

                    <div className={styles.content}>
                        <p>Here, you have complete control over courses and user roles. With our powerful tools, you can edit courses as needed and tailor the user experience by assigning different roles to users. Take control and shape a customized learning environment that fits your unique needs. Empower your team with the tools they need to succeed. Get started today!</p>
                        <img src="/images/SiliconAdminPortal.png" alt="Admin Portal" className={styles.adminPortalImg} />
                    </div>                
                </div>
            </div>      
        </section>      
    )};