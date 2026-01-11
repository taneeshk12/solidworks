import React from 'react';
import { generateMetadata as generateSEOMetadata, generateServiceSchema } from '@/utils/seo';
import Breadcrumb from '@/components/seo/Breadcrumb';
import StructuredData from '@/components/seo/StructuredData';
import Button from '@/components/common/Button';
import servicesData from '@/content/services.json';
import styles from './page.module.css';
import {
  Users,
  Settings,
  Award,
  Clock,
  Users2,
  PenTool,
  Search,
  Box,
  Printer,
  Truck
} from 'lucide-react';

const service = servicesData.services.find(s => s.slug === 'design-services-manpower');

export const metadata = generateSEOMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  canonical: `/services/${service.slug}`,
  keywords: ['design engineering services', 'CAD drafting', 'manpower supply', 'reverse engineering'],
});

const designServices = [
  { id: 1, title: '2D Drafting & GD&T', image: 'https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=400' },
  { id: 2, title: '3D CAD Modeling', image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&q=80&w=400' },
  { id: 3, title: 'Reverse Engineering', image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=400' },
  { id: 4, title: 'Product & Sheet Metal Design', image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=400' },
  { id: 5, title: '3D Printing & Prototyping', image: 'https://images.unsplash.com/photo-1631011035540-848e3cf75858?auto=format&fit=crop&q=80&w=400' },
];

const reasons = [
  {
    id: 1,
    title: 'Experienced CAD Professional with Industry expertise',
    icon: Users,
    color: '#EA580C'
  },
  {
    id: 2,
    title: 'Cost-Effective Engineering Solutions',
    icon: Settings,
    color: '#6B21A8'
  },
  {
    id: 3,
    title: 'High-Quality & Accurate designs meeting industry standards',
    icon: Award,
    color: '#FACC15'
  },
  {
    id: 4,
    title: 'On Time Project Delivery with accurate workflows',
    icon: Clock,
    color: '#EA580C'
  },
  {
    id: 5,
    title: 'Trusted & Transparent Partnerships focused on long-term value',
    icon: Users2,
    color: '#6B21A8'
  },
  {
    id: 6,
    title: 'Customized Design Support tailored to project need',
    icon: PenTool,
    color: '#FACC15'
  },
];

const workSteps = [
  { id: 1, title: 'Consultation', desc: 'Understanding your design requirements and project scope.', icon: Search },
  { id: 2, title: 'CAD Design', desc: 'Developing precise 2D/3D CAD models and assemblies.', icon: Box },
  { id: 3, title: 'Printing', desc: 'Prototype development using advanced 3D printing tech.', icon: Printer },
  { id: 4, title: 'Delivery', desc: 'Final project delivery and post-production support.', icon: Truck },
];

export default function DesignServicesManpowerPage() {
  const serviceSchema = generateServiceSchema(service);

  const breadcrumbItems = [
    { name: 'Home', url: '/' },
    { name: 'Services', url: '/services' },
    { name: service.title, url: `/services/${service.slug}` },
  ];

  return (
    <div className={styles.pageWrapper}>
      <StructuredData data={serviceSchema} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Explore Our Designing Services & Manpower Supply</h1>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.introSection}>
        <div className="container">
          <div className={styles.introContent}>
            <div className={styles.introText}>
              <p>
                We are a professionally managed engineering design consultancy based in <span className={styles.highlight}>Vadodara, Gujarat</span>, specializing in <span className={styles.highlight}>CAD drafting, engineering design services, and manpower supply</span>. Our mission is to bridge technical excellence with practical solutions by providing skilled resources and accurate, production-ready designs to support industry needs.
              </p>
              <p>
                Backed by a strong foundation in engineering knowledge and industry best practices, we deliver <span className={styles.highlight}>high-quality, cost-effective, and timely solutions</span> tailored to the unique requirements of each project. Along with design and drafting services, we offer <span className={styles.highlight}>qualified design engineering manpower</span> to support client operations, project execution, and workforce requirements across industries.
              </p>
              <p>
                We are committed to working within defined budgets and timelines while maintaining the highest standards of accuracy, quality, and professionalism. Beyond service delivery, we focus on building <span className={styles.highlight}>long-term partnerships</span> based on trust, transparency, and reliability.
              </p>
              <p>
                Client satisfaction is at the core of everything we do. Through value-added services, skilled manpower support, and ethical practices, we strive to exceed expectations and establish ourselves as a trusted engineering design and manpower solutions partner.
              </p>
            </div>
            <div className={styles.introImage}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="3D Printer" />
            </div>
          </div>
        </div>
      </section>

      {/* Design Services Section */}
      <section className={styles.designServices}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Design Services</h2>
          <div className={styles.designGrid}>
            {designServices.map((item) => (
              <div key={item.id} className={styles.designCard}>
                <div className={styles.designImage}>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className={styles.designTitle}>{item.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Designs Section */}
      <section className={styles.featuredDesigns}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Featured Designs</h2>
          <div className={styles.featuredGrid}>
            <div className={`${styles.featuredItem} ${styles.narrow}`}><img src="https://images.unsplash.com/photo-1631011035540-848e3cf75858?auto=format&fit=crop&q=80&w=600" alt="Spiral Vase" /></div>
            <div className={`${styles.featuredItem} ${styles.wide}`}><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" alt="Robotic Arm" /></div>
            <div className={`${styles.featuredItem} ${styles.wide}`}><img src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?auto=format&fit=crop&q=80&w=800" alt="Dragon Print" /></div>
            <div className={`${styles.featuredItem} ${styles.narrow}`}><img src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=600" alt="Pen Holder" /></div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={styles.whyChooseUs}>
        <div className="container">
          <h2 className={styles.sectionTitle}>
            Why Choose <span className={styles.orangeText}>Us ?</span>
          </h2>
          <div className={styles.reasonsGrid}>
            <div className={styles.reasonCard} style={{ borderColor: '#EA580C' }}>
              <div className={styles.reasonIcon} style={{ color: '#EA580C' }}><Users size={40} /></div>
              <p className={styles.reasonText}>Experienced CAD Professionals with strong industry expertise</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#6B21A8' }}>
              <div className={styles.reasonIcon} style={{ color: '#6B21A8' }}><Settings size={40} /></div>
              <p className={styles.reasonText}>Cost-Effective Engineering Solutions</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#A16207' }}>
              <div className={styles.reasonIcon} style={{ color: '#A16207' }}><Award size={40} /></div>
              <p className={styles.reasonText}>High-Quality & Accurate Designs meeting industry standards</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#EA580C' }}>
              <div className={styles.reasonIcon} style={{ color: '#EA580C' }}><Clock size={40} /></div>
              <p className={styles.reasonText}>On-Time Project Delivery with structured workflows</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#6B21A8' }}>
              <div className={styles.reasonIcon} style={{ color: '#6B21A8' }}><Users2 size={40} /></div>
              <p className={styles.reasonText}>Trusted & Transparent Partnerships focused on long-term value</p>
            </div>
            <div className={styles.reasonCard} style={{ borderColor: '#A16207' }}>
              <div className={styles.reasonIcon} style={{ color: '#A16207' }}><PenTool size={40} /></div>
              <p className={styles.reasonText}>Customized Design Support tailored to project need</p>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className={styles.howWeWork}>
        <div className="container">
          <h2 className={`${styles.sectionTitle} ${styles.withBar}`}>How We Work</h2>
          <p className={styles.sectionSubtext}>Accelerating Excellence through our design stages.</p>
          <div className={styles.stepsGrid}>
            {workSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.id} className={styles.stepItem}>
                  <div className={styles.stepCircle}>
                    <Icon size={20} />
                  </div>
                  <div className={styles.stepContent}>
                    <h3>{step.id}. {step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Accelerate Your Engineering Career?</h2>
            <p>Join millions of students and professionals and create your own world with us.</p>
            <div className={styles.ctaButtons}>
              <Button href="#contact" className={styles.ctaBtnPrimary}>Send Now</Button>
              <Button href="/services" variant="secondary" className={styles.ctaBtnSecondary}>View All Courses</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
