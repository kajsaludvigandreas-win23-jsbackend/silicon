import styles from './toggleSwitchDarkMode.module.css'



export default function ToggleSwitchDarkMode() {  
    return ( 
        <div className={styles.toggleSwitchDark} >
            <input type="checkbox" id="switchDark" className={styles.checkbox}></input>
            <label htmlFor="switchDark" className={styles.toggle}>
            </label>
        </div>

    );
}