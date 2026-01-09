import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import servicesData from '@/content/services.json';
import coursesData from '@/content/courses.json';
import styles from './page.module.css';

const service = servicesData.services.find(s => s.slug === 'solidworks-training');

export const metadata = generateSEOMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonical: `/services/${service.slug}`,
  keywords: ['SolidWorks training', 'CAD courses', 'mechanical design training'],
});

export default function SolidWorksTrainingPage() {
  const courses = coursesData.courses;
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
                <Button href="#courses" size="large">
                  View Courses
                </Button>
                <Button href="#contact" variant="secondary" size="large">
                  Enroll Now
                </Button>
              </div>
            </div>
            <div className={styles.heroIcon}>{service.icon}</div>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <div className="container">
          <h2>What You'll Get</h2>
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

      <section className={styles.courses} id="courses">
        <div className="container">
          <div className="section-header">
            <h2>Our Courses</h2>
            <p>Choose the perfect course for your skill level and career goals</p>
          </div>
          <div className="grid grid-2">
            {courses.map((course) => (
              <div key={course.id} className={styles.courseCard}>
                <div className={styles.courseHeader}>
                  <h3>{course.title}</h3>
                  <span className={styles.courseLevel}>{course.level}</span>
                </div>
                <p className={styles.courseDescription}>{course.description}</p>
                <div className={styles.courseDetails}>
                  <div className={styles.detail}>
                    <strong>Duration:</strong> {course.duration}
                  </div>
                  <div className={styles.detail}>
                    <strong>Category:</strong> {course.category}
                  </div>
                  {course.certification && (
                    <div className={styles.detail}>
                      <strong>✓</strong> Certification Included
                    </div>
                  )}
                </div>
                <div className={styles.courseTopics}>
                  <strong>Topics Covered:</strong>
                  <ul>
                    {course.topics.slice(0, 4).map((topic, index) => (
                      <li key={index}>{topic}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <h2>Benefits of Our Training</h2>
          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🎯</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Master SolidWorks?</h2>
            <p>
              Enroll today and start your journey to becoming a skilled design
              engineer. Contact us for course details and batch timings.
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
