'use client';

import React, { useEffect, useState } from 'react';
import styles from './adminCourses.module.css';
import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';

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
  imageUri: string;
  title: string;
  authors: Author[];
  prices: Price;
  hours: string;
  likesInPercent: string;
  likes: string;
}

const AdminCourses: React.FC = () => {
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
    <section id="adminCourses">
      <div className={`container ${styles.container}`}>
        <AdminNav />
        <div className={styles.adminCoursesDetails}>
          <div className={styles.titlebutton}>
            <h1>Courses</h1>
            <Link className="btn btn-theme" href="/adminaddcourse"><i className="fa-regular fa-plus btn-icon"></i>Add New Course</Link>
          </div>

          <div className={styles.content}>
            {courses.map((course) => (
              <div key={course.id} className={styles.box}>
                <Link className={styles.link} href={`/singlecourse?id=${course.id}`}>
                  {course.isBestSeller && <img className={styles.bestseller} src="/images/bestseller.svg" alt="Bestseller" />}
                  <img className={styles.image} src={course.imageUri} alt={course.title} />
                  <div className={styles.info}>
                    <h3 className='h3'>{course.title}</h3>
                    <p className={`author ${styles.author}`}>By {course.authors.map(author => author.name).join(', ')}</p>
                    <div className={styles.priceDiscount}>
                      {course.prices.discount > 0 ? (
                        <>
                          <p className={styles.red}>${(course.prices.price - course.prices.discount).toFixed(2)}</p>
                          <p className={styles.gray}>${course.prices.price.toFixed(2)}</p>
                        </>
                      ) : (
                        <p className={styles.price}>${course.prices.price.toFixed(2)}</p>
                      )}
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.infoUnder}>
                      <p className={`p ${styles.p}`}><i className="fa-regular fa-clock icon i"></i> {course.hours}</p>
                      <p className={`p ${styles.p}`}><i className="fa-regular fa-thumbs-up i"></i> {course.likesInPercent} ({course.likes})</p>
                    </div>
                  </div>
                </Link>
                <Link href={`/adminupdatecourse?id=${course.id}`} className={styles.icon}><i className={`fa-regular fa-pen ${styles.pen}`}></i></Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminCourses;
