import AccountNav from '../components/accountSideNav/accountSideNav';
import styles from './accountMessages.module.css';

export default function accountMessages() {
    return (
        <section id="messages">
            <div className={`container ${styles.container}`}>
                <AccountNav/>
            </div>
        </section>      
    )};