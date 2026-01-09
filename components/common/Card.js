import Link from 'next/link';
import styles from './Card.module.css';

export default function Card({
  title,
  description,
  icon,
  href,
  features = [],
  className = '',
}) {
  const content = (
    <>
      {icon && <div className={styles.icon}>{icon}</div>}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      {features.length > 0 && (
        <ul className={styles.features}>
          {features.slice(0, 3).map((feature, index) => (
            <li key={index}>✓ {feature}</li>
          ))}
        </ul>
      )}
      {href && <span className={styles.arrow}>Learn More →</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${styles.card} ${className}`}>
        {content}
      </Link>
    );
  }

  return <div className={`${styles.card} ${className}`}>{content}</div>;
}
