import AccountNav from '../components/accountSideNav/accountSideNav';
import styles from './accountMyCourses.module.css';

export default function AccountMyCourses() {
    return (
        <section className={styles.myCourses}>
            <div className={`container ${styles.container}`}>
                <AccountNav/>

                <div className={styles.savedCoursesContent}>

                    <div className={styles.savedCoursesHeader}>
                        <h2>My courses</h2>

                        <form method='post'>
                            <button className="btn btn-dangerWhite"><i className="fa-regular fa-trash btn-icon"></i>Delete all</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    )
};