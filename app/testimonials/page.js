import { Star } from 'lucide-react';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import CallToAction from '@/components/common/CallToAction';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
    title: 'Testimonials',
    description: 'Hear from our students about their journey with SolidWorks Institute.',
    canonical: '/testimonials',
});

const testimonials = [
    {
        name: 'Darshan Gohel',
        text: 'I had a great learning experience here. The course content is very well-structured and covers everything from basics to advanced level. The faculty is highly knowledgeable, supportive and always ready to clear doubts. The learning atmosphere is positive and motivating. Overall, one of the best places to upskill in mechanical design software.',
        color: 'yellow' // #FCD34D tint
    },
    {
        name: 'Swayam Patel',
        text: 'I had a great experience at the SOLIDWORKS Authorized Training Centre, Sayajigunj (Malkarani Complex). The faculty are certified, highly experienced, and provide excellent one-on-one guidance. With flexible practice hours. After CSWA training, I confidently enrolled for CSWP as well. Best place in Vadodara to learn SOLIDWORKS.',
        color: 'peach' // #FFEDD5 tint
    },
    {
        name: 'Mihir Patel',
        text: 'I am very satisfied with the facilities and the overall teaching approach. The class timings are convenient and suitable for everyone. Faculty members are highly experienced, approachable, and always willing to resolve doubts. Their teaching methodology is excellent, and the syllabus is well-structured. I learned many new concepts related to designing, which completely changed my perspective on the design field. I am truly grateful to all the teachers for their constant support and guidance.',
        color: 'lightyellow' // #FEF3C7
    },
    {
        name: 'Darshan Gohel',
        text: 'I had a great learning experience here. The course content is very well-structured and covers everything from basics to advanced level. The faculty is highly knowledgeable, supportive and always ready to clear doubts. The learning atmosphere is positive and motivating. Post-training support and job assistance are excellent... they really guide you towards the right career opportunities. Overall, one of the best places to upskill in mechanical design software.',
        color: 'peach' // #FFEDD5
    },
    {
        name: 'Chirag Parmar',
        text: 'I had a great learning experience here. The course content is very well-structured and covers everything from basics to advanced level. The faculty is highly knowledgeable, supportive and always ready to clear doubts. The learning atmosphere is positive and motivating. Post-training support and job assistance are excellent... they really guide you towards the right career opportunities. Overall, one of the best places to upskill in mechanical design software.',
        color: 'purple' // #E9D5FF tint
    },
    {
        name: 'Yaksh Patel',
        text: 'Excellent SolidWorks learning experience! The course curriculum is well structured, covering everything from fundamentals to advanced level concepts. The faculty is highly knowledgeable, supportive, and always willing to clarify doubts. The overall learning environment is positive, professional, and motivating. I would highly recommend this institute to anyone looking to upskill in mechanical design software.',
        color: 'brown' // #E7E5E4 / darker tint
    }
];

export default function TestimonialsPage() {

    // Custom Title for CTA to include highlight
    const CTATitle = (
        <>
            Ready to Write Your Own <span style={{ background: '#FACC15', color: 'black', padding: '0 8px', borderRadius: '4px' }}>Success Story?</span>
        </>
    );

    return (
        <div className={styles.pageContainer}>

            {/* Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={styles.heroContent}>
                    <h1 className={styles.heroTitle}>Voices of Our Students</h1>
                    <div className={styles.ratingBadge}>
                        <div className={styles.ratingScore}>4.9</div>
                        <div className={styles.ratingText}>
                            <div className={styles.studentLabel}>Student Rating</div>
                            <div className={styles.stars}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={12} fill="white" stroke="none" />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reviews Grid */}
            <section className={styles.reviewsSection}>
                <div className="container">
                    <div className={styles.masonryGrid}>
                        {testimonials.map((t, index) => (
                            <div key={index} className={`${styles.reviewCard} ${styles[t.color]}`}>
                                <div className={styles.cardStars}>
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="#F59E0B" stroke="#F59E0B" />
                                    ))}
                                </div>
                                <p className={styles.reviewText}>{t.text}</p>
                                <p className={styles.reviewerName}>{t.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className={styles.loadMoreWrapper}>
                        <button className={styles.loadMoreBtn}>Load More Reviews ▼</button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <CallToAction
                title={CTATitle}
                subtitle="Join thousands of successful alumni working in top engineering firms worldwide."
                buttonText="Start Learning Now"
                buttonLink="/services"
                secondaryButtonText="View All Courses"
                secondaryButtonLink="/services"
            />

        </div>
    );
}
