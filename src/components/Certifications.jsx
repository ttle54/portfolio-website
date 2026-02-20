import { Award } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            name: "HashiCorp Certified: Terraform Associate",
            issuer: "HashiCorp",
            date: "Mar 2025",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            date: "Feb 2025",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "AWS Certified SysOps Administrator – Associate",
            issuer: "Amazon Web Services",
            date: "Mar 2024",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            date: "Feb 2021",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            date: "Mar 2021",
            icon: <Award size={40} className="cert-icon-svg" />
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
    };

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5 }}
                >
                    Certifications
                </motion.h2>
                <motion.div
                    className="certs-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {certs.map((cert, index) => (
                        <motion.div key={index} variants={cardVariants} className="cert-card-wrapper">
                            <Tilt
                                tiltMaxAngleX={10}
                                tiltMaxAngleY={10}
                                perspective={1000}
                                scale={1.05}
                                transitionSpeed={2000}
                                gyroscope={true}
                                className="cert-tilt-container"
                            >
                                <div className="cert-card glass-panel">
                                    <div className="cert-icon-container">
                                        <div className="cert-icon">{cert.icon}</div>
                                        <div className="cert-icon-glow"></div>
                                    </div>
                                    <div className="cert-info">
                                        <h3>{cert.name}</h3>
                                        <p>{cert.issuer}</p>
                                        <span className="cert-date text-gradient">{cert.date}</span>
                                    </div>
                                    <div className="cert-card-border-glow"></div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Certifications;
