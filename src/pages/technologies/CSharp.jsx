import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaServer,
  FaDatabase,
  FaCloud,
  FaLayerGroup,
  FaRocket,
  FaShieldAlt,
  FaPlug,
} from "react-icons/fa";

import "../../styles/technologies/tech-csharp.css";

const CSharp = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaCode />,
      title: "Enterprise Application Development",
      text: "Develop robust and maintainable enterprise applications using modern C# development practices.",
    },
    {
      icon: <FaServer />,
      title: "Web API Development",
      text: "Build secure and scalable REST APIs for web, mobile, and business applications.",
    },
    {
      icon: <FaCogs />,
      title: "Object-Oriented Architecture",
      text: "Create structured applications using powerful object-oriented programming principles.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      text: "Connect applications with relational and other databases for reliable data management.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Application Development",
      text: "Build modern applications that can integrate with cloud platforms and services.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Business Software Solutions",
      text: "Develop customized software solutions for business workflows and operational requirements.",
    },
  ];

  const benefits = [
    "Strong object-oriented development",
    "Scalable application architecture",
    "Reliable API development",
    "Database and service integration",
    "Cloud-ready application capabilities",
    "Maintainable enterprise solutions",
  ];

  const expertise = [
    "C# Web Applications",
    "REST API Development",
    "Enterprise Software Systems",
    "Database-Driven Applications",
    "Cloud-Integrated Applications",
    "Custom Business Platforms",
  ];

  return (
    <div className="csharp-page">
      {/* HERO */}
      <section className="csharp-hero">
        <div className="csharp-grid"></div>

        <div className="csharp-hero-glow csharp-glow-one"></div>
        <div className="csharp-hero-glow csharp-glow-two"></div>

        <div className="csharp-hero-content">
          <motion.div
            className="csharp-icon-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaCode />
          </motion.div>

          <motion.span
            className="csharp-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            BACKEND DEVELOPMENT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            C# Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Build secure, scalable, and high-performance applications using C#
            and modern .NET development practices.
          </motion.p>

          <motion.div
            className="csharp-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              className="csharp-btn csharp-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="csharp-btn csharp-btn-secondary"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="csharp-intro">
        <div className="csharp-stat">
          <FaCode />
          <div>
            <strong>Modern</strong>
            <span>Development</span>
          </div>
        </div>

        <div className="csharp-stat">
          <FaRocket />
          <div>
            <strong>Scalable</strong>
            <span>Architecture</span>
          </div>
        </div>

        <div className="csharp-stat">
          <FaShieldAlt />
          <div>
            <strong>Secure</strong>
            <span>Applications</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="csharp-section csharp-features-section">
        <div className="csharp-section-heading">
          <span>WHAT WE BUILD</span>
          <h2>Powerful C# Development Solutions</h2>
          <p>
            We develop reliable software solutions using C# for modern
            applications, APIs, enterprise systems, and business platforms.
          </p>
        </div>

        <div className="csharp-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="csharp-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="csharp-feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="csharp-benefits-section">
        <div className="csharp-benefits-container">
          <motion.div
            className="csharp-benefits-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>WHY C#</span>

            <h2>
              Built for reliable
              <br />
              software development
            </h2>

            <p>
              C# provides a strong foundation for developing structured,
              scalable, and secure applications across web, enterprise,
              cloud, and business environments.
            </p>

            <button
              className="csharp-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Requirements <FaPlug />
            </button>
          </motion.div>

          <div className="csharp-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="csharp-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="csharp-check">✓</div>
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="csharp-section csharp-expertise-section">
        <div className="csharp-section-heading">
          <span>OUR EXPERTISE</span>
          <h2>C# Solutions for Modern Businesses</h2>
          <p>
            From backend systems to enterprise applications, our C# expertise
            helps businesses build dependable and scalable technology
            solutions.
          </p>
        </div>

        <div className="csharp-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="csharp-expertise-card"
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <FaCogs />
              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="csharp-cta">
        <div className="csharp-cta-content">
          <span>LET'S BUILD SOMETHING GREAT</span>

          <h2>Ready to build your C# application?</h2>

          <p>
            Let's create a secure, scalable, and business-focused solution
            tailored to your requirements.
          </p>

          <button
            className="csharp-cta-button"
            onClick={() => navigate("/contact")}
          >
            Get Started <FaRocket />
          </button>
        </div>
      </section>
    </div>
  );
};

export default CSharp;