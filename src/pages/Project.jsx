import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiLayers,
  FiTarget,
  FiTrendingUp,
} from "react-icons/fi";

import "../styles/Project.css";

const projects = [
  {
    id: "01",
    slug: "medical-billing",
    category: "Healthcare Technology",
    title: "Medical Billing",
    description:
      "A professional medical billing solution developed to streamline billing operations, manage patient information, generate accurate billing records, and improve overall administrative efficiency.",
    status: "In Progress",
    icon: <FiClock />,
    visualTitle: "Healthcare",
    visualText: "Digital Billing",
  },
  {
    id: "02",
    slug: "voice-process",
    category: "Business Process",
    title: "Voice Process",
    description:
      "A structured voice process solution focused on customer communication, call handling, information management, follow-up activities, and efficient service operations.",
    status: "Completed",
    icon: <FiCheckCircle />,
    visualTitle: "Business",
    visualText: "Voice Operations",
  },
];

const capabilities = [
  {
    icon: <FiLayers />,
    title: "Practical Solutions",
    text: "Solutions designed around real operational requirements and business needs.",
  },
  {
    icon: <FiTarget />,
    title: "Focused Execution",
    text: "A structured approach that keeps every project aligned with its intended outcome.",
  },
  {
    icon: <FiTrendingUp />,
    title: "Built for Growth",
    text: "Technology and processes designed to support efficiency and long-term growth.",
  },
];

export default function Project() {
  const navigate = useNavigate();

  return (
    <main className="projects-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="projects-hero">

        <div className="projects-hero-orb projects-orb-one"></div>
        <div className="projects-hero-orb projects-orb-two"></div>

        <div className="projects-container projects-hero-grid">

          <motion.div
            className="projects-hero-content"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.75 }}
          >

            <span className="projects-eyebrow">
              VIYUGAA TECHNOLOGIES
            </span>

            <h1>
              Work that
              <br />
              <span>creates impact.</span>
            </h1>

            <p>
              We develop practical digital solutions and business
              processes designed to solve real-world challenges.
            </p>

          </motion.div>


          <motion.div
            className="projects-hero-visual"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >

            <div className="hero-visual-frame">

              <div className="hero-visual-top">
                <span>PROJECTS</span>
                <span>2026</span>
              </div>

              <div className="hero-visual-center">

                <span className="hero-big-number">
                  02
                </span>

                <div>
                  <small>SELECTED</small>
                  <strong>PROJECTS</strong>
                </div>

              </div>

              <div className="hero-visual-line"></div>

              <div className="hero-visual-bottom">
                <span>Healthcare</span>
                <span>Business Process</span>
              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <section className="projects-intro">

        <div className="projects-container">

          <div className="projects-intro-layout">

            <motion.div
              className="projects-intro-label"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span>OUR APPROACH</span>
              <div className="intro-label-line"></div>
            </motion.div>


            <motion.div
              className="projects-intro-content"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >

              <h2>
                From business needs
                <br />
                to <span>meaningful solutions.</span>
              </h2>

              <p>
                At Viyugaa Technologies, our work is focused on
                understanding practical requirements and transforming
                them into structured, reliable solutions. Every project
                is approached with clarity, purpose, and attention to
                operational efficiency.
              </p>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          PROJECTS
      ===================================================== */}

      <section className="projects-work-section">

        <div className="projects-container">

          <div className="projects-work-header">

            <div>
              <span className="section-kicker">
                SELECTED WORK
              </span>

              <h2>
                Projects we are building.
              </h2>
            </div>

            <p>
              A focused collection of our current work across
              technology and business operations.
            </p>

          </div>


          <div className="projects-showcase">

            {projects.map((project, index) => (

              <motion.article
                className="project-showcase-card"
                key={project.id}
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
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
                onClick={() =>
                  navigate(`/projects/${project.slug}`)
                }
                role="button"
                tabIndex={0}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    navigate(`/projects/${project.slug}`);
                  }
                }}
              >

                {/* Visual Side */}

                <div className="project-visual">

                  <div className="project-visual-grid"></div>

                  <div className="project-visual-number">
                    {project.id}
                  </div>

                  <div className="project-visual-content">

                    <span>
                      {project.category}
                    </span>

                    <strong>
                      {project.visualTitle}
                    </strong>

                    <small>
                      {project.visualText}
                    </small>

                  </div>

                  <div className="project-visual-icon">
                    {project.icon}
                  </div>

                </div>


                {/* Content Side */}

                <div className="project-details">

                  <div className="project-details-top">

                    <span className="project-index">
                      PROJECT {project.id}
                    </span>

                    <span
                      className={`project-status ${
                        project.status === "Completed"
                          ? "status-completed"
                          : "status-progress"
                      }`}
                    >
                      <span className="status-indicator"></span>
                      {project.status}
                    </span>

                  </div>


                  <h3>
                    {project.title}
                  </h3>


                  <div className="project-gold-line"></div>


                  <p>
                    {project.description}
                  </p>


                  <div className="project-details-footer">

                    <span>
                      {project.category}
                    </span>

                    <span className="project-open">
                      <FiArrowUpRight />
                    </span>

                  </div>

                </div>

              </motion.article>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CAPABILITIES
      ===================================================== */}

      <section className="projects-capabilities">

        <div className="projects-container">

          <div className="capabilities-header">

            <span className="section-kicker">
              WHAT DRIVES OUR WORK
            </span>

            <h2>
              Built around purpose,
              <br />
              <span>not just technology.</span>
            </h2>

          </div>


          <div className="capabilities-grid">

            {capabilities.map((item, index) => (

              <motion.div
                className="capability-card"
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
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
              >

                <div className="capability-number">
                  0{index + 1}
                </div>

                <div className="capability-icon">
                  {item.icon}
                </div>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="projects-cta">

        <motion.div
          className="projects-cta-content"
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
            duration: 0.7,
          }}
        >

          <span>
            HAVE A PROJECT IN MIND?
          </span>

          <h2>
            Let's build something
            <br />
            <em>meaningful.</em>
          </h2>

          <p>
            Tell us about your idea, requirement, or business challenge.
            We can explore the right approach together.
          </p>

          <button
            className="projects-cta-button"
            onClick={() => navigate("/start-project")}
          >
            <span>Start a Project</span>

            <span className="cta-arrow">
              <FiArrowUpRight />
            </span>
          </button>

        </motion.div>

      </section>

    </main>
  );
}