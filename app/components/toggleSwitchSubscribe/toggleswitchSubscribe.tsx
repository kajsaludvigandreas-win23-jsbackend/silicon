import { useEffect, useState } from 'react';
import styles from './toggleSwitchSubscribe.module.css'


interface ToggleSwitchSubscribeProps {
    value: boolean;
    onChange: (newValue: boolean) => void;
}

export default function ToggleSwitchSubscribe({ value, onChange }: ToggleSwitchSubscribeProps) {

    const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange(event.target.checked);
    };


    
    return ( 
        <div className={styles.toggleSwitchSubscribe}>
            <input type="checkbox" id="switchSubscribe" className={styles.checkbox} checked={value} onChange={handleCheckboxChange} />
            <label htmlFor="switchSubscribe" className={styles.toggle}></label>
        </div>

    );
}