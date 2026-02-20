import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Cloud, Server, Shield } from 'lucide-react';
import './Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Cloud & Orchestration",
            icon: <Cloud size={32} className="category-icon" />,
            skills: [
                { name: 'AWS Cloud Services', level: 95 },
                { name: 'Terraform / CloudFormation', level: 95 },
                { name: 'Ansible / Docker', level: 85 }
            ]
        },
        {
            title: "DevOps & Security",
            icon: <Shield size={32} className="category-icon" />,
            skills: [
                { name: 'CI/CD (Jenkins/GitLab)', level: 90 },
                { name: 'Security (IAM, WAF)', level: 85 },
                { name: 'CIS/NIST Compliance', level: 80 }
            ]
        },
        {
            title: "Observability & Networking",
            icon: <Server size={32} className="category-icon" />,
            skills: [
                { name: 'Splunk / CloudWatch', level: 85 },
                { name: 'Networking (Transit GW, ALB)', level: 80 },
                { name: 'Linux / Bash', level: 85 }
            ]
        }
    ];

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
        <section id="skills" className="skills">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Technical Arsenal
                </motion.h2>

                <motion.div
                    className="skills-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {skillCategories.map((category, idx) => (
                        <motion.div key={idx} variants={cardVariants} className="skill-card-wrapper">
                            <Tilt
                                tiltMaxAngleX={5}
                                tiltMaxAngleY={5}
                                perspective={1000}
                                scale={1.02}
                                transitionSpeed={2000}
                                gyroscope={true}
                                className="skill-tilt-container"
                            >
                                <div className="skill-card glass-panel">
                                    <div className="skill-header">
                                        <div className="icon-wrapper">
                                            {category.icon}
                                        </div>
                                        <h3 className="category-title">{category.title}</h3>
                                    </div>

                                    <div className="skills-list">
                                        {category.skills.map((skill, i) => (
                                            <div key={i} className="skill-item">
                                                <div className="skill-info">
                                                    <span className="skill-name">{skill.name}</span>
                                                    <span className="skill-percentage text-gradient">{skill.level}%</span>
                                                </div>
                                                <div className="progress-bar-bg">
                                                    <motion.div
                                                        className="progress-bar-fill"
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${skill.level}%` }}
                                                        viewport={{ once: true }}
                                                        transition={{ duration: 1.5, delay: 0.2 + (i * 0.1), ease: "easeOut" }}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* Decorative glow elements */}
                                    <div className="card-glow"></div>
                                </div>
                            </Tilt>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
