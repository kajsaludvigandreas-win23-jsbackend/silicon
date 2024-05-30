'use client';

import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';
import styles from './adminSubscribers.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signOutAdminAction from '../signOutAdminAction';

export default function AdminSubscribers() {
    const [isEditable, setIsEditable] = useState(false);
    const [email, setEmail] = useState('johndoe@domain.com');

    const router = useRouter();

    const handleLogout = async () => {
        const result = await signOutAdminAction();
        if (result.success) {
            router.push('/accountdetails');
        } else {
            console.error('Logout failed:', result.error);
        }
    };

    const handleUpdateClick = () => {
        setIsEditable(true);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSaveClick = () => {
        setIsEditable(false);
    };

    const handleDeleteClick = () => {
        setIsEditable(true);
    }

    return (
        <section id="adminSubscribers">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Subscribers</h1>
                        <button onClick={handleLogout} className="btn btn-theme"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</button>
                    </div>

                    <div className={styles.subscriber}>
                        <form className={styles.form}>
                            <div className={styles.email}>
                                <input 
                                    className="email" 
                                    type="email" 
                                    value={email} 
                                    readOnly={!isEditable} 
                                    onChange={handleChange} 
                                />
                            </div>

                            <div className={styles.buttons}>
                                {isEditable ? (
                                    <button 
                                    type="button" 
                                    className="btn btn-update-delete" 
                                    onClick={handleSaveClick}
                                    >
                                    Save
                                    </button>
                                ) : (
                                    <button 
                                    type="button" 
                                    className="btn btn-update-delete" 
                                    onClick={handleUpdateClick}
                                    >
                                    <i className="fa-regular fa-pen btn-icon"></i>
                                    </button>
                                )}
                                <button className="btn btn-update-delete" onClick={handleDeleteClick}>
                                    <i className="fa-regular fa-trash btn-icon"></i>
                                </button>
                            </div>
                        </form>
                    </div>        
                </div>
            </div>      
        </section>      
    )};