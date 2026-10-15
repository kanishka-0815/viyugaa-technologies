import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import LazyLottie from "../../components/LazyLottie";

import "../../styles/services/service-uiux.css";

import {
  FaPalette,
  FaPencilRuler,
  FaUserCheck,
  FaMobileAlt,
  FaGlobe,
  FaRocket,
  FaBook,
  FaUsers,
  FaMagic,
  FaChartLine,
  FaDesktop,
  FaArrowRight,
  FaLayerGroup,
  FaSearch,
  FaProjectDiagram,
  FaCheckCircle,
} from "react-icons/fa";

/* =========================================================
   CARD COMPONENT
========================================================= */

const ServiceCard = ({
  icon,
  number,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.article
      className="uiux-service-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{ y: -5 }}
    >
      <span className="uiux-card-number">
        {number}
      </span>

      <div className="uiux-card-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </motion.article>
  );
};


/* =========================================================
   SOLUTION CARD
========================================================= */

const SolutionCard = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.article
      className="uiux-solution-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="uiux-solution-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </motion.article>
  );
};


/* =========================================================
   APPROACH CARD
========================================================= */

const ApproachCard = ({
  icon,
  title,
  description,
  delay = 0,
}) => {
  return (
    <motion.article
      className="uiux-approach-card"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="uiux-approach-icon">
        {icon}
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </motion.article>
  );
};


/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function UIUXDesign() {
  const navigate = useNavigate();

  const handleStartProject = () => {
    navigate("/contact");
  };

  return (
    <div className="uiux-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="uiux-hero">

        <motion.div
          className="uiux-hero-content"
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
          }}
        >

          <span className="uiux-eyebrow">
            UI / UX DESIGN
          </span>

          <h1>
            Design experiences
            <span>people enjoy using.</span>
          </h1>

          <p>
            We create intuitive websites and digital products
            that combine clear user journeys, thoughtful
            interfaces, and responsive design to make every
            interaction simple and engaging.
          </p>

          <div className="uiux-hero-actions">

            <motion.button
              type="button"
              className="uiux-primary-btn"
              onClick={handleStartProject}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Start Your Project
              <FaArrowRight />
            </motion.button>

            <motion.button
              type="button"
              className="uiux-secondary-btn"
              onClick={handleStartProject}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Discuss Your Idea
            </motion.button>

          </div>

        </motion.div>


        <motion.div
          className="uiux-hero-animation"
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
            delay: 0.2,
          }}
        >
          <LazyLottie
            animationUrl="/animations/uiux.json"
            loop={true}
          />
        </motion.div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="uiux-intro">

        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <span className="uiux-label">
            DESIGN WITH PURPOSE
          </span>

          <h2>
            From user needs to
            <span>meaningful experiences.</span>
          </h2>

        </motion.div>


        <motion.div
          initial={{
            opacity: 0,
            x: 25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >

          <p>
            Good design is more than appearance. We study how
            users interact with your product, simplify complex
            journeys, and create interfaces that are easy to
            understand and use.
          </p>

          <p>
            From early wireframes to polished interfaces, our
            design process keeps usability, consistency, and
            your business goals at the center.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          SERVICES
      ===================================================== */}

      <section className="uiux-services">

        <motion.div
          className="uiux-section-heading"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >

          <span className="uiux-label">
            WHAT WE DO
          </span>

          <h2>
            UI/UX Design Services
          </h2>

          <p>
            Practical design services that help turn ideas
            into clear, engaging, and usable digital products.
          </p>

        </motion.div>


        <div className="uiux-card-grid">

          <ServiceCard
            number="01"
            icon={<FaPencilRuler />}
            title="UI Design"
            description="Create clean and consistent interfaces that reflect your brand and make important actions easy to understand."
            delay={0.1}
          />

          <ServiceCard
            number="02"
            icon={<FaUserCheck />}
            title="UX Design"
            description="Plan intuitive user journeys and interactions that help users complete tasks with less friction."
            delay={0.2}
          />

          <ServiceCard
            number="03"
            icon={<FaLayerGroup />}
            title="Design Systems"
            description="Build reusable components and design patterns that keep digital products consistent and scalable."
            delay={0.3}
          />

          <ServiceCard
            number="04"
            icon={<FaMobileAlt />}
            title="Responsive Design"
            description="Design interfaces that adapt smoothly across mobile, tablet, desktop, and different screen sizes."
            delay={0.4}
          />

        </div>

      </section>


      {/* =====================================================
          PRODUCTS / SOLUTIONS
      ===================================================== */}

      <section className="uiux-solutions">

        <div className="uiux-section-heading">

          <span className="uiux-label">
            DESIGN FOR DIFFERENT PRODUCTS
          </span>

          <h2>
            Experiences built around your users.
          </h2>

          <p>
            We adapt our design approach to the type of
            product, audience, and interaction your business
            needs.
          </p>

        </div>


        <div className="uiux-solution-grid">

          <SolutionCard
            icon={<FaGlobe />}
            title="Websites & Web Apps"
            description="Professional interfaces and user journeys for business websites and web applications."
            delay={0.1}
          />

          <SolutionCard
            icon={<FaMobileAlt />}
            title="Mobile Applications"
            description="Mobile-first experiences designed around simple navigation and natural touch interactions."
            delay={0.2}
          />

          <SolutionCard
            icon={<FaRocket />}
            title="SaaS Products"
            description="Clear dashboards and product experiences that make complex software easier to use."
            delay={0.3}
          />

          <SolutionCard
            icon={<FaBook />}
            title="Education Platforms"
            description="Engaging learning experiences that help students navigate content with ease."
            delay={0.4}
          />

        </div>

      </section>


      {/* =====================================================
          APPROACH
      ===================================================== */}

      <section className="uiux-approach">

        <motion.div
          className="uiux-section-heading"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >

          <span className="uiux-label">
            OUR APPROACH
          </span>

          <h2>
            Design that balances
            <span>people and business.</span>
          </h2>

          <p>
            Every design decision should serve a purpose —
            helping users while supporting the goals of your
            digital product.
          </p>

        </motion.div>


        <div className="uiux-approach-grid">

          <ApproachCard
            icon={<FaUsers />}
            title="User-Centered"
            description="We focus on user needs, behaviors, expectations, and pain points."
            delay={0.1}
          />

          <ApproachCard
            icon={<FaMagic />}
            title="Visual Consistency"
            description="Clear visual systems create a familiar and trustworthy experience."
            delay={0.2}
          />

          <ApproachCard
            icon={<FaChartLine />}
            title="Goal Focused"
            description="Design decisions are connected to meaningful product and business goals."
            delay={0.3}
          />

          <ApproachCard
            icon={<FaDesktop />}
            title="Responsive"
            description="Interfaces are designed to remain useful across different devices."
            delay={0.4}
          />

        </div>

      </section>


      {/* =====================================================
          PROCESS
      ===================================================== */}

      <section className="uiux-process">

        <motion.div
          className="uiux-section-heading"
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
        >

          <span className="uiux-label">
            HOW WE WORK
          </span>

          <h2>
            Our Design Process
          </h2>

          <p>
            A structured design process helps us move from
            understanding the problem to creating a refined
            digital experience.
          </p>

        </motion.div>


        <div className="uiux-process-grid">

          <motion.article
            className="uiux-process-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >

            <span>01</span>

            <div className="uiux-process-icon">
              <FaSearch />
            </div>

            <h3>User Research</h3>

            <p>
              Understand users, requirements, business goals,
              and the problems the product needs to solve.
            </p>

          </motion.article>


          <motion.article
            className="uiux-process-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >

            <span>02</span>

            <div className="uiux-process-icon">
              <FaProjectDiagram />
            </div>

            <h3>Wireframes & Flows</h3>

            <p>
              Plan information architecture, navigation,
              layouts, and important user journeys.
            </p>

          </motion.article>


          <motion.article
            className="uiux-process-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >

            <span>03</span>

            <div className="uiux-process-icon">
              <FaPalette />
            </div>

            <h3>Visual Design</h3>

            <p>
              Create polished interfaces using typography,
              colors, components, imagery, and visual hierarchy.
            </p>

          </motion.article>


          <motion.article
            className="uiux-process-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >

            <span>04</span>

            <div className="uiux-process-icon">
              <FaUserCheck />
            </div>

            <h3>Test & Refine</h3>

            <p>
              Review the experience, identify friction points,
              and refine the design before development.
            </p>

          </motion.article>


          <motion.article
            className="uiux-process-card"
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >

            <span>05</span>

            <div className="uiux-process-icon">
              <FaCheckCircle />
            </div>

            <h3>Developer Handoff</h3>

            <p>
              Provide organized design assets, components,
              specifications, and guidance for implementation.
            </p>

          </motion.article>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <motion.section
        className="uiux-cta"
        initial={{
          opacity: 0,
          y: 25,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >

        <div>

          <span className="uiux-label">
            LET'S CREATE
          </span>

          <h2>
            Ready to design a better
            <span>digital experience?</span>
          </h2>

          <p>
            Let's discuss your website, application, or
            product and turn your idea into a clear and
            engaging user experience.
          </p>

        </div>


        <motion.button
          type="button"
          className="uiux-primary-btn"
          onClick={handleStartProject}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.97 }}
        >
          Start Your Design Project
          <FaArrowRight />
        </motion.button>

      </motion.section>

    </div>
  );
}