import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-container">
                <div className="footer-content">
                    <h2 className="footer-title">Let's Connect</h2>
                    <p className="footer-desc">
                        Currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>
                    <a href="mailto:hello@example.com" className="btn btn-primary footer-btn">Say Hello</a>
                </div>

                <div className="footer-bottom">
                    <div className="social-links">
                        <a href="https://github.com/tonyle" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://linkedin.com/in/tonyle" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                    <p className="copyright">
                        &copy; {new Date().getFullYear()} Tony Le. Built with React & Vanilla CSS.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
