import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  FaLightbulb,
  FaCode,
  FaLaptopCode,
  FaCheckCircle,
  FaRocket,
  FaCloud,
  FaShoppingCart,
  FaBuilding,
  FaArrowRight,
  FaUsers,
  FaLayerGroup,
  FaTools,
} from "react-icons/fa";

import LazyLottie from "../../components/LazyLottie";

// IMPORTANT: use the actual CSS file
import "../../styles/services/service-product.css";


// =========================================================
// ANIMATION
// =========================================================

const reveal = {
  hidden: {
    opacity: 0,
    y: 25,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};


// =========================================================
// PRODUCT SERVICES
// =========================================================

const productServices = [
  {
    icon: <FaLightbulb />,
    title: "Product Strategy",
    description:
      "Define the product scope, target users, core features and technical direction before development begins.",
  },
  {
    icon: <FaLayerGroup />,
    title: "MVP & Prototyping",
    description:
      "Turn your product idea into a focused MVP or prototype that can be validated with real users.",
  },
  {
    icon: <FaCode />,
    title: "Full-Stack Development",
    description:
      "Build the frontend, backend, APIs and database layers required for a complete digital product.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Testing & Release",
    description:
      "Test core functionality, improve reliability and prepare the product for deployment.",
  },
];


// =========================================================
// PRODUCT SOLUTIONS
// =========================================================

const productSolutions = [
  {
    icon: <FaCloud />,
    title: "SaaS & Cloud Products",
    description:
      "Web-based products designed for scalable access, connected services and continuous improvement.",
  },
  {
    icon: <FaBuilding />,
    title: "Business Applications",
    description:
      "Custom software designed to support internal workflows, operations and business processes.",
  },
  {
    icon: <FaShoppingCart />,
    title: "eCommerce Products",
    description:
      "Digital commerce experiences covering products, customers, orders and business operations.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Web & Mobile Products",
    description:
      "Connected digital products built around practical user requirements and business objectives.",
  },
];


// =========================================================
// BENEFITS
// =========================================================

const benefits = [
  {
    icon: <FaRocket />,
    title: "Scalable Architecture",
    description:
      "Structure the product so it can evolve as users, features and business requirements grow.",
  },
  {
    icon: <FaUsers />,
    title: "User-Focused",
    description:
      "Product decisions are connected to real user needs and clearly defined business objectives.",
  },
  {
    icon: <FaTools />,
    title: "Agile Development",
    description:
      "Work in clear development iterations so priorities and feedback can guide the product.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Ongoing Improvement",
    description:
      "Continue refining the product after launch based on usage, feedback and changing requirements.",
  },
];


// =========================================================
// DEVELOPMENT PROCESS
// =========================================================

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "Understand the problem, target users, goals and product requirements.",
  },
  {
    number: "02",
    title: "Prototype",
    description:
      "Define the user experience and validate the core product idea.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Develop the product features, integrations and technical foundation.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "Release the product, monitor feedback and continuously improve the experience.",
  },
];


// =========================================================
// SERVICE CARD
// =========================================================

function ServiceCard({ icon, title, description }) {
  return (
    <motion.article
      className="service-info-card"
      variants={reveal}
      whileHover={{
        y: -6,
        transition: {
          duration: 0.25,
        },
      }}
    >
      <div className="service-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>

      <div className="service-card-arrow">
        <FaArrowRight />
      </div>
    </motion.article>
  );
}


// =========================================================
// SOFTWARE PRODUCT DEVELOPMENT PAGE
// =========================================================

export default function SoftwareProductDevelopment() {
  const navigate = useNavigate();

  const goToContact = () => {
    navigate("/contact");
  };

  return (
    <main className="service-page product-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="service-hero">

        <div className="service-hero-content">

          {/* HERO TEXT */}

          <motion.div
            className="service-hero-text"
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
          >

            <span className="service-eyebrow">
              SOFTWARE PRODUCT DEVELOPMENT
            </span>

            <h1>
              Turn your product idea into a scalable digital product.
            </h1>

            <p>
              From MVP to production, we design and build software products
              around real user needs and business goals.
            </p>

            <button
              type="button"
              className="service-primary-btn"
              onClick={goToContact}
            >
              Start Your Project
              <FaArrowRight />
            </button>

          </motion.div>


          {/* HERO ANIMATION */}

          <motion.div
            className="service-hero-visual"
            initial={{
              opacity: 0,
              scale: 0.9,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: "easeOut",
            }}
          >

            <div className="service-animation-card">

              <LazyLottie
                animationUrl="/animations/softwareproduct.json"
                loop={true}
              />

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="service-section">

        <div className="service-section-heading">

          <span>
            WHAT WE BUILD
          </span>

          <h2>
            From product idea to working software
          </h2>

          <p>
            A focused development approach covering planning, development,
            testing and release.
          </p>

        </div>


        <motion.div
          className="service-card-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >

          {productServices.map((item) => (
            <ServiceCard
              key={item.title}
              {...item}
            />
          ))}

        </motion.div>

      </section>


      {/* =====================================================
          PRODUCT SOLUTIONS
      ===================================================== */}

      <section className="service-section product-solutions-section">

        <div className="service-section-heading">

          <span>
            PRODUCT SOLUTIONS
          </span>

          <h2>
            Products built for different business needs
          </h2>

          <p>
            We shape the technology and product experience around the way
            your business operates.
          </p>

        </div>


        <motion.div
          className="product-solution-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >

          {productSolutions.map((item) => (

            <motion.article
              className="product-solution-card"
              key={item.title}
              variants={reveal}
              whileHover={{
                y: -5,
              }}
            >

              <div className="product-solution-icon">
                {item.icon}
              </div>

              <div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </div>

            </motion.article>

          ))}

        </motion.div>

      </section>


      {/* =====================================================
          BENEFITS / APPROACH
      ===================================================== */}

      <section className="service-highlight-section">

        <div className="service-highlight-wrapper">

          {/* LEFT CONTENT */}

          <motion.div
            className="service-highlight-content"
            initial={{
              opacity: 0,
              x: -25,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.6,
            }}
          >

            <span>
              OUR APPROACH
            </span>

            <h2>
              Built to grow with
              <strong> your product</strong>
            </h2>

            <p>
              We focus on practical product decisions, clean development
              practices and continuous improvement to create software that
              can evolve with your business.
            </p>

          </motion.div>


          {/* BENEFIT CARDS */}

          <motion.div
            className="service-benefit-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
          >

            {benefits.map((item) => (

              <motion.article
                className="service-benefit-card"
                key={item.title}
                variants={reveal}
              >

                <div>
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.description}
                </p>

              </motion.article>

            ))}

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          DEVELOPMENT PROCESS
      ===================================================== */}

      <section className="service-section">

        <div className="service-section-heading">

          <span>
            DEVELOPMENT PROCESS
          </span>

          <h2>
            A clear path from idea to launch
          </h2>

          <p>
            Each stage keeps the product focused, testable and ready for
            the next step.
          </p>

        </div>


        <motion.div
          className="service-process-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
        >

          {process.map((item) => (

            <motion.article
              className="service-process-card"
              key={item.number}
              variants={reveal}
              whileHover={{
                y: -5,
              }}
            >

              <div className="service-process-top">

                <span>
                  {item.number}
                </span>

                <div>
                  <FaArrowRight />
                </div>

              </div>

              <h3>
                {item.title}
              </h3>

              <p>
                {item.description}
              </p>

            </motion.article>

          ))}

        </motion.div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="service-cta-section">

        <motion.div
          className="service-cta"
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

          <div>

            <span>
              START YOUR PRODUCT
            </span>

            <h2>
              Have a
              <strong> product idea?</strong>
            </h2>

            <p>
              Let's discuss your requirements and turn the idea into a
              practical digital product.
            </p>

          </div>


          <button
            type="button"
            className="service-cta-btn"
            onClick={goToContact}
          >
            Discuss Your Project
            <FaArrowRight />
          </button>

        </motion.div>

      </section>

    </main>
  );
}