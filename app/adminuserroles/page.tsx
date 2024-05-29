'use client';

import Link from 'next/link';
import AdminNav from '../components/adminSideNav/adminSideNav';
import styles from './adminUserRoles.module.css';
import { useState, useEffect, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';
import signOutAdminAction from '../signOutAdminAction';

interface User {
    id: number;
    firstName: string;
    lastName: string;
    role: string;
}

export default function AdminUserRoles() {
    const [isEditable, setIsEditable] = useState<boolean>(false);
    const [users, setUsers] = useState<User[]>([]);
    const [editingUserId, setEditingUserId] = useState<number | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://accountprovider-lak.azurewebsites.net/api/GetAllUsers?code=sRduJmAug0ZXbuuiiHTuw8h0R4ZCFAcBa2OVcAN2qeGoAzFulnPX3g%3D%3D'); 
                const data: User[] = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    const handleLogout = async () => {
        const result = await signOutAdminAction();
        if (result.success) {
            router.push('/accountdetails');
        } else {
            console.error('Logout failed:', result.error);
        }
    };

    const handleEditClick = (userId: number) => {
        setIsEditable(true);
        setEditingUserId(userId);
    };

    const handleSaveClick = (userId: number) => {
        setIsEditable(false);
        setEditingUserId(null);
    };

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>, userId: number, field: string) => {
        const newUsers = users.map(user => {
            if (user.id === userId) {
                return { ...user, [field]: event.target.value };
            }
            return user;
        });
        setUsers(newUsers);
    };

    const handleRoleChange = (event: ChangeEvent<HTMLSelectElement>, userId: number) => {
        const newUsers = users.map(user => {
            if (user.id === userId) {
                return { ...user, role: event.target.value };
            }
            return user;
        });
        setUsers(newUsers);
    };

    const handleDeleteClick = (userId: number) => {
        setUsers(users.filter(user => user.id !== userId));
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <section id="adminUserRoles">
            <div className={`container ${styles.container}`}>
                <AdminNav />
                <div className={styles.adminDetails}>
                    <div className={styles.titlebutton}>
                        <h1>Users</h1>
                        <button onClick={handleLogout} className="btn btn-theme"><i className="fa-regular fa-lock-open btn-icon"></i>Admin</button>
                    </div>

                    <div className={styles.userList}>
                        {users.map((user) => (
                            <div key={user.id} className={styles.user}>
                                <form className={styles.form}>
                                    <div className={styles.name}>
                                        <input
                                            className={styles.input}
                                            type="text"
                                            value={user.firstName}
                                            readOnly={!(isEditable && editingUserId === user.id)}
                                            onChange={(e) => handleInputChange(e, user.id, 'firstName')}
                                        />
                                        <input
                                            className={styles.input}
                                            type="text"
                                            value={user.lastName}
                                            readOnly={!(isEditable && editingUserId === user.id)}
                                            onChange={(e) => handleInputChange(e, user.id, 'lastName')}
                                        />
                                    </div>

                                    <div className={styles.roleButtons}>
                                        <div className={styles.role}>
                                            <select
                                                className='input btn btn-gray'
                                                value={user.role}
                                                onChange={(e) => handleRoleChange(e, user.id)}
                                                disabled={!(isEditable && editingUserId === user.id)}
                                            >
                                                <option value="">Select role</option>
                                                <option value="admin">Admin</option>
                                                <option value="user">User</option>
                                            </select>
                                        </div>

                                        <div className={styles.buttons}>
                                            {isEditable && editingUserId === user.id ? (
                                                <button
                                                    type="button"
                                                    className="btn btn-update-delete"
                                                    onClick={() => handleSaveClick(user.id)}
                                                >
                                                    Save
                                                </button>
                                            ) : (
                                                <button
                                                    type="button"
                                                    className="btn btn-update-delete"
                                                    onClick={() => handleEditClick(user.id)}
                                                >
                                                    <i className="fa-regular fa-pen btn-icon"></i>
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                className="btn btn-update-delete"
                                                onClick={() => handleDeleteClick(user.id)}
                                            >
                                                <i className="fa-regular fa-trash btn-icon"></i>
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
