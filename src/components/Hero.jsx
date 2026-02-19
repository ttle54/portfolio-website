import { Github, Linkedin, Cloud, Terminal, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
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
                    <motion.p variants={itemVariants} className="hero-subtitle">Hello, I'm</motion.p>
                    <motion.h1 variants={itemVariants} className="hero-title">Tony Le</motion.h1>
                    <motion.h2 variants={itemVariants} className="hero-role text-gradient">Cloud Engineer</motion.h2>
                    <motion.p variants={itemVariants} className="hero-desc">
                        Empowering scalable, secure infrastructure with 5+ years specializing in AWS, Terraform, automation, and expanding into Generative AI.
                    </motion.p>
                    <motion.div variants={itemVariants} className="hero-cta">
                        <a href="#contact" className="btn btn-primary">Hire Me</a>
                        <a href="https://github.com/tonyle" target="_blank" rel="noreferrer" className="btn btn-outline btn-icon">
                            <Github size={18} /> GitHub
                        </a>
                        <a href="https://linkedin.com/in/tonyle" target="_blank" rel="noreferrer" className="btn btn-outline btn-icon">
                            <Linkedin size={18} /> LinkedIn
                        </a>
                    </motion.div>
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
                        {/* Real picture goes here */}
                        <span className="profile-icon">👨‍💻</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
