"use client"

import { useEffect, useState } from 'react';
import Link from 'next/link';


const [email, setEmail] = useState('');

    useEffect(() => {
        const getUserEmailFromCookie = () => {
            const userEmailCookie = document.cookie
                .split(';')
                .find(cookie => cookie.trim().startsWith('UserEmail='));
            if (userEmailCookie) {
                const userEmail = userEmailCookie.split('=')[1];
                setEmail(decodeURIComponent(userEmail)); 
            }
        };
    
        getUserEmailFromCookie();
    }, []);