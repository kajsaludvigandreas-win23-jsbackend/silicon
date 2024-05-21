import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';
import styles from './adminCourses.module.css';

export default function AdminCourses() {
    return (
        <section id="adminCourses">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminCoursesDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Courses</h1>
                        <Link className="btn btn-theme" href="/adminaddcourse"><i className="fa-regular fa-plus btn-icon"></i>Add New Course</Link>
                    </div>
                </div>
            </div>      
        </section>      
    )};