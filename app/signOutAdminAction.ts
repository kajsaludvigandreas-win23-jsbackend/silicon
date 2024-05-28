'use server';

import { cookies } from 'next/headers';

export default async function signOutAction() {
    try {
        cookies().set('Authorization', '', {
            secure: true,
            httpOnly: true,
            expires: new Date(0),
            path: '/accountdetails',
            sameSite: 'strict'
        });

        return { success: true };
    } catch (error) {
        console.error('Error during logout:', error);
        return { success: false, error: 'Unable to log out. Please try again later.' };
    }
}