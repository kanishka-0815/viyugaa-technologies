import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LazyLottie from "../../components/LazyLottie";
import "../../styles/services/service-mobile-app.css";

import {
  FaMobileAlt,
  FaApple,
  FaAndroid,
  FaReact,
  FaTools,
  FaCogs,
  FaRocket,
  FaShoppingCart,
  FaHeartbeat,
  FaUniversity,
  FaTaxi,
  FaUtensils,
  FaHome,
  FaBook,
  FaSearch,
  FaDraftingCompass,
  FaPalette,
  FaCode,
  FaCheckCircle,
  FaLifeRing,
} from "react-icons/fa";

const services = [
  {
    icon: <FaApple />,
    title: "iOS App Development",
    text: "Create secure and high-performance applications for iPhone and iPad with a smooth native experience.",
  },
  {
    icon: <FaAndroid />,
    title: "Android App Development",
    text: "Build scalable Android applications designed for performance, compatibility, and usability.",
  },
  {
    icon: <FaReact />,
    title: "Cross-Platform Apps",
    text: "Develop applications for multiple platforms using modern cross-platform technologies.",
  },
  {
    icon: <FaTools />,
    title: "App Maintenance",
    text: "Keep your mobile application updated, secure, stable, and ready for new requirements.",
  },
  {
    icon: <FaCogs />,
    title: "App Integration",
    text: "Connect your application with APIs, payment systems, databases, and third-party services.",
  },
  {
    icon: <FaRocket />,
    title: "App Consulting",
    text: "Get technical guidance for planning features, choosing technologies, and launching your application.",
  },
];

const industries = [
  {
    icon: <FaShoppingCart />,
    title: "eCommerce",
    text: "Shopping, payments, orders, inventory, and customer engagement.",
  },
  {
    icon: <FaHeartbeat />,
    title: "Healthcare",
    text: "Appointments, patient services, healthcare platforms, and communication.",
  },
  {
    icon: <FaUniversity />,
    title: "Finance",
    text: "Secure financial applications, transactions, dashboards, and user services.",
  },
  {
    icon: <FaTaxi />,
    title: "Travel",
    text: "Booking, tracking, payments, location services, and travel management.",
  },
  {
    icon: <FaUtensils />,
    title: "Food & Delivery",
    text: "Ordering, delivery tracking, payments, menus, and customer loyalty.",
  },
  {
    icon: <FaHome />,
    title: "Real Estate",
    text: "Property listings, search, leads, communication, and document management.",
  },
  {
    icon: <FaBook />,
    title: "Education",
    text: "Courses, learning content, assessments, communication, and progress tracking.",
  },
];

const process = [
  {
    icon: <FaSearch />,
    title: "Discovery",
    text: "Understand your idea, users, business goals, and technical requirements.",
  },
  {
    icon: <FaDraftingCompass />,
    title: "Planning",
    text: "Define features, user flows, technology, architecture, and project scope.",
  },
  {
    icon: <FaPalette />,
    title: "UI/UX Design",
    text: "Create a clear, intuitive, and visually consistent mobile experience.",
  },
  {
    icon: <FaCode />,
    title: "Development",
    text: "Build the application using suitable technologies and development practices.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Testing & Launch",
    text: "Test the application and prepare it for a smooth production release.",
  },
  {
    icon: <FaLifeRing />,
    title: "Support",
    text: "Provide updates, maintenance, monitoring, and continuous improvements.",
  },
];

export default function MobileAppDevelopment() {
  const navigate = useNavigate();

  return (
    <main className="mobile-app-container">

      {/* HERO */}
      <section className="mobile-hero">
        <div className="mobile-hero-content">

          <span className="mobile-eyebrow">
            VIYUGAA TECHNOLOGIES
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Mobile App
            <span> Development</span>
          </motion.h1>

          <p>
            Build secure, scalable, and user-friendly mobile applications
            for Android, iOS, and multiple platforms.
          </p>

          <div className="mobile-hero-actions">
            <button
              className="mobile-primary-btn"
              onClick={() => navigate("/contact")}
            >
              Start Your Project
              <span>→</span>
            </button>

            <button
              className="mobile-secondary-btn"
              onClick={() => navigate("/our-work")}
            >
              View Our Work
            </button>
          </div>
        </div>

        <div className="mobile-hero-animation">
          <LazyLottie
            animationUrl="/animations/mobiledevelopment.json"
            loop={true}
          />
        </div>
      </section>

      {/* INTRO */}
      <section className="mobile-intro">
        <div>
          <span className="mobile-label">MOBILE SOLUTIONS</span>

          <h2>
            Apps designed for
            <span> real users</span>
          </h2>
        </div>

        <p>
          We create mobile applications that combine intuitive design,
          reliable performance, and practical business functionality.
          From initial concept to launch and maintenance, our team manages
          the complete development journey.
        </p>
      </section>

      {/* SERVICES */}
      <section className="mobile-services">
        <div className="mobile-section-heading">
          <span className="mobile-label">WHAT WE OFFER</span>

          <h2>Mobile app development services</h2>

          <p>
            Flexible mobile development services for startups, businesses,
            and organizations.
          </p>
        </div>

        <div className="mobile-card-grid">
          {services.map((item, index) => (
            <motion.article
              className="mobile-service-card"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -7 }}
            >
              <div className="mobile-card-icon">
                {item.icon}
              </div>

              <span className="mobile-card-number">
                0{index + 1}
              </span>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.article>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mobile-industries">
        <div className="mobile-section-heading">
          <span className="mobile-label">INDUSTRIES</span>

          <h2>Solutions for different industries</h2>

          <p>
            Mobile applications designed around industry-specific
            requirements and user needs.
          </p>
        </div>

        <div className="mobile-industry-grid">
          {industries.map((item, index) => (
            <motion.div
              className="mobile-industry-card"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <div>{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="mobile-process">
        <div className="mobile-section-heading">
          <span className="mobile-label">OUR PROCESS</span>

          <h2>From idea to app launch</h2>

          <p>
            A simple and transparent development process helps turn your
            idea into a reliable mobile application.
          </p>
        </div>

        <div className="mobile-process-grid">
          {process.map((item, index) => (
            <motion.div
              className="mobile-process-card"
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.07 }}
              viewport={{ once: true }}
            >
              <span>0{index + 1}</span>

              <div className="mobile-process-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-cta">
        <div>
          <span className="mobile-label">HAVE AN APP IDEA?</span>

          <h2>
            Let's build your
            <span> mobile experience.</span>
          </h2>

          <p>
            Share your idea with us and let's create a mobile solution
            that works for your users and your business.
          </p>
        </div>

        <button
          className="mobile-primary-btn"
          onClick={() => navigate("/contact")}
        >
          Start Your Project
          <span>→</span>
        </button>
      </section>

    </main>
  );
}