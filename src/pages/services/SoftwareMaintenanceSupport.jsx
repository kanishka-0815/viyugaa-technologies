import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaTools,
  FaShieldAlt,
  FaChartLine,
  FaLifeRing,
  FaSearch,
  FaWrench,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import LazyLottie from "../../components/LazyLottie";
import "../../styles/services/service-maintenance.css";

const services = [
  {
    icon: <FaWrench />,
    title: "Bug Fixes & Updates",
    description:
      "Resolve software issues, apply updates, and keep your application stable and reliable.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security & Protection",
    description:
      "Identify vulnerabilities, strengthen security, and keep your software protected against evolving threats.",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Optimization",
    description:
      "Monitor performance, identify bottlenecks, and improve speed, reliability, and scalability.",
  },
  {
    icon: <FaLifeRing />,
    title: "Technical Support",
    description:
      "Get dependable technical assistance for troubleshooting, maintenance, and ongoing software needs.",
  },
];

const benefits = [
  "Proactive issue monitoring",
  "Regular software updates",
  "Improved security and stability",
  "Better application performance",
  "Continuous technical support",
  "Scalable maintenance solutions",
];

const process = [
  {
    number: "01",
    icon: <FaSearch />,
    title: "Assess",
    description:
      "We review your existing software and identify issues, risks, and improvement areas.",
  },
  {
    number: "02",
    icon: <FaTools />,
    title: "Plan",
    description:
      "We create a maintenance plan based on your application's technical and business requirements.",
  },
  {
    number: "03",
    icon: <FaWrench />,
    title: "Improve",
    description:
      "Our team fixes issues, applies updates, improves security, and optimizes performance.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Support",
    description:
      "We provide ongoing monitoring and technical support to keep your software running smoothly.",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export default function SoftwareMaintenanceSupport() {
  const navigate = useNavigate();

  const handleContact = () => {
    navigate("/contact");
  };

  return (
    <main className="maintenance-page">

      {/* HERO */}
      <section className="maintenance-hero">
        <div className="maintenance-hero-content">

          <motion.div
            className="maintenance-hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="maintenance-eyebrow">
              SOFTWARE MAINTENANCE & SUPPORT
            </span>

            <h1>
              Keep Your Software
              <span> Running at Its Best.</span>
            </h1>

            <p>
              Reliable software maintenance and technical support to keep
              your applications secure, stable, updated, and ready for
              changing business needs.
            </p>

            <div className="maintenance-hero-actions">
              <button
                className="maintenance-primary-btn"
                onClick={handleContact}
              >
                Get Support
                <FaArrowRight />
              </button>

              <a href="#services" className="maintenance-secondary-btn">
                Explore Services
              </a>
            </div>
          </motion.div>

          <motion.div
            className="maintenance-hero-visual"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="maintenance-animation-card">
              <LazyLottie
                animationUrl="/animations/softwaremaintance.json"
                loop={true}
              />
            </div>
          </motion.div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        className="maintenance-section"
        id="services"
      >
        <motion.div
          className="maintenance-section-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <span>WHAT WE DO</span>

          <h2>
            Software Maintenance
            <strong> That Keeps You Moving</strong>
          </h2>

          <p>
            We help businesses maintain, improve, and support their
            software throughout its lifecycle.
          </p>
        </motion.div>

        <div className="maintenance-services-grid">
          {services.map((service, index) => (
            <motion.article
              className="maintenance-service-card"
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -7 }}
            >
              <div className="maintenance-card-icon">
                {service.icon}
              </div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>

              <div className="maintenance-card-arrow">
                <FaArrowRight />
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="maintenance-benefits-section">
        <div className="maintenance-benefits-wrapper">

          <motion.div
            className="maintenance-benefits-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="maintenance-label">
              WHY MAINTENANCE MATTERS
            </span>

            <h2>
              Reliable Software.
              <br />
              <strong>Better Business Continuity.</strong>
            </h2>

            <p>
              Regular maintenance helps reduce technical issues, improve
              application performance, strengthen security, and extend
              the useful life of your software.
            </p>
          </motion.div>

          <motion.div
            className="maintenance-benefits-list"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {benefits.map((benefit) => (
              <div
                className="maintenance-benefit-item"
                key={benefit}
              >
                <FaCheckCircle />
                <span>{benefit}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="maintenance-section process-section">

        <motion.div
          className="maintenance-section-heading"
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <span>OUR PROCESS</span>

          <h2>
            Simple, Structured &
            <strong> Reliable</strong>
          </h2>

          <p>
            A straightforward approach designed to keep your software
            healthy and continuously improving.
          </p>
        </motion.div>

        <div className="maintenance-process-grid">
          {process.map((step, index) => (
            <motion.div
              className="maintenance-process-card"
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
            >
              <div className="maintenance-process-top">
                <span>{step.number}</span>
                <div>{step.icon}</div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>

      </section>

      {/* CTA */}
      <section className="maintenance-cta-section">
        <motion.div
          className="maintenance-cta"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span>NEED SOFTWARE SUPPORT?</span>

            <h2>
              Keep Your Software
              <strong> Performing at Its Best.</strong>
            </h2>

            <p>
              Let our team handle maintenance, updates, security, and
              ongoing technical support while you focus on your business.
            </p>
          </div>

          <button
            className="maintenance-cta-button"
            onClick={handleContact}
          >
            Talk to Our Team
            <FaArrowRight />
          </button>
        </motion.div>
      </section>

    </main>
  );
}