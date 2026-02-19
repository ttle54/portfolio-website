import { Server, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
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
                        className="about-metrics glass-panel"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring" }}
                    >
                        <div className="metric-box">
                            <Server size={32} className="metric-icon primary" />
                            <h3 className="metric-title">Infrastructure</h3>
                            <p>Architecting highly available, automated AWS solutions using Terraform.</p>
                        </div>
                        <div className="metric-box">
                            <Zap size={32} className="metric-icon secondary" />
                            <h3 className="metric-title">CI/CD & Automation</h3>
                            <p>Streamlining deployments with Jenkins, GitHub Actions, and Ansible.</p>
                        </div>
                        <div className="metric-box">
                            <ShieldCheck size={32} className="metric-icon tertiary" />
                            <h3 className="metric-title">Observability & AI</h3>
                            <p>Ensuring security via Dynatrace/Splunk, expanding into AWS GenAI.</p>
                        </div>
                    </motion.div>

                    <motion.div
                        className="about-stats glass-panel"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, type: "spring", delay: 0.2 }}
                    >
                        <div className="stat-item">
                            <span className="stat-number text-gradient">5+</span>
                            <span className="stat-label">Years of<br />Experience</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number text-gradient">10+</span>
                            <span className="stat-label">Cloud<br />Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number text-gradient">3</span>
                            <span className="stat-label">Core<br />Certifications</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
