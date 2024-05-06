import styles from './toggleSwitchSubscribe.module.css'


export default function ToggleSwitchSubscribe() {
    return ( 
        <div className={styles.toggleSwitchSubscribe}>
            <input type="checkbox" id="switchSubscribe" className={styles.checkbox}></input>
            <label htmlFor="switchSubscribe" className={styles.toggle}></label>
        </div>

    );
}