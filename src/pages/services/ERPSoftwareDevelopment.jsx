import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LazyLottie from "../../components/LazyLottie";
import "../../styles/services/service-erp.css";

import {
  FaDatabase,
  FaCogs,
  FaUsers,
  FaChartBar,
  FaProjectDiagram,
  FaShieldAlt,
  FaDraftingCompass,
  FaCode,
  FaCheckCircle,
  FaLifeRing,
  FaRocket,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCogs />,
    title: "Custom ERP Modules",
    text: "Build business modules for finance, HR, inventory, sales, operations, and other core processes.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "System Integration",
    text: "Connect ERP with existing software, databases, APIs, and third-party business applications.",
  },
  {
    icon: <FaChartBar />,
    title: "Reports & Analytics",
    text: "Turn business data into useful reports and dashboards for better operational decisions.",
  },
  {
    icon: <FaUsers />,
    title: "User & Role Management",
    text: "Manage users, permissions, departments, and access levels through a structured system.",
  },
  {
    icon: <FaDatabase />,
    title: "Centralized Data",
    text: "Keep important business information organized in one reliable and accessible platform.",
  },
  {
    icon: <FaLifeRing />,
    title: "Support & Training",
    text: "Support your team with onboarding, training, maintenance, and continuous improvements.",
  },
];

const benefits = [
  "Centralized business information",
  "Better process visibility",
  "Reduced manual operations",
  "Improved reporting and analytics",
  "Scalable business architecture",
  "Secure role-based access",
];

const process = [
  {
    number: "01",
    icon: <FaDraftingCompass />,
    title: "Business Analysis",
    text: "Understand your departments, workflows, challenges, and ERP requirements.",
  },
  {
    number: "02",
    icon: <FaProjectDiagram />,
    title: "Solution Planning",
    text: "Plan modules, integrations, architecture, users, and implementation strategy.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Development",
    text: "Develop and integrate the ERP solution according to the approved requirements.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Testing",
    text: "Validate functionality, data flow, security, usability, and system performance.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Deployment",
    text: "Launch the ERP system and support your team during adoption and ongoing use.",
  },
];

export default function ERPSoftwareDevelopment() {
  const navigate = useNavigate();

  return (
    <main className="erp-development-page">

      {/* HERO */}
      <section className="erp-hero">
        <div className="erp-hero-content">
          <span className="erp-eyebrow">
            VIYUGAA TECHNOLOGIES
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            ERP Software
            <span> Development</span>
          </motion.h1>

          <p>
            Build connected ERP solutions that bring your business
            processes, people, and information together in one platform.
          </p>

          <button
            className="erp-primary-btn"
            onClick={() => navigate("/contact")}
          >
            Discuss Your ERP
            <span>→</span>
          </button>
        </div>

        <div className="erp-hero-animation">
          <LazyLottie
            animationUrl="/animations/erp.json"
            loop={true}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="erp-intro">
        <div>
          <span className="erp-label">CONNECTED OPERATIONS</span>

          <h2>
            One platform for
            <span> your business</span>
          </h2>
        </div>

        <p>
          Our ERP solutions help businesses manage important operations
          through a centralized system. From daily processes to reporting,
          we create software that makes information easier to manage and
          decisions easier to make.
        </p>
      </section>

      {/* SERVICES */}
      <section className="erp-services">
        <div className="erp-section-heading">
          <span className="erp-label">OUR SERVICES</span>
          <h2>ERP solutions built for your workflow</h2>
          <p>
            Flexible ERP capabilities designed around your organization's
            operational requirements.
          </p>
        </div>

        <div className="erp-card-grid">
          {services.map((item, index) => (
            <motion.article
              className="erp-card"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
            >
              <div className="erp-card-icon">
                {item.icon}
              </div>

              <span className="erp-card-number">
                0{index + 1}
              </span>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="erp-benefits">
        <div className="erp-benefit-content">
          <span className="erp-label">BUSINESS BENEFITS</span>

          <h2>
            Make your operations
            <span> more connected</span>
          </h2>

          <p>
            A well-designed ERP system gives your teams a centralized
            environment for managing information and everyday operations.
          </p>

          <div className="erp-benefit-list">
            {benefits.map((item) => (
              <div key={item}>
                <FaCheckCircle />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="erp-security-card">
          <FaShieldAlt />

          <h3>Secure & Structured</h3>

          <p>
            Keep business information organized with controlled access,
            structured workflows, and reliable data management.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="erp-process">
        <div className="erp-section-heading">
          <span className="erp-label">OUR PROCESS</span>
          <h2>From requirements to deployment</h2>
          <p>
            A structured process helps us deliver an ERP solution aligned
            with your business operations.
          </p>
        </div>

        <div className="erp-process-grid">
          {process.map((item, index) => (
            <motion.div
              className="erp-process-card"
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span>{item.number}</span>

              <div className="erp-process-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="erp-cta">
        <div>
          <span className="erp-label">READY TO MODERNIZE?</span>

          <h2>
            Build an ERP solution
            <span> around your business.</span>
          </h2>

          <p>
            Let's discuss your requirements and plan a practical ERP
            solution for your organization.
          </p>
        </div>

        <button
          className="erp-primary-btn"
          onClick={() => navigate("/contact")}
        >
          Get Started
          <span>→</span>
        </button>
      </section>

    </main>
  );
}