import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "Senior Cloud Engineer",
            company: "Tech Corp",
            duration: "2021 - Present",
            description: "Architected and maintained highly available AWS infrastructure using Terraform. Improved deployment times by 40% through advanced CI/CD pipelines with Jenkins and GitHub Actions.",
            tech: ["AWS", "Terraform", "Jenkins", "Python"],
            logo: <Building2 className="company-logo" size={24} />
        },
        {
            role: "Cloud Engineer",
            company: "Innovate Ltd",
            duration: "2018 - 2021",
            description: "Migrated legacy on-premise applications to AWS EC2 and serverless architecture. Implemented comprehensive infrastructure monitoring using Splunk and Dynatrace.",
            tech: ["AWS", "Ansible", "Splunk", "Docker"],
            logo: <Building2 className="company-logo" size={24} />
        }
    ];

    return (
        <section id="experience" className="experience">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.5 }}
                >
                    Experience
                </motion.h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="timeline-item"
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, type: "spring", delay: 0.1 * index }}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content glass-panel">
                                <span className="timeline-date text-gradient">{exp.duration}</span>
                                <div className="timeline-header">
                                    {exp.logo}
                                    <div>
                                        <h3 className="timeline-role">{exp.role}</h3>
                                        <h4 className="timeline-company">{exp.company}</h4>
                                    </div>
                                </div>
                                <p className="timeline-desc">{exp.description}</p>
                                <div className="timeline-tech">
                                    {exp.tech.map((tech, i) => (
                                        <span key={i} className="tech-badge">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
