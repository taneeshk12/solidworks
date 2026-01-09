import { generateMetadata as generateSEOMetadata } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import Button from '@/components/common/Button';
import styles from './page.module.css';

export const metadata = generateSEOMetadata({
  title: 'About Us',
  description:
    'Learn about CAB Authorized - your trusted partner in engineering education and career development. We empower engineers with industry-leading SolidWorks training and career support.',
  canonical: '/about',
});

export default function AboutPage() {
  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'About Us', url: '/about' },
  ];

  return (
    <>
      <section className={styles.hero}>
        <div className="container">
          <Breadcrumb items={breadcrumbItems} />
          <h1>About CAB Authorized</h1>
          <p className={styles.subtitle}>
            Empowering engineers to excel in design engineering through
            world-class training and career support
          </p>
        </div>
      </section>

      <section className={styles.mission}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionContent}>
              <h2>Our Mission</h2>
              <p>
                At CAB Authorized, we are committed to bridging the gap between
                engineering education and industry requirements. Our mission is to
                empower aspiring and professional engineers with the skills,
                knowledge, and opportunities they need to succeed in the
                competitive world of design engineering.
              </p>
              <p>
                We believe that quality education combined with practical
                experience creates exceptional engineers. Through our
                comprehensive training programs, placement support, and design
                services, we help individuals and organizations achieve their
                goals.
              </p>
            </div>
            <div className={styles.missionStats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Students Trained</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>Partner Companies</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>95%</div>
                <div className={styles.statLabel}>Placement Rate</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.values}>
        <div className="container">
          <div className="section-header">
            <h2>Our Core Values</h2>
            <p>
              The principles that guide everything we do at CAB Authorized
            </p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🎯</div>
              <h3>Excellence</h3>
              <p>
                We strive for excellence in everything we deliver - from course
                content to student support, maintaining the highest standards in
                engineering education.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>💡</div>
              <h3>Innovation</h3>
              <p>
                We continuously update our curriculum and teaching methods to
                align with the latest industry trends and technological
                advancements.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Integrity</h3>
              <p>
                We operate with complete transparency and honesty, building trust
                through consistent actions and ethical practices.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🌱</div>
              <h3>Growth</h3>
              <p>
                We are committed to the continuous growth of our students,
                partners, and team members through learning and development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.story}>
        <div className="container">
          <h2>Our Story</h2>
          <div className={styles.storyContent}>
            <p>
              CAB Authorized was founded with a simple yet powerful vision: to
              make world-class engineering education accessible to aspiring
              designers and engineers. What started as a small training center has
              grown into a comprehensive platform offering training, placement,
              and design services.
            </p>
            <p>
              Over the years, we've had the privilege of working with hundreds of
              students who have gone on to build successful careers in leading
              engineering companies. Our partnerships with industry leaders ensure
              that our students receive training that directly translates to
              workplace success.
            </p>
            <p>
              Today, we continue to evolve and expand our offerings, always
              keeping our focus on what matters most: helping engineers achieve
              their career goals and helping businesses access top design talent.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.approach}>
        <div className="container">
          <h2>Our Approach</h2>
          <div className={styles.approachGrid}>
            <div className={styles.approachItem}>
              <h3>1. Industry-Aligned Curriculum</h3>
              <p>
                Our courses are designed in consultation with industry
                professionals to ensure they meet real-world requirements and
                prepare students for actual job roles.
              </p>
            </div>
            <div className={styles.approachItem}>
              <h3>2. Hands-On Training</h3>
              <p>
                We emphasize practical, project-based learning where students work
                on real design challenges, building a portfolio that showcases
                their capabilities.
              </p>
            </div>
            <div className={styles.approachItem}>
              <h3>3. Personalized Support</h3>
              <p>
                Every student receives individual attention with personalized
                career counseling, resume building, and interview preparation to
                maximize their success.
              </p>
            </div>
            <div className={styles.approachItem}>
              <h3>4. Continuous Improvement</h3>
              <p>
                We regularly update our content, methods, and technology to stay
                ahead of industry trends and provide the most relevant education.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Join Our Community</h2>
            <p>
              Ready to take your engineering career to the next level? Get in
              touch with us today.
            </p>
            <div className={styles.ctaButtons}>
              <Button href="/services" size="large">
                Explore Our Services
              </Button>
              <Button href="/#contact" variant="secondary" size="large">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
