import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaServer,
  FaDatabase,
  FaRocket,
  FaPlug,
  FaLayerGroup,
  FaCloud,
  FaBolt,
} from "react-icons/fa";

import "../../styles/technologies/tech-nodejs.css";

const NodeJS = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaServer />,
      title: "REST API Development",
      text: "Build fast, secure, and scalable REST APIs for web, mobile, and business applications.",
    },
    {
      icon: <FaBolt />,
      title: "Real-Time Applications",
      text: "Develop responsive real-time applications for communication, notifications, collaboration, and live data.",
    },
    {
      icon: <FaRocket />,
      title: "Scalable Backend Systems",
      text: "Create high-performance backend systems designed to support growing users and business requirements.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      text: "Connect NodeJS applications with databases and build reliable data-driven backend services.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Microservices",
      text: "Design modular backend services that can be independently developed, deployed, and scaled.",
    },
    {
      icon: <FaCode />,
      title: "Full-Stack JavaScript",
      text: "Build complete applications using JavaScript across both frontend and backend environments.",
    },
  ];

  const benefits = [
    "Event-driven backend architecture",
    "Fast and efficient API development",
    "Real-time application capabilities",
    "Scalable backend services",
    "Full-stack JavaScript workflows",
    "Easy third-party service integration",
  ];

  const expertise = [
    "NodeJS Web Applications",
    "REST API Development",
    "Real-Time Platforms",
    "Microservices",
    "Database-Driven Backends",
    "Full-Stack JavaScript Applications",
  ];

  return (
    <div className="nodejs-page">
      {/* HERO */}
      <section className="nodejs-hero">
        <div className="nodejs-grid"></div>

        <div className="nodejs-hero-glow nodejs-glow-one"></div>
        <div className="nodejs-hero-glow nodejs-glow-two"></div>

        <div className="nodejs-hero-content">
          <motion.div
            className="nodejs-icon-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaCode />
          </motion.div>

          <motion.span
            className="nodejs-eyebrow"
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
            NodeJS Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Build fast, scalable, and real-time backend systems using NodeJS
            and modern JavaScript development practices.
          </motion.p>

          <motion.div
            className="nodejs-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              className="nodejs-btn nodejs-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="nodejs-btn nodejs-btn-secondary"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="nodejs-intro">
        <div className="nodejs-stat">
          <FaBolt />
          <div>
            <strong>Fast</strong>
            <span>Backend Development</span>
          </div>
        </div>

        <div className="nodejs-stat">
          <FaRocket />
          <div>
            <strong>Scalable</strong>
            <span>Backend Systems</span>
          </div>
        </div>

        <div className="nodejs-stat">
          <FaPlug />
          <div>
            <strong>Connected</strong>
            <span>API Integrations</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="nodejs-section nodejs-features-section">
        <div className="nodejs-section-heading">
          <span>WHAT WE BUILD</span>

          <h2>Modern NodeJS Development Solutions</h2>

          <p>
            We develop high-performance backend solutions using NodeJS for
            APIs, real-time platforms, scalable services, and full-stack
            JavaScript applications.
          </p>
        </div>

        <div className="nodejs-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="nodejs-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="nodejs-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="nodejs-benefits-section">
        <div className="nodejs-benefits-container">
          <motion.div
            className="nodejs-benefits-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>WHY NODEJS</span>

            <h2>
              Fast technology
              <br />
              for scalable backends
            </h2>

            <p>
              NodeJS enables businesses to create efficient backend services,
              real-time applications, APIs, and scalable platforms using a
              JavaScript-based development environment.
            </p>

            <button
              className="nodejs-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Requirements <FaPlug />
            </button>
          </motion.div>

          <div className="nodejs-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="nodejs-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="nodejs-check">✓</div>

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="nodejs-section nodejs-expertise-section">
        <div className="nodejs-section-heading">
          <span>OUR EXPERTISE</span>

          <h2>NodeJS Solutions for Modern Businesses</h2>

          <p>
            Our NodeJS development expertise helps businesses build flexible,
            connected, and scalable digital platforms for modern workflows.
          </p>
        </div>

        <div className="nodejs-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="nodejs-expertise-card"
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
      <section className="nodejs-cta">
        <div className="nodejs-cta-content">
          <span>LET'S BUILD SOMETHING GREAT</span>

          <h2>Ready to build your NodeJS application?</h2>

          <p>
            Let's create a fast, scalable, and reliable backend solution
            tailored to your business requirements.
          </p>

          <button
            className="nodejs-cta-button"
            onClick={() => navigate("/contact")}
          >
            Get Started <FaRocket />
          </button>
        </div>
      </section>
    </div>
  );
};

export default NodeJS;