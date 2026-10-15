import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaCloud,
  FaDatabase,
  FaPlug,
  FaShieldAlt,
  FaServer,
} from "react-icons/fa";

import "../../styles/technologies/tech-aspnetcore.css";

const features = [
  {
    icon: <FaCode />,
    title: "Modern Web Development",
    description:
      "Build modern and maintainable web applications using ASP.NET Core and structured development practices.",
  },
  {
    icon: <FaRocket />,
    title: "High Performance",
    description:
      "Develop responsive applications and APIs designed for fast execution and efficient resource usage.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Architecture",
    description:
      "Create flexible application architectures that can support growing users, features, and business requirements.",
  },
  {
    icon: <FaPlug />,
    title: "REST API Development",
    description:
      "Develop reliable APIs for web applications, mobile applications, third-party integrations, and business platforms.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud-Ready Solutions",
    description:
      "Build applications designed to work effectively with modern cloud infrastructure and deployment environments.",
  },
  {
    icon: <FaDatabase />,
    title: "Database Integration",
    description:
      "Connect applications with databases and external services to create complete data-driven solutions.",
  },
];

const benefits = [
  "Cross-platform application development",
  "High-performance web applications and APIs",
  "Scalable and modular architecture",
  "Cloud-ready application development",
  "Secure backend development practices",
  "Flexible database and service integration",
];

const expertise = [
  "ASP.NET Core Web Applications",
  "RESTful API Development",
  "Enterprise Backend Systems",
  "Cloud-Ready Applications",
  "Database-Driven Platforms",
  "Microservices-Based Solutions",
];

function ASPNETCore() {
  const navigate = useNavigate();

  return (
    <div className="aspnetcore-modern-page">
      {/* HERO */}
      <section className="aspnetcore-hero">
        <div className="aspnetcore-hero-glow aspnetcore-hero-glow-one"></div>
        <div className="aspnetcore-hero-glow aspnetcore-hero-glow-two"></div>

        <motion.div
          className="aspnetcore-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="aspnetcore-hero-icon-wrapper">
            <FaCode className="aspnetcore-hero-icon" />
          </div>

          <p className="aspnetcore-eyebrow">
            BACKEND DEVELOPMENT
          </p>

          <h1 className="aspnetcore-hero-title">
            ASP.NET Core Development
          </h1>

          <p className="aspnetcore-hero-description">
            Build high-performance, scalable, and modern web
            applications and APIs using ASP.NET Core.
          </p>

          <div className="aspnetcore-hero-actions">
            <button
              type="button"
              className="aspnetcore-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
            </button>

            <button
              type="button"
              className="aspnetcore-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View All Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO STRIP */}
      <section className="aspnetcore-intro-strip">
        <div className="aspnetcore-intro-item">
          <FaServer />
          <div>
            <span>PLATFORM</span>
            <strong>Modern Backend</strong>
          </div>
        </div>

        <div className="aspnetcore-intro-divider"></div>

        <div className="aspnetcore-intro-item">
          <FaRocket />
          <div>
            <span>PERFORMANCE</span>
            <strong>High Performance</strong>
          </div>
        </div>

        <div className="aspnetcore-intro-divider"></div>

        <div className="aspnetcore-intro-item">
          <FaCloud />
          <div>
            <span>DEPLOYMENT</span>
            <strong>Cloud Ready</strong>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="aspnetcore-features-section">
        <div className="aspnetcore-container">
          <div className="aspnetcore-section-heading">
            <p className="aspnetcore-section-label">
              WHAT WE OFFER
            </p>

            <h2>ASP.NET Core Development Services</h2>

            <p>
              We create modern ASP.NET Core solutions focused on
              performance, scalability, integration, security, and
              long-term maintainability.
            </p>
          </div>

          <div className="aspnetcore-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="aspnetcore-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="aspnetcore-feature-number">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="aspnetcore-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY ASP.NET CORE */}
      <section className="aspnetcore-about-section">
        <div className="aspnetcore-container aspnetcore-about-grid">
          <motion.div
            className="aspnetcore-about-content"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="aspnetcore-section-label">
              WHY ASP.NET CORE
            </p>

            <h2>
              Modern Backend Technology for Scalable Applications
            </h2>

            <p>
              ASP.NET Core provides a modern development platform
              for building web applications, APIs, enterprise
              systems, and cloud-ready digital solutions.
            </p>

            <p>
              Our development approach focuses on clean
              architecture, efficient application performance,
              reliable integrations, and scalable solutions that
              can adapt to evolving business requirements.
            </p>

            <button
              type="button"
              className="aspnetcore-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Project
              <span>→</span>
            </button>
          </motion.div>

          <div className="aspnetcore-benefits">
            {benefits.map((benefit, index) => (
              <motion.div
                className="aspnetcore-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <span className="aspnetcore-benefit-check">
                  ✓
                </span>

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="aspnetcore-expertise-section">
        <div className="aspnetcore-container">
          <div className="aspnetcore-section-heading">
            <p className="aspnetcore-section-label">
              OUR EXPERTISE
            </p>

            <h2>ASP.NET Core Solutions We Build</h2>

            <p>
              From high-performance APIs to enterprise platforms,
              we develop ASP.NET Core solutions around real
              business and technology requirements.
            </p>
          </div>

          <div className="aspnetcore-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="aspnetcore-expertise-card"
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
                <span className="aspnetcore-expertise-index">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className="aspnetcore-expertise-icon">
                  <FaCogs />
                </div>

                <h3>{item}</h3>

                <span className="aspnetcore-expertise-arrow">
                  →
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aspnetcore-success-section">
        <div className="aspnetcore-container">
          <motion.div
            className="aspnetcore-success-inner"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspnetcore-success-content">
              <p className="aspnetcore-section-label">
                BUILD FOR THE FUTURE
              </p>

              <h2>
                Create High-Performance Applications With
                ASP.NET Core
              </h2>

              <p>
                Whether you need a scalable API, enterprise
                application, cloud-ready platform, or modern
                backend system, our team can help turn your
                requirements into a reliable solution.
              </p>
            </div>

            <div className="aspnetcore-success-box">
              <div className="aspnetcore-success-icon">
                <FaRocket />
              </div>

              <h3>Ready to Build?</h3>

              <p>
                Let's discuss your requirements and explore how
                ASP.NET Core can support your next digital product.
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

export default ASPNETCore;