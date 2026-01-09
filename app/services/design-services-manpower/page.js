import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import Button from '@/components/common/Button';
import servicesData from '@/content/services.json';
import styles from '../solidworks-training/page.module.css';
import localStyles from './page.module.css';

const service = servicesData.services.find(s => s.slug === 'design-services-manpower');

export const metadata = generateSEOMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonical: `/services/${service.slug}`,
  keywords: ['design engineering services', 'CAD outsourcing', 'engineering manpower'],
});

export default function DesignServicesManpowerPage() {
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
                  Our Solutions
                </Button>
                <Button href="#contact" variant="secondary" size="large">
                  Request Quote
                </Button>
              </div>
            </div>
            <div className={styles.heroIcon}>{service.icon}</div>
          </div>
        </div>
      </section>

      <section className={styles.features} id="features">
        <div className="container">
          <h2>Our Service Offerings</h2>
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
          <h2>Business Benefits</h2>
          <div className={styles.benefitsGrid}>
            {service.benefits.map((benefit, index) => (
              <div key={index} className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🏭</div>
                <p>{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={localStyles.engagementModels}>
        <div className="container">
          <div className="section-header">
            <h2>Flexible Engagement Models</h2>
            <p>Choose the model that best fits your business needs</p>
          </div>
          <div className="grid grid-3">
            <div className={localStyles.modelCard}>
              <h3>Dedicated Resource</h3>
              <p>
                Get a dedicated CAD engineer working exclusively for your projects
                on a full-time or part-time basis.
              </p>
              <ul>
                <li>Long-term commitment</li>
                <li>Direct communication</li>
                <li>Seamless integration with your team</li>
              </ul>
            </div>
            <div className={localStyles.modelCard}>
              <h3>Project-Based</h3>
              <p>
                Engage our team for specific projects with defined scope, timeline,
                and deliverables.
              </p>
              <ul>
                <li>Fixed cost and timeline</li>
                <li>Complete project management</li>
                <li>Quality assurance included</li>
              </ul>
            </div>
            <div className={localStyles.modelCard}>
              <h3>Time & Material</h3>
              <p>
                Flexible arrangement where you pay for the actual time and
                resources utilized for your work.
              </p>
              <ul>
                <li>Maximum flexibility</li>
                <li>Scale up or down as needed</li>
                <li>Transparent billing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={localStyles.industries}>
        <div className="container">
          <div className="section-header">
            <h2>Industries We Serve</h2>
            <p>Expertise across multiple engineering domains</p>
          </div>
          <div className={localStyles.industriesGrid}>
            <div className={localStyles.industryItem}>
              <h3>🚗 Automotive</h3>
              <p>Vehicle design, components, and manufacturing systems</p>
            </div>
            <div className={localStyles.industryItem}>
              <h3>✈️ Aerospace</h3>
              <p>Aircraft components and precision engineering</p>
            </div>
            <div className={localStyles.industryItem}>
              <h3>🏭 Manufacturing</h3>
              <p>Industrial equipment and production systems</p>
            </div>
            <div className={localStyles.industryItem}>
              <h3>🔧 Machinery</h3>
              <p>Heavy machinery and mechanical systems</p>
            </div>
            <div className={localStyles.industryItem}>
              <h3>⚡ Electronics</h3>
              <p>Consumer electronics and product enclosures</p>
            </div>
            <div className={localStyles.industryItem}>
              <h3>🏗️ Construction</h3>
              <p>Building systems and structural components</p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta} id="contact">
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Scale Your Engineering Team</h2>
            <p>
              Partner with us for reliable, skilled design engineering resources.
              Contact us to discuss your requirements and get a customized solution.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="mailto:info@cabauthorized.com" size="large">
                Request Quote
              </Button>
              <Button href="tel:+91-XXXXXXXXXX" variant="secondary" size="large">
                Discuss Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
