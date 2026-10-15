import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LazyLottie from "../../components/LazyLottie";
import "../../styles/services/service-custom-software.css";

import {
  FaCode,
  FaCogs,
  FaPuzzlePiece,
  FaRocket,
  FaChartLine,
  FaCheckCircle,
  FaDraftingCompass,
  FaUsers,
  FaLifeRing,
  FaDatabase,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCogs />,
    title: "Business Automation",
    text: "Automate repetitive business processes and reduce manual work with software designed around your workflows.",
  },
  {
    icon: <FaCode />,
    title: "Custom Applications",
    text: "Build web and business applications tailored to your specific requirements, users, and operational needs.",
  },
  {
    icon: <FaPuzzlePiece />,
    title: "System Integration",
    text: "Connect your existing applications, databases, APIs, and business tools into one efficient ecosystem.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Management",
    text: "Organize business information with reliable databases, secure access, and structured data management.",
  },
  {
    icon: <FaChartLine />,
    title: "Scalable Solutions",
    text: "Create software that can grow with your business and adapt to changing requirements.",
  },
  {
    icon: <FaLifeRing />,
    title: "Support & Maintenance",
    text: "Keep your software secure, updated, reliable, and ready for future improvements.",
  },
];

const benefits = [
  "Solutions designed around your business",
  "Modern and scalable architecture",
  "Secure data and reliable performance",
  "Easy integration with existing systems",
  "Continuous support and improvements",
];

const process = [
  {
    number: "01",
    icon: <FaDraftingCompass />,
    title: "Understand",
    text: "We understand your business goals, users, workflows, and technical requirements.",
  },
  {
    number: "02",
    icon: <FaCogs />,
    title: "Plan",
    text: "We define the solution architecture, features, technology stack, and development roadmap.",
  },
  {
    number: "03",
    icon: <FaCode />,
    title: "Develop",
    text: "Our team develops the solution using modern technologies and development practices.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Test",
    text: "We test functionality, usability, performance, security, and compatibility before launch.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Launch & Grow",
    text: "We deploy the solution and provide ongoing support, maintenance, and enhancements.",
  },
];

export default function CustomSoftwareDevelopment() {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/contact");
  };

  return (
    <main className="custom-software-page">

      {/* HERO */}
      <section className="custom-hero">
        <div className="custom-hero-content">

          <motion.div
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
          >
            VIYUGAA TECHNOLOGIES
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            Custom Software
            <span> Development</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            We build tailored software solutions that simplify operations,
            improve productivity, and help businesses grow.
          </motion.p>

          <motion.button
            className="custom-primary-btn"
            onClick={handleStartProject}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Project
            <span>→</span>
          </motion.button>
        </div>

        <motion.div
          className="custom-hero-animation"
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          <LazyLottie
            animationUrl="/animations/customsoftware.json"
            loop={true}
          />
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="custom-intro">
        <div>
          <span className="section-label">CUSTOM SOLUTIONS</span>

          <h2>
            Software built around
            <span> your business</span>
          </h2>
        </div>

        <p>
          Every business has different processes, challenges, and goals.
          Instead of forcing your business to adapt to generic software,
          we create solutions that fit the way your organization works.
        </p>
      </section>

      {/* SERVICES */}
      <section className="custom-services">
        <div className="section-heading">
          <span className="section-label">WHAT WE BUILD</span>
          <h2>Custom software services</h2>
          <p>
            From business applications to system integration, we provide
            practical software solutions for real business needs.
          </p>
        </div>

        <div className="custom-card-grid">
          {services.map((service, index) => (
            <motion.div
              className="custom-service-card"
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              <div className="custom-card-icon">
                {service.icon}
              </div>

              <span className="card-number">
                0{index + 1}
              </span>

              <h3>{service.title}</h3>

              <p>{service.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* BENEFITS */}
      <section className="custom-benefits">
        <div className="benefits-content">
          <span className="section-label">WHY CUSTOM SOFTWARE?</span>

          <h2>
            Designed for your
            <span> business goals</span>
          </h2>

          <p>
            Our solutions are designed to solve your current challenges while
            giving your business the flexibility to grow in the future.
          </p>

          <div className="benefit-list">
            {benefits.map((benefit) => (
              <div className="benefit-item" key={benefit}>
                <FaCheckCircle />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="benefit-visual">
          <div className="visual-card">
            <FaRocket />
            <strong>Built to Grow</strong>
            <span>Scalable digital solutions</span>
          </div>

          <div className="visual-card">
            <FaUsers />
            <strong>User Focused</strong>
            <span>Designed for real users</span>
          </div>

          <div className="visual-card">
            <FaChartLine />
            <strong>Business Driven</strong>
            <span>Focused on measurable value</span>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="custom-process">
        <div className="section-heading">
          <span className="section-label">HOW WE WORK</span>
          <h2>Our development process</h2>
          <p>
            A clear and structured approach from initial idea to final launch.
          </p>
        </div>

        <div className="process-grid">
          {process.map((item, index) => (
            <motion.div
              className="process-card"
              key={item.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
            >
              <span className="process-number">
                {item.number}
              </span>

              <div className="process-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="custom-cta">
        <div>
          <span className="section-label">LET'S BUILD TOGETHER</span>

          <h2>
            Have a software idea?
            <span> Let's turn it into reality.</span>
          </h2>

          <p>
            Tell us about your business challenge and our team will help
            you plan the right digital solution.
          </p>
        </div>

        <button
          className="custom-primary-btn"
          onClick={handleStartProject}
        >
          Start Your Project
          <span>→</span>
        </button>
      </section>

    </main>
  );
}