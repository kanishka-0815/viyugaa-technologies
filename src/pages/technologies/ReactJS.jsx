import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaReact,
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaBolt,
  FaTools,
  FaCode,
  FaMobileAlt,
  FaDatabase,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "../../styles/technologies/tech-reactjs.css";

const features = [
  {
    icon: <FaReact />,
    title: "Modern React Development",
    description:
      "Build modern, responsive and interactive applications using ReactJS and component-based development.",
  },
  {
    icon: <FaCogs />,
    title: "Reusable Components",
    description:
      "Create reusable UI components that improve consistency, development speed and application maintenance.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Scalable Architecture",
    description:
      "Develop structured React applications that can grow with changing business and technology requirements.",
  },
  {
    icon: <FaRocket />,
    title: "High Performance",
    description:
      "Build fast and responsive applications with efficient rendering and optimized frontend architecture.",
  },
  {
    icon: <FaBolt />,
    title: "Interactive Experiences",
    description:
      "Deliver smooth and engaging interfaces with dynamic components and modern interaction patterns.",
  },
  {
    icon: <FaTools />,
    title: "Maintainable Code",
    description:
      "Keep applications organized with clean, modular and maintainable React code structures.",
  },
];

const expertise = [
  "ReactJS Web Applications",
  "Single Page Applications",
  "Reusable Component Development",
  "Responsive UI Development",
  "API Integration",
  "Frontend Application Architecture",
];

const benefits = [
  "Component-based development",
  "Responsive user interfaces",
  "Scalable application architecture",
  "Reusable and maintainable code",
  "Rich development ecosystem",
  "Efficient frontend development",
];

const developmentSteps = [
  {
    number: "01",
    title: "Planning",
    description:
      "Understand business requirements, application goals and user expectations.",
  },
  {
    number: "02",
    title: "UI Development",
    description:
      "Build responsive interfaces using reusable React components.",
  },
  {
    number: "03",
    title: "Integration",
    description:
      "Connect frontend applications with APIs, services and required data sources.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Improve performance, usability, responsiveness and maintainability.",
  },
];

function ReactJS() {
  const navigate = useNavigate();

  return (
    <main className="reactjs-page">

      {/* HERO */}
      <section className="reactjs-hero">
        <div className="reactjs-hero-glow reactjs-glow-one" />
        <div className="reactjs-hero-glow reactjs-glow-two" />

        <motion.div
          className="reactjs-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="reactjs-icon-box">
            <FaReact />
          </div>

          <span className="reactjs-eyebrow">
            FRONTEND TECHNOLOGY
          </span>

          <h1>
            ReactJS
            <span>Development</span>
          </h1>

          <p>
            Build fast, scalable and interactive web applications
            using modern ReactJS development practices.
          </p>

          <div className="reactjs-hero-actions">
            <button
              type="button"
              className="reactjs-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="reactjs-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="reactjs-intro">
        <div className="reactjs-container reactjs-intro-grid">
          <motion.div
            className="reactjs-intro-heading"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="reactjs-section-label">
              REACTJS DEVELOPMENT
            </span>

            <h2>
              Modern interfaces built for
              <span> real users</span>
            </h2>
          </motion.div>

          <motion.div
            className="reactjs-intro-text"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              ReactJS enables development teams to create flexible,
              component-driven interfaces for modern web applications.
            </p>

            <p>
              At Viyugaa Technologies, we focus on creating responsive,
              scalable and maintainable ReactJS applications aligned
              with business requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="reactjs-section reactjs-features-section">
        <div className="reactjs-container">

          <div className="reactjs-section-heading">
            <span className="reactjs-section-label">
              WHAT WE OFFER
            </span>

            <h2>ReactJS Development Services</h2>

            <p>
              From frontend architecture to interactive user interfaces,
              we build ReactJS solutions with a focus on quality and
              long-term maintainability.
            </p>
          </div>

          <div className="reactjs-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="reactjs-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <div className="reactjs-feature-icon">
                  {feature.icon}
                </div>

                <span className="reactjs-card-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY REACT */}
      <section className="reactjs-section reactjs-why-section">
        <div className="reactjs-container reactjs-why-grid">

          <motion.div
            className="reactjs-why-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="reactjs-section-label">
              WHY REACTJS
            </span>

            <h2>
              A flexible foundation for
              <span> digital products</span>
            </h2>

            <p>
              ReactJS provides a component-based approach that helps
              teams build structured and reusable user interfaces.
            </p>

            <p>
              Its flexible architecture makes it suitable for a wide
              range of modern web applications and digital products.
            </p>

            <button
              type="button"
              className="reactjs-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss your project
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            className="reactjs-benefits-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="reactjs-benefits-top">
              <div className="reactjs-benefits-icon">
                <FaCode />
              </div>

              <div>
                <span>KEY BENEFITS</span>
                <h3>Built for modern development</h3>
              </div>
            </div>

            <div className="reactjs-benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  className="reactjs-benefit-item"
                  key={benefit}
                >
                  <span className="reactjs-check">
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
      <section className="reactjs-section reactjs-expertise-section">
        <div className="reactjs-container">

          <div className="reactjs-section-heading">
            <span className="reactjs-section-label">
              OUR EXPERTISE
            </span>

            <h2>ReactJS Solutions We Build</h2>

            <p>
              Practical ReactJS development capabilities for different
              application and business requirements.
            </p>
          </div>

          <div className="reactjs-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="reactjs-expertise-card"
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
                    ReactJS development focused on usability,
                    scalability and maintainability.
                  </p>
                </div>

                <FaArrowRight />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* DEVELOPMENT PROCESS */}
      <section className="reactjs-section reactjs-process-section">
        <div className="reactjs-container">

          <div className="reactjs-section-heading">
            <span className="reactjs-section-label">
              OUR APPROACH
            </span>

            <h2>From idea to application</h2>

            <p>
              A structured approach helps us deliver ReactJS applications
              that are aligned with project requirements.
            </p>
          </div>

          <div className="reactjs-process-grid">
            {developmentSteps.map((step, index) => (
              <motion.div
                className="reactjs-process-card"
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
      <section className="reactjs-cta-section">
        <div className="reactjs-container">

          <motion.div
            className="reactjs-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="reactjs-cta-icon">
              <FaRocket />
            </div>

            <div className="reactjs-cta-content">
              <span>LET'S BUILD SOMETHING GREAT</span>

              <h2>
                Have a ReactJS project in mind?
              </h2>

              <p>
                Tell us about your requirements and let's explore
                the right approach for your digital product.
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

export default ReactJS;