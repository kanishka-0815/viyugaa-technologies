import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaDatabase,
  FaGlobe,
  FaShoppingCart,
  FaPlug,
  FaRocket,
  FaServer,
  FaLayerGroup,
} from "react-icons/fa";

import "../../styles/technologies/tech-php.css";

const PHP = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaGlobe />,
      title: "Dynamic Web Applications",
      text: "Build dynamic and interactive web applications tailored to business and customer requirements.",
    },
    {
      icon: <FaCode />,
      title: "Custom PHP Development",
      text: "Develop customized PHP applications with clean, structured, and maintainable code.",
    },
    {
      icon: <FaDatabase />,
      title: "Database-Driven Applications",
      text: "Create reliable applications that efficiently manage, store, and retrieve business data.",
    },
    {
      icon: <FaLayerGroup />,
      title: "CMS Development",
      text: "Develop content-driven platforms and customized solutions for flexible website management.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      text: "Connect PHP applications with REST APIs, external services, and third-party platforms.",
    },
    {
      icon: <FaShoppingCart />,
      title: "E-Commerce Solutions",
      text: "Build scalable online stores and business platforms with secure application workflows.",
    },
  ];

  const benefits = [
    "Flexible web application development",
    "Reliable database integration",
    "Rapid application development",
    "Broad hosting compatibility",
    "API and third-party integration",
    "Cost-effective application maintenance",
  ];

  const expertise = [
    "PHP Web Applications",
    "Custom PHP Development",
    "E-Commerce Platforms",
    "CMS-Based Websites",
    "REST API Integration",
    "Business Portals",
  ];

  return (
    <div className="php-page">
      {/* HERO */}
      <section className="php-hero">
        <div className="php-grid"></div>

        <div className="php-hero-glow php-glow-one"></div>
        <div className="php-hero-glow php-glow-two"></div>

        <div className="php-hero-content">
          <motion.div
            className="php-icon-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaCode />
          </motion.div>

          <motion.span
            className="php-eyebrow"
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
            PHP Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Build dynamic, scalable, and database-driven web applications
            using PHP and modern web development practices.
          </motion.p>

          <motion.div
            className="php-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              className="php-btn php-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="php-btn php-btn-secondary"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="php-intro">
        <div className="php-stat">
          <FaCode />
          <div>
            <strong>Dynamic</strong>
            <span>Web Development</span>
          </div>
        </div>

        <div className="php-stat">
          <FaDatabase />
          <div>
            <strong>Database</strong>
            <span>Driven Solutions</span>
          </div>
        </div>

        <div className="php-stat">
          <FaRocket />
          <div>
            <strong>Scalable</strong>
            <span>Applications</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="php-section php-features-section">
        <div className="php-section-heading">
          <span>WHAT WE BUILD</span>

          <h2>Professional PHP Development Solutions</h2>

          <p>
            We develop reliable PHP solutions for websites, web applications,
            business platforms, e-commerce systems, and database-driven
            applications.
          </p>
        </div>

        <div className="php-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="php-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="php-feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="php-benefits-section">
        <div className="php-benefits-container">
          <motion.div
            className="php-benefits-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>WHY PHP</span>

            <h2>
              Flexible technology
              <br />
              for modern web solutions
            </h2>

            <p>
              PHP provides a practical foundation for developing dynamic
              websites, business applications, portals, e-commerce platforms,
              and database-driven systems.
            </p>

            <button
              className="php-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Requirements <FaPlug />
            </button>
          </motion.div>

          <div className="php-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="php-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="php-check">✓</div>

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="php-section php-expertise-section">
        <div className="php-section-heading">
          <span>OUR EXPERTISE</span>

          <h2>PHP Solutions for Growing Businesses</h2>

          <p>
            Our PHP development expertise helps businesses create dependable
            digital platforms that support their operational and customer
            requirements.
          </p>
        </div>

        <div className="php-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="php-expertise-card"
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
      <section className="php-cta">
        <div className="php-cta-content">
          <span>LET'S BUILD SOMETHING GREAT</span>

          <h2>Ready to build your PHP application?</h2>

          <p>
            Let's create a reliable, scalable, and business-focused web
            solution tailored to your requirements.
          </p>

          <button
            className="php-cta-button"
            onClick={() => navigate("/contact")}
          >
            Get Started <FaRocket />
          </button>
        </div>
      </section>
    </div>
  );
};

export default PHP;