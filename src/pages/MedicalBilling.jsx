import React from "react";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiFileText,
  FiDatabase,
  FiActivity,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import "../styles/ProjectDetails.css";

export default function MedicalBilling() {
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
              PROJECT 01 · HEALTHCARE TECHNOLOGY
            </span>

            <h1>
              Medical
              <br />
              <em>Billing.</em>
            </h1>

            <p>
              A professional medical billing solution designed to
              streamline billing operations, manage patient information,
              generate accurate billing records, and improve overall
              administrative efficiency.
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
                Simplifying healthcare
                <br />
                <span>billing operations.</span>
              </h2>

              <p>
                The Medical Billing project focuses on creating a
                structured digital solution for managing billing-related
                activities. The solution is designed to organize
                information, simplify administrative processes, and
                support accurate billing records.
              </p>

              <p>
                By bringing important billing activities into a more
                organized workflow, the platform aims to reduce manual
                effort and provide a clearer process for managing
                healthcare billing operations.
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
              What the solution
              <br />
              <em>focuses on.</em>
            </h2>

          </div>


          <div className="detail-feature-grid">

            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiFileText />
              </div>

              <span>01</span>

              <h3>
                Billing Management
              </h3>

              <p>
                Organizing billing activities and maintaining structured
                billing information for efficient administrative
                operations.
              </p>

            </div>


            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiDatabase />
              </div>

              <span>02</span>

              <h3>
                Patient Information
              </h3>

              <p>
                Supporting organized management of patient-related
                information required during billing activities.
              </p>

            </div>


            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiActivity />
              </div>

              <span>03</span>

              <h3>
                Process Efficiency
              </h3>

              <p>
                Creating a structured workflow that helps improve
                efficiency across billing and administrative tasks.
              </p>

            </div>


            <div className="detail-feature-card">

              <div className="detail-feature-icon">
                <FiCheckCircle />
              </div>

              <span>04</span>

              <h3>
                Accurate Records
              </h3>

              <p>
                Supporting the generation and maintenance of accurate
                billing records for better information management.
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
                A structured approach
                <br />
                <span>to billing.</span>
              </h2>

              <div className="workflow-list">

                <div className="workflow-item">
                  <span>01</span>
                  <div>
                    <strong>Information Management</strong>
                    <p>
                      Organize required patient and billing information.
                    </p>
                  </div>
                </div>

                <div className="workflow-item">
                  <span>02</span>
                  <div>
                    <strong>Billing Operations</strong>
                    <p>
                      Manage billing-related activities through a
                      structured workflow.
                    </p>
                  </div>
                </div>

                <div className="workflow-item">
                  <span>03</span>
                  <div>
                    <strong>Record Generation</strong>
                    <p>
                      Generate and maintain organized billing records.
                    </p>
                  </div>
                </div>

                <div className="workflow-item">
                  <span>04</span>
                  <div>
                    <strong>Administrative Efficiency</strong>
                    <p>
                      Support smoother and more efficient administrative
                      operations.
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
                Medical Billing
              </h2>

            </div>

            <div className="detail-status-value">
              <FiClock />
              <span>In Progress</span>
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