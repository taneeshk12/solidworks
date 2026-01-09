import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import Card from '@/components/common/Card';
import servicesData from '@/content/services.json';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
  title: 'Our Services',
  description:
    'Comprehensive design engineering services including SolidWorks training, placement support, and professional manpower solutions. Transform your career or scale your business.',
  canonical: '/services',
  keywords: [
    'SolidWorks training services',
    'engineering placement',
    'CAD design services',
    'engineering manpower',
  ],
});

export default function ServicesPage() {
  const services = servicesData.services;

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <h1>Our Services</h1>
          <p className={styles.subtitle}>
            Comprehensive solutions for engineers and businesses in the design
            engineering domain
          </p>
        </div>
      </section>

      <section className={styles.services}>
        <div className="container">
          <div className="grid grid-3">
            {services.map((service) => (
              <Card
                key={service.id}
                title={service.title}
                description={service.fullDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      <section className={styles.benefits}>
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Our Services?</h2>
            <p>
              We deliver results through expertise, dedication, and
              industry-aligned solutions
            </p>
          </div>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <h3>🎓 Expert Instructors</h3>
              <p>
                Learn from industry professionals with years of real-world
                experience in design engineering and CAD software.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>🤝 Industry Connections</h3>
              <p>
                Access to our extensive network of 100+ partner companies for job
                placements and project opportunities.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>📈 Proven Track Record</h3>
              <p>
                95% placement rate and hundreds of successful students working in
                leading engineering companies.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>🔧 Practical Approach</h3>
              <p>
                Hands-on, project-based learning that prepares you for real-world
                engineering challenges.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>💼 Complete Support</h3>
              <p>
                From training to placement, we provide end-to-end support for your
                career development.
              </p>
            </div>
            <div className={styles.benefitItem}>
              <h3>⚡ Flexible Solutions</h3>
              <p>
                Customizable programs and engagement models to suit your specific
                needs and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.process}>
        <div className="container">
          <div className="section-header">
            <h2>How We Work</h2>
            <p>Our proven process for delivering exceptional results</p>
          </div>
          <div className={styles.processSteps}>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>1</div>
              <h3>Consultation</h3>
              <p>
                We understand your goals, requirements, and current skill level to
                recommend the best solution.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>2</div>
              <h3>Customization</h3>
              <p>
                We tailor our programs and services to match your specific needs
                and objectives.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>3</div>
              <h3>Execution</h3>
              <p>
                We deliver high-quality training, placement support, or design
                services with expert guidance.
              </p>
            </div>
            <div className={styles.processStep}>
              <div className={styles.stepNumber}>4</div>
              <h3>Support</h3>
              <p>
                We provide ongoing support and resources to ensure your continued
                success and growth.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
