import React from "react";
import Link from "next/link";
import { Instagram, Mail, Linkedin, Facebook, X, ChevronDown } from "lucide-react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.navbarWrapper}>

      {/* Top Orange Bar */}
      <div className={styles.topBar}>
        <span className={styles.inquiryText}>Inquiry : 093762 11272</span>

        <div className={styles.socialIcons}>
          <Instagram size={18} />
          <div className={styles.whatsappIcon}>W</div>
          <Mail size={18} />
          <Linkedin size={18} />
          <Facebook size={18} />
          <X size={18} />
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={styles.navbar}>
        <div className={styles.navbarContainer}>

          {/* Logo & Brand Name */}
          <Link href="/" className={styles.brandContainer}>
            <div className={styles.logo}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpeg"
                alt="Bhavya Future EduTech"
              />
            </div>
            <span className={styles.brandName}>Bhavya Future EduTech</span>
          </Link>

          {/* Menu */}
          <ul className={styles.navMenu}>
            <li>
              <Link href="/" className={styles.active}>Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li className={styles.dropdownParent}>
              <Link href="/services" className={styles.navLinkWithIcon}>
                Services <ChevronDown size={16} />
              </Link>
              <ul className={styles.dropdownMenu}>
                <li>
                  <Link href="/services/solidworks-training">SolidWorks Training</Link>
                </li>
                <li>
                  <Link href="/services/placement">Placements</Link>
                </li>
                <li>
                  <Link href="/services/design-services-manpower">3D Designing Services & Man Power Supply</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>

          {/* CTA */}
          <Link href="/contact">
            <button className={styles.ctaButton}>Inquire</button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
