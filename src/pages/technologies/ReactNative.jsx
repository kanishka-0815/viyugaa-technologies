import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaCode,
  FaRocket,
  FaLayerGroup,
  FaPlug,
  FaCogs,
  FaDatabase,
  FaCloud,
  FaBolt,
} from "react-icons/fa";

import "../../styles/technologies/tech-react-native.css";

const ReactNative = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaMobileAlt />,
      title: "Cross-Platform App Development",
      text: "Build applications for both iOS and Android using a shared React Native codebase.",
    },
    {
      icon: <FaCode />,
      title: "Native-Like User Experiences",
      text: "Create responsive mobile interfaces with smooth interactions and native-like experiences.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Reusable Components",
      text: "Develop reusable components that improve consistency and accelerate application development.",
    },
    {
      icon: <FaPlug />,
      title: "API & Backend Integration",
      text: "Connect mobile applications with REST APIs, backend services, and external platforms.",
    },
    {
      icon: <FaCogs />,
      title: "Performance Optimization",
      text: "Optimize application performance for smooth navigation, rendering, and user interactions.",
    },
    {
      icon: <FaDatabase />,
      title: "Business Mobile Applications",
      text: "Develop scalable mobile solutions for business operations, customer services, and digital products.",
    },
  ];

  const benefits = [
    "Shared codebase for iOS and Android",
    "Faster mobile development cycles",
    "Reusable React-based components",
    "Native device and service integration",
    "Scalable mobile application architecture",
    "Efficient application maintenance",
  ];

  const expertise = [
    {
      icon: <FaMobileAlt />,
      title: "React Native Mobile Apps",
      text: "Modern mobile applications built with React Native.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Cross-Platform Applications",
      text: "Single-codebase applications for multiple mobile platforms.",
    },
    {
      icon: <FaCode />,
      title: "Custom Mobile UI",
      text: "Responsive and engaging interfaces designed for mobile users.",
    },
    {
      icon: <FaPlug />,
      title: "REST API Integration",
      text: "Reliable integration with APIs and backend services.",
    },
    {
      icon: <FaRocket />,
      title: "E-Commerce Mobile Apps",
      text: "Mobile shopping experiences with scalable application architecture.",
    },
    {
      icon: <FaCloud />,
      title: "Business & Enterprise Apps",
      text: "Scalable mobile applications for modern business requirements.",
    },
  ];

  return (
    <div className="reactnative-page">

      {/* HERO */}
      <section className="reactnative-hero">
        <div className="reactnative-hero-grid"></div>

        <div className="reactnative-hero-content">
          <motion.div
            className="reactnative-hero-icon"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaMobileAlt />
          </motion.div>

          <motion.p
            className="reactnative-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            MOBILE APP DEVELOPMENT
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            React Native Development
          </motion.h1>

          <motion.p
            className="reactnative-hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Build fast, scalable, and cross-platform mobile applications
            using React Native for modern iOS and Android experiences.
          </motion.p>

          <motion.div
            className="reactnative-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              className="reactnative-btn reactnative-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="reactnative-btn reactnative-btn-outline"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* INTRO STATS */}
      <section className="reactnative-intro">
        <div className="reactnative-stat">
          <span>Cross-Platform</span>
          <small>Mobile Development</small>
        </div>

        <div className="reactnative-stat">
          <span>Reusable</span>
          <small>React Components</small>
        </div>

        <div className="reactnative-stat">
          <span>High-Performance</span>
          <small>Mobile Applications</small>
        </div>
      </section>

      {/* FEATURES */}
      <section className="reactnative-section reactnative-features">
        <div className="reactnative-section-heading">
          <span>WHAT WE BUILD</span>
          <h2>React Native Solutions</h2>
          <p>
            Modern mobile applications designed for performance, scalability,
            and seamless experiences across platforms.
          </p>
        </div>

        <div className="reactnative-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="reactnative-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="reactnative-card-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="reactnative-benefits">
        <div className="reactnative-benefits-container">
          <div className="reactnative-benefits-content">
            <span>WHY REACT NATIVE</span>

            <h2>
              One powerful approach for
              <strong> multiple mobile platforms.</strong>
            </h2>

            <p>
              React Native enables businesses to develop modern mobile
              applications efficiently while maintaining a consistent
              experience across iOS and Android.
            </p>
          </div>

          <div className="reactnative-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="reactnative-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <FaBolt />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="reactnative-section reactnative-expertise">
        <div className="reactnative-section-heading">
          <span>OUR EXPERTISE</span>
          <h2>React Native Development Expertise</h2>
          <p>
            Flexible mobile development solutions tailored to different
            business and application requirements.
          </p>
        </div>

        <div className="reactnative-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="reactnative-expertise-card"
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="reactnative-expertise-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="reactnative-cta">
        <div className="reactnative-cta-content">
          <FaMobileAlt />

          <h2>Ready to build your React Native application?</h2>

          <p>
            Let's create a scalable and engaging mobile experience for your
            business.
          </p>

          <button
            className="reactnative-btn reactnative-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Start a Project <FaRocket />
          </button>
        </div>
      </section>

    </div>
  );
};

export default ReactNative;