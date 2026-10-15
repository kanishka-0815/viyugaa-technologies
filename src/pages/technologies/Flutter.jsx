import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaCloud,
  FaCogs,
  FaDatabase,
  FaPaintBrush,
  FaPlug,
} from "react-icons/fa";

import "../../styles/technologies/tech-flutter.css";

const FlutterDevelopers = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform App Development",
      text: "Build high-quality mobile applications for Android and iOS using a single Flutter codebase.",
    },
    {
      icon: <FaPaintBrush />,
      title: "Modern UI Development",
      text: "Create attractive, responsive, and customized mobile interfaces using Flutter's flexible UI components.",
    },
    {
      icon: <FaRocket />,
      title: "High-Performance Apps",
      text: "Develop smooth and responsive applications designed for reliable performance across devices.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      text: "Connect mobile applications with REST APIs, backend services, payment systems, and third-party platforms.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      text: "Build data-driven mobile applications with reliable database and cloud service integration.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud-Connected Applications",
      text: "Develop mobile solutions integrated with cloud services for authentication, storage, notifications, and more.",
    },
  ];

  const benefits = [
    "Single codebase for multiple platforms",
    "Consistent user experience across devices",
    "Fast and efficient development",
    "Customizable user interfaces",
    "Reliable API and backend integration",
    "Scalable mobile application architecture",
  ];

  const expertise = [
    "Flutter Mobile Applications",
    "Cross-Platform Development",
    "Custom UI Development",
    "REST API Integration",
    "E-Commerce Mobile Apps",
    "Business & Enterprise Apps",
  ];

  return (
    <div className="flutter-page">
      {/* HERO */}
      <section className="flutter-hero">
        <div className="flutter-grid"></div>

        <div className="flutter-hero-glow flutter-glow-one"></div>
        <div className="flutter-hero-glow flutter-glow-two"></div>

        <div className="flutter-hero-content">
          <motion.div
            className="flutter-icon-box"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <FaMobileAlt />
          </motion.div>

          <motion.span
            className="flutter-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            MOBILE APP DEVELOPMENT
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            Flutter Development
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
          >
            Build beautiful, high-performance, and scalable mobile
            applications for Android and iOS using Flutter.
          </motion.p>

          <motion.div
            className="flutter-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <button
              className="flutter-btn flutter-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="flutter-btn flutter-btn-secondary"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="flutter-intro">
        <div className="flutter-stat">
          <FaMobileAlt />

          <div>
            <strong>Cross-Platform</strong>
            <span>Mobile Apps</span>
          </div>
        </div>

        <div className="flutter-stat">
          <FaPaintBrush />

          <div>
            <strong>Modern</strong>
            <span>User Interfaces</span>
          </div>
        </div>

        <div className="flutter-stat">
          <FaRocket />

          <div>
            <strong>High-Performance</strong>
            <span>Applications</span>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="flutter-section flutter-features-section">
        <div className="flutter-section-heading">
          <span>WHAT WE BUILD</span>

          <h2>Professional Flutter App Solutions</h2>

          <p>
            We create modern Flutter applications designed to deliver
            consistent experiences across mobile platforms and devices.
          </p>
        </div>

        <div className="flutter-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="flutter-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="flutter-feature-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="flutter-benefits-section">
        <div className="flutter-benefits-container">
          <motion.div
            className="flutter-benefits-content"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span>WHY FLUTTER</span>

            <h2>
              One codebase.
              <br />
              Multiple platforms.
            </h2>

            <p>
              Flutter enables businesses to develop modern mobile
              applications with a consistent design and efficient
              cross-platform development approach.
            </p>

            <button
              className="flutter-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss Your Requirements <FaPlug />
            </button>
          </motion.div>

          <div className="flutter-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="flutter-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="flutter-check">✓</div>

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="flutter-section flutter-expertise-section">
        <div className="flutter-section-heading">
          <span>OUR EXPERTISE</span>

          <h2>Flutter Solutions for Modern Businesses</h2>

          <p>
            Our Flutter development expertise helps businesses build
            flexible, engaging, and scalable mobile applications.
          </p>
        </div>

        <div className="flutter-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="flutter-expertise-card"
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <FaCogs />

              <span>{item}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="flutter-cta">
        <div className="flutter-cta-content">
          <span>LET'S BUILD SOMETHING GREAT</span>

          <h2>Ready to build your Flutter application?</h2>

          <p>
            Let's create a beautiful, scalable, and high-performance mobile
            application tailored to your business requirements.
          </p>

          <button
            className="flutter-cta-button"
            onClick={() => navigate("/contact")}
          >
            Get Started <FaRocket />
          </button>
        </div>
      </section>
    </div>
  );
};

export default FlutterDevelopers;