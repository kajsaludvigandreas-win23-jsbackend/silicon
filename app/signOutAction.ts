'use server';

import { cookies } from 'next/headers';

export default async function signOutAction() {
    try {
        // Ta bort cookie som används för autentisering
        cookies().set('Authorization', '', {
            secure: true,
            httpOnly: true,
            expires: new Date(0), // Ställ in ett förflutet datum för att ta bort cookien
            path: '/',
            sameSite: 'strict'
        });

        return { success: true };
    } catch (error) {
        console.error('Error during logout:', error);
        return { success: false, error: 'Unable to log out. Please try again later.' };
    }
}