'use client';

import { useState } from 'react';
import styles from './adminAddCourse.module.css';
import Link from "next/link";
import AdminNav from "../components/adminSideNav/adminSideNav";
import CourseImageUpload from '../components/courseImageUpload/courseImageUpload';
import { CourseCreateRequest } from '../models/CourseCreateRequest'; // Justera sökvägen efter din mappstruktur

export default function AdminAddCourse() {
    const [imageUri, setImageUri] = useState<string>('');
    const [formData, setFormData] = useState<CourseCreateRequest>({
        imageUri: '',
        imageHeaderUri: '',
        isBestSeller: false,
        isDigital: false,
        categories: [],
        title: '',
        ingress: '',
        starRating: 0,
        reviews: '',
        likesInPercent: '',
        likes: '',
        hours: '',
        authors: [{ name: '' }],
        prices: { currency: '', price: 0, discount: 0 },
        content: { description: '', includes: [], programDetails: [{ id: 0, title: '', description: '' }] }
    });

    const handleUploadSuccess = (newImageUri: string) => {
        setImageUri(newImageUri);
        setFormData({ ...formData, imageUri: newImageUri });
        console.log(newImageUri);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target;

        if (type === 'checkbox') {
            const { checked } = e.target as HTMLInputElement;
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: checked
            }));
        } else if (name.includes('.')) {
            const keys = name.split('.');
            setFormData(prevFormData => {
                const updatedFormData = { ...prevFormData };
                let nestedObject: any = updatedFormData;
                keys.forEach((key, index) => {
                    if (index === keys.length - 1) {
                        nestedObject[key] = name === 'starRating' || name.includes('price') || name.includes('discount') || name.includes('id') ? parseFloat(value) : value;
                    } else {
                        nestedObject[key] = nestedObject[key] || {};
                        nestedObject = nestedObject[key];
                    }
                });
                return updatedFormData;
            });
        } else if (name === 'categories') {
            setFormData(prevFormData => ({
                ...prevFormData,
                categories: value.split(',').map(category => category.trim())
            }));
        } else {
            setFormData(prevFormData => ({
                ...prevFormData,
                [name]: name === 'starRating' || name.includes('price') || name.includes('discount') ? parseFloat(value) : value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const mutation = `
            mutation ($input: CourseCreateRequestInput!) {
                createCourse(input: $input) {
                    id
                    title
                }
            }
        `;

        const variables = {
            input: {
                imageUri: formData.imageUri,
                imageHeaderUri: formData.imageHeaderUri,
                isBestSeller: formData.isBestSeller,
                isDigital: formData.isDigital,
                categories: formData.categories,
                title: formData.title,
                ingress: formData.ingress,
                starRating: formData.starRating,
                reviews: formData.reviews,
                likesInPercent: formData.likesInPercent,
                likes: formData.likes,
                hours: formData.hours,
                authors: formData.authors?.map(author => ({ name: author.name })),
                prices: {
                    currency: formData.prices?.currency,
                    price: formData.prices?.price,
                    discount: formData.prices?.discount
                },
                content: {
                    description: formData.content?.description,
                    includes: formData.content?.includes,
                    programDetails: formData.content?.programDetails?.map(detail => ({
                        id: detail.id,
                        title: detail.title,
                        description: detail.description
                    }))
                }
            }
        };

        const response = await fetch('https://courseprovider-lak.azurewebsites.net/api/GraphQL?code=HmZBexEQKfIbFPqBV0zHpJEyxeaz4FT8twRto_LWBCckAzFuIhjUpw%3D%3D', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ query: mutation, variables })
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Course added successfully", result);
        } else {
            const error = await response.text();
            console.error("Error adding course", error);
        }
    };

    return (
        <section id="adminAddCourse">
            <div className={`container ${styles.container}`}>
                <AdminNav />
                <div className={styles.addCourseDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Add New Course</h1>
                        <Link className="btn btn-theme" href="/logoutadmin"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</Link>
                    </div>
                    <CourseImageUpload onUploadSuccess={handleUploadSuccess} />
                    <form className={styles.basic} onSubmit={handleSubmit}>
                        <div className={styles.basicContent}>
                            <div className={`${styles.basicTitle} ${styles.basicGroup}`}>
                                <label htmlFor="title">Title</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="title"
                                    name="title"
                                    placeholder='Enter the title'
                                    value={formData.title || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicAuthor} ${styles.basicGroup}`}>
                                <label htmlFor="author">Author</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="author"
                                    name="authors.0.name"
                                    placeholder='Specify the author'
                                    value={formData.authors?.[0]?.name || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicprice} ${styles.basicGroup}`}>
                                <label htmlFor="price">Price</label>
                                <input
                                    className={styles.inputBasic}
                                    type="number"
                                    id="price"
                                    name="prices.price"
                                    placeholder='Enter the price'
                                    value={formData.prices?.price || 0}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicDiscountPrice} ${styles.basicGroup}`}>
                                <label htmlFor="discountPrice">Discount price</label>
                                <input
                                    className={styles.inputBasic}
                                    type="number"
                                    id='discountPrice'
                                    name="prices.discount"
                                    placeholder='Enter the discount price'
                                    value={formData.prices?.discount || 0}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicIngress} ${styles.basicGroup}`}>
                                <label htmlFor="Ingress">Ingress</label>
                                <input
                                    className={styles.inputBasic}
                                    id="Ingress"
                                    name="ingress"
                                    placeholder="Enter the ingress"
                                    value={formData.ingress || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicDescription} ${styles.basicGroup}`}>
                                <label htmlFor='description'>Description</label>
                                <textarea
                                    className={styles.descriptionInput}
                                    id="description"
                                    name="content.description"
                                    placeholder='Enter a description'
                                    value={formData.content?.description || ''}
                                    onChange={handleChange}
                                ></textarea>
                            </div>

                            <div className={`${styles.basicImageUri} ${styles.basicGroup}`}>
                                <label htmlFor="ImageUri">Image Uri</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="ImageUri"
                                    name="imageUri"
                                    placeholder="Enter the image uri"
                                    defaultValue={imageUri}
                                    readOnly
                                />
                            </div>

                            <div className={`${styles.basicImageHeaderUri} ${styles.basicGroup}`}>
                                <label htmlFor="ImageHeaderUri">Image Header Uri</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="ImageHeaderUri"
                                    name="imageHeaderUri"
                                    placeholder="Enter the image header uri"
                                    value={formData.imageHeaderUri || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicIsBestSeller} ${styles.checkboxGroup}`}>
                                <label htmlFor="isBestSeller">Is Bestseller</label>
                                <input
                                    className={styles.inputBasic}
                                    type="checkbox"
                                    id="isBestSeller"
                                    name="isBestSeller"
                                    checked={formData.isBestSeller}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicIsDigital} ${styles.checkboxGroup}`}>
                                <label htmlFor="isDigital">Is Digital</label>
                                <input
                                    className={styles.inputBasic}
                                    type="checkbox"
                                    id="isDigital"
                                    name="isDigital"
                                    checked={formData.isDigital}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicCategories} ${styles.basicGroup}`}>
                                <label htmlFor="categories">Categories</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="categories"
                                    name="categories"
                                    placeholder="Enter the categories"
                                    value={formData.categories?.join(', ') || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicStarRating} ${styles.basicGroup}`}>
                                <label htmlFor="starRating">Star Rating</label>
                                <input
                                    className={styles.inputBasic}
                                    type="number"
                                    id="starRating"
                                    name="starRating"
                                    min={1}
                                    max={5}
                                    placeholder="Enter the star rating"
                                    value={formData.starRating || 0}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicReviews} ${styles.basicGroup}`}>
                                <label htmlFor="reviews">Reviews</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="reviews"
                                    name="reviews"
                                    placeholder="Enter the reviews"
                                    value={formData.reviews || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicLikesInPercent} ${styles.basicGroup}`}>
                                <label htmlFor="likesInPercent">Likes In Percent</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="likesInPercent"
                                    name="likesInPercent"
                                    placeholder="Enter the likes in percent"
                                    value={formData.likesInPercent || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicLikes} ${styles.basicGroup}`}>
                                <label htmlFor="likes">Likes</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="likes"
                                    name="likes"
                                    placeholder="Enter the likes"
                                    value={formData.likes || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.basicHours} ${styles.basicGroup}`}>
                                <label htmlFor="hours">Hours</label>
                                <input
                                    className={styles.inputBasic}
                                    type="text"
                                    id="hours"
                                    name="hours"
                                    placeholder="Enter the hours"
                                    value={formData.hours || ''}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className={`${styles.programDetailsDescription} ${styles.basicGroup}`}>
                                <label htmlFor='programDetailsDescription'>Program details description</label>
                                <textarea
                                    className={styles.descriptionInput}
                                    id="programDetailsDescription"
                                    name="content.programDetails.0.description"
                                    placeholder='Enter a description'
                                    value={formData.content?.programDetails?.[0]?.description || ''}
                                    onChange={handleChange}
                                ></textarea>
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
