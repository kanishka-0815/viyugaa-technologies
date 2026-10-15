import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaVuejs,
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaBolt,
  FaTools,
  FaCode,
  FaMobileAlt,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import "../../styles/technologies/tech-vuejs.css";

const features = [
  {
    icon: <FaVuejs />,
    title: "Vue.js Development",
    description:
      "Build flexible and interactive web applications using Vue.js and component-based development.",
  },
  {
    icon: <FaCogs />,
    title: "Reusable Components",
    description:
      "Create modular components that improve development consistency and application maintainability.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Flexible Architecture",
    description:
      "Develop Vue.js applications with structures that can adapt to different project requirements.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Interfaces",
    description:
      "Build responsive and efficient user interfaces designed for smooth application experiences.",
  },
  {
    icon: <FaBolt />,
    title: "Interactive Experiences",
    description:
      "Create engaging applications with dynamic components and smooth user interactions.",
  },
  {
    icon: <FaTools />,
    title: "Easy Maintenance",
    description:
      "Maintain applications through modular, organized and reusable Vue.js development practices.",
  },
];

const expertise = [
  "Vue.js Web Applications",
  "Single Page Applications",
  "Reusable Vue Components",
  "Responsive UI Development",
  "API Integration",
  "Frontend Architecture",
];

const benefits = [
  "Flexible component-based development",
  "Responsive user interfaces",
  "Reusable application components",
  "Scalable frontend structure",
  "Interactive application experiences",
  "Maintainable code organization",
];

const developmentSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand project requirements, users, workflows and desired application outcomes.",
  },
  {
    number: "02",
    title: "Interface Planning",
    description:
      "Plan application structure, reusable components and responsive interface patterns.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build Vue.js interfaces and application functionality using modular components.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Improve responsiveness, usability and application performance before delivery.",
  },
];

function VueJS() {
  const navigate = useNavigate();

  return (
    <main className="vuejs-page">

      {/* HERO */}
      <section className="vuejs-hero">
        <div className="vuejs-hero-glow vuejs-glow-one" />
        <div className="vuejs-hero-glow vuejs-glow-two" />

        <motion.div
          className="vuejs-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="vuejs-icon-box">
            <FaVuejs />
          </div>

          <span className="vuejs-eyebrow">
            FRONTEND TECHNOLOGY
          </span>

          <h1>
            Vue.js
            <span>Development</span>
          </h1>

          <p>
            Build flexible, responsive and interactive web applications
            using modern Vue.js development practices.
          </p>

          <div className="vuejs-hero-actions">
            <button
              type="button"
              className="vuejs-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="vuejs-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="vuejs-intro">
        <div className="vuejs-container vuejs-intro-grid">

          <motion.div
            className="vuejs-intro-heading"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="vuejs-section-label">
              VUE.JS DEVELOPMENT
            </span>

            <h2>
              Flexible interfaces designed for
              <span> modern applications</span>
            </h2>
          </motion.div>

          <motion.div
            className="vuejs-intro-text"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Vue.js provides a progressive approach to building
              interactive web interfaces with reusable components
              and flexible application structures.
            </p>

            <p>
              We focus on creating Vue.js applications that are
              responsive, maintainable and aligned with business
              and user requirements.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="vuejs-section vuejs-features-section">
        <div className="vuejs-container">

          <div className="vuejs-section-heading">
            <span className="vuejs-section-label">
              WHAT WE OFFER
            </span>

            <h2>Vue.js Development Services</h2>

            <p>
              Build flexible frontend applications with a focus on
              usability, component reuse and maintainable architecture.
            </p>
          </div>

          <div className="vuejs-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="vuejs-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <div className="vuejs-feature-icon">
                  {feature.icon}
                </div>

                <span className="vuejs-card-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY VUE */}
      <section className="vuejs-section vuejs-why-section">
        <div className="vuejs-container vuejs-why-grid">

          <motion.div
            className="vuejs-why-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="vuejs-section-label">
              WHY VUE.JS
            </span>

            <h2>
              Flexible development for
              <span> evolving digital products</span>
            </h2>

            <p>
              Vue.js offers a flexible approach to building modern
              interfaces with reusable components and clear application
              structures.
            </p>

            <p>
              Our Vue.js development approach focuses on creating
              applications that can adapt to changing product and
              business requirements.
            </p>

            <button
              type="button"
              className="vuejs-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss your project
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            className="vuejs-benefits-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="vuejs-benefits-top">
              <div className="vuejs-benefits-icon">
                <FaCode />
              </div>

              <div>
                <span>KEY BENEFITS</span>
                <h3>Built for flexible development</h3>
              </div>
            </div>

            <div className="vuejs-benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  className="vuejs-benefit-item"
                  key={benefit}
                >
                  <span className="vuejs-check">
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
      <section className="vuejs-section vuejs-expertise-section">
        <div className="vuejs-container">

          <div className="vuejs-section-heading">
            <span className="vuejs-section-label">
              OUR EXPERTISE
            </span>

            <h2>Vue.js Solutions We Build</h2>

            <p>
              Frontend development capabilities for modern web
              applications and digital products.
            </p>
          </div>

          <div className="vuejs-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="vuejs-expertise-card"
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
                    Vue.js development focused on usability,
                    scalability and maintainability.
                  </p>
                </div>

                <FaArrowRight />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="vuejs-section vuejs-process-section">
        <div className="vuejs-container">

          <div className="vuejs-section-heading">
            <span className="vuejs-section-label">
              OUR APPROACH
            </span>

            <h2>From concept to Vue.js application</h2>

            <p>
              A clear development process helps us transform
              requirements into reliable frontend experiences.
            </p>
          </div>

          <div className="vuejs-process-grid">
            {developmentSteps.map((step, index) => (
              <motion.div
                className="vuejs-process-card"
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
      <section className="vuejs-cta-section">
        <div className="vuejs-container">

          <motion.div
            className="vuejs-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="vuejs-cta-icon">
              <FaRocket />
            </div>

            <div className="vuejs-cta-content">
              <span>LET'S BUILD SOMETHING GREAT</span>

              <h2>
                Have a Vue.js project in mind?
              </h2>

              <p>
                Tell us about your requirements and let's explore
                the right Vue.js development approach.
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

export default VueJS;