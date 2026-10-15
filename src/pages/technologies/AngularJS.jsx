import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaAngular,
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaBolt,
  FaTools,
  FaCode,
  FaDatabase,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "../../styles/technologies/tech-angularjs.css";

const features = [
  {
    icon: <FaAngular />,
    title: "AngularJS Development",
    description:
      "Build structured and interactive web applications using AngularJS and component-oriented development practices.",
  },
  {
    icon: <FaCogs />,
    title: "Structured Architecture",
    description:
      "Create organized applications with a clear structure that supports development, testing and maintenance.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Reusable Components",
    description:
      "Develop reusable interface elements that improve consistency and simplify application development.",
  },
  {
    icon: <FaRocket />,
    title: "Application Performance",
    description:
      "Build responsive applications with optimized frontend architecture and efficient application workflows.",
  },
  {
    icon: <FaBolt />,
    title: "Dynamic Interfaces",
    description:
      "Create interactive web experiences with dynamic data binding and responsive user interfaces.",
  },
  {
    icon: <FaTools />,
    title: "Application Maintenance",
    description:
      "Maintain and extend AngularJS applications through organized and modular development practices.",
  },
];

const expertise = [
  "AngularJS Web Applications",
  "Single Page Applications",
  "Reusable UI Components",
  "Responsive Web Interfaces",
  "API Integration",
  "Frontend Architecture",
];

const benefits = [
  "Structured application development",
  "Reusable UI components",
  "Dynamic data binding",
  "Organized frontend architecture",
  "Responsive application interfaces",
  "Maintainable development structure",
];

const developmentSteps = [
  {
    number: "01",
    title: "Requirement Analysis",
    description:
      "Understand application requirements, users, workflows and business objectives.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Define application structure, components, services and frontend workflows.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build responsive interfaces and application functionality using AngularJS.",
  },
  {
    number: "04",
    title: "Testing & Optimization",
    description:
      "Test application functionality and improve usability, reliability and performance.",
  },
];

function AngularJS() {
  const navigate = useNavigate();

  return (
    <main className="angularjs-page">

      {/* HERO */}
      <section className="angularjs-hero">
        <div className="angularjs-hero-glow angularjs-glow-one" />
        <div className="angularjs-hero-glow angularjs-glow-two" />

        <motion.div
          className="angularjs-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="angularjs-icon-box">
            <FaAngular />
          </div>

          <span className="angularjs-eyebrow">
            FRONTEND TECHNOLOGY
          </span>

          <h1>
            AngularJS
            <span>Development</span>
          </h1>

          <p>
            Build structured, interactive and responsive web applications
            using AngularJS development practices.
          </p>

          <div className="angularjs-hero-actions">
            <button
              type="button"
              className="angularjs-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="angularjs-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="angularjs-intro">
        <div className="angularjs-container angularjs-intro-grid">

          <motion.div
            className="angularjs-intro-heading"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="angularjs-section-label">
              ANGULARJS DEVELOPMENT
            </span>

            <h2>
              Structured applications built for
              <span> real business needs</span>
            </h2>
          </motion.div>

          <motion.div
            className="angularjs-intro-text"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              AngularJS provides a structured approach to developing
              interactive web applications with dynamic interfaces and
              organized application workflows.
            </p>

            <p>
              Our development approach focuses on creating responsive,
              maintainable and business-focused applications that support
              evolving requirements.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="angularjs-section angularjs-features-section">
        <div className="angularjs-container">

          <div className="angularjs-section-heading">
            <span className="angularjs-section-label">
              WHAT WE OFFER
            </span>

            <h2>AngularJS Development Services</h2>

            <p>
              We build structured AngularJS applications with an emphasis
              on usability, maintainability and reliable frontend
              architecture.
            </p>
          </div>

          <div className="angularjs-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="angularjs-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <div className="angularjs-feature-icon">
                  {feature.icon}
                </div>

                <span className="angularjs-card-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY ANGULARJS */}
      <section className="angularjs-section angularjs-why-section">
        <div className="angularjs-container angularjs-why-grid">

          <motion.div
            className="angularjs-why-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="angularjs-section-label">
              WHY ANGULARJS
            </span>

            <h2>
              A structured approach to
              <span> web application development</span>
            </h2>

            <p>
              AngularJS offers a structured way to develop dynamic
              web interfaces and applications with organized frontend
              development patterns.
            </p>

            <p>
              Our AngularJS solutions are designed around usability,
              application structure and the practical requirements of
              each project.
            </p>

            <button
              type="button"
              className="angularjs-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss your project
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            className="angularjs-benefits-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="angularjs-benefits-top">
              <div className="angularjs-benefits-icon">
                <FaCode />
              </div>

              <div>
                <span>KEY BENEFITS</span>
                <h3>Designed for structured development</h3>
              </div>
            </div>

            <div className="angularjs-benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  className="angularjs-benefit-item"
                  key={benefit}
                >
                  <span className="angularjs-check">
                    <FaCheck />
                  </span>

                  <span>{benefit}</span>

                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* EXPERTISE */}
      <section className="angularjs-section angularjs-expertise-section">
        <div className="angularjs-container">

          <div className="angularjs-section-heading">
            <span className="angularjs-section-label">
              OUR EXPERTISE
            </span>

            <h2>AngularJS Solutions We Build</h2>

            <p>
              Development capabilities designed for different web
              application requirements.
            </p>
          </div>

          <div className="angularjs-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="angularjs-expertise-card"
                key={item}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.06,
                }}
              >
                <span>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <h3>{item}</h3>
                  <p>
                    Structured frontend development focused on
                    usability, reliability and maintainability.
                  </p>
                </div>

                <FaArrowRight />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="angularjs-section angularjs-process-section">
        <div className="angularjs-container">

          <div className="angularjs-section-heading">
            <span className="angularjs-section-label">
              OUR APPROACH
            </span>

            <h2>From requirements to application</h2>

            <p>
              A structured process helps us develop AngularJS applications
              around clear project objectives.
            </p>
          </div>

          <div className="angularjs-process-grid">
            {developmentSteps.map((step, index) => (
              <motion.div
                className="angularjs-process-card"
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.07,
                }}
              >
                <span>{step.number}</span>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="angularjs-cta-section">
        <div className="angularjs-container">

          <motion.div
            className="angularjs-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="angularjs-cta-icon">
              <FaRocket />
            </div>

            <div className="angularjs-cta-content">
              <span>LET'S BUILD SOMETHING GREAT</span>

              <h2>
                Have an AngularJS project in mind?
              </h2>

              <p>
                Tell us about your requirements and let's explore
                the right approach for your web application.
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate("/contact")}
            >
              Start a Conversation
              <FaArrowRight />
            </button>
          </motion.div>

        </div>
      </section>

    </main>
  );
}

export default AngularJS;