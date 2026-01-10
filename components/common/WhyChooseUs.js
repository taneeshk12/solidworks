import React from "react";
import {
    BadgeCheck,
    Award,
    Laptop,
    UserCheck,
    GraduationCap,
    Globe,
    BookOpen,
    Handshake,
    Users,
    MonitorPlay,
} from "lucide-react";
import styles from "./WhyChooseUs.module.css";

const features = [
    {
        title: "SolidWorks Authorised Partner",
        icon: BadgeCheck, // Using BadgeCheck as close match
        variant: "orange",
    },
    {
        title: "Training Experience of 10+ Years",
        icon: Award,
        variant: "yellow",
    },
    {
        title: "Training with Licensed Software",
        icon: Laptop, // Laptop2 is usually just Laptop in lucide imports or need to check specific version, sticking to Laptop for safety or could try Laptop2 if sure. Lucide usually has Laptop.
        variant: "purple",
    },
    {
        title: "Personalised Training",
        icon: UserCheck,
        variant: "yellow",
    },
    {
        title: "SolidWorks Certified Faculties",
        icon: GraduationCap,
        variant: "blue",
    },
    {
        title: "International Certification",
        icon: Globe,
        variant: "orange",
    },
    {
        title: "Industry Ready Curriculum",
        icon: BookOpen,
        variant: "yellow",
    },
    {
        title: "1000+ Industry Connections for Placements",
        icon: Handshake,
        variant: "purple",
    },
    {
        title: "Industry Ready Curriculum", // Duplicate title in user input? Keeping as is.
        icon: Users,
        variant: "yellow",
    },
    {
        title: "Offline & Mentored Online Training",
        icon: MonitorPlay,
        variant: "blue",
    },
];

export default function WhyChooseUs() {
    return (
        <section className={styles.section}>
            <div className="container">
                {/* Heading */}
                <div className={styles.header}>
                    <h2 className={styles.heading}>Why Choose Us</h2>
                    <p className={styles.subheading}>
                        We don’t just teach software; we teach engineering design. Our unique
                        approach ensures the why behind every click.
                    </p>
                    <div className={styles.dividerWrapper}>
                        <span className={styles.divider} />
                    </div>
                </div>

                {/* Outer Border Box */}
                <div className={styles.gridContainer}>
                    <div className={styles.grid}>
                        {features.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className={`${styles.card} ${styles[item.variant]}`}
                                >
                                    <div className={styles.iconWrapper}>
                                        <Icon className={styles.icon} size={26} />
                                    </div>
                                    <p className={styles.cardTitle}>{item.title}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
