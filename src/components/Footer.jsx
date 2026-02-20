import { motion } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <motion.div
                    className="footer-content"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                >
                    <Tilt
                        tiltMaxAngleX={5}
                        tiltMaxAngleY={5}
                        perspective={1000}
                        scale={1.02}
                        transitionSpeed={2000}
                        gyroscope={true}
                    >
                        <div className="contact-card glass-panel">
                            <div className="contact-glow-bg"></div>
                            <h2 className="footer-title">Let's Connect</h2>
                            <p className="footer-desc">
                                Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                            <a href="mailto:tonyle9493@gmail.com" className="btn-contact-neon">
                                <span className="btn-text">Say Hello</span>
                                <Send size={18} className="btn-icon-send" />
                                <div className="btn-glow-layer"></div>
                            </a>
                        </div>
                    </Tilt>
                </motion.div>

                <div className="footer-bottom">
                    <motion.div
                        className="social-links-animated"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <a href="https://github.com/ttle54" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="GitHub">
                            <Github size={24} />
                            <div className="social-glow"></div>
                        </a>
                        <a href="https://linkedin.com/in/ttle54" target="_blank" rel="noreferrer" className="social-icon-wrapper" aria-label="LinkedIn">
                            <Linkedin size={24} />
                            <div className="social-glow"></div>
                        </a>
                        <a href="mailto:tonyle9493@gmail.com" className="social-icon-wrapper" aria-label="Email">
                            <Mail size={24} />
                            <div className="social-glow"></div>
                        </a>
                    </motion.div>
                    <motion.p
                        className="copyright"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        &copy; {new Date().getFullYear()} Tony Le. Built with React & Vanilla CSS.
                    </motion.p>
                </div>
            </div>
            {/* Background grid effect for the footer */}
            <div className="footer-grid-bg"></div>
        </footer>
    );
};

export default Footer;
