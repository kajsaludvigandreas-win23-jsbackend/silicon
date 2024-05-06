import AccountNav from '../components/accountSideNav/accountSideNav';
import styles from './accountSavedCourses.module.css';

export default function AccountSavedCourses() {
    return (
        <section className={styles.savedCourses}>
            <div className={`container ${styles.container}`}>
                <AccountNav/>

                <div className={styles.savedCoursesContent}>

                    <div className={styles.savedCoursesHeader}>
                        <h2>Saved courses</h2>

                        <form method='post'>
                            <button className="btn btn-dangerWhite"><i className="fa-regular fa-trash btn-icon"></i>Delete all</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
};