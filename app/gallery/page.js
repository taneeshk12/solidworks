import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import CallToAction from '@/components/common/CallToAction';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
    title: 'Gallery',
    description: 'Glimpses of life at SolidWorks Institute. View our center, student activities, and achievements.',
    canonical: '/gallery',
});

const centerGallery = [
    "photo1.jpeg", "photo2.jpeg", "photo3.jpeg",
    "photo4.jpeg", "photo5.jpeg", "photo6.jpeg",
    "G1p7.jpeg", "G1p8.jpeg", "G1p9.jpeg", "G2p6.jpeg"
];

const solidWorksGallery = [
    "G3p11.jpeg", "G3p12.jpeg", "G3p14.jpeg", "G3p15.jpeg",
    "G4p3.jpeg", "G1p27.jpeg", "G1pp4.jpeg"
];

export default function GalleryPage() {
    return (
        <div className={styles.pageContainer}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Life at SolidWorks Institute</h1>
                    <p className={styles.heroSubtitle}>Celebrating innovation, learning, and success stories</p>
                </div>
            </section>

            {/* Center Gallery */}
            <section className={styles.gallerySection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>Center Gallery</h2>
                    <div className={styles.galleryGrid}>
                        {centerGallery.map((pic, index) => (
                            <div key={`center-${index}`} className={styles.imageCard}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`/center_pics/${pic}`}
                                    alt={`Center Activity ${index + 1}`}
                                    className={styles.galleryImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* SolidWorks Gallery */}
            <section className={`${styles.gallerySection} ${styles.altBg}`}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>SolidWorks Gallery</h2>
                    <div className={styles.galleryGrid}>
                        {solidWorksGallery.map((pic, index) => (
                            <div key={`sw-${index}`} className={styles.imageCard}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={`/center_pics/${pic}`}
                                    alt={`SolidWorks Project ${index + 1}`}
                                    className={styles.galleryImage}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CallToAction
                title="Inspired by our work?"
                subtitle="Join our next batch and start building your own portfolio."
                buttonText="Enroll Now"
                buttonLink="/#contact"
                secondaryButtonText="Contact Us"
                secondaryButtonLink="/#contact"
            />

        </div>
    );
}
