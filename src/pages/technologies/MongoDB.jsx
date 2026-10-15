import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaDatabase,
  FaCode,
  FaServer,
  FaCogs,
  FaCloud,
  FaShieldAlt,
  FaChartLine,
  FaLayerGroup,
  FaRocket,
} from "react-icons/fa";

import "../../styles/technologies/tech-mongodb.css";

const features = [
  {
    icon: <FaDatabase />,
    title: "NoSQL Database Development",
    text: "Develop flexible and scalable applications using MongoDB's document-oriented database architecture.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Document Data Modeling",
    text: "Design efficient document structures that support modern application requirements and evolving data.",
  },
  {
    icon: <FaCode />,
    title: "API & Backend Integration",
    text: "Connect MongoDB seamlessly with modern backend applications, REST APIs, and business systems.",
  },
  {
    icon: <FaCogs />,
    title: "Database Performance Optimization",
    text: "Optimize queries, indexes, collections, and database operations for better application performance.",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Database Solutions",
    text: "Build cloud-ready MongoDB solutions designed for scalability, availability, and reliable application deployment.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Data Management",
    text: "Implement secure database access, authentication, authorization, and data protection practices.",
  },
];

const benefits = [
  "Flexible document-based data structure",
  "Scalable application architecture",
  "Fast development cycles",
  "Efficient handling of evolving data",
  "Easy backend integration",
  "Cloud-ready database solutions",
];

const expertise = [
  {
    icon: <FaDatabase />,
    title: "MongoDB Application Development",
  },
  {
    icon: <FaLayerGroup />,
    title: "Document Database Design",
  },
  {
    icon: <FaCode />,
    title: "REST API Integration",
  },
  {
    icon: <FaServer />,
    title: "Data Migration & Integration",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics & Reporting",
  },
  {
    icon: <FaCloud />,
    title: "Cloud Database Solutions",
  },
];

const MongoDB = () => {
  const navigate = useNavigate();

  return (
    <main className="mongodb-page">
      {/* HERO */}
      <section className="mongodb-hero">
        <div className="mongodb-grid"></div>
        <div className="mongodb-glow mongodb-glow-one"></div>
        <div className="mongodb-glow mongodb-glow-two"></div>

        <div className="mongodb-container">
          <motion.div
            className="mongodb-hero-content"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mongodb-icon-box">
              <FaDatabase />
            </div>

            <span className="mongodb-eyebrow">
              DATABASE TECHNOLOGY
            </span>

            <h1>MongoDB Development</h1>

            <p>
              Build flexible, scalable, and high-performance applications
              with modern NoSQL database solutions powered by MongoDB.
            </p>

            <div className="mongodb-hero-buttons">
              <button
                className="mongodb-btn mongodb-btn-primary"
                onClick={() => navigate("/contact")}
              >
                Start Your Project
                <FaRocket />
              </button>

              <button
                className="mongodb-btn mongodb-btn-secondary"
                onClick={() => navigate("/technologies")}
              >
                Explore Technologies
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="mongodb-intro">
        <div className="mongodb-container">
          <div className="mongodb-intro-card">
            <div className="mongodb-intro-item">
              <FaDatabase />
              <div>
                <strong>NoSQL</strong>
                <span>Flexible Data</span>
              </div>
            </div>

            <div className="mongodb-divider"></div>

            <div className="mongodb-intro-item">
              <FaRocket />
              <div>
                <strong>Scalable</strong>
                <span>Application Growth</span>
              </div>
            </div>

            <div className="mongodb-divider"></div>

            <div className="mongodb-intro-item">
              <FaCloud />
              <div>
                <strong>Cloud Ready</strong>
                <span>Modern Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mongodb-features">
        <div className="mongodb-container">
          <motion.div
            className="mongodb-section-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>WHAT WE BUILD</span>
            <h2>MongoDB solutions built for modern applications</h2>
            <p>
              We create flexible database solutions that support
              performance, scalability, and evolving business requirements.
            </p>
          </motion.div>

          <div className="mongodb-feature-grid">
            {features.map((feature, index) => (
              <motion.div
                className="mongodb-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="mongodb-feature-icon">
                  {feature.icon}
                </div>

                <h3>{feature.title}</h3>

                <p>{feature.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mongodb-benefits">
        <div className="mongodb-container">
          <div className="mongodb-benefits-layout">
            <motion.div
              className="mongodb-benefits-content"
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="mongodb-section-label">
                WHY MONGODB
              </span>

              <h2>
                Flexible data architecture for
                <span> growing digital products.</span>
              </h2>

              <p>
                MongoDB provides a flexible document-based approach that
                makes it easier to develop, scale, and maintain modern
                applications with changing data requirements.
              </p>
            </motion.div>

            <motion.div
              className="mongodb-benefits-list"
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {benefits.map((benefit, index) => (
                <div className="mongodb-benefit-item" key={benefit}>
                  <div className="mongodb-benefit-number">
                    0{index + 1}
                  </div>

                  <div className="mongodb-benefit-check">
                    <FaShieldAlt />
                  </div>

                  <span>{benefit}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="mongodb-expertise">
        <div className="mongodb-container">
          <motion.div
            className="mongodb-section-heading mongodb-expertise-heading"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span>OUR EXPERTISE</span>
            <h2>MongoDB development capabilities</h2>
          </motion.div>

          <div className="mongodb-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="mongodb-expertise-card"
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <div className="mongodb-expertise-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <span>Explore capability</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mongodb-cta">
        <div className="mongodb-cta-glow"></div>

        <div className="mongodb-container">
          <motion.div
            className="mongodb-cta-content"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span>LET'S BUILD SOMETHING BETTER</span>

            <h2>Ready to build your MongoDB solution?</h2>

            <p>
              Let's create a secure, scalable, and high-performance
              database solution for your next digital product.
            </p>

            <button
              className="mongodb-cta-button"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Project
              <FaRocket />
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default MongoDB;