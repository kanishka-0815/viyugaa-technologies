import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaArrowUp,
} from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import "../styles/footer.css";

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const handleNavigation = () => {
    setTimeout(scrollToTop, 100);
  };

  return (
    <footer className="site-footer">
      <div className="footer-container">

        {/* ================= COMPANY ================= */}
        <div className="footer-company">
          <Link to="/" className="footer-brand" onClick={handleNavigation}>
            <span>VIYUGAA</span>
            <small>TECHNOLOGIES</small>
          </Link>

          <p className="footer-description">
            We deliver innovative web and software solutions that transform
            businesses through technology, creativity, and reliable digital
            experiences.
          </p>

          <div className="footer-socials">
            <a
              href="https://www.facebook.com/profile.php?id=61585837926479"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/viyugaa_technologies"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://x.com/viyugaa80242"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>

            <a
              href="https://www.linkedin.com/in/viyugaa-technologies-7a880b3a2/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* ================= COMPANY LINKS ================= */}
        <div className="footer-column">
          <h4>Company</h4>

          <nav>
            <Link to="/" onClick={handleNavigation}>
              Home
            </Link>

            <Link to="/career" onClick={handleNavigation}>
              About Us
            </Link>

            <Link to="/projects" onClick={handleNavigation}>
              Projects
            </Link>

            <Link to="/career" onClick={handleNavigation}>
              Careers
            </Link>

            <Link to="/contact" onClick={handleNavigation}>
              Contact Us
            </Link>
          </nav>
        </div>

        {/* ================= SERVICES ================= */}
        <div className="footer-column">
          <h4>Services</h4>

          <nav>
            <Link
              to="/services/web-development"
              onClick={handleNavigation}
            >
              Web Development
            </Link>

            <Link
              to="/services/mobile-app-development"
              onClick={handleNavigation}
            >
              Mobile App Development
            </Link>

            <Link
              to="/services/custom-software-development"
              onClick={handleNavigation}
            >
              Custom Software
            </Link>

            <Link
              to="/services/erp-software-development"
              onClick={handleNavigation}
            >
              ERP Solutions
            </Link>

            <Link
              to="/services/software-product-development"
              onClick={handleNavigation}
            >
              Product Development
            </Link>

            <Link
              to="/services/uiux-design"
              onClick={handleNavigation}
            >
              UI/UX Design
            </Link>
          </nav>
        </div>

        {/* ================= CONTACT ================= */}
        <div className="footer-column footer-contact">
          <h4>Get In Touch</h4>

          <div className="footer-contact-list">

            <div className="footer-contact-item">
              <span className="footer-icon">
                <MdLocationOn />
              </span>

              <p>
                Near by EURO Kids Playschool, Peelamedu,
                Lakshmi Ammal Layout, Hopes College,
                Coimbatore - 641014, Tamil Nadu
              </p>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">
                <MdPhone />
              </span>

              <a href="tel:+919043236861">
                +91 9043236861
              </a>
            </div>

            <div className="footer-contact-item">
              <span className="footer-icon">
                <MdEmail />
              </span>

              <a href="mailto:viyugaatechnologies@gmail.com">
                viyugaatechnologies@gmail.com
              </a>
            </div>

          </div>
        </div>
      </div>

      {/* ================= FOOTER BOTTOM ================= */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">

          <p>
            © {new Date().getFullYear()} Viyugaa Technologies.
            All rights reserved.
          </p>

          <button
            className="footer-top-button"
            onClick={scrollToTop}
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <FaArrowUp />
          </button>

        </div>
      </div>
    </footer>
  );
}