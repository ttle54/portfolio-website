import { Github, Linkedin, Cloud, Terminal, Cpu, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import './Hero.css';

const Hero = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 100, damping: 10 }
        }
    };

    return (
        <section id="home" className="hero">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <Tilt
                        tiltMaxAngleX={3}
                        tiltMaxAngleY={3}
                        perspective={1000}
                        scale={1.01}
                        transitionSpeed={2000}
                        gyroscope={true}
                    >
                        <div className="hero-text-card glass-panel">
                            <motion.p variants={itemVariants} className="hero-subtitle">Hello, I'm</motion.p>
                            <motion.h1 variants={itemVariants} className="hero-title">Tony Le</motion.h1>
                            <motion.h2 variants={itemVariants} className="hero-role text-gradient">Cloud Engineer</motion.h2>
                            <motion.p variants={itemVariants} className="hero-desc">
                                Empowering scalable, secure infrastructure with 7+ years specializing in AWS, Terraform, automation, and expanding into Generative AI.
                            </motion.p>

                            <motion.div variants={itemVariants} className="hero-cta-group">
                                <div className="hero-buttons">
                                    <a href="#contact" className="btn-hero-neon">
                                        <span className="btn-text">Hire Me</span>
                                        <div className="btn-glow-layer"></div>
                                    </a>
                                    <a href="/Tony_Le_Resume.pdf" target="_blank" rel="noreferrer" className="btn btn-outline btn-icon">
                                        <FileText size={18} /> Resume
                                    </a>
                                </div>
                                <div className="hero-socials">
                                    <a href="https://github.com/ttle54" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="GitHub">
                                        <Github size={24} />
                                        <div className="social-glow"></div>
                                    </a>
                                    <a href="https://linkedin.com/in/ttle54" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="LinkedIn">
                                        <Linkedin size={24} />
                                        <div className="social-glow"></div>
                                    </a>
                                </div>
                            </motion.div>
                            <div className="hero-card-glow-bg"></div>
                        </div>
                    </Tilt>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper animate-float"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: "spring", bounce: 0.4 }}
                >
                    <div className="floating-icons">
                        <div className="icon-badge icon-cloud"><Cloud size={32} /></div>
                        <div className="icon-badge icon-terminal"><Terminal size={32} /></div>
                        <div className="icon-badge icon-cpu"><Cpu size={32} /></div>
                    </div>
                    <div className="hero-image-placeholder">
                        <img src="/profile.jpg" alt="Tony Le" className="profile-img" />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
