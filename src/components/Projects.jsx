import Tilt from 'react-parallax-tilt';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: "Workout App",
            description: "A dynamic fitness tracking application built to manage user routines. Integrated Cloud-native backend features.",
            techStack: ["React", "AWS API Gateway", "Lambda", "DynamoDB"],
            image: "🏋️‍♂️",
            github: "#",
            demo: "#"
        },
        {
            title: "Automated Cloud Deployer",
            description: "An open-source CLI tool that uses Terraform to automatically stand up full VPCs and secure subnets in AWS within minutes.",
            techStack: ["Terraform", "Go", "AWS CLI"],
            image: "☁️",
            github: "#",
            demo: "#"
        },
        {
            title: "GenAI Infrastructure Bot",
            description: "An internal slack bot using AWS Bedrock to help junior engineers troubleshoot common deployment issues.",
            techStack: ["AWS Bedrock", "Python", "Lambda", "Slack SDK"],
            image: "🤖",
            github: "#"
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
