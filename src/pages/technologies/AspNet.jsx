import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaShieldAlt,
  FaDatabase,
  FaPlug,
  FaChartLine,
  FaServer,
} from "react-icons/fa";

import "../../styles/technologies/tech-aspnet.css";

const features = [
  {
    icon: <FaCode />,
    title: "Enterprise Web Development",
    description:
      "Build reliable and structured web applications using ASP.NET for modern business requirements.",
  },
  {
    icon: <FaCogs />,
    title: "Custom Application Development",
    description:
      "Develop customized business applications designed around specific workflows and operational needs.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Architecture",
    description:
      "Create well-structured applications that can evolve as business requirements and user demand grow.",
  },
  {
    icon: <FaPlug />,
    title: "API Integration",
    description:
      "Connect applications with REST APIs, external services, databases, and third-party platforms.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Applications",
    description:
      "Follow structured development practices to create dependable applications with security in mind.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Integration",
    description:
      "Develop database-driven applications with efficient data management and business logic.",
  },
];

const benefits = [
  "Enterprise-ready application development",
  "Structured and maintainable architecture",
  "Database-driven application support",
  "REST API and third-party integration",
  "Secure application development practices",
  "Scalable solutions for growing businesses",
];

const expertise = [
  "ASP.NET Web Applications",
  "Enterprise Business Applications",
  "REST API Development",
  "Database-Driven Applications",
  "Custom Management Systems",
  "Application Modernization",
];

function ASPNET() {
  const navigate = useNavigate();

  return (
    <div className="aspnet-modern-page">
      {/* HERO */}
      <section className="aspnet-hero">
        <div className="aspnet-hero-glow aspnet-hero-glow-one"></div>
        <div className="aspnet-hero-glow aspnet-hero-glow-two"></div>

        <motion.div
          className="aspnet-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspnet-hero-icon-wrapper">
            <FaCode className="aspnet-hero-icon" />
          </div>

          <p className="aspnet-eyebrow">BACKEND DEVELOPMENT</p>

          <h1 className="aspnet-hero-title">
            ASP.NET Development
          </h1>

          <p className="aspnet-hero-description">
            Build secure, scalable, and reliable web applications
            using ASP.NET development and enterprise-ready
            application architecture.
          </p>

          <div className="aspnet-hero-actions">
            <button
              type="button"
              className="aspnet-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
            </button>

            <button
              type="button"
              className="aspnet-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View All Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO STRIP */}
      <section className="aspnet-intro-strip">
        <div className="aspnet-intro-item">
          <FaServer />
          <div>
            <span>BACKEND</span>
            <strong>Enterprise Solutions</strong>
          </div>
        </div>

        <div className="aspnet-intro-divider"></div>

        <div className="aspnet-intro-item">
          <FaDatabase />
          <div>
            <span>INTEGRATION</span>
            <strong>Data-Driven Applications</strong>
          </div>
        </div>

        <div className="aspnet-intro-divider"></div>

        <div className="aspnet-intro-item">
          <FaChartLine />
          <div>
            <span>FOCUS</span>
            <strong>Scalable Architecture</strong>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="aspnet-features-section">
        <div className="aspnet-container">
          <div className="aspnet-section-heading">
            <p className="aspnet-section-label">WHAT WE OFFER</p>

            <h2>ASP.NET Development Services</h2>

            <p>
              We develop structured ASP.NET solutions focused on
              performance, security, scalability, integration, and
              long-term maintainability.
            </p>
          </div>

          <div className="aspnet-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="aspnet-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="aspnet-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="aspnet-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ASP.NET */}
      <section className="aspnet-about-section">
        <div className="aspnet-container aspnet-about-grid">
          <motion.div
            className="aspnet-about-content"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="aspnet-section-label">WHY ASP.NET</p>

            <h2>
              Build Reliable Digital Solutions for Growing Businesses
            </h2>

            <p>
              ASP.NET provides a structured platform for developing
              modern web applications, business systems, and
              database-driven solutions.
            </p>

            <p>
              Our development approach focuses on creating
              maintainable applications with clean architecture,
              reliable integrations, and the flexibility required
              for changing business needs.
            </p>

            <button
              type="button"
              className="aspnet-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Project
              <span>→</span>
            </button>
          </motion.div>

          <div className="aspnet-benefits">
            {benefits.map((benefit, index) => (
              <motion.div
                className="aspnet-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <span className="aspnet-benefit-check">
                  ✓
                </span>

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="aspnet-expertise-section">
        <div className="aspnet-container">
          <div className="aspnet-section-heading">
            <p className="aspnet-section-label">OUR EXPERTISE</p>

            <h2>ASP.NET Solutions We Build</h2>

            <p>
              From business applications to integrated enterprise
              systems, we build ASP.NET solutions around practical
              business requirements.
            </p>
          </div>

          <div className="aspnet-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="aspnet-expertise-card"
                key={item}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <span className="aspnet-expertise-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="aspnet-expertise-icon">
                  <FaRocket />
                </div>

                <h3>{item}</h3>

                <span className="aspnet-expertise-arrow">
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aspnet-success-section">
        <div className="aspnet-container">
          <motion.div
            className="aspnet-success-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspnet-success-content">
              <p className="aspnet-section-label">
                BUILD WITH CONFIDENCE
              </p>

              <h2>
                Turn Your Business Requirements Into a Powerful
                ASP.NET Solution
              </h2>

              <p>
                Whether you need a business application, API,
                database-driven platform, or enterprise solution,
                our team can help transform your requirements into
                a reliable digital product.
              </p>
            </div>

            <div className="aspnet-success-box">
              <div className="aspnet-success-icon">
                <FaRocket />
              </div>

              <h3>Ready to Build?</h3>

              <p>
                Let's discuss your project requirements and create
                the right ASP.NET solution for your business.
              </p>

              <button
                type="button"
                onClick={() => navigate("/contact")}
              >
                Contact Us
                <span>→</span>
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default ASPNET;