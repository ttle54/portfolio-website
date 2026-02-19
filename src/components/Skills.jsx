import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = () => {
    const skillData = [
        { name: 'AWS', level: 95 },
        { name: 'Terraform', level: 90 },
        { name: 'CI/CD (Jenkins/GH)', level: 85 },
        { name: 'Linux/Bash', level: 85 },
        { name: 'Ansible', level: 80 },
        { name: 'Splunk/Dynatrace', level: 75 },
        { name: 'Docker', level: 80 },
        { name: 'GenAI (AIF-C01)', level: 70 },
    ];

    const customTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip glass-panel">
                    <p className="label">{`${label} : ${payload[0].value}% Proficiency`}</p>
                </div>
            );
        }
        return null;
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
                    Technical Proficiency
                </motion.h2>
                <motion.div
                    className="skills-chart-container glass-panel"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
                >
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart data={skillData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                            <XAxis type="number" hide />
                            <YAxis
                                dataKey="name"
                                type="category"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: 'var(--text-secondary)', fontSize: 14 }}
                                width={150}
                            />
                            <Tooltip cursor={{ fill: 'rgba(255,255,255,0.05)' }} content={customTooltip} />
                            <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
                                {skillData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={`var(--accent-primary)`} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
