import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      
     

        <nav className={styles.navLinks}>
          <Link href="/">Overview</Link>
          <Link href="/">Features</Link>
          <Link href="/courses">Courses</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        <div id="theme-switch" className="btn-switch">
          <label>Light</label>
          <label className="switch" htmlFor="switch-mode">
            <input type="checkbox" id="switch-mode" />
            <span className="slider round"></span>
          </label>
          <label>Dark</label>
        </div>

        <div className={styles.accountButtons}>
          <Link className="btn btn-gray" href="/"><i className="btn-icon fa-regular fa-arrow-right-to-bracket"></i> Sign in</Link>
          <Link className="btn btn-theme" href="/signup"><i className="btn-icon fa-regular fa-user"></i> Sign up</Link>
        </div>
    </header>
  );
}