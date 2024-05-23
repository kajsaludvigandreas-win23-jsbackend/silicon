'use server';

import { cookies } from "next/headers";

type ActionTypes = {
    success: boolean,
    error?: string | undefined,
};

export default async function signInAction(currentState: any, formData: FormData): Promise<ActionTypes> {
    const email = formData.get('email');
    const password = formData.get('password');
    const isPersistent = formData.get('isPersistent');

    const signInFormData = { email, password, isPersistent: isPersistent ? isPersistent : false };
    console.log('SignIn form data:', signInFormData);

    try {
        const res = await fetch('https://accountprovider-lak.azurewebsites.net/api/SignIn?code=0OIEKeG7i6XX7OT4FNqU1k7sBr9BjBuhHAYNtoKDXz-RAzFu-wVULQ%3D%3D', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(signInFormData)
        });

        console.log('Response status:', res.status);

        const result = await res.text();
        console.log('API response (text):', result);

        if (res.status === 200 && result) {
            cookies().set('Authorization', result, {
                secure: true,
                httpOnly: true,
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                path: '/',
                sameSite: 'strict'
            });
            cookies().set('UserEmail', email as string, {
                secure: true,
                httpOnly: false,  
                expires: new Date(Date.now() + 24 * 60 * 60 * 1000),
                path: '/',
                sameSite: 'strict'
            });
            console.log('Cookie set:', result);
            return { success: true };
        } else {
            return { success: false, error: "Invalid credentials" };
        }
    } catch (error) {
        console.error('Error during sign in:', error);
        return { success: false, error: "Unable to sign in right now. Please try again later." };
    }
}
