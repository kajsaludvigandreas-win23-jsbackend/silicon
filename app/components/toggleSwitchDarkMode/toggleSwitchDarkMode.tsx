'use client';

import { useEffect, useState } from 'react';
import styles from './toggleSwitchDarkMode.module.css'


export default function ToggleSwitchDarkMode() {  

    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const applyTheme = () => {
            const root = window.document.documentElement;
            root.classList.toggle('dark-mode', isDarkMode);
        };

        applyTheme();
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    
    return ( 
        <div className={styles.toggleSwitchDark}>
            <input type="checkbox" id="switchDark" className={styles.checkbox}checked={isDarkMode} onChange={() => {}} />
            <label htmlFor="switchDark" className={styles.toggle} onClick={toggleDarkMode}>
            </label>
        </div>

    );
}
