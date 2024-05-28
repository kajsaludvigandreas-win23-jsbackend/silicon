"use client"

import { useState } from 'react';
import styles from './adminAddCourse.module.css';
import Link from "next/link";
import AdminNav from "../components/adminSideNav/adminSideNav";
import CourseImageUpload from '../components/courseImageUpload/courseImageUpload';

export default function AdminAddCourse() {
    const [imageUri, setImageUri] = useState<string>('');

    const handleUploadSuccess = (newImageUri: string) => {
        setImageUri(newImageUri);
        console.log(newImageUri)
    };

    return (
        <section id="adminAddCourse">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.addCourseDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Add New Course</h1>
                        <Link className="btn btn-theme" href="/logoutadmin"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</Link>
                    </div>
                    <CourseImageUpload onUploadSuccess={handleUploadSuccess} />
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

                            <div className={`${styles.basicIngress} ${styles.basicGroup}`}>
                                <label htmlFor="Ingress">Ingress</label>
                                <input
                                    className={styles.inputBasic}
                                    id="Ingress"
                                    name="Ingress"
                                    placeholder="Enter the ingress"
                                />
                            </div>

                            <div className={`${styles.basicDescription} ${styles.basicGroup}`}>
                                <label htmlFor='description'>Description</label>
                                <textarea className={styles.descriptionInput} placeholder='Enter a description'></textarea>
                            </div>

                            <div className={`${styles.basicImageUri} ${styles.basicGroup}`}>
                                <label htmlFor="ImageUri">Image Uri</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="ImageUri"
                                    name="ImageUri"
                                    placeholder="Enter the image uri"
                                    defaultValue={imageUri} // Use defaultValue instead of value
                                    readOnly // Make the field read-only if it should only be filled by the upload
                                />
                            </div>

                            <div className={`${styles.basicImageHeaderUri} ${styles.basicGroup}`}>
                                <label htmlFor="ImageHeaderUri">Image Header Uri</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="ImageHeaderUri"
                                    name="ImageHeaderUri"
                                    placeholder="Enter the image header uri"
                                />
                            </div>

                            <div className={`${styles.basicIsBestSeller} ${styles.checkboxGroup}`}>
                                <label htmlFor="IsBestSeller">Is Bestseller</label>
                                <input
                                    className={styles.inputBasic}
                                    type="checkbox"
                                    id="IsBestSeller"
                                    name="IsBestSeller"
                                />
                            </div>

                            <div className={`${styles.basicIsDigital} ${styles.checkboxGroup}`}>
                                <label htmlFor="IsDigital">Is Digital</label>
                                <input
                                    className={styles.inputBasic}
                                    type="checkbox"
                                    id="IsDigital"
                                    name="IsDigital"
                                />
                            </div>

                            <div className={`${styles.basicCategories} ${styles.basicGroup}`}>
                                <label htmlFor="Categories">Categories</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="Categories"
                                    name="Categories"
                                    placeholder="Enter the categories"
                                />
                            </div>

                            <div className={`${styles.basicStarRating} ${styles.basicGroup}`}>
                                <label htmlFor="StarRating">Star Rating</label>
                                <input
                                    className={styles.inputBasic}
                                    type="number"
                                    id="StarRating"
                                    name="StarRating"
                                    min={1}
                                    max={5}
                                    placeholder="Enter the star rating"
                                />
                            </div>

                            <div className={`${styles.basicReviews} ${styles.basicGroup}`}>
                                <label htmlFor="Reviews">Reviews</label>
                                <input
                                    className={styles.inputBasic}
                                    id="Reviews"
                                    name="Reviews"
                                    placeholder="Enter the reviews"
                                />
                            </div>

                            <div className={`${styles.basicLikesInPercent} ${styles.basicGroup}`}>
                                <label htmlFor="LikesInPercent">Likes In Percent</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="LikesInPercent"
                                    name="LikesInPercent"
                                    placeholder="Enter the likes in percent"
                                />
                            </div>

                            <div className={`${styles.basicLikes} ${styles.basicGroup}`}>
                                <label htmlFor="Likes">Likes</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="Likes"
                                    name="Likes"
                                    placeholder="Enter the likes"
                                />
                            </div>

                            <div className={`${styles.basicHours} ${styles.basicGroup}`}>
                                <label htmlFor="Hours">Hours</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="Hours"
                                    name="Hours"
                                    placeholder="Enter the hours"
                                />
                            </div>

                            <div className={`${styles.programDetailsDescription} ${styles.basicGroup}`}>
                                <label htmlFor='description'>Program details description</label>
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
    );
}
