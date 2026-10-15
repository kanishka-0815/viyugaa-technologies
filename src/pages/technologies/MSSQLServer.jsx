import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaDatabase,
  FaTable,
  FaCode,
  FaServer,
  FaShieldAlt,
  FaCogs,
  FaCloud,
  FaChartLine,
  FaRocket,
} from "react-icons/fa";

import "../../styles/technologies/tech-mssqlserver.css";

const MySQL = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaDatabase />,
      title: "Database Development",
      text: "Design and develop structured relational databases for reliable and efficient application data management.",
    },
    {
      icon: <FaTable />,
      title: "Data Modeling",
      text: "Create well-structured tables, relationships, constraints, and schemas for scalable database solutions.",
    },
    {
      icon: <FaCode />,
      title: "SQL Development",
      text: "Build efficient SQL queries, stored procedures, views, and database operations for application requirements.",
    },
    {
      icon: <FaServer />,
      title: "Database Integration",
      text: "Connect MySQL databases with web applications, APIs, backend services, and enterprise platforms.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Database Security",
      text: "Implement access control, permissions, authentication, and secure database practices.",
    },
    {
      icon: <FaCogs />,
      title: "Performance Optimization",
      text: "Improve database performance through indexing, query optimization, and efficient database design.",
    },
  ];

  const benefits = [
    "Reliable relational data management",
    "Structured and scalable database architecture",
    "Efficient SQL query processing",
    "Secure user and access management",
    "Easy integration with backend applications",
    "Optimized database performance",
  ];

  const expertise = [
    {
      icon: <FaDatabase />,
      title: "MySQL Database Development",
      text: "Robust relational database solutions designed around application requirements.",
    },
    {
      icon: <FaTable />,
      title: "Database Design",
      text: "Well-organized schemas, tables, relationships, and constraints.",
    },
    {
      icon: <FaCode />,
      title: "SQL Query Development",
      text: "Efficient queries for retrieving, updating, and managing application data.",
    },
    {
      icon: <FaServer />,
      title: "Backend Integration",
      text: "Reliable MySQL connectivity with modern backend and web applications.",
    },
    {
      icon: <FaChartLine />,
      title: "Reporting & Analytics",
      text: "Structured data solutions for reporting, dashboards, and business insights.",
    },
    {
      icon: <FaCloud />,
      title: "Cloud Database Solutions",
      text: "Flexible database deployments for modern cloud-connected applications.",
    },
  ];

  return (
    <div className="mysql-page">

      {/* HERO */}
      <section className="mysql-hero">
        <div className="mysql-hero-grid"></div>

        <div className="mysql-hero-content">

          <motion.div
            className="mysql-hero-icon"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaDatabase />
          </motion.div>

          <motion.p
            className="mysql-eyebrow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            DATABASE TECHNOLOGY
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            MySQL Development
          </motion.h1>

          <motion.p
            className="mysql-hero-description"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Build secure, reliable, and scalable relational database
            solutions for modern web applications and business systems.
          </motion.p>

          <motion.div
            className="mysql-hero-buttons"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <button
              className="mysql-btn mysql-btn-primary"
              onClick={() => navigate("/contact")}
            >
              Start a Project <FaRocket />
            </button>

            <button
              className="mysql-btn mysql-btn-outline"
              onClick={() => navigate("/technologies")}
            >
              Explore Technologies
            </button>
          </motion.div>

        </div>
      </section>

      {/* STATS */}
      <section className="mysql-intro">

        <div className="mysql-stat">
          <span>Relational</span>
          <small>Database System</small>
        </div>

        <div className="mysql-stat">
          <span>Secure</span>
          <small>Data Management</small>
        </div>

        <div className="mysql-stat">
          <span>Scalable</span>
          <small>Application Data</small>
        </div>

      </section>

      {/* FEATURES */}
      <section className="mysql-section mysql-features">

        <div className="mysql-section-heading">

          <span>WHAT WE BUILD</span>

          <h2>MySQL Database Solutions</h2>

          <p>
            Structured database solutions designed to manage application
            data securely, efficiently, and reliably.
          </p>

        </div>

        <div className="mysql-feature-grid">

          {features.map((feature, index) => (
            <motion.div
              className="mysql-feature-card"
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >

              <div className="mysql-card-icon">
                {feature.icon}
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* BENEFITS */}
      <section className="mysql-benefits">

        <div className="mysql-benefits-container">

          <div className="mysql-benefits-content">

            <span>WHY MYSQL</span>

            <h2>
              Reliable data management for
              <strong> modern applications.</strong>
            </h2>

            <p>
              MySQL provides a dependable relational database foundation
              for applications that require structured data, efficient
              queries, strong security, and scalable architecture.
            </p>

          </div>

          <div className="mysql-benefit-list">

            {benefits.map((benefit, index) => (
              <motion.div
                className="mysql-benefit-item"
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
      <section className="mysql-section mysql-expertise">

        <div className="mysql-section-heading">

          <span>OUR EXPERTISE</span>

          <h2>MySQL Development Expertise</h2>

          <p>
            From database design to backend integration, we build
            dependable data solutions for modern digital products.
          </p>

        </div>

        <div className="mysql-expertise-grid">

          {expertise.map((item, index) => (
            <motion.div
              className="mysql-expertise-card"
              key={item.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.07,
              }}
            >

              <div className="mysql-expertise-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>

            </motion.div>
          ))}

        </div>

      </section>

      {/* CTA */}
      <section className="mysql-cta">

        <div className="mysql-cta-content">

          <FaDatabase />

          <h2>
            Ready to build your database solution?
          </h2>

          <p>
            Let's create a secure, scalable, and reliable data
            architecture for your application.
          </p>

          <button
            className="mysql-btn mysql-btn-primary"
            onClick={() => navigate("/contact")}
          >
            Start a Project <FaRocket />
          </button>

        </div>

      </section>

    </div>
  );
};

export default MySQL;