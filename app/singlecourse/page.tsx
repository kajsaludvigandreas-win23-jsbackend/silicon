import styles from './singleCourse.module.css';

export default function SingleCourse() {
    return (
        <section id="singleCourse">
            <div>
                <img className={styles.backgroundImage} src="/images/singleCourseImage.svg" alt="image of a computer" />
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.icons}>
                    <img className="bestseller" src="/images/bestseller.svg" />

                    <img src="/images/digital.svg" />
                </div>

                <div className="content">
                    <h1>Fullstack Web Developer Course from Scratch</h1>
                    <p className={styles.info}>Egestas feugiat lorem eu neque suspendisse ullamcorper scelerisque aliquam mauris.</p>

                    <div className={styles.comments}>
                        <div className={styles.grades}>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-solid fa-star"></i></span>
                            <span><i className="fa-regular fa-star"></i></span>
                            <p>(1.2K reviews)</p>
                        </div>
                        <p className={styles.left}></p>
                        <p><i className="fa-regular fa-thumbs-up"></i>  5K likes</p>
                        <p className="right"></p>
                        <p><i className="fa-regular fa-clock"></i> 148 hours</p>
                    </div>

                    <div className="author">
                        <img src="/images/albertFlores.svg" alt="image of Albert Flores" />
                        <div className="title-name">
                            <p className="title">Created by</p>
                            <p className="name">@Model.Course.Author</p>
                        </div>
                    </div>
                </div>
            </div>      
        </section>      
    )};