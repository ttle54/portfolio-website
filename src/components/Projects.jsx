import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Enterprise-wide Disaster Recovery Strategy",
            description: "Orchestrated disaster recovery strategy leveraging AWS DRS, Load Balancers, and Auto Scaling groups, ensuring 5 min RTO and 99.99% uptime during DR simulations.",
            techStack: ["AWS DRS", "Auto Scaling", "Load Balancers"],
            image: "🛡️",
        },
        {
            title: "AWS GovCloud Infrastructure Automation",
            description: "Automated AWS GovCloud infrastructure using Terraform and Ansible, cutting provisioning time by 50% while maintaining CIS/NIST compliance.",
            techStack: ["AWS GovCloud", "Terraform", "Ansible", "CIS/NIST"],
            image: "☁️",
        },
        {
            title: "Microservices Migration to AWS EKS",
            description: "Engineered microservices migration to AWS EKS using Kubernetes, Helm, and CodePipeline. Reduced release time by 50% with fully automated blue/green deployments.",
            techStack: ["AWS EKS", "Kubernetes", "Helm", "CodePipeline"],
            image: "🚀",
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
