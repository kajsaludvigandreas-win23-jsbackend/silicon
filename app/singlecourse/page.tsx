'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './singleCourse.module.css';

interface Author {
    name: string;
}

interface Price {
    currency: string;
    price: number;
    discount: number;
}

interface ProgramDetail {
    id: string;
    title: string;
    description: string;
}

interface Content {
    description: string;
    includes: string[];
    programDetails: ProgramDetail[];
}

interface Course {
    id: string;
    imageUri: string;
    imageHeaderUri: string;
    isBestSeller: boolean;
    isDigital: boolean;
    categories: string[];
    title: string;
    ingress: string;
    starRating: number;
    reviews: number;
    likesInPercent: string;
    likes: string;
    hours: string;
    authors: Author[];
    prices: Price;
    content: Content;
}

const SingleCourse: React.FC = () => {
    const [course, setCourse] = useState<Course | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const router = useRouter();

    useEffect(() => {
        const fetchCourse = async (id: string) => {
            try {
                const query = `
             
            getCourseById(id: $id) {
              id
              imageUri
              imageHeaderUri
              isBestSeller
              isDigital
              categories
              title
              ingress
              starRating
              reviews
              likesInPercent
              likes
              hours
              authors {
                name
              }
              prices {
                currency
                price
                discount
              }
              content {
                description
                includes
                programDetails {
                  id
                  title
                  description
                }
              }
            }
          
        `;

                const variables = { id };
                console.log(variables);

                const res = await fetch('https://courseprovider-lak.azurewebsites.net/api/GraphQL?code=HmZBexEQKfIbFPqBV0zHpJEyxeaz4FT8twRto_LWBCckAzFuIhjUpw%3D%3D', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ query, variables })
                });
                
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`);
                }

                const result = await res.json();
                if (result.errors) {
                    throw new Error(result.errors.map((err: any) => err.message).join(', '));
                }

                setCourse(result.data.getCourse);
            } catch (err) {
                if (err instanceof Error) {
                    setError(err.message);
                } else {
                    setError('An unknown error occurred');
                }
            } finally {
                setLoading(false);
            }
        };

        const params = new URLSearchParams(window.location.search);
        const id = params.get('id');

        if (id) {
            fetchCourse(id);                
        } else {
            setLoading(false);
        }   
       
    }, [router]);

    if (loading) {
        return <div className="loading">Loading... <span className="loader"></span></div>;
    }

    if (error) {
        return <div className="courseError">Error: {error}</div>;
    }

    if (!course) {
        return <div className="courseError">No course found.</div>;
    }

    return (
        <section id="singleCourse">
            <div>
                <img className={styles.backgroundImage} src={course.imageHeaderUri} alt="Course Header" />
            </div>

            <div className={`container ${styles.container}`}>
                <div className={styles.icons}>
                    {course.isBestSeller && <img className="bestseller" src="/images/bestseller.svg" />}
                    {course.isDigital && <img src="/images/digital.svg" />}
                </div>

                <div className="content">
                    <h1>{course.title}</h1>
                    <p className={styles.info}>{course.ingress}</p>

                    <div className={styles.comments}>
                        <div className={styles.grades}>
                            {[...Array(Math.floor(course.starRating))].map((_, i) => (
                                <span key={i}><i className="fa-solid fa-star"></i></span>
                            ))}
                            {[...Array(5 - Math.floor(course.starRating))].map((_, i) => (
                                <span key={i}><i className="fa-regular fa-star"></i></span>
                            ))}
                            <p>({course.reviews} reviews)</p>
                        </div>
                        <p className={styles.left}></p>
                        <p><i className="fa-regular fa-thumbs-up"></i> {course.likes} likes</p>
                        <p className={styles.right}></p>
                        <p><i className="fa-regular fa-clock"></i> {course.hours} hours</p>
                    </div>

                    <div className={styles.author}>
                        <img src="/images/albertFlores.svg" alt="Author" />
                        <div className={styles.titleName}>
                            <p className={styles.createdBy}>Created by</p>
                            <p className={styles.authorName}>{course.authors.map(author => author.name).join(', ')}</p>
                        </div>
                    </div>
                </div>

                <div className={styles.courseDescription}>
                    <div className={styles.contentLeft}>
                        <h1>Course Description</h1>
                        <p className={styles.description}>{course.content.description}</p>
                        <h3>What you'll learn</h3>

                        <div className={styles.points}>
                            {course.content.includes.map((point, index) => (
                                <div className={styles.point} key={index}>
                                    <i className="fa-regular fa-circle-check"></i>
                                    <p>{point}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className={styles.contentRight}>
                        <div className={styles.box}>
                            <h4>This course includes:</h4>

                            <div className={styles.content}>
                                <div className={styles.contentInfo}>
                                    <i className="fa-solid fa-display"></i>
                                    <p>{course.hours} hours on-demand video</p>
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
                                <h2 className="black">${(course.prices.price - course.prices.discount).toFixed(2)}</h2>
                                {course.prices.discount > 0 && <p className={styles.priceGray}>${course.prices.price.toFixed(2)}</p>}
                            </div>

                            <form id="join-course-form" method="post" action="/path/to/api">
                                <input type="hidden" name="CourseId" value={course.id} />
                                <button type="submit" className="btn btn-theme">Join course</button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className={styles.programDetails}>
                    <h1>Program Details</h1>
                    <div className={styles.body}>
                        <div className={styles.circles}>
                            {course.content.programDetails.map((detail, index) => (
                                <React.Fragment key={detail.id}>
                                    <div className={styles.circle}>
                                        <p>{index + 1}</p>
                                    </div>
                                    {index < course.content.programDetails.length - 1 && <div className={styles[`line${index + 1}`]}></div>}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className="content">
                            {course.content.programDetails.map(detail => (
                                <div className={styles.infos} key={detail.id}>
                                    <h4>{detail.title}</h4>
                                    <p>{detail.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SingleCourse;