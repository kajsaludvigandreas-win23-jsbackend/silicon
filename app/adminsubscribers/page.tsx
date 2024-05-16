import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';
import styles from './adminSubscribers.module.css';

export default function AdminSubscribers() {
    return (
        <section id="adminSubscribers">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Subscribers</h1>
                        <Link className="btn btn-theme" href="/logoutadmin"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</Link>
                    </div>

                    <div className={styles.subscriber}>
                        <div className={styles.email}>
                            <p className="email">johndoe@domain.com</p>
                        </div>

                        <div>
                            <form className={styles.buttons}>
                                <button className="btn btn-update-delete"><i className="fa-regular fa-pen btn-icon"></i></button>
                                <button className="btn btn-update-delete"><i className="fa-regular fa-trash btn-icon"></i></button>
                            </form>
                        </div>
                    </div>          
                </div>
            </div>      
        </section>      
    )};