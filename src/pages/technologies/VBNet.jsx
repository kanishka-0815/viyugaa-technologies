import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaDesktop,
  FaDatabase,
  FaLayerGroup,
  FaTools,
  FaShieldAlt,
  FaRocket,
  FaServer,
} from "react-icons/fa";

import "../../styles/technologies/tech-vbnet.css";

const features = [
  {
    icon: <FaCode />,
    title: "Business Application Development",
    description:
      "Develop practical and reliable VB.NET applications designed around specific business processes and requirements.",
  },
  {
    icon: <FaDesktop />,
    title: "Windows Applications",
    description:
      "Create desktop applications with structured interfaces and functionality for day-to-day business operations.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Integration",
    description:
      "Connect applications with databases to manage business information and support data-driven workflows.",
  },
  {
    icon: <FaCogs />,
    title: "Custom Application Solutions",
    description:
      "Build customized software solutions that address unique operational requirements and business workflows.",
  },
  {
    icon: <FaTools />,
    title: "Application Enhancement",
    description:
      "Improve existing VB.NET applications with new functionality, interface improvements, and maintenance support.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Structured Architecture",
    description:
      "Develop organized applications with maintainable code structures that support future enhancements.",
  },
];

const benefits = [
  "Suitable for business-focused applications",
  "Structured object-oriented development",
  "Reliable database connectivity",
  "Easy integration with existing .NET systems",
  "Maintainable application architecture",
  "Support for application enhancement and modernization",
];

const expertise = [
  "VB.NET Business Applications",
  "Windows Desktop Applications",
  "Database-Driven Solutions",
  "Custom Management Systems",
  "Application Maintenance",
  "Legacy Application Enhancement",
];

function VBNet() {
  const navigate = useNavigate();

  return (
    <div className="vbnet-modern-page">
      {/* HERO */}
      <section className="vbnet-hero">
        <div className="vbnet-hero-glow vbnet-hero-glow-one"></div>
        <div className="vbnet-hero-glow vbnet-hero-glow-two"></div>

        <motion.div
          className="vbnet-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="vbnet-hero-icon-wrapper">
            <FaCode className="vbnet-hero-icon" />
          </div>

          <p className="vbnet-eyebrow">
            BACKEND DEVELOPMENT
          </p>

          <h1 className="vbnet-hero-title">
            VB.NET Development
          </h1>

          <p className="vbnet-hero-description">
            Build dependable business applications and database-driven
            solutions using VB.NET with structured and maintainable
            development practices.
          </p>

          <div className="vbnet-hero-actions">
            <button
              type="button"
              className="vbnet-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
            </button>

            <button
              type="button"
              className="vbnet-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View All Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO STRIP */}
      <section className="vbnet-intro-strip">
        <div className="vbnet-intro-item">
          <FaDesktop />
          <div>
            <span>APPLICATIONS</span>
            <strong>Business Software</strong>
          </div>
        </div>

        <div className="vbnet-intro-divider"></div>

        <div className="vbnet-intro-item">
          <FaDatabase />
          <div>
            <span>DATA</span>
            <strong>Database Integration</strong>
          </div>
        </div>

        <div className="vbnet-intro-divider"></div>

        <div className="vbnet-intro-item">
          <FaTools />
          <div>
            <span>SUPPORT</span>
            <strong>Application Enhancement</strong>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="vbnet-features-section">
        <div className="vbnet-container">
          <div className="vbnet-section-heading">
            <p className="vbnet-section-label">
              WHAT WE OFFER
            </p>

            <h2>VB.NET Development Services</h2>

            <p>
              We create practical VB.NET solutions focused on
              business functionality, database integration,
              maintainability, and reliable application performance.
            </p>
          </div>

          <div className="vbnet-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="vbnet-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="vbnet-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="vbnet-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VB.NET */}
      <section className="vbnet-about-section">
        <div className="vbnet-container vbnet-about-grid">
          <motion.div
            className="vbnet-about-content"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="vbnet-section-label">
              WHY VB.NET
            </p>

            <h2>
              Practical Software Solutions for Business Operations
            </h2>

            <p>
              VB.NET can be used to develop structured business
              applications, desktop software, and database-driven
              systems that support everyday organizational
              processes.
            </p>

            <p>
              Our approach focuses on clean application structure,
              reliable database connectivity, easy maintenance, and
              enhancements that align with existing business
              workflows.
            </p>

            <button
              type="button"
              className="vbnet-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Project
              <span>→</span>
            </button>
          </motion.div>

          <div className="vbnet-benefits">
            {benefits.map((benefit, index) => (
              <motion.div
                className="vbnet-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <span className="vbnet-benefit-check">
                  ✓
                </span>

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="vbnet-expertise-section">
        <div className="vbnet-container">
          <div className="vbnet-section-heading">
            <p className="vbnet-section-label">
              OUR EXPERTISE
            </p>

            <h2>VB.NET Solutions We Build</h2>

            <p>
              We develop and enhance VB.NET applications according
              to business workflows, operational requirements, and
              existing software environments.
            </p>
          </div>

          <div className="vbnet-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="vbnet-expertise-card"
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
                <span className="vbnet-expertise-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="vbnet-expertise-icon">
                  <FaCogs />
                </div>

                <h3>{item}</h3>

                <span className="vbnet-expertise-arrow">
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="vbnet-success-section">
        <div className="vbnet-container">
          <motion.div
            className="vbnet-success-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="vbnet-success-content">
              <p className="vbnet-section-label">
                BUSINESS APPLICATIONS
              </p>

              <h2>
                Build Reliable Software Around Your Business
                Processes
              </h2>

              <p>
                From desktop applications to database-driven
                business systems, we can help develop, improve, and
                maintain VB.NET solutions that support your
                organization's operations.
              </p>
            </div>

            <div className="vbnet-success-box">
              <div className="vbnet-success-icon">
                <FaRocket />
              </div>

              <h3>Ready to Build?</h3>

              <p>
                Let's discuss your application requirements and
                explore the right VB.NET solution for your business.
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

export default VBNet;