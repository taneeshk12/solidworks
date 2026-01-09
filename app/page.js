import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import servicesData from '@/content/services.json';
import coursesData from '@/content/courses.json';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
  title: 'Home',
  description:
    'Leading provider of SolidWorks training, placement services, and design engineering manpower solutions. Transform your career with expert-led courses and industry connections.',
  canonical: '/',
});

export default function HomePage() {
  const services = servicesData.services;
  const featuredCourses = coursesData.courses.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <h1>Transform Your Engineering Career</h1>
          <p className={styles.heroSubtitle}>
            Master SolidWorks, secure your dream job, and accelerate your career
            in design engineering with industry-leading training and placement
            support.
          </p>
          <div className={styles.heroButtons}>
            <Button href="/services" size="large">
              Explore Services
            </Button>
            <Button href="#contact" variant="secondary" size="large">
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className={styles.services}>
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p>
              Comprehensive solutions for design engineers and businesses seeking
              CAD expertise
            </p>
          </div>
          <div className="grid grid-3">
            {services.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className={styles.courses}>
        <div className="container">
          <div className="section-header">
            <h2>Featured Courses</h2>
            <p>Industry-aligned training programs designed to boost your skills</p>
          </div>
          <div className="grid grid-3">
            {featuredCourses.map((course) => (
              <Card
                key={course.id}
                title={course.title}
                description={course.description}
                icon="📚"
                features={[
                  `Duration: ${course.duration}`,
                  `Level: ${course.level}`,
                  course.certification ? 'Certification Included' : '',
                ].filter(Boolean)}
              />
            ))}
          </div>
          <div className={styles.coursesFooter}>
            <Button href="/services/solidworks-training" variant="outline">
              View All Courses
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose CAB Authorized?</h2>
            <p>Your trusted partner in engineering education and career growth</p>
          </div>
          <div className={styles.whyGrid}>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🎯</div>
              <h3>Industry Expertise</h3>
              <p>
                Learn from certified professionals with years of real-world
                experience in design engineering and manufacturing.
              </p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>💼</div>
              <h3>100% Placement Support</h3>
              <p>
                Direct connections with 100+ companies, resume building, and
                interview preparation to launch your career.
              </p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>📈</div>
              <h3>Hands-on Learning</h3>
              <p>
                Project-based curriculum with real-world applications to build a
                strong professional portfolio.
              </p>
            </div>
            <div className={styles.whyItem}>
              <div className={styles.whyIcon}>🏆</div>
              <h3>Recognized Certification</h3>
              <p>
                Industry-recognized certificates that add value to your resume and
                career prospects.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta} id="contact">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Start Your Journey?</h2>
            <p>
              Get in touch with us today to learn more about our training programs
              and placement services.
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

