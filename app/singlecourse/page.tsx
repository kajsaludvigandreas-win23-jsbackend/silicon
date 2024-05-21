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
                        <p className={styles.right}></p>
                        <p><i className="fa-regular fa-clock"></i> 148 hours</p>
                    </div>

                    <div className={styles.author}>
                        <img src="/images/albertFlores.svg" alt="image of Albert Flores" />
                        <div className={styles.titleName}>
                            <p className={styles.createdBy}>Created by</p>
                            <p className={styles.authorName}>Albert Flores</p>
                        </div>
                    </div>
                </div>  

                <div className={styles.courseDescription}>
                    <div className={styles.contentLeft}>
                        <h1>Course Description</h1>
                        <p className={styles.description}>Suspendisse natoque sagittis, consequat turpis. Sed tristique tellus morbi magna. At vel senectus accumsan, arcu mattis id tempor. Tellus sagittis, euismod porttitor sed tortor est id. Feugiat velit velit, tortor ut. Ut libero cursus nibh lorem urna amet tristique leo. Viverra lorem arcu nam nunc at ipsum quam. A proin id sagittis dignissim mauris condimentum ornare. Tempus mauris sed dictum ultrices.</p>
                        <h3>What you'll learn</h3>

                        <div className={styles.points}>
                            <div className={styles.point}>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Sed lectus donec amet eu turpis interdum.</p>
                            </div>

                            <div className={styles.point}>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Nulla at consectetur vitae dignissim porttitor.</p>
                            </div>

                            <div className={styles.point}>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Phasellus id vitae dui aliquet mi.</p>
                            </div>

                            <div className={styles.point}>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>Integer cursus vitae, odio feugiat iaculis aliquet diam, et purus.</p>
                            </div>

                            <div className={styles.point}>
                                <i className="fa-regular fa-circle-check"></i>
                                <p>In aenean dolor diam tortor orci eu.</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.contentRight}>
                        <div className={styles.box}>
                            <h4>This course includes:</h4>

                            <div className={styles.content}>
                                <div className={styles.contentInfo}>
                                    <i className="fa-solid fa-display"></i>
                                    <p>148 hours on-demand video</p>
                                </div>

                                <div className={styles.contentInfo}>
                                    <i className="fa-regular fa-newspaper"></i>
                                    <p>18 articles</p>
                                </div>

                                <div className={styles.contentInfo}>
                                    <i className="fa-regular fa-download"></i>
                                    <p>25 downloadable resources</p>
                                </div>

                                <div className={styles.contentInfo}>
                                    <i className="fa-regular fa-universal-access"></i>
                                    <p>Full lifetime access</p>
                                </div>

                                <div className={styles.contentInfo}>
                                    <i className="fa-regular fa-trophy"></i>
                                    <p>Certificate of completion</p>
                                </div>
                            </div>

                            <div className={styles.price}>
                                <h2 className="black">$28.99</h2>
                                <p className="gray">$49.00</p>
                                <p className="black">$79.88</p>
                            </div>

                            <form id="join-course-form" method="post" asp-controller="Account" asp-action="SubCourse">
                                <input type="hidden" name="CourseId" value="@Model.Course.Id" />
                                <button type="submit" className='btn btn-theme'>Join course</button>
                            </form>
                        </div>
                    </div>
                </div> 

                <div className={styles.programDetails}>
                    <h1>Program Details</h1>

                    <div className={styles.body}>
                        <div className={styles.circles}>
                            <div className={styles.circle}>
                                <p>1</p>
                            </div>

                            <div className={styles.lineOne}></div>

                            <div className={styles.circle}>
                                <p>2</p>
                            </div>

                            <div className={styles.lineTwo}></div>

                            <div className={styles.circle}>
                                <p>3</p>
                            </div>

                            <div className={styles.lineThree}></div>

                            <div className={styles.circle}>
                                <p>4</p>
                            </div>

                            <div className={styles.lineFour}></div>

                            <div className={styles.circle}>
                                <p>5</p>
                            </div>

                            <div className={styles.lineFive}></div>

                            <div className={styles.circle}>
                                <p>6</p>
                            </div>
                        </div>

                        <div className="content">
                            <div className={styles.infos}>
                                <h4>Introduction. Getting started</h4>
                                <p>Nulla faucibus mauris pellentesque blandit faucibus non. Sit ut et at suspendisse gravida hendrerit tempus placerat.</p>
                            </div>
                            <div className={styles.infos}>
                                <h4>The ultimate HTML developer: advanced HTML</h4>
                                <p>Lobortis diam elit id nibh ultrices sed penatibus donec. Nibh iaculis eu sit cras ultricies. Nam eu eget etiam egestas donec scelerisque ut ac enim. Vitae ac nisl, enim nec accumsan vitae est.</p>
                            </div>
                            <div className={styles.infos}>
                                <h4>CSS & CSS3: basic</h4>
                                <p>Duis euismod enim, facilisis risus tellus pharetra lectus diam neque. Nec ultrices mi faucibus est. Magna ullamcorper potenti elementum ultricies auctor nec volutpat augue.</p>
                            </div>
                            <div className={styles.infos}>
                                <h4>JavaScript basics for beginners</h4>
                                <p>Morbi porttitor risus imperdiet a, nisl mattis. Amet, faucibus eget in platea vitae, velit, erat eget velit. At lacus ut proin erat.</p>
                            </div>
                            <div className={styles.infos}>
                                <h4>Understanding APIs</h4>
                                <p>Risus morbi euismod in congue scelerisque fusce pellentesque diam consequat. Nisi mauris nibh sed est morbi amet arcu urna. Malesuada feugiat quisque consectetur elementum diam vitae. Dictumst facilisis odio eu quis maecenas risus odio fames bibendum.</p>
                            </div>
                            <div className={styles.infos}>
                                <h4>C# and .NET from beginner to advanced</h4>
                                <p>Quis risus quisque diam diam. Volutpat neque eget eu faucibus sed urna fermentum risus. Est, mauris morbi nibh massa.</p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>  
        </section>
    )};