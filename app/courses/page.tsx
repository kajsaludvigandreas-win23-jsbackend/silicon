import styles from './courses.module.css';

export default function Courses() {
    return (
        <section id="courses">
            <div className={`container ${styles.container}`}>          
                <div className={styles.titleWithInput}>
                    <div className="title">
                        <h1>Courses</h1>
                    </div>

                    <div>
                        <form className={styles.form}>
                            <select id="categorySelect" className={styles.select} name="category">
                                <option value="">All Categories</option>
                                <option value="1">Best Sellers</option>
                                <option value="2">Discounted courses</option>
                            </select>
                            <input className={styles.input} type="text" name="searchString" placeholder="Search courses" />
                            <button className={styles.button} type="submit"><i className="fa-regular fa-magnifying-glass"></i></button>
                        </form>
                    </div>
                </div>

                <div className={styles.content}>
                    <div className={styles.box}>
                        <a className={styles.link} href='/singlecourse'>
                            <img className={styles.bestseller} src="/images/bestseller.svg" />

                            <form asp-controller="Course" asp-action="SaveCourse" method="post">
                                <input type="hidden" name="CourseId" value="@course.Id" />
                                <button className={styles.icon} type="submit" title="Course saved"><i className="fa-regular fa-bookmark"></i></button>
                            </form>

                            <img className={styles.image} src="/images/courseImageOne.svg" />

                            <div className={styles.info}>
                                <h3>Fullstack Web Developer Course from Scratch</h3>
                                <p className={styles.author}>By Robert Fox</p>

                                <div className={styles.priceDiscount}>
                                    <p className={styles.red}>$44.78</p>
                                    <p className={styles.gray}>$55.99</p>

                                    <p className={styles.price}>$12.50</p>
                                </div>

                                <div className={styles.line}></div>

                                <div className={styles.infoUnder}>
                                    <p className={styles.p}><i className="fa-regular fa-clock"></i> 220 hours</p>
                                    <p className={styles.p}><i className="fa-regular fa-thumbs-up"></i> 94% (4.2K)</p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

                <div className={styles.buttons}>
                    <button className={`btn btn-social ${styles.btnWhite}`}>1</button>
                    <button className={`btn btn-social ${styles.btnTheme}`}>2</button>
                    <button className={`btn btn-social ${styles.btnWhite}`}>3</button>
                </div>
            </div>      
        </section>      
    )};