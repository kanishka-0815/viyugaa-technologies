import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaBolt,
  FaTools,
  FaDatabase,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "../../styles/technologies/tech-knockoutjs.css";

const features = [
  {
    icon: <FaCode />,
    title: "Knockout.js Development",
    description:
      "Develop interactive web interfaces using Knockout.js and clean data-binding patterns.",
  },
  {
    icon: <FaCogs />,
    title: "Data Binding",
    description:
      "Create responsive interfaces using clear and efficient data-binding techniques.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Reusable UI Patterns",
    description:
      "Build organized interface structures that can be reused across application features.",
  },
  {
    icon: <FaRocket />,
    title: "Responsive Applications",
    description:
      "Develop web interfaces that respond smoothly to user actions and application data.",
  },
  {
    icon: <FaBolt />,
    title: "Dynamic Interfaces",
    description:
      "Create interactive experiences with automatically updated interface elements.",
  },
  {
    icon: <FaTools />,
    title: "Application Maintenance",
    description:
      "Maintain existing Knockout.js applications with structured and organized frontend code.",
  },
];

const expertise = [
  "Knockout.js Applications",
  "MVVM-Based Interfaces",
  "Data-Binding Development",
  "Dynamic UI Development",
  "API Integration",
  "Legacy Application Support",
];

const benefits = [
  "Simple data-binding approach",
  "Dynamic user interfaces",
  "MVVM development pattern",
  "Reusable interface structures",
  "Clear separation of UI and data",
  "Support for existing applications",
];

const developmentSteps = [
  {
    number: "01",
    title: "Application Analysis",
    description:
      "Understand the existing application structure, requirements and user workflows.",
  },
  {
    number: "02",
    title: "UI Structure",
    description:
      "Organize views, view models and data relationships for the application.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Implement dynamic interfaces and data-binding functionality.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Validate application behavior, usability and frontend interactions.",
  },
];

function KnockoutJS() {
  const navigate = useNavigate();

  return (
    <main className="knockoutjs-page">

      {/* HERO */}
      <section className="knockoutjs-hero">
        <div className="knockoutjs-hero-glow knockoutjs-glow-one" />
        <div className="knockoutjs-hero-glow knockoutjs-glow-two" />

        <motion.div
          className="knockoutjs-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="knockoutjs-icon-box">
            <FaCode />
          </div>

          <span className="knockoutjs-eyebrow">
            FRONTEND TECHNOLOGY
          </span>

          <h1>
            Knockout.js
            <span>Development</span>
          </h1>

          <p>
            Build dynamic and responsive web interfaces using
            Knockout.js and practical data-binding techniques.
          </p>

          <div className="knockoutjs-hero-actions">
            <button
              type="button"
              className="knockoutjs-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="knockoutjs-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="knockoutjs-intro">
        <div className="knockoutjs-container knockoutjs-intro-grid">

          <motion.div
            className="knockoutjs-intro-heading"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="knockoutjs-section-label">
              KNOCKOUT.JS DEVELOPMENT
            </span>

            <h2>
              Dynamic interfaces with
              <span> simple data relationships</span>
            </h2>
          </motion.div>

          <motion.div
            className="knockoutjs-intro-text"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Knockout.js provides a practical approach to creating
              dynamic web interfaces through declarative bindings and
              the MVVM pattern.
            </p>

            <p>
              We use Knockout.js where its lightweight data-binding
              capabilities and existing application compatibility can
              provide practical value.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="knockoutjs-section knockoutjs-features-section">
        <div className="knockoutjs-container">

          <div className="knockoutjs-section-heading">
            <span className="knockoutjs-section-label">
              WHAT WE OFFER
            </span>

            <h2>Knockout.js Development Services</h2>

            <p>
              Build and maintain dynamic web interfaces with a focus
              on clear data relationships and practical application
              development.
            </p>
          </div>

          <div className="knockoutjs-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="knockoutjs-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <div className="knockoutjs-feature-icon">
                  {feature.icon}
                </div>

                <span className="knockoutjs-card-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY */}
      <section className="knockoutjs-section knockoutjs-why-section">
        <div className="knockoutjs-container knockoutjs-why-grid">

          <motion.div
            className="knockoutjs-why-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="knockoutjs-section-label">
              WHY KNOCKOUT.JS
            </span>

            <h2>
              Practical data binding for
              <span> dynamic interfaces</span>
            </h2>

            <p>
              Knockout.js can simplify the connection between application
              data and interface elements through declarative bindings.
            </p>

            <p>
              It can also be useful when supporting or extending existing
              applications that already use Knockout.js.
            </p>

            <button
              type="button"
              className="knockoutjs-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss your project
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            className="knockoutjs-benefits-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="knockoutjs-benefits-top">
              <div className="knockoutjs-benefits-icon">
                <FaLayerGroup />
              </div>

              <div>
                <span>KEY BENEFITS</span>
                <h3>Simple and focused development</h3>
              </div>
            </div>

            <div className="knockoutjs-benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  className="knockoutjs-benefit-item"
                  key={benefit}
                >
                  <span className="knockoutjs-check">
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
      <section className="knockoutjs-section knockoutjs-expertise-section">
        <div className="knockoutjs-container">

          <div className="knockoutjs-section-heading">
            <span className="knockoutjs-section-label">
              OUR EXPERTISE
            </span>

            <h2>Knockout.js Solutions We Build</h2>

            <p>
              Practical development and support capabilities for
              Knockout.js-based applications.
            </p>
          </div>

          <div className="knockoutjs-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="knockoutjs-expertise-card"
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
                    Focused frontend development and application
                    support based on project requirements.
                  </p>
                </div>

                <FaArrowRight />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="knockoutjs-section knockoutjs-process-section">
        <div className="knockoutjs-container">

          <div className="knockoutjs-section-heading">
            <span className="knockoutjs-section-label">
              OUR APPROACH
            </span>

            <h2>From application analysis to delivery</h2>

            <p>
              A practical development process keeps interfaces,
              data and application behavior aligned.
            </p>
          </div>

          <div className="knockoutjs-process-grid">
            {developmentSteps.map((step, index) => (
              <motion.div
                className="knockoutjs-process-card"
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
      <section className="knockoutjs-cta-section">
        <div className="knockoutjs-container">

          <motion.div
            className="knockoutjs-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="knockoutjs-cta-icon">
              <FaRocket />
            </div>

            <div className="knockoutjs-cta-content">
              <span>LET'S BUILD SOMETHING GREAT</span>

              <h2>
                Have a Knockout.js project in mind?
              </h2>

              <p>
                Tell us about your application requirements and
                let's explore the right development approach.
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

export default KnockoutJS;