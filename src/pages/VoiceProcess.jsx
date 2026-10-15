import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheckCircle,
  FiPhone,
  FiUsers,
  FiMessageCircle,
  FiClipboard,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import "../styles/ProjectDetails.css";

export default function VoiceProcess() {
  const navigate = useNavigate();

  return (
    <main className="project-detail-page">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="project-detail-hero">

        <div className="project-detail-container">

          <button
            className="project-back-button"
            onClick={() => navigate("/projects")}
          >
            <FiArrowLeft />
            <span>Back to Projects</span>
          </button>


          <motion.div
            className="project-detail-hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <span className="project-detail-eyebrow">
              PROJECT 02 · BUSINESS PROCESS
            </span>

            <h1>
              Voice
              <br />
              <em>Process.</em>
            </h1>

            <p>
              A structured voice process solution focused on customer
              communication, call handling, information management,
              follow-up activities, and efficient service operations.
            </p>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="project-detail-overview">

        <div className="project-detail-container">

          <div className="detail-overview-grid">

            <div className="detail-section-label">
              <span>01</span>
              <strong>PROJECT OVERVIEW</strong>
            </div>

            <div className="detail-overview-content">

              <h2>
                Connecting people
                <br />
                through <span>effective communication.</span>
              </h2>

              <p>
                The Voice Process project focuses on structured customer
                communication and service operations. It is designed to
                support efficient call handling, information management,
                follow-up activities, and customer interactions.
              </p>

              <p>
                The process brings communication activities together
                through a consistent workflow, helping teams manage
                conversations and customer-related tasks in an organized
                manner.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          KEY AREAS
      ===================================================== */}

      <section className="project-detail-features">

        <div className="project-detail-container">

          <div className="detail-heading">

            <span>
              CORE AREAS
            </span>

            <h2>
              What the process
              <br />
              <em>covers.</em>
            </h2>

          </div>


          <div className="detail-feature-grid">

            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiPhone />
              </div>

              <span>01</span>

              <h3>
                Call Handling
              </h3>

              <p>
                A structured approach to handling customer calls and
                maintaining consistent communication throughout the
                process.
              </p>

            </div>


            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiUsers />
              </div>

              <span>02</span>

              <h3>
                Customer Communication
              </h3>

              <p>
                Supporting clear and professional communication while
                managing customer interactions effectively.
              </p>

            </div>


            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiMessageCircle />
              </div>

              <span>03</span>

              <h3>
                Information Management
              </h3>

              <p>
                Organizing customer information and relevant
                communication details for efficient service operations.
              </p>

            </div>


            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiClipboard />
              </div>

              <span>04</span>

              <h3>
                Follow-Up Activities
              </h3>

              <p>
                Maintaining structured follow-up activities to support
                continuity and effective customer service.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          WORKFLOW
      ===================================================== */}

      <section className="project-detail-workflow">

        <div className="project-detail-container">

          <div className="detail-overview-grid">

            <div className="detail-section-label">
              <span>02</span>
              <strong>PROCESS</strong>
            </div>

            <div>

              <h2>
                A clear workflow
                <br />
                for <span>better service.</span>
              </h2>

              <div className="workflow-list">

                <div className="workflow-item">
                  <span>01</span>
                  <div>
                    <strong>Customer Contact</strong>
                    <p>
                      Establish professional communication with the
                      customer.
                    </p>
                  </div>
                </div>

                <div className="workflow-item">
                  <span>02</span>
                  <div>
                    <strong>Call Handling</strong>
                    <p>
                      Manage the conversation and understand the
                      customer's requirement.
                    </p>
                  </div>
                </div>

                <div className="workflow-item">
                  <span>03</span>
                  <div>
                    <strong>Information Management</strong>
                    <p>
                      Record and organize relevant customer information.
                    </p>
                  </div>
                </div>

                <div className="workflow-item">
                  <span>04</span>
                  <div>
                    <strong>Follow-Up</strong>
                    <p>
                      Maintain follow-up activities and support
                      continued service.
                    </p>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATUS
      ===================================================== */}

      <section className="project-detail-status">

        <div className="project-detail-container">

          <div className="detail-status-box">

            <div>

              <span className="detail-status-label">
                PROJECT STATUS
              </span>

              <h2>
                Voice Process
              </h2>

            </div>

            <div className="detail-status-value completed">
              <FiCheckCircle />
              <span>Completed</span>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="project-detail-cta">

        <div className="project-detail-container">

          <motion.div
            className="detail-cta-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <span>
              EXPLORE MORE
            </span>

            <h2>
              Interested in our
              <br />
              <em>work?</em>
            </h2>

            <button
              onClick={() => navigate("/start-project")}
            >
              <span>Start a Project</span>
              <FiArrowUpRight />
            </button>

          </motion.div>

        </div>

      </section>

    </main>
  );
}