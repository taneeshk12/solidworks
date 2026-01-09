import Link from 'next/link';
import siteMeta from '@/content/siteMeta.json';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Company Info */}
          <div className={styles.column}>
            <h3>CAB Authorized</h3>
            <p className={styles.description}>
              Leading provider of SolidWorks training, placement services, and
              design engineering solutions. Empowering engineers to excel in
              their careers.
            </p>
            <div className={styles.social}>
              <a
                href={siteMeta.socialMedia.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>
              <a
                href={siteMeta.socialMedia.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                Twitter
              </a>
              <a
                href={siteMeta.socialMedia.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.column}>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={styles.column}>
            <h4>Our Services</h4>
            <ul>
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
          </div>

          {/* Contact */}
          <div className={styles.column}>
            <h4>Contact Us</h4>
            <address className={styles.address}>
              <p>
                <strong>Email:</strong>
                <br />
                <a href={`mailto:${siteMeta.contactEmail}`}>
                  {siteMeta.contactEmail}
                </a>
              </p>
              <p>
                <strong>Phone:</strong>
                <br />
                <a href={`tel:${siteMeta.contactPhone}`}>
                  {siteMeta.contactPhone}
                </a>
              </p>
              <p>
                <strong>Address:</strong>
                <br />
                {siteMeta.address.city}, {siteMeta.address.state}
                <br />
                {siteMeta.address.country}
              </p>
            </address>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            &copy; {currentYear} {siteMeta.siteName}. All rights reserved.
          </p>
          <div className={styles.legal}>
            <Link href="/privacy">Privacy Policy</Link>
            <span className={styles.divider}>|</span>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
