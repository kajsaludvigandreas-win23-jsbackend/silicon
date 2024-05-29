'use client';

import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';
import styles from './adminUserRoles.module.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import signOutAdminAction from '../signOutAdminAction';

export default function AdminUserRoles() {
    const [isEditable, setIsEditable] = useState(false);
    const [firstName, setFirstName] = useState('John');
    const [lastName, setLastName] = useState('Doe');
    const [role, setRole] = useState('');

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

    const handleSaveClick = () => {
        setIsEditable(false);
    };

    const handleFirstNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(event.target.value);
    };

    const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(event.target.value);
    };

    const handleRoleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRole(event.target.value);
    };

    const handleDeleteClick = () => {
        setIsEditable(true);
    }

    return (
        <section id="adminUserRoles">
            <div className={`container ${styles.container}`}>
                <AdminNav/>
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Users</h1>
                        <button onClick={handleLogout} className="btn btn-theme"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</button>
                    </div>

                    <div className={styles.user}>
                        <form className={styles.form}>
                            <div className={styles.name}>
                                <input 
                                    className={styles.input} 
                                    type="text" 
                                    value={firstName} 
                                    readOnly={!isEditable} 
                                    onChange={handleFirstNameChange} 
                                />
                                <input 
                                    className={styles.input} 
                                    type="text" 
                                    value={lastName} 
                                    readOnly={!isEditable} 
                                    onChange={handleLastNameChange} 
                                />
                            </div>

                            <div className={styles.roleButtons}>
                                <div className={styles.role}>
                                    <select className='input btn btn-gray'>
                                        <option value="">Select role</option>
                                        <option value="admin">Admin</option>
                                        <option value="user">User</option>
                                    </select>
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
                            </div>
                        </form>
                    </div>            
                </div>
            </div>      
        </section>      
    )};