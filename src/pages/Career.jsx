
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedinIn,
  FaLightbulb,
  FaChartLine,
  FaUsers,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import "../styles/career.css";
import SEO from "../components/SEO";
import seoData from "../lib/seoData";

import ceoImage from "../assets/team/ceo.jpg";
import cooImage from "../assets/team/coo.jpg";
import cfoImage from "../assets/team/cfo.jpg";

export default function Career() {
  const targetRef = useRef(null);
  const navigate = useNavigate();

  /* ANIMATIONS */

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 35,
    },
    whileInView: {
      opacity: 1,
      y: 0,
    },
    viewport: {
      once: true,
      amount: 0.15,
    },
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const cardAnimation = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  /* CONTACT NAVIGATION */

  const goToContact = () => {
    navigate("/contact");

    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  /* TEAM MEMBERS */

  const teamMembers = [
    {
      name: "Kamaleshwaran K",
      role: "Founder & CEO",
      image: ceoImage,
      bio: "Pioneering digital transformation across industries",
      linkedin:
        "https://www.linkedin.com/in/kamaleshwaran-krishnamoorthi-b03687254/",
    },
    {
      name: "Hari Narayanan K",
      role: "Chief Operating Officer",
      image: cooImage,
      bio: "Driving operational excellence and strategic growth",
      linkedin:
        "https://www.linkedin.com/in/hari-narayanan-k-b8208b225/",
    },
    {
      name: "Tharun Vignesh A",
      role: "Chief Financial Officer",
      image: cfoImage,
      bio: "Managing financial strategy and driving sustainable growth",
      linkedin:
        "https://www.linkedin.com/in/tharun-vignesh-3b1913257/",
    },
  ];

  /* OPEN POSITIONS */

  const positions = [
    {
      number: "01",
      title: "Web Developers",
      description:
        "Frontend and backend developers proficient in React, Node.js, and modern web technologies.",
    },
    {
      number: "02",
      title: "Mobile App Developers",
      description:
        "iOS and Android developers with experience in React Native or Flutter.",
    },
    {
      number: "03",
      title: "UI/UX Designers",
      description:
        "Creative designers who can craft intuitive, accessible, and engaging digital experiences.",
    },
    {
      number: "04",
      title: "DevOps & Cloud Engineers",
      description:
        "Infrastructure specialists with experience in AWS, Azure, GCP, and modern deployment practices.",
    },
  ];

  /* WHY JOIN US */

  const values = [
    {
      icon: <FaLightbulb />,
      title: "Innovation First",
      description:
        "Work on meaningful technology solutions while solving real-world business challenges.",
    },
    {
      icon: <FaChartLine />,
      title: "Career Growth",
      description:
        "Continuous learning, mentorship, collaboration, and opportunities to grow professionally.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      description:
        "Work alongside talented professionals in a supportive and growth-oriented environment.",
    },
    {
      icon: <FaCode />,
      title: "Modern Technology",
      description:
        "Build with modern technologies across web development, mobile, cloud, and software.",
    },
  ];

  /* OUR JOURNEY */

  const stats = [
    {
      number: "2025",
      label: "Founded",
      description:
        "A journey driven by innovation and ambition.",
    },
    {
      number: "End-to-End",
      label: "Digital Solutions",
      description:
        "From ideas and design to development and deployment.",
    },
    {
      number: "Client-First",
      label: "Approach",
      description:
        "Focused on understanding client needs and goals.",
    },
    {
      number: "Future-Ready",
      label: "Technology",
      description:
        "Building digital solutions with growth in mind.",
    },
  ];

  /* PAGE */

  return (
    <main className="career-page" ref={targetRef}>
      <SEO {...seoData.career} />

      {/* HERO */}

      <section className="career-hero">
        <div className="career-hero-decoration career-circle-one"></div>
        <div className="career-hero-decoration career-circle-two"></div>

        <motion.div
          className="career-hero-content"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <span className="career-eyebrow">
            VIYUGAA TECHNOLOGIES
          </span>

          <h1>
            Build Your
            <br />
            <span>Future With Us</span>
          </h1>

          <div className="career-title-line"></div>

          <p>
            Join a team that transforms ideas into meaningful
            digital solutions through technology, creativity,
            and collaboration.
          </p>

          <motion.button
            className="career-primary-button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={goToContact}
          >
            Explore Opportunities
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className="career-intro">
        <div className="career-container">
          <motion.div
            className="career-intro-grid"
            {...fadeInUp}
          >
            <div className="career-section-label">
              <span>WHY VIYUGAA</span>
            </div>

            <div className="career-intro-content">
              <h2>
                A place to grow,
                <br />
                <span>learn and create.</span>
              </h2>

              <p>
                At Viyugaa Technologies, we believe great
                products are created by great people. We
                encourage curiosity, continuous learning,
                collaboration, and ownership while creating
                solutions that make a real difference.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* WHY JOIN US */}

      <section className="career-values">
        <div className="career-container">
          <motion.div
            className="career-section-heading"
            {...fadeInUp}
          >
            <span>OUR CULTURE</span>

            <h2>Why Join Viyugaa?</h2>

            <p>
              More than a workplace — an environment designed
              for learning, contribution, and professional growth.
            </p>
          </motion.div>

          <motion.div
            className="career-values-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {values.map((value, index) => (
              <motion.article
                className="career-value-card"
                key={index}
                variants={cardAnimation}
              >
                <div className="career-value-number">
                  0{index + 1}
                </div>

                <div className="career-value-icon">
                  {value.icon}
                </div>

                <h3>{value.title}</h3>

                <p>{value.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OPEN POSITIONS */}

      <section className="career-positions">
        <div className="career-container">
          <motion.div
            className="career-section-heading positions-heading"
            {...fadeInUp}
          >
            <span>OPPORTUNITIES</span>

            <h2>Open Positions</h2>

            <p>
              Explore opportunities to become part of our
              growing technology team.
            </p>
          </motion.div>

          <div className="career-position-list">
            {positions.map((position, index) => (
              <motion.article
                className="career-position"
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                }}
              >
                <span className="position-number">
                  {position.number}
                </span>

                <div className="position-content">
                  <h3>{position.title}</h3>
                  <p>{position.description}</p>
                </div>

                <FaArrowRight className="position-arrow" />
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}

      <section className="career-leadership">
        <div className="career-container">
          <motion.div
            className="career-section-heading"
            {...fadeInUp}
          >
            <span>LEADERSHIP</span>

            <h2>Meet Our Leadership</h2>

            <p>
              Visionary leaders guiding Viyugaa Technologies
              toward sustainable growth and innovation.
            </p>
          </motion.div>

          <motion.div
            className="career-team-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.1,
            }}
          >
            {teamMembers.map((member, index) => (
              <motion.article
                className="career-team-card"
                key={index}
                variants={cardAnimation}
              >
                <div className="career-member-image">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                <div className="career-member-content">
                  <span className="member-role">
                    {member.role}
                  </span>

                  <h3>{member.name}</h3>

                  <p>{member.bio}</p>

                  <a
                    href={member.linkedin}
                    className="member-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${member.name}'s LinkedIn profile`}
                  >
                    <FaLinkedinIn />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* OUR JOURNEY — UPDATED */}

      <section className="career-stats">
        <div className="career-container">
          <motion.div
            className="career-section-heading stats-heading"
            {...fadeInUp}
          >
            <span>OUR JOURNEY</span>

            <h2>Growing Through Innovation</h2>

            <p>
              Building meaningful digital solutions through
              technology, creativity, and lasting partnerships.
            </p>
          </motion.div>

          <motion.div
            className="career-stats-grid"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
          >
            {stats.map((stat, index) => (
              <motion.article
                className="career-stat"
                key={index}
                variants={cardAnimation}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
              >
                <strong>{stat.number}</strong>

                <span>{stat.label}</span>

                <p>{stat.description}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}

      <section className="career-cta">
        <div className="career-cta-decoration"></div>

        <motion.div
          className="career-cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
        >
          <span>START YOUR JOURNEY</span>

          <h2>
            Ready to grow
            <br />
            with us?
          </h2>

          <p>
            Take the next step in your career and become part
            of our growing team.
          </p>

          <motion.button
            className="career-primary-button"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
            onClick={goToContact}
          >
            Apply Now
            <FaArrowRight />
          </motion.button>
        </motion.div>
      </section>
    </main>
  );
}
