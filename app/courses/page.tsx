'use client'; 

import React, { useEffect, useState } from 'react';
import styles from './courses.module.css';
import Link from 'next/link';

interface Author {
  name: string;
}

interface Price {
  price: number;
  currency: string;
  discount: number;
}

interface Course {
  id: string;
  isBestSeller: boolean;
  imageUri : string;
  title: string;
  authors: Author[];
  prices: Price;
  hours: string;
  likesInPercent: string;
  likes: string;
}

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const query = `
          {
            getAllCourses {
              id
              imageUri
              isBestSeller
              title
              authors {
                name
              }
              prices {
                price
                currency
                discount
              }
              hours
              likesInPercent
              likes
            }
          }
        `;

        const res = await fetch('https://courseprovider-lak.azurewebsites.net/api/GraphQL?code=HmZBexEQKfIbFPqBV0zHpJEyxeaz4FT8twRto_LWBCckAzFuIhjUpw%3D%3D', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ query })
        });

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const result = await res.json();
        if (result.errors) {
          throw new Error(result.errors.map((err: any) => err.message).join(', '));
        }

        setCourses(result.data.getAllCourses);
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

    fetchCourses();
  }, []);

  if (loading) {
    return <div className="loading">Loading... <span className="loader"></span></div>;
  }

  if (error) {
    return <div className="courseError">Error: {error}</div>;
  }

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
          {courses.map((course) => (
            <div key={course.id} className={styles.box}>
              <Link className={styles.link} href={`/singlecourse?id=${course.id}`}>
                {course.isBestSeller && <img className={styles.bestseller} src="/images/bestseller.svg" alt="Bestseller" />}
                
                <img className={styles.image} src={course.imageUri} alt={course.title} />

                <Link href="/adminupdatecourse" className={styles.icon}><i className={`fa-regular fa-bookmark ${styles.bookmark}`}></i></Link>
                <div className={styles.info}>
                  <h3 className='h3'>{course.title}</h3>
                  <p className={`author ${styles.author}`}>By {course.authors.map(author => author.name).join(', ')}</p>

                  <div className={styles.priceDiscount}>
                    {course.prices.discount > 0 ? (
                      <>
                        <p className={styles.red}>${(course.prices.price - course.prices.discount).toFixed(2)}</p>
                        <p className={styles.gray}>${course.prices.price.toFixed(2)}</p>
                      </>
                    )
                    :
                    (
                        <p className={styles.price}>${course.prices.price.toFixed(2)}</p>   
                    )
                    }

                    
                  </div>

                  <div className={styles.line}></div>

                  <div className={styles.infoUnder}>
                    <p className={`p ${styles.p}`}><i className="fa-regular fa-clock icon i"></i> {course.hours}</p>
                    <p className={`p ${styles.p}`}><i className="fa-regular fa-thumbs-up i"></i> {course.likesInPercent} ({course.likes})</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className={styles.buttons}>
          <button className={`btn btn-social ${styles.btnWhite}`}>1</button>
          <button className={`btn btn-social ${styles.btnTheme}`}>2</button>
          <button className={`btn btn-social ${styles.btnWhite}`}>3</button>
        </div>
      </div>
    </section>
  );
};

export default Courses;
