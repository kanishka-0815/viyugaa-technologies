import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import seoData from "../lib/seoData";
import "../styles/contact.css";

export default function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");

  // EmailJS configuration
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  useEffect(() => {
    if (USER_ID) {
      try {
        emailjs.init(USER_ID);
      } catch (err) {
        console.warn("EmailJS initialization warning:", err);
      }
    }
  }, [USER_ID]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMsg("");
    setStatus(null);

    // Check EmailJS configuration
    if (!SERVICE_ID || !TEMPLATE_ID || !USER_ID) {
      setErrorMsg(
        "Email service is not configured. Please check your EmailJS environment variables."
      );
      setStatus("error");
      return;
    }

    const form = formRef.current;
    const formData = new FormData(form);

    const firstName = formData.get("from_name");
    const lastName = formData.get("last_name");
    const email = formData.get("reply_to");
    const message = formData.get("message");

    if (!firstName || !lastName || !email || !message) {
      setErrorMsg("Please fill in all required fields.");
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
    } catch (err) {
      console.error("EmailJS send error:", err);

      setErrorMsg(
        err?.text ||
          "Unable to send your message. Please try again later."
      );

      setStatus("error");
    }
  };

  return (
    <div className="contact-page">
      <SEO {...seoData.contact} />

      {/* Decorative Background */}
      <div className="contact-decoration contact-decoration-one"></div>
      <div className="contact-decoration contact-decoration-two"></div>

      {/* =========================
          PAGE INTRO
      ========================== */}
      <section className="contact-header">
        <div className="contact-header-container">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="contact-eyebrow">
              VIYUGAA TECHNOLOGIES
            </span>

            <h1>Let's Start a Conversation</h1>

            <div className="contact-header-line"></div>

            <p>
              Have a project in mind, a business requirement, or
              simply want to learn more about our services?
              We'd be happy to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================
          MAIN CONTACT SECTION
      ========================== */}
      <section className="contact-main">
        <div className="contact-container">

          {/* =========================
              LEFT INFORMATION
          ========================== */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="section-label">
              GET IN TOUCH
            </span>

            <h2>
              We'd love to hear
              <br />
              <span>from you.</span>
            </h2>

            <p className="contact-description">
              Whether you're looking to build a new digital
              product, improve an existing solution, or discuss
              your technology requirements, our team is ready
              to help.
            </p>

            {/* Contact Details */}
            <div className="contact-details">

              {/* Email */}
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5-8-5V6l8 5 8-5v2Z" />
                  </svg>
                </div>

                <div>
                  <span className="detail-label">
                    Email
                  </span>

                  <a
                    href="mailto:viyugaatechnologies@gmail.com"
                    className="detail-value"
                  >
                    viyugaatechnologies@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C12.61 21 3 11.39 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2Z" />
                  </svg>
                </div>

                <div>
                  <span className="detail-label">
                    Phone
                  </span>

                  <a
                    href="tel:9043236861"
                    className="detail-value"
                  >
                    +91 90432 36861
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="contact-detail">
                <div className="contact-detail-icon">
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7Zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 6.5 12 6.5 14.5 7.62 14.5 9 13.38 11.5 12 11.5Z" />
                  </svg>
                </div>

                <div>
                  <span className="detail-label">
                    Office
                  </span>

                  <span className="detail-value address">
                    Near by EURO Kids Playschool,
                    Peelamedu, Lakshmi Ammal Layout,
                    Hopes College,
                    Coimbatore - 641014,
                    Tamil Nadu
                  </span>
                </div>
              </div>
            </div>

            {/* Availability Box */}
            <div className="contact-note">
              <div className="contact-note-dot"></div>

              <div>
                <strong>Let's build something meaningful.</strong>
                <p>
                  Our team will get back to you as soon as
                  possible.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =========================
              RIGHT FORM
          ========================== */}
          <motion.div
            className="contact-form-card"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="form-header">
              <span>CONTACT US</span>

              <h3>
                Tell us about
                <br />
                your requirement
              </h3>

              <p>
                Fill in the details below and our team will
                contact you.
              </p>
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="contact-form"
            >

              {/* First + Last Name */}
              <div className="form-row">

                <div className="form-group">
                  <label htmlFor="first-name">
                    First Name
                    <span>*</span>
                  </label>

                  <input
                    id="first-name"
                    className="form-input"
                    type="text"
                    name="from_name"
                    placeholder="Enter your first name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="last-name">
                    Last Name
                    <span>*</span>
                  </label>

                  <input
                    id="last-name"
                    className="form-input"
                    type="text"
                    name="last_name"
                    placeholder="Enter your last name"
                    required
                  />
                </div>

              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email">
                  Email Address
                  <span>*</span>
                </label>

                <input
                  id="email"
                  className="form-input"
                  type="email"
                  name="reply_to"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Phone */}
              <div className="form-group">
                <label htmlFor="phone">
                  Phone Number
                </label>

                <input
                  id="phone"
                  className="form-input"
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              {/* Message */}
              <div className="form-group">
                <label htmlFor="message">
                  Message
                  <span>*</span>
                </label>

                <textarea
                  id="message"
                  className="form-input form-textarea"
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project or requirement..."
                  required
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                className="submit-button"
                type="submit"
                disabled={status === "sending"}
                whileHover={
                  status !== "sending"
                    ? { y: -2 }
                    : {}
                }
                whileTap={
                  status !== "sending"
                    ? { scale: 0.98 }
                    : {}
                }
              >
                {status === "sending"
                  ? "Sending..."
                  : "Send Message"}

                {status !== "sending" && (
                  <svg
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="m13 5 7 7-7 7-1.41-1.41L16.17 13H4v-2h12.17l-4.58-4.59L13 5Z" />
                  </svg>
                )}
              </motion.button>

              {/* Status */}
              {status && (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 10
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  className={
                    status === "sent"
                      ? "form-message success-message"
                      : "form-message error-message"
                  }
                >
                  {status === "sending" &&
                    "Sending your message..."}

                  {status === "sent" &&
                    "✓ Message sent successfully! We'll get back to you soon."}

                  {status === "error" &&
                    `Error: ${errorMsg}`}
                </motion.div>
              )}
            </form>

            <div className="form-footer">
              <span className="secure-icon">✓</span>
              <span>
                Your information is kept confidential.
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}