import styles from './adminAddCourse.module.css';
import Link from "next/link";
import AdminNav from "../components/adminSideNav/adminSideNav";

export default function AdminAddCourse() {
    return (
        <section id="adminAddCourse">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.addCourseDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Add New Course</h1>
                        <Link className="btn btn-theme" href="/logoutadmin"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</Link>
                    </div>
                    
                    <form className={styles.basic} action='/addcourse' method='post'>
                        <div className={styles.basicContent}>
                            <div className={`${styles.basicTitle} ${styles.basicGroup}`}>
                                <label htmlFor="title">Title</label>
                                <input className={styles.inputBasic} type="text" id="title" placeholder='Enter the title' />
                            </div>

                            <div className= {`${styles.basicAuthor} ${styles.basicGroup}`}>
                                <label htmlFor="author">Author</label>
                                <input className={styles.inputBasic} type="text" id="author" placeholder='Specify the author' />
                            </div>

                            <div className= {`${styles.basicprice} ${styles.basicGroup}`}>
                                <label htmlFor="price">Price</label>
                                <input className={styles.inputBasic} type="decimal" id="price" placeholder='Enter the price' />
                            </div>

                            <div className={`${styles.basicDiscountPrice} ${styles.basicGroup}`}>
                                <label htmlFor="discountPrice">Discount price</label>
                                <input className={styles.inputBasic} type="" id='discountPrice' placeholder='Enter the discount price' />
                            </div>

                            <div className={`${styles.basicDescription} ${styles.basicGroup}`}>
                                <label htmlFor='description'>Description</label>
                                <textarea className={styles.descriptionInput} placeholder='Enter a description'></textarea>
                            </div>
                        </div>

                        <div className={styles.basicButtons}>
                            <button className="btn-gray btn" type="reset">Cancel</button>
                            <button className="btn-theme btn" type="submit">Add Course</button>
                        </div>
                    </form>
                    
                </div>
            </div>      
        </section>      
    )};