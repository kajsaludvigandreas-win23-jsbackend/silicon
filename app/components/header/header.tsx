import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      
      <div className={`container ${styles.container}`}>
        <Link href="/"><img src="/images/solid.svg" alt="Silicon" /></Link>

        <nav className={styles.navLinks}>
          <Link href="/">Overview</Link>
          <Link href="/">Features</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </nav>

       

        <div className={styles.accountButtons}>
          <Link className="btn btn-gray" href="/"><i className="btn-icon fa-regular fa-arrow-right-to-bracket"></i> Sign in</Link>
          <Link className="btn btn-theme" href="/signup"><i className="btn-icon fa-regular fa-user"></i> Sign up</Link>
        </div>
        </div>
    </header>
  );
}