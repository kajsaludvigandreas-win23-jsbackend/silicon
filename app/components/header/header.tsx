import Link from 'next/link';
import styles from './Header.module.css';
import { cookies } from 'next/headers';

export default function Header() {
  const isSignedIn = cookies().get('Authorization');

  return (
    <header className={styles.header}>
      
      <div className={`container ${styles.container}`}>
        {isSignedIn ? 
          (
            <Link href="/accountdetails"><img src="/images/solid.svg" alt="Silicon" /></Link>
          )
          :
          (
            <Link href="/"><img src="/images/solid.svg" alt="Silicon" /></Link>
          )
        }

        <nav className={styles.navLinks}>
          {isSignedIn ? 
          (
            <>
              <Link className="headerlink" href="/accountnotification">Notifications</Link>
              <Link className="headerlink" href="/courses">Courses</Link>
              <Link className="headerlink" href="/accountmessages">Messages</Link>
            </>
          )
          :
          (
            <>
              <Link className="headerlink" href="/">Overview</Link>
              <Link className="headerlink" href="/">Features</Link>
              <Link className="headerlink" href="/contact">Contact</Link>
            </>
          )
          }
        </nav>

        <div className={styles.accountButtons}>
          {isSignedIn ? 
            (
              <div className="profile">
                <div className="profile-image">
                  <Link href="/accountdetails">
                    <img src="/images/smallProfileAvatar.svg" alt="Profile" />
                  </Link>
                </div>
              </div>
            )
            :
            (
              <>
                <Link className="btn btn-gray" href="/"><i className="btn-icon fa-regular fa-arrow-right-to-bracket"></i> Sign in</Link>
                <Link className="btn btn-theme" href="/signup"><i className="btn-icon fa-regular fa-user"></i> Sign up</Link>
              </>
            )
          }
        </div>
      </div>
    </header>
  );
}
