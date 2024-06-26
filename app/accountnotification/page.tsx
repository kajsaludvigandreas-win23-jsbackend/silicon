"use client";

import { useEffect, useState } from 'react';
import styles from './accountNotification.module.css';
import AccountNav from '../components/accountSideNav/accountSideNav';
import ToggleSwitchDarkMode from '../components/toggleSwitchDarkMode/toggleSwitchDarkMode';
import ToggleSwitchSubscribe from '../components/toggleSwitchSubscribe/toggleswitchSubscribe';

export default function AccountNotification() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(() => {
        const saved = localStorage.getItem('isSubscribed');
        return saved === 'true';
    });

    useEffect(() => {
        const getEmailFromCookies = () => {
            const cookies = document.cookie.split(';');
            for (let cookie of cookies) {
                const [name, value] = cookie.trim().split('=');
                if (name === 'UserEmail') {
                    setEmail(decodeURIComponent(value));
                    break;
                }
            }
        };

        const savedSubscription = localStorage.getItem('isSubscribed') === 'true';
        setIsSubscribed(savedSubscription);

        getEmailFromCookies();
    }, []);

    useEffect(() => {
        localStorage.setItem('isSubscribed', isSubscribed.toString());
    }, [isSubscribed]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (typeof email !== 'string' || email === '') {
            alert('Invalid email address.');
            return;
        }
    
        try {
            setIsSubscribed(true);
            localStorage.setItem('isSubscribed', 'true');
    
            const response = await fetch('https://subscriptionprovider-lak.azurewebsites.net/api/Subscribe?code=MFvKPp3nEay7uymmPV2T1Qn_a4UEgo_AJo_92icyNvNZAzFufhBtAQ%3D%3D', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    isSubscribed: true
                })
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server responded with:', errorData);
                throw new Error(errorData.message || 'Failed to save subscription status');
            }
    
            alert('Subscription status updated successfully');
        } catch (error) {
            console.error('Error updating subscription status:', error);
            setIsSubscribed(false);
            localStorage.setItem('isSubscribed', 'false');
            alert('Failed to update subscription status');
        }
    };

    const handleUnsubscribe = async (e: React.FormEvent) => {
        e.preventDefault();
    
        if (typeof email !== 'string' || email === '') {
            alert('Invalid email address.');
            return;
        }
    
        try {
            const response = await fetch('https://subscriptionprovider-lak.azurewebsites.net/api/Unsubscribe?code=yMB-8QPnL7kZt92TNWNE55Dqj9TyJh48ajmAvbfUr8sAAzFuq67fdQ%3D%3D', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email
                })
            });
    
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Server responded with:', errorData);
                throw new Error(errorData.message || 'Failed to unsubscribe');
            }
    
            setIsSubscribed(false);
            localStorage.setItem('isSubscribed', 'false');
            alert('Unsubscribed successfully');
        } catch (error) {
            console.error('Error unsubscribing:', error);
            alert('Failed to unsubscribe');
        }
    };

    return (
        <section className={styles.notifications}>
            <div className={`container ${styles.container}`}>
                <AccountNav />

                <div className={styles.accountNotifications}>
                    <form method='post' noValidate onSubmit={handleSubmit}>
                        <h2 className={styles.title}>Notifications</h2>

                        <div id="formEmail" className={styles.notificationEmail}>
                            <label htmlFor="email">Email for notifications</label>
                            <input className="input" type="email" id="email" value={email} readOnly />
                        </div>
                        
                        <div className={styles.subscribe}>
                          <ToggleSwitchSubscribe value={isSubscribed} onChange={setIsSubscribed} />  
                            <div className={styles.buttontext}>
                                <h4 className="h4title">Subscribe to newsletter</h4>
                                <p>Nec, posuere non felis duis massa vitae aliquet interdum scelerisque. Neque ullamcorper</p>
                            </div>
                        </div>

                        <div className={styles.darkMode}>
                        <ToggleSwitchDarkMode />
                            <div className={styles.buttontext}>
                                <h4 className="h4title">Use dark mode theme in application</h4>
                                <p>Tortor massa porttitor enim tristique neque fermentum sed</p>
                            </div>
                        </div>    
                        
                        <div className={styles.notificationsButtons}>
                            <button className="btn-theme btn" type="submit" onClick={handleSubmit}>Subscribe</button>
                            <button className="btn-theme btn" type="button" onClick={handleUnsubscribe}>Unsubscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
