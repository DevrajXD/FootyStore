import React from 'react';
import './aboutSection.css'; // Make sure to create and link this CSS file
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const About = () => {
    return (
        <section className="about-section">
            <div className="about-container">
                <h2>About Me</h2>
                <p>
                    I'm a passionate developer with experience in front-end and back-end technologies,
                    coupled with a strong passion for cybersecurity
                    I love building scalable web applications and exploring new technologies.
                </p>
                <div className="social-icons">
                    <a href="https://github.com/devrajXD" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/devr4j" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default About;
