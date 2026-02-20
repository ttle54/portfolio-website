import { Server, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './About.css';

const About = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: "spring", stiffness: 100, damping: 12 }
        }
    };

    return (
        <section id="about" className="about">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Professional Summary
                </motion.h2>

                <div className="about-content">
                    <motion.div
                        className="about-metrics-grid"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                    >
                        {/* Infrastructure Card */}
                        <motion.div variants={cardVariants} className="metric-card-wrapper">
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} gyroscope={true} className="metric-tilt-container">
                                <div className="metric-card glass-panel">
                                    <div className="metric-header">
                                        <div className="metric-icon-wrapper primary"><Server size={28} /></div>
                                        <h3 className="metric-title">Infrastructure</h3>
                                    </div>
                                    <p className="metric-desc">Architecting highly available, automated AWS solutions using Terraform.</p>
                                    <div className="metric-progress-bg">
                                        <motion.div className="metric-progress-fill primary" initial={{ width: 0 }} whileInView={{ width: '95%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.3 }} />
                                    </div>
                                    <div className="metric-glow glow-primary"></div>
                                </div>
                            </Tilt>
                        </motion.div>

                        {/* CI/CD Card */}
                        <motion.div variants={cardVariants} className="metric-card-wrapper">
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} gyroscope={true} className="metric-tilt-container">
                                <div className="metric-card glass-panel">
                                    <div className="metric-header">
                                        <div className="metric-icon-wrapper secondary"><Zap size={28} /></div>
                                        <h3 className="metric-title">CI/CD & Automation</h3>
                                    </div>
                                    <p className="metric-desc">Streamlining deployments with Jenkins, GitLab Pipelines, and Ansible.</p>
                                    <div className="metric-progress-bg">
                                        <motion.div className="metric-progress-fill secondary" initial={{ width: 0 }} whileInView={{ width: '90%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.4 }} />
                                    </div>
                                    <div className="metric-glow glow-secondary"></div>
                                </div>
                            </Tilt>
                        </motion.div>

                        {/* Observability Card */}
                        <motion.div variants={cardVariants} className="metric-card-wrapper">
                            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={1000} scale={1.02} transitionSpeed={2000} gyroscope={true} className="metric-tilt-container">
                                <div className="metric-card glass-panel">
                                    <div className="metric-header">
                                        <div className="metric-icon-wrapper tertiary"><ShieldCheck size={28} /></div>
                                        <h3 className="metric-title">Observability</h3>
                                    </div>
                                    <p className="metric-desc">Ensuring security via Dynatrace/Splunk and staying compliant with NIST.</p>
                                    <div className="metric-progress-bg">
                                        <motion.div className="metric-progress-fill tertiary" initial={{ width: 0 }} whileInView={{ width: '85%' }} viewport={{ once: true }} transition={{ duration: 1.5, delay: 0.5 }} />
                                    </div>
                                    <div className="metric-glow glow-tertiary"></div>
                                </div>
                            </Tilt>
                        </motion.div>
                    </motion.div>

                    {/* Stats Panel */}
                    <motion.div
                        className="about-stats glass-panel"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", delay: 0.6 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number text-gradient">7+</span>
                            <span className="stat-label">Years of<br />Experience</span>
                        </div>
                        <div className="stat-item glow-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number text-gradient">10+</span>
                            <span className="stat-label">Cloud<br />Projects</span>
                        </div>
                        <div className="stat-item glow-divider"></div>
                        <div className="stat-item">
                            <span className="stat-number text-gradient">5</span>
                            <span className="stat-label">Cloud & IaC<br />Certifications</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
