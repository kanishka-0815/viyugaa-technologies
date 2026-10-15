import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaApple,
  FaCode,
  FaRocket,
  FaShieldAlt,
  FaPlug,
  FaCogs,
  FaLayerGroup,
  FaCloud,
} from "react-icons/fa";

import "../../styles/technologies/tech-ios.css";

const IOS = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaApple />,
      title: "Native iOS Development",
      text: "Build high-quality applications designed specifically for Apple's iPhone and iPad ecosystem.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Modern UI & UX",
      text: "Create polished and intuitive interfaces that provide smooth experiences across Apple devices.",
    },
    {
      icon: <FaRocket />,
      title: "Performance Optimization",
      text: "Develop responsive applications with optimized performance and efficient resource usage.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      text: "Connect iOS applications with REST APIs, cloud platforms, and backend services.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Secure Applications",
      text: "Implement secure application architecture and reliable data handling for mobile users.",
    },
    {
      icon: <FaMobileAlt />,
      title: "App Store Ready Solutions",
      text: "Develop production-ready applications prepared for deployment and distribution through the App Store.",
    },
  ];

  const benefits = [
    "Native Apple platform experience",
    "Strong application performance",
    "Secure and reliable architecture",
    "Seamless device integration",
    "Scalable application structure",
    "Polished user experience",
  ];

  const expertise = [
    {
      icon: <FaMobileAlt />,
      title: "iPhone & iPad Applications",
      text: "Purpose-built applications for modern Apple mobile devices.",
    },
    {
      icon: <FaApple />,
      title: "Native iOS Apps",
      text: "Native applications designed around Apple's platform capabilities.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Custom UI Development",
      text: "Clean, responsive, and engaging interfaces for iOS users.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      text: "Reliable integration with APIs and backend platforms.",
    },
    {
      icon: <FaCogs />,
      title: "Business Applications",
      text: "Scalable mobile applications supporting modern business operations.",
    },
    {
      icon: <FaCloud />,
      title: "App Store Applications",
      text: "Production-ready applications designed for App Store deployment.",
    },
  ];

  return (
    <div className="ios-page">

      {/* HERO */}
      <section className="ios-hero">
        <div className="ios-hero-grid"></div>

        <div className="ios-hero-content">
          <motion.div
            className="ios-hero-icon"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaApple />
          </motion.div>

          <motion.p
            className="ios-eyebrow"
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
            iOS App Development
          </motion.h1>

          <motion.p
            className="ios-hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Build secure, polished, and high-performance mobile applications
            for Apple devices with modern iOS development practices.
          </motion.p>

          <motion.div
            className="ios-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              className="ios-btn ios-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="ios-btn ios-btn-outline"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="ios-intro">
        <div className="ios-stat">
          <span>Native</span>
          <small>Apple Development</small>
        </div>

        <div className="ios-stat">
          <span>Secure</span>
          <small>Mobile Applications</small>
        </div>

        <div className="ios-stat">
          <span>High-Performance</span>
          <small>iOS Experiences</small>
        </div>
      </section>

      {/* FEATURES */}
      <section className="ios-section ios-features">
        <div className="ios-section-heading">
          <span>WHAT WE BUILD</span>
          <h2>iOS Development Solutions</h2>
          <p>
            High-quality iOS applications designed around performance,
            security, usability, and Apple's ecosystem.
          </p>
        </div>

        <div className="ios-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="ios-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="ios-card-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="ios-benefits">
        <div className="ios-benefits-container">

          <div className="ios-benefits-content">
            <span>WHY IOS DEVELOPMENT</span>

            <h2>
              Premium experiences built for
              <strong> Apple users.</strong>
            </h2>

            <p>
              Native iOS development helps businesses deliver secure,
              responsive, and polished applications that take advantage of
              Apple's powerful mobile ecosystem.
            </p>
          </div>

          <div className="ios-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="ios-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07 }}
              >
                <FaRocket />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="ios-section ios-expertise">
        <div className="ios-section-heading">
          <span>OUR EXPERTISE</span>
          <h2>iOS Development Expertise</h2>
          <p>
            Flexible native mobile solutions for businesses, startups,
            enterprises, and digital products.
          </p>
        </div>

        <div className="ios-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="ios-expertise-card"
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.07 }}
            >
              <div className="ios-expertise-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="ios-cta">
        <div className="ios-cta-content">
          <FaApple />

          <h2>
            Ready to build your iOS application?
          </h2>

          <p>
            Let's create a secure, polished, and high-performance mobile
            experience for your users.
          </p>

          <button
            className="ios-btn ios-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Start a Project <FaRocket />
          </button>
        </div>
      </section>

    </div>
  );
};

export default IOS;