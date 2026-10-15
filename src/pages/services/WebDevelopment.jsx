import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaCode,
  FaLaptopCode,
  FaMobileAlt,
  FaSearch,
  FaShoppingCart,
  FaCloud,
  FaBuilding,
  FaRocket,
  FaShieldAlt,
  FaExpandArrowsAlt,
  FaChartLine,
  FaArrowRight,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";

import LazyLottie from "../../components/LazyLottie";
import "../../styles/services/service-web.css";

/* =========================================================
   WEB DEVELOPMENT SERVICES
========================================================= */

const webServices = [
  {
    number: "01",
    icon: <FaLaptopCode />,
    title: "Business Websites",
    description:
      "Professional websites designed to present your brand, services, products, and business information clearly.",
  },
  {
    number: "02",
    icon: <FaCode />,
    title: "Web Applications",
    description:
      "Interactive and scalable web applications built around your business processes and user requirements.",
  },
  {
    number: "03",
    icon: <FaMobileAlt />,
    title: "Responsive Development",
    description:
      "Responsive experiences that work smoothly across desktops, tablets, and mobile devices.",
  },
  {
    number: "04",
    icon: <FaSearch />,
    title: "Performance & SEO",
    description:
      "Clean development practices focused on fast loading, accessible structure, and search-friendly foundations.",
  },
];

/* =========================================================
   WEB SOLUTIONS
========================================================= */

const webSolutions = [
  {
    icon: <FaShoppingCart />,
    title: "eCommerce",
    description:
      "Customer-friendly online stores with product, cart, checkout, and order experiences.",
  },
  {
    icon: <FaCloud />,
    title: "SaaS & Cloud",
    description:
      "Web-based products and platforms that help users access services and business tools online.",
  },
  {
    icon: <FaBuilding />,
    title: "Corporate & Enterprise",
    description:
      "Structured websites and web solutions for organizations, teams, and business operations.",
  },
  {
    icon: <FaDatabase />,
    title: "Business Platforms",
    description:
      "Custom web platforms that connect data, users, workflows, and essential business functions.",
  },
];

/* =========================================================
   DEVELOPMENT BENEFITS
========================================================= */

const benefits = [
  {
    icon: <FaRocket />,
    title: "Performance",
    description:
      "Efficient layouts and development practices help create smooth and responsive user experiences.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security",
    description:
      "Security considerations are included throughout the application and development process.",
  },
  {
    icon: <FaExpandArrowsAlt />,
    title: "Scalability",
    description:
      "The solution can be structured to support new features, content, users, and future requirements.",
  },
  {
    icon: <FaChartLine />,
    title: "Analytics Ready",
    description:
      "Web experiences can be structured to support tracking, reporting, and meaningful business insights.",
  },
];

/* =========================================================
   DEVELOPMENT PROCESS
========================================================= */

const webProcess = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand your business goals, users, content, features, and technical requirements.",
  },
  {
    number: "02",
    title: "Planning & Design",
    description:
      "Define the website structure, user journeys, layouts, and responsive interface.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "Build the frontend, backend, APIs, database connections, and required integrations.",
  },
  {
    number: "04",
    title: "Testing",
    description:
      "Test functionality, responsiveness, compatibility, performance, and user interactions.",
  },
  {
    number: "05",
    title: "Launch & Support",
    description:
      "Deploy the solution and provide improvements and support as your requirements evolve.",
  },
];

/* =========================================================
   SERVICE CARD
========================================================= */

function WebServiceCard({
  number,
  icon,
  title,
  description,
  delay = 0,
}) {
  return (
    <motion.article
      className="web-service-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      whileHover={{
        y: -7,
        transition: { duration: 0.25 },
      }}
    >
      <span className="web-card-number">{number}</span>

      <div className="web-card-icon">{icon}</div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="web-card-arrow">
        <FaArrowRight />
      </div>
    </motion.article>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function WebDevelopment() {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/contact");
  };

  return (
    <main className="web-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="web-hero">

        <div className="web-hero-inner">

          <motion.div
            className="web-hero-content"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <span className="web-eyebrow">
              WEB DEVELOPMENT
            </span>

            <h1>
              Build web experiences
              <span>that move your business forward.</span>
            </h1>

            <p>
              We create responsive websites and web applications that
              combine clean design, reliable technology, and practical
              business functionality.
            </p>

            <div className="web-hero-actions">

              <motion.button
                className="web-primary-btn"
                onClick={handleStartProject}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Start Your Web Project
                <FaArrowRight />
              </motion.button>

              <motion.button
                className="web-secondary-btn"
                onClick={handleStartProject}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
              >
                Discuss Your Idea
              </motion.button>

            </div>

          </motion.div>


          <motion.div
            className="web-hero-visual"
            initial={{
              opacity: 0,
              scale: 0.85,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.8,
              delay: 0.15,
            }}
          >

            <div className="web-animation-card">

              <LazyLottie
                animationUrl="/animations/Web Development Animation.json"
                loop={true}
              />

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="web-intro">

        <motion.div
          className="web-intro-content"
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="web-label">
            WEB SOLUTIONS
          </span>

          <h2>
            Technology built around
            <span>your business needs.</span>
          </h2>

        </motion.div>


        <motion.div
          className="web-intro-text"
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p>
            A successful website needs more than an attractive interface.
            It should be easy to use, responsive across devices, and
            structured around the goals of your business.
          </p>

          <p>
            We bring frontend, backend, APIs, databases, and responsive
            design together to create practical digital experiences.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="web-services">

        <motion.div
          className="web-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="web-label">
            WHAT WE BUILD
          </span>

          <h2>
            Web development services
          </h2>

          <p>
            From business websites to custom web applications, we build
            solutions based on your users, requirements, and business goals.
          </p>

        </motion.div>


        <div className="web-service-grid">

          {webServices.map((item, index) => (
            <WebServiceCard
              key={item.number}
              {...item}
              delay={index * 0.1}
            />
          ))}

        </div>

      </section>


      {/* =====================================================
          SOLUTIONS
      ===================================================== */}

      <section className="web-solutions">

        <div className="web-solutions-inner">

          <motion.div
            className="web-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="web-label">
              DIGITAL SOLUTIONS
            </span>

            <h2>
              Websites and applications for different needs.
            </h2>

            <p>
              Our approach adapts to the type of product, audience, and
              functionality your business requires.
            </p>

          </motion.div>


          <div className="web-solution-grid">

            {webSolutions.map((item, index) => (
              <motion.article
                className="web-solution-card"
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -6,
                }}
              >

                <div className="web-solution-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </motion.article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFITS
      ===================================================== */}

      <section className="web-benefits">

        <div className="web-benefits-inner">

          <motion.div
            className="web-section-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span className="web-label">
              DEVELOPMENT FOCUS
            </span>

            <h2>
              Built for performance,
              <span>security and growth.</span>
            </h2>

            <p>
              We consider important technical requirements from the
              beginning so your website has a strong foundation.
            </p>

          </motion.div>


          <div className="web-benefit-grid">

            {benefits.map((item, index) => (
              <motion.article
                className="web-benefit-card"
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >

                <div className="web-benefit-icon">
                  {item.icon}
                </div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

              </motion.article>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="web-process">

        <motion.div
          className="web-section-heading"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <span className="web-label">
            HOW WE WORK
          </span>

          <h2>
            From idea to a live web solution.
          </h2>

          <p>
            A clear development process keeps your requirements,
            design, technology, and launch aligned.
          </p>

        </motion.div>


        <div className="web-process-grid">

          {webProcess.map((item, index) => (
            <motion.article
              className="web-process-card"
              key={item.number}
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -5,
              }}
            >

              <div className="web-process-number">
                {item.number}
              </div>

              <div className="web-process-check">
                <FaCheckCircle />
              </div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </motion.article>
          ))}

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <motion.section
        className="web-cta"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        <div className="web-cta-content">

          <span className="web-label">
            LET'S BUILD
          </span>

          <h2>
            Ready to build your
            <span>next web solution?</span>
          </h2>

          <p>
            Tell us about your website or application and let's
            discuss the right technology and approach for your project.
          </p>

        </div>


        <motion.button
          className="web-cta-btn"
          onClick={handleStartProject}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          Discuss Your Project
          <FaArrowRight />
        </motion.button>

      </motion.section>

    </main>
  );
}