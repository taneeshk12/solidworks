import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import Button from '@/components/common/Button';
import servicesData from '@/content/services.json';
import styles from '../solidworks-training/page.module.css';

const service = servicesData.services.find(s => s.slug === 'placement');

export const metadata = generateSEOMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonical: `/services/${service.slug}`,
  keywords: ['engineering placement', 'job placement services', 'career support'],
});

export default function PlacementPage() {
  const serviceSchema = generateServiceSchema(service);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  return (
    <>
      <StructuredData data={serviceSchema} />
      
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1>{service.title}</h1>
              <p className={styles.heroDescription}>{service.fullDescription}</p>
              <div className={styles.heroButtons}>
                <Button href="#features" size="large">
                  Learn More
                </Button>
                <Button href="#contact" variant="secondary" size="large">
                  Get Started
                </Button>
              </div>
            </div>
            <div className={styles.heroIcon}>{service.icon}</div>
          </div>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className="container">
          <h2>Placement Support Features</h2>
          <div className={styles.featuresGrid}>
            {service.features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <span className={styles.checkmark}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Why Our Placement Services Stand Out</h2>
          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>💼</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.features} style={{ background: '#f9fafb' }}>
        <div className="container">
          <div className="section-header">
            <h2>Our Placement Process</h2>
            <p>A structured approach to secure your dream job</p>
          </div>
          <div className="grid grid-2">
            <div className={styles.processCard}>
              <h3>1. Profile Assessment</h3>
              <p>
                We evaluate your skills, experience, and career goals to identify
                the best opportunities that match your profile.
              </p>
            </div>
            <div className={styles.processCard}>
              <h3>2. Resume & Portfolio Building</h3>
              <p>
                Our experts help you create a compelling resume and portfolio that
                highlights your strengths and projects effectively.
              </p>
            </div>
            <div className={styles.processCard}>
              <h3>3. Interview Preparation</h3>
              <p>
                Comprehensive mock interviews, technical assessments, and soft
                skills training to boost your confidence.
              </p>
            </div>
            <div className={styles.processCard}>
              <h3>4. Company Connections</h3>
              <p>
                Direct introductions to hiring managers at our 100+ partner
                companies across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Launch Your Engineering Career</h2>
            <p>
              Get personalized placement support and connect with top engineering
              companies. Start your journey to a rewarding career today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="mailto:info@cabauthorized.com" size="large">
                Email Us
              </Button>
              <Button href="tel:+91-XXXXXXXXXX" variant="secondary" size="large">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
