import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import "../styles/StartProject.css";

export default function StartProject() {
  const formRef = useRef(null);
  const navigate = useNavigate();

  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  useEffect(() => {
    if (USER_ID) {
      try {
        emailjs.init(USER_ID);
      } catch (error) {
        console.warn("EmailJS initialization warning:", error);
      }
    }
  }, [USER_ID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg("");

    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setErrorMsg(
        "Email service is not configured. Please check your EmailJS environment variables."
      );

      setStatus("error");

      return;
    }

    const form = formRef.current;

    const formData = new FormData(form);

    const name = formData.get("from_name");
    const email = formData.get("reply_to");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const message = formData.get("message");

    if (!name || !email || !phone || !service || !message) {
      setErrorMsg("Please complete all required fields.");

      setStatus("error");

      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        form,
        USER_ID
      );

      setStatus("sent");

      form.reset();

    } catch (error) {
      console.error("EmailJS error:", error);

      setErrorMsg(
        error?.text ||
          "Unable to send your message. Please try again."
      );

      setStatus("error");
    }
  };

  return (
    <main className="start-project-page">

      {/* =====================================================
          PAGE HEADER
      ===================================================== */}

      <section className="start-project-header">

        <div className="start-project-header-inner">

          <motion.span
            className="start-project-eyebrow"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            VIYUGAA TECHNOLOGIES
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
          >
            Start a Project
          </motion.h1>

          <motion.div
            className="start-project-header-line"
            initial={{ width: 0 }}
            animate={{ width: 50 }}
            transition={{
              duration: 0.6,
              delay: 0.3,
            }}
          />

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
          >
            Tell us about your idea, requirements, or business
            challenge. Let's discuss how we can build the right
            solution together.
          </motion.p>

        </div>

      </section>


      {/* =====================================================
          MAIN CONTACT AREA
      ===================================================== */}

      <section className="start-project-section">

        <div className="start-project-container">

          <div className="start-project-grid">


            {/* =================================================
                LEFT SIDE
            ================================================= */}

            <motion.div
              className="project-contact-info"
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

              <span className="contact-info-label">
                LET'S CONNECT
              </span>

              <h2>
                Have a project
                <br />
                in mind?
              </h2>

              <p className="contact-info-description">
                We would be happy to hear about your project.
                Share your requirements with us and our team
                will get back to you.
              </p>


              {/* Email */}

              <a
                href="mailto:viyugaatechnologies@gmail.com"
                className="project-contact-item"
              >

                <span className="contact-icon email-icon">
                  @
                </span>

                <span className="contact-item-content">

                  <small>Email</small>

                  <strong>
                    viyugaatechnologies@gmail.com
                  </strong>

                </span>

              </a>


              {/* WhatsApp */}

              <a
                href="https://wa.me/919043236861"
                target="_blank"
                rel="noopener noreferrer"
                className="project-contact-item"
              >

                <span className="contact-icon whatsapp-icon">
                  W
                </span>

                <span className="contact-item-content">

                  <small>WhatsApp</small>

                  <strong>
                    +91 90432 36861
                  </strong>

                </span>

              </a>


              {/* Phone */}

              <a
                href="tel:+919043236861"
                className="project-contact-item"
              >

                <span className="contact-icon phone-icon">
                  +
                </span>

                <span className="contact-item-content">

                  <small>Phone</small>

                  <strong>
                    +91 90432 36861
                  </strong>

                </span>

              </a>


              <div className="project-contact-note">

                <span></span>

                <p>
                  We usually respond to project enquiries
                  as soon as possible.
                </p>

              </div>

            </motion.div>


            {/* =================================================
                RIGHT SIDE FORM
            ================================================= */}

            <motion.div
              className="project-enquiry-card"
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
            >

              <div className="enquiry-header">

                <span>
                  PROJECT ENQUIRY
                </span>

                <h3>
                  Tell us what you need
                </h3>

                <p>
                  Fill in the details below and we'll be in touch.
                </p>

              </div>


              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="project-form"
              >

                {/* Name */}

                <div className="project-form-group">

                  <label htmlFor="from_name">
                    Name <span>*</span>
                  </label>

                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    placeholder="Your name"
                    required
                  />

                </div>


                {/* Email */}

                <div className="project-form-group">

                  <label htmlFor="reply_to">
                    Email Address <span>*</span>
                  </label>

                  <input
                    id="reply_to"
                    type="email"
                    name="reply_to"
                    placeholder="you@example.com"
                    required
                  />

                </div>


                {/* Phone */}

                <div className="project-form-group">

                  <label htmlFor="phone">
                    Phone Number <span>*</span>
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    placeholder="+91 00000 00000"
                    required
                  />

                </div>


                {/* Service */}

                <div className="project-form-group">

                  <label htmlFor="service">
                    What do you need? <span>*</span>
                  </label>

                  <select
                    id="service"
                    name="service"
                    defaultValue=""
                    required
                  >

                    <option value="" disabled>
                      Select a service
                    </option>

                    <option value="UI/UX Design">
                      UI / UX Design
                    </option>

                    <option value="Web Development">
                      Web Development
                    </option>

                    <option value="Mobile App Development">
                      Mobile App Development
                    </option>

                    <option value="Software Development">
                      Software Development
                    </option>

                    <option value="Custom Software Development">
                      Custom Software Development
                    </option>

                    <option value="ERP Software Development">
                      ERP Software Development
                    </option>

                    <option value="Website Maintenance">
                      Website Maintenance
                    </option>

                    <option value="Digital Transformation">
                      Digital Transformation
                    </option>

                    <option value="Other">
                      Other
                    </option>

                  </select>

                </div>


                {/* Message */}

                <div className="project-form-group">

                  <label htmlFor="message">
                    Tell us about your project <span>*</span>
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    placeholder="Briefly describe your idea, requirements or project..."
                    required
                  ></textarea>

                </div>


                {/* Hidden subject */}

                <input
                  type="hidden"
                  name="subject"
                  value="New Project Enquiry - Viyugaa Technologies"
                />


                {/* Submit */}

                <button
                  type="submit"
                  className="project-submit-button"
                  disabled={status === "sending"}
                >

                  <span>
                    {status === "sending"
                      ? "Sending..."
                      : "Send Message to Viyugaa"}
                  </span>

                  {status !== "sending" && (
                    <span className="submit-arrow">
                      →
                    </span>
                  )}

                </button>


                {/* Status */}

                {status && (

                  <motion.div
                    className={
                      status === "sent"
                        ? "project-success-message"
                        : "project-error-message"
                    }
                    initial={{
                      opacity: 0,
                      y: 10,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                  >

                    {status === "sending" &&
                      "Sending your enquiry..."}

                    {status === "sent" &&
                      "Thank you. Your project enquiry has been sent successfully."}

                    {status === "error" &&
                      errorMsg}

                  </motion.div>

                )}

              </form>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          BACK LINK
      ===================================================== */}

      <div className="back-project-wrapper">

        <button
          className="back-project-button"
          onClick={() => navigate("/projects")}
        >
          ← Back to Projects
        </button>

      </div>

    </main>
  );
}