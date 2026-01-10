'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './Hero.module.css';

const images = [
    '/hero/home_hero1.png',
    '/hero/home_hero2.png',
    '/hero/home_hero3.png',
];

const stats = [
    { number: '10+', label: 'YEARS IN BUSINESS' },
    { number: '1000+', label: 'STUDENTS TRAINED' },
    { number: '90%', label: 'STUDENTS PLACED' },
    { number: '1000+', label: 'CLIENTS' },
];

export default function Hero() {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % images.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.heroSection}>
            {/* Background Carousel */}
            <div className={styles.carouselContainer}>
                {images.map((src, index) => (
                    <div
                        key={src}
                        className={`${styles.slide} ${index === currentImage ? styles.active : ''}`}
                    >
                        <Image
                            src={src}
                            alt={`Engineering Training ${index + 1}`}
                            fill
                            priority={index === 0}
                            className={styles.backgroundImage}
                        />
                    </div>
                ))}
                <div className={styles.gradientOverlay}></div>
            </div>

            <div className={styles.heroContent}>
                <div className="container">
                    <div className={styles.textContent}>
                        <h1 className={styles.heading}>
                            <span className={styles.orangeText}>SOLIDWORKS</span> Training
                        </h1>

                        <div className={styles.subheadingWrapper}>
                            <h2 className={styles.subHeading}>
                                Authorized SOLIDWORKS Training for Industry-Ready DESIGN Engineers
                            </h2>
                            <p className={styles.description}>
                                Hands-on training in CAD, CAE, CAM, Simulation, CFD, and 3D Printing—delivered by a Dassault Systèmes–Authorized Training Centre.
                            </p>
                        </div>

                        <div className={styles.buttonGroup}>
                            <button className={styles.primaryBtn}>Solidworks Training</button>
                            <button className={styles.secondaryBtn}>Placements</button>
                            <button className={styles.secondaryBtn}>
                                Design Services & Man Power Supply
                            </button>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className={styles.badgeWrapper}>
                        <div className={styles.badge}>
                            <div className={styles.badgeTop}>
                                <span>AUTHORIZED</span>
                                <span className={styles.badgeTitle}>Training Center</span>
                            </div>
                            <div className={styles.badgeBottom}>
                                <img src="/solidworks-autho-centre.jpg" alt="Solidworks Logo" className={styles.swLogo} />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats Bar */}
                <div className={styles.statsBarWrapper}>
                    <div className={styles.statsBar}>
                        {stats.map((stat, index) => (
                            <div key={index} className={styles.statItem}>
                                <span className={styles.statNumber}>{stat.number}</span>
                                <span className={styles.statLabel}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
