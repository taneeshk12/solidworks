import Link from 'next/link';
import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';
import Hero from '@/components/layout/Hero';
import WhyChooseUs from '@/components/common/WhyChooseUs';
import ClientsMarquee from '@/components/common/ClientsMarquee';
import Testimonials from '@/components/common/Testimonials';
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
      <Hero />

      {/* About Us Section */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>
            <div className={styles.aboutImageWrapper}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/hero/home_hero1.png"
                alt="About CAB Authorized Training Centre"
                className={styles.aboutImage}
              />
            </div>
            <div className={styles.aboutContent}>
              <div className="section-header" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
                <h2>About Us</h2>
              </div>
              <p>
                We are a premier Authorized Training Centre committed to shaping the future of design engineering.
                With a focus on practical skills and industry requirements, we help students and professionals excel.
              </p>
              <ul className={styles.aboutList}>
                <li>Expert-led training programs</li>
                <li>State-of-the-art lab facilities</li>
                <li>Industry-recognized certifications</li>
                <li>Dedicated placement support</li>
              </ul>
              <Button href="/about">Know More</Button>
            </div>
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
            {services.map((service) => {
              // Map service IDs to images and variants
              const serviceConfig = {
                'solidworks-training': {
                  image: '/services/training.png',
                  variant: 'orange',
                },
                'placement': {
                  image: '/services/placements.png',
                  variant: 'orange',
                },
                'design-services-manpower': {
                  image: '/services/3d .png',
                  variant: 'purple',
                },
              };

              const config = serviceConfig[service.id] || { variant: 'orange' };

              return (
                <Card
                  key={service.id}
                  title={service.title}
                  description={service.shortDescription}
                  href={`/services/${service.slug}`}
                  features={service.features}
                  image={config.image}
                  variant={config.variant}
                />
              );
            })}
          </div>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Clients Marquee Section */}
      <ClientsMarquee />

      {/* Testimonials Section */}
      <Testimonials />

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

