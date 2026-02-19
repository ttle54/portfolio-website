import { Award } from 'lucide-react';
import './Certifications.css';

const Certifications = () => {
    const certs = [
        {
            name: "AWS Certified Solutions Architect – Associate",
            issuer: "Amazon Web Services",
            date: "2021",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "AWS Certified Developer – Associate",
            issuer: "Amazon Web Services",
            date: "2020",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "HashiCorp Certified: Terraform Associate",
            issuer: "HashiCorp",
            date: "2022",
            icon: <Award size={40} className="cert-icon-svg" />
        },
        {
            name: "AWS Certified AI Practitioner (AIF-C01)",
            issuer: "Amazon Web Services",
            date: "In Progress",
            icon: <Award size={40} className="cert-icon-svg" />
        }
    ];

    return (
        <section id="certifications" className="certifications">
            <div className="container">
                <h2 className="section-title">Certifications</h2>
                <div className="certs-grid">
                    {certs.map((cert, index) => (
                        <div key={index} className="cert-card glass-panel">
                            <div className="cert-icon">{cert.icon}</div>
                            <div className="cert-info">
                                <h3>{cert.name}</h3>
                                <p>{cert.issuer}</p>
                                <span className="cert-date text-gradient">{cert.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
