import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaAndroid,
  FaCode,
  FaRocket,
  FaPlug,
  FaDatabase,
  FaCogs,
  FaLayerGroup,
  FaCloud,
} from "react-icons/fa";

import "../../styles/technologies/tech-android.css";

const Android = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaAndroid />,
      title: "Native Android Development",
      text: "Build reliable and scalable Android applications designed for modern mobile devices.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Material UI",
      text: "Create intuitive and responsive interfaces following modern Android design principles.",
    },
    {
      icon: <FaPlug />,
      title: "API Integration",
      text: "Connect Android applications with REST APIs, backend services, and external platforms.",
    },
    {
      icon: <FaDatabase />,
      title: "Database Integration",
      text: "Implement reliable data storage and backend connectivity for Android applications.",
    },
    {
      icon: <FaCogs />,
      title: "Performance Optimization",
      text: "Optimize applications for smooth performance, responsiveness, and efficient resource usage.",
    },
    {
      icon: <FaMobileAlt />,
      title: "Business Applications",
      text: "Develop scalable Android solutions for business operations, customer services, and digital products.",
    },
  ];

  const benefits = [
    "Broad Android device support",
    "Flexible and responsive user interfaces",
    "Native application performance",
    "Reliable backend integration",
    "Scalable application architecture",
    "Maintainable mobile codebase",
  ];

  const expertise = [
    {
      icon: <FaMobileAlt />,
      title: "Android Mobile Apps",
      text: "Modern Android applications built for diverse business requirements.",
    },
    {
      icon: <FaAndroid />,
      title: "Native Android Development",
      text: "Native mobile applications designed around Android platform capabilities.",
    },
    {
      icon: <FaLayerGroup />,
      title: "Custom UI Development",
      text: "Engaging and responsive interfaces designed for Android users.",
    },
    {
      icon: <FaPlug />,
      title: "REST API Integration",
      text: "Reliable communication between Android applications and backend systems.",
    },
    {
      icon: <FaRocket />,
      title: "E-Commerce Apps",
      text: "Scalable shopping and customer-focused mobile experiences.",
    },
    {
      icon: <FaCloud />,
      title: "Enterprise Apps",
      text: "Business applications designed to support modern enterprise workflows.",
    },
  ];

  return (
    <div className="android-page">

      {/* HERO */}
      <section className="android-hero">
        <div className="android-hero-grid"></div>

        <div className="android-hero-content">
          <motion.div
            className="android-hero-icon"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaAndroid />
          </motion.div>

          <motion.p
            className="android-eyebrow"
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
            Android App Development
          </motion.h1>

          <motion.p
            className="android-hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Build reliable, scalable, and user-friendly Android applications
            for modern businesses and digital products.
          </motion.p>

          <motion.div
            className="android-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              className="android-btn android-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="android-btn android-btn-outline"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>
        </div>
      </section>

      {/* STATS */}
      <section className="android-intro">
        <div className="android-stat">
          <span>Native</span>
          <small>Android Development</small>
        </div>

        <div className="android-stat">
          <span>Scalable</span>
          <small>Mobile Applications</small>
        </div>

        <div className="android-stat">
          <span>Reliable</span>
          <small>Digital Experiences</small>
        </div>
      </section>

      {/* FEATURES */}
      <section className="android-section android-features">
        <div className="android-section-heading">
          <span>WHAT WE BUILD</span>

          <h2>Android Development Solutions</h2>

          <p>
            Reliable mobile applications designed for performance,
            usability, scalability, and modern Android experiences.
          </p>
        </div>

        <div className="android-feature-grid">
          {features.map((feature, index) => (
            <motion.div
              className="android-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="android-card-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="android-benefits">
        <div className="android-benefits-container">

          <div className="android-benefits-content">
            <span>WHY ANDROID DEVELOPMENT</span>

            <h2>
              Powerful applications for
              <strong> every mobile experience.</strong>
            </h2>

            <p>
              Android development provides businesses with flexible,
              scalable, and reliable solutions that can reach users across
              a wide range of mobile devices.
            </p>
          </div>

          <div className="android-benefit-list">
            {benefits.map((benefit, index) => (
              <motion.div
                className="android-benefit-item"
                key={benefit}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.07,
                }}
              >
                <FaRocket />

                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="android-section android-expertise">
        <div className="android-section-heading">
          <span>OUR EXPERTISE</span>

          <h2>Android Development Expertise</h2>

          <p>
            Flexible Android solutions for startups, businesses,
            enterprises, and digital products.
          </p>
        </div>

        <div className="android-expertise-grid">
          {expertise.map((item, index) => (
            <motion.div
              className="android-expertise-card"
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >
              <div className="android-expertise-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="android-cta">
        <div className="android-cta-content">
          <FaAndroid />

          <h2>
            Ready to build your Android application?
          </h2>

          <p>
            Let's create a reliable, scalable, and engaging mobile
            experience for your users.
          </p>

          <button
            className="android-btn android-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Start a Project <FaRocket />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Android;