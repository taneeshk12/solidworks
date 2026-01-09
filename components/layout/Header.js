import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <span className={styles.logoText}>CAB Authorized</span>
          </Link>
        </div>
        <nav className={styles.nav} aria-label="Main navigation">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li className={styles.dropdown}>
              <Link href="/services">Services</Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/services/solidworks-training">
                    SolidWorks Training
                  </Link>
                </li>
                <li>
                  <Link href="/services/placement">Placement Services</Link>
                </li>
                <li>
                  <Link href="/services/design-services-manpower">
                    Design Services & Manpower
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/#contact" className={styles.ctaButton}>
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
