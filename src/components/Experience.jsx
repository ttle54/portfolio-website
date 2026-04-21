import { Building2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            role: "AI Engineer",
            company: "CGI Inc",
            duration: "Oct 2024 - Present",
            description: "Orchestrated agentic RAG workflows using LangChain and LlamaIndex to integrate Bedrock and Anthropic SDKs. Engineered high-performance Hybrid-Search and automated SageMaker fine-tuning pipelines via Modular Terraform.",
            tech: ["AWS GovCloud", "Bedrock", "LangChain", "MCP", "Terraform"],
            logo: <Building2 className="company-logo" size={24} />
        },
        {
            role: "AI Engineer",
            company: "Kingstone Insurance Company",
            duration: "Nov 2023 - Oct 2024",
            description: "Designed a multi-agent orchestration framework using Anthropic SDKs. Standardized Vector Database scaling on EKS using Terraform and integrated AWS Security Hub with EventBridge.",
            tech: ["Multi-Agent AI", "AWS EKS", "Terraform", "Security Hub", "Neo4j"],
            logo: <Building2 className="company-logo" size={24} />
        },
        {
            role: "Cloud Engineer",
            company: "Patterson-UTI Management Services",
            duration: "May 2021 - Nov 2023",
            description: "Provisioned 150+ AWS enterprise systems via Terraform and GitHub Actions for ML training. Integrated AWS Secrets Manager and streamlined S3 Intelligent-Tiering for multi-petabyte datasets.",
            tech: ["AWS", "Terraform", "CloudWatch", "RBAC", "Ansible"],
            logo: <Building2 className="company-logo" size={24} />
        }
    ];

    const timelineContainerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.3 }
        }
    };

    const timelineItemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
    };

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

                <div className="timeline-wrapper">
                    {/* Animated vertical track */}
                    <motion.div
                        className="timeline-track"
                        initial={{ height: 0 }}
                        whileInView={{ height: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    >
                        <div className="timeline-track-glow"></div>
                    </motion.div>

                    <motion.div
                        className="timeline"
                        variants={timelineContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {experiences.map((exp, index) => (
                            <motion.div key={index} variants={timelineItemVariants} className="timeline-item">
                                <div className="timeline-dot-wrapper">
                                    <div className="timeline-dot text-gradient-bg"></div>
                                    <div className="timeline-dot-pulse"></div>
                                </div>

                                <div className="timeline-content glass-panel hover-glow">
                                    <span className="timeline-date">{exp.duration}</span>
                                    <div className="timeline-header">
                                        <div className="icon-wrapper glass-icon">
                                            {exp.logo}
                                        </div>
                                        <div>
                                            <h3 className="timeline-role">{exp.role}</h3>
                                            <h4 className="timeline-company">{exp.company}</h4>
                                        </div>
                                    </div>
                                    <p className="timeline-desc">{exp.description}</p>
                                    <div className="timeline-tech">
                                        {exp.tech.map((tech, i) => (
                                            <motion.span
                                                key={i}
                                                className="tech-badge neon-border"
                                                whileHover={{ scale: 1.05 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                    <div className="experience-glow-bg"></div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
