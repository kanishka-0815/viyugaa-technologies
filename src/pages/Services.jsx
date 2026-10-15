import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaMobileAlt,
  FaCode,
  FaGlobe,
  FaCubes,
  FaBuilding,
  FaPaintBrush,
  FaTools,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/Services.css";

const services = [
  {
    number: "01",
    title: "Mobile App Development",
    description:
      "Build powerful, scalable, and user-friendly mobile applications that help businesses connect with their customers and grow digitally.",
    icon: <FaMobileAlt />,
    path: "/services/mobile-app-development",
  },

  {
    number: "02",
    title: "Custom Software Development",
    description:
      "Get tailored software solutions designed around your business requirements, workflows, goals, and operational challenges.",
    icon: <FaCode />,
    path: "/services/custom-software-development",
  },

  {
    number: "03",
    title: "Web Development",
    description:
      "Create responsive, secure, and high-performance websites and web applications designed to deliver meaningful digital experiences.",
    icon: <FaGlobe />,
    path: "/services/web-development",
  },

  {
    number: "04",
    title: "Software Product Development",
    description:
      "Transform your software ideas into reliable digital products with scalable architecture, modern technologies, and thoughtful development.",
    icon: <FaCubes />,
    path: "/services/software-product-development",
  },

  {
    number: "05",
    title: "ERP Software Development",
    description:
      "Streamline business operations with customized ERP solutions that connect processes, information, resources, and workflows.",
    icon: <FaBuilding />,
    path: "/services/erp-software-development",
  },

  {
    number: "06",
    title: "UI/UX Design",
    description:
      "Design intuitive, engaging, and user-focused digital experiences that combine usability, functionality, and modern visual design.",
    icon: <FaPaintBrush />,
    path: "/services/uiux-design",
  },

  {
    number: "07",
    title: "Software Maintenance & Support",
    description:
      "Keep your applications secure, reliable, updated, and performing efficiently with continuous maintenance and technical support.",
    icon: <FaTools />,
    path: "/services/software-maintenance-support",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="services-page">

      {/* =====================================
          HERO SECTION
      ===================================== */}

      <section className="services-hero">

        <div className="services-hero-overlay"></div>

        <motion.div
          className="services-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="services-eyebrow">
            VIYUGAA TECHNOLOGIES
          </span>

          <h1>
            Our Services
          </h1>

          <p>
            Technology solutions designed to turn ideas into
            scalable digital experiences and meaningful business
            outcomes.
          </p>
        </motion.div>

      </section>


      {/* =====================================
          INTRODUCTION
      ===================================== */}

      <section className="services-intro">

        <motion.div
          className="services-intro-content"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-label">
            WHAT WE DO
          </span>

          <h2>
            Digital Solutions Built Around Your Business
          </h2>

          <p>
            At Viyugaa Technologies, we create practical digital
            solutions for businesses at every stage of their
            technology journey. From mobile applications and
            websites to enterprise software, product development,
            design, and ongoing support, our services are built
            around your unique requirements.
          </p>

        </motion.div>

      </section>


      {/* =====================================
          SERVICES
      ===================================== */}

      <section className="services-section">

        <div className="services-heading">

          <span className="section-label">
            OUR EXPERTISE
          </span>

          <h2>
            Explore Our Services
          </h2>

          <p>
            Discover solutions designed to help your business
            build, improve, and scale its digital presence.
          </p>

        </div>


        <div className="services-grid">

          {services.map((service, index) => (

            <motion.article
              key={service.number}
              className="service-card"
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.55,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
              }}
            >

              {/* Card Top */}

              <div className="service-card-top">

                <span className="service-number">
                  {service.number}
                </span>

                <div className="service-icon">
                  {service.icon}
                </div>

              </div>


              {/* Content */}

              <div className="service-card-content">

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

              </div>


              {/* Button */}

              <button
                className="service-button"
                onClick={() => navigate(service.path)}
              >
                <span>
                  View Service
                </span>

                <FaArrowRight />
              </button>

            </motion.article>

          ))}

        </div>

      </section>


      {/* =====================================
          PROCESS / VALUE SECTION
      ===================================== */}

      <section className="services-value">

        <div className="services-value-inner">

          <motion.div
            className="services-value-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <span className="section-label">
              WHY VIYUGAA
            </span>

            <h2>
              From Ideas to Digital Solutions
            </h2>

            <p>
              We combine technical expertise, creative thinking,
              and a practical approach to help businesses turn
              ideas into reliable digital solutions.
            </p>

          </motion.div>


          <motion.div
            className="services-value-points"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="value-item">
              <span>01</span>

              <div>
                <h3>
                  Understand
                </h3>

                <p>
                  We understand your business requirements,
                  challenges, and objectives.
                </p>
              </div>
            </div>


            <div className="value-item">
              <span>02</span>

              <div>
                <h3>
                  Build
                </h3>

                <p>
                  We design and develop solutions around
                  your specific needs.
                </p>
              </div>
            </div>


            <div className="value-item">
              <span>03</span>

              <div>
                <h3>
                  Grow
                </h3>

                <p>
                  We help you maintain, improve, and scale
                  your digital solution.
                </p>
              </div>
            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================
          CTA
      ===================================== */}

      <section className="services-cta">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="section-label">
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's Build Something Meaningful
          </h2>

          <p>
            Tell us what you have in mind and let's create a
            digital solution that fits your business.
          </p>

          <button
            className="services-cta-button"
            onClick={() => navigate("/contact")}
          >
            Start Your Project
            <FaArrowRight />
          </button>

        </motion.div>

      </section>

    </div>
  );
}