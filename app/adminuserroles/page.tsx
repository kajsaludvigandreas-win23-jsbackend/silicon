import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';
import styles from './adminUserRoles.module.css';

export default function AdminUserRoles() {
    return (
        <section id="adminUserRoles">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Users</h1>
                        <Link className="btn btn-theme" href="/adminaddnewuser"><i className="fa-regular fa-plus btn-icon"></i>Add New User</Link>
                    </div>

                    <div className={styles.user}>
                        <div className={styles.name}>
                            <p className="firstName">John</p>
                            <p className="lastName">Doe</p>
                        </div>

                        <div className={styles.roleButtons}>
                            <div className={styles.role}>
                                <select className="select">
                                    <option>Select role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                </select>
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
            </div>      
        </section>      
    )};