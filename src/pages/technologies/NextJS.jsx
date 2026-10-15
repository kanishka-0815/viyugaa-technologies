import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCogs,
  FaLayerGroup,
  FaRocket,
  FaBolt,
  FaTools,
  FaCode,
  FaServer,
  FaArrowRight,
  FaCheck,
} from "react-icons/fa";

import { SiNextdotjs } from "react-icons/si";

import "../../styles/technologies/tech-nextjs.css";

const features = [
  {
    icon: <SiNextdotjs />,
    title: "Next.js Development",
    description:
      "Build modern web applications using Next.js and React-based development practices.",
  },
  {
    icon: <FaCogs />,
    title: "Application Architecture",
    description:
      "Create structured applications with organized pages, components and reusable development patterns.",
  },
  {
    icon: <FaLayerGroup />,
    title: "Reusable Components",
    description:
      "Develop modular components that improve consistency, maintainability and development efficiency.",
  },
  {
    icon: <FaRocket />,
    title: "Performance Focus",
    description:
      "Build responsive web experiences with attention to application performance and user experience.",
  },
  {
    icon: <FaBolt />,
    title: "Modern Web Experiences",
    description:
      "Create dynamic and engaging web applications designed for modern digital products.",
  },
  {
    icon: <FaTools />,
    title: "Scalable Development",
    description:
      "Develop application structures that can grow with changing business and product requirements.",
  },
];

const expertise = [
  "Next.js Web Applications",
  "React-Based Applications",
  "Server-Rendered Experiences",
  "Responsive Web Development",
  "API Integration",
  "Frontend Architecture",
];

const benefits = [
  "Modern React-based development",
  "Structured application architecture",
  "Reusable components",
  "Performance-focused experiences",
  "Scalable web application structure",
  "Flexible frontend development",
];

const developmentSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand product goals, users, technical requirements and desired application experience.",
  },
  {
    number: "02",
    title: "Architecture",
    description:
      "Plan pages, components, application structure and required integrations.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build the Next.js application using reusable components and modern development practices.",
  },
  {
    number: "04",
    title: "Optimization",
    description:
      "Improve responsiveness, usability and application performance before delivery.",
  },
];

function NextJS() {
  const navigate = useNavigate();

  return (
    <main className="nextjs-page">

      {/* HERO */}
      <section className="nextjs-hero">
        <div className="nextjs-hero-glow nextjs-glow-one" />
        <div className="nextjs-hero-glow nextjs-glow-two" />

        <motion.div
          className="nextjs-hero-inner"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="nextjs-icon-box">
            <SiNextdotjs />
          </div>

          <span className="nextjs-eyebrow">
            FRONTEND TECHNOLOGY
          </span>

          <h1>
            Next.js
            <span>Development</span>
          </h1>

          <p>
            Build modern, scalable and performance-focused web applications
            using Next.js and React development practices.
          </p>

          <div className="nextjs-hero-actions">
            <button
              type="button"
              className="nextjs-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Get a Free Consultation
              <FaArrowRight />
            </button>

            <button
              type="button"
              className="nextjs-secondary-btn"
              onClick={() => navigate("/technologies")}
            >
              View Technologies
            </button>
          </div>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="nextjs-intro">
        <div className="nextjs-container nextjs-intro-grid">

          <motion.div
            className="nextjs-intro-heading"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="nextjs-section-label">
              NEXT.JS DEVELOPMENT
            </span>

            <h2>
              Modern web applications built for
              <span> performance and scale</span>
            </h2>
          </motion.div>

          <motion.div
            className="nextjs-intro-text"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p>
              Next.js provides a modern framework for building web
              applications with React and structured application
              development patterns.
            </p>

            <p>
              Our approach focuses on creating reliable, responsive
              and scalable applications around real product and
              business requirements.
            </p>
          </motion.div>

        </div>
      </section>

      {/* FEATURES */}
      <section className="nextjs-section nextjs-features-section">
        <div className="nextjs-container">

          <div className="nextjs-section-heading">
            <span className="nextjs-section-label">
              WHAT WE OFFER
            </span>

            <h2>Next.js Development Services</h2>

            <p>
              Develop modern web applications with a strong focus on
              architecture, responsiveness, performance and maintainability.
            </p>
          </div>

          <div className="nextjs-feature-grid">
            {features.map((feature, index) => (
              <motion.article
                className="nextjs-feature-card"
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
              >
                <div className="nextjs-feature-icon">
                  {feature.icon}
                </div>

                <span className="nextjs-card-number">
                  0{index + 1}
                </span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>
              </motion.article>
            ))}
          </div>

        </div>
      </section>

      {/* WHY NEXT */}
      <section className="nextjs-section nextjs-why-section">
        <div className="nextjs-container nextjs-why-grid">

          <motion.div
            className="nextjs-why-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="nextjs-section-label">
              WHY NEXT.JS
            </span>

            <h2>
              A modern foundation for
              <span> web products</span>
            </h2>

            <p>
              Next.js combines React-based development with a structured
              framework for building modern web applications.
            </p>

            <p>
              We use a practical architecture-first approach to create
              applications that are easier to scale and maintain.
            </p>

            <button
              type="button"
              className="nextjs-text-btn"
              onClick={() => navigate("/contact")}
            >
              Discuss your project
              <FaArrowRight />
            </button>
          </motion.div>

          <motion.div
            className="nextjs-benefits-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="nextjs-benefits-top">
              <div className="nextjs-benefits-icon">
                <FaServer />
              </div>

              <div>
                <span>KEY BENEFITS</span>
                <h3>Designed for modern web products</h3>
              </div>
            </div>

            <div className="nextjs-benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  className="nextjs-benefit-item"
                  key={benefit}
                >
                  <span className="nextjs-check">
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
      <section className="nextjs-section nextjs-expertise-section">
        <div className="nextjs-container">

          <div className="nextjs-section-heading">
            <span className="nextjs-section-label">
              OUR EXPERTISE
            </span>

            <h2>Next.js Solutions We Build</h2>

            <p>
              Development capabilities for modern websites,
              applications and digital products.
            </p>
          </div>

          <div className="nextjs-expertise-grid">
            {expertise.map((item, index) => (
              <motion.div
                className="nextjs-expertise-card"
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
                    Next.js development focused on architecture,
                    usability and scalable application experiences.
                  </p>
                </div>

                <FaArrowRight />
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* PROCESS */}
      <section className="nextjs-section nextjs-process-section">
        <div className="nextjs-container">

          <div className="nextjs-section-heading">
            <span className="nextjs-section-label">
              OUR APPROACH
            </span>

            <h2>From product idea to web application</h2>

            <p>
              A structured process helps us turn requirements into
              reliable and scalable Next.js applications.
            </p>
          </div>

          <div className="nextjs-process-grid">
            {developmentSteps.map((step, index) => (
              <motion.div
                className="nextjs-process-card"
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
      <section className="nextjs-cta-section">
        <div className="nextjs-container">

          <motion.div
            className="nextjs-cta"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="nextjs-cta-icon">
              <FaRocket />
            </div>

            <div className="nextjs-cta-content">
              <span>LET'S BUILD SOMETHING GREAT</span>

              <h2>
                Have a Next.js project in mind?
              </h2>

              <p>
                Tell us about your requirements and let's explore
                the right architecture for your web product.
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

export default NextJS;