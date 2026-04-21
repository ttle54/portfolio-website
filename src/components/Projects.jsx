import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Agentic RAG Workflows & Hybrid-Search",
            description: "Orchestrated agentic RAG workflows using LangChain to integrate Bedrock and Anthropic SDKs. Engineered high-performance Hybrid-Search using OpenSearch Serverless, cutting retrieval latency by 40%.",
            techStack: ["LangChain", "AWS Bedrock", "OpenSearch", "Python"],
            image: "🎯",
        },
        {
            title: "Multi-Agent Orchestration Framework",
            description: "Designed a multi-agent orchestration framework using Anthropic SDKs, achieving a 30% increase in operational efficiency via Planning-Execution patterns and improving system reliability.",
            techStack: ["Anthropic SDKs", "Multi-Agent", "Python"],
            image: "🚀",
        },
        {
            title: "GovCloud AI Infrastructure Automation",
            description: "Automated SageMaker fine-tuning pipelines and LLM evaluation benchmarks via Modular Terraform HCL. Hardened GovCloud perimeters using IAM Permission Boundaries and KMS-CMK.",
            techStack: ["AWS GovCloud", "Terraform", "SageMaker", "IAM/KMS"],
            image: "🛡️",
        }
    ];

    return (
        <section id="projects" className="projects">
            <div className="container">
                <h2 className="section-title">Selected Projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <Tilt
                            key={index}
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                            scale={1.02}
                            transitionSpeed={2000}
                            gyroscope={true}
                        >
                            <div className="project-card glass-panel">
                                <div className="project-image-placeholder">
                                    <span className="project-icon">{project.image}</span>
                                </div>
                                <div className="project-content">
                                    <h3 className="project-title">{project.title}</h3>
                                    <p className="project-desc">{project.description}</p>
                                    <div className="project-tech">
                                        {project.techStack.map((tech, i) => (
                                            <span key={i} className="tech-badge">{tech}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-actions">
                                    {project.github && <a href={project.github} className="btn btn-outline">GitHub</a>}
                                    {project.demo && <a href={project.demo} className="btn btn-primary">Live Demo</a>}
                                </div>
                            </div>
                        </Tilt>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
