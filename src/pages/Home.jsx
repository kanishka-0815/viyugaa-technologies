
import React from "react";
import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaDraftingCompass,
  FaCogs,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaCheckCircle,
  FaLaptopCode,
  FaBuilding,
  FaHeartbeat,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/home.css";

const services = [
  {
    icon: FaCode,
    title: "Web Development",
    description:
      "Responsive, user-friendly websites designed around your business needs and goals.",
    tag: "Web solutions",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile App Development",
    description:
      "Mobile experiences that help you connect with customers wherever they are.",
    tag: "Mobile solutions",
  },
  {
    icon: FaLaptopCode,
    title: "Custom Software",
    description:
      "Purpose-built applications that simplify workflows and solve real business challenges.",
    tag: "Software engineering",
  },
  {
    icon: FaDraftingCompass,
    title: "UI/UX Design",
    description:
      "Thoughtful interfaces focused on usability, clarity, and meaningful user experiences.",
    tag: "Design",
  },
  {
    icon: FaCloud,
    title: "Cloud Solutions",
    description:
      "Modern digital infrastructure to support collaboration, flexibility, and growth.",
    tag: "Cloud technology",
  },
  {
    icon: FaCogs,
    title: "Technology Consulting",
    description:
      "Practical technical guidance to help you plan, improve, and move forward confidently.",
    tag: "Digital strategy",
  },
];

const industries = [
  {
    icon: FaBuilding,
    title: "Business",
    description: "Digital tools for everyday business operations.",
  },
  {
    icon: FaHeartbeat,
    title: "Healthcare",
    description: "Technology supporting more efficient workflows.",
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    description: "Digital experiences for learning and development.",
  },
];

const workSteps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your goals, requirements, and the problem you want to solve.",
  },
  {
    number: "02",
    title: "Plan & Design",
    description:
      "We shape the idea into a clear solution with usability and purpose in mind.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop and refine the solution around your agreed requirements.",
  },
  {
    number: "04",
    title: "Improve",
    description:
      "We help identify opportunities to refine the product as your needs evolve.",
  },
];

const values = [
  {
    icon: FaLightbulb,
    title: "Purposeful thinking",
    description:
      "We focus on the problem first, then work toward a practical digital solution.",
  },
  {
    icon: FaUsers,
    title: "Clear collaboration",
    description:
      "We value open communication, shared understanding, and working together.",
  },
  {
    icon: FaShieldAlt,
    title: "Quality-focused work",
    description:
      "We aim for clean, maintainable solutions designed with your requirements in mind.",
  },
];

const technologies = [
  { name: "React", image: "/images/home page/react.png" },
  { name: "Node.js", image: "/images/home page/nodejs.png" },
  { name: "Figma", image: "/images/home page/figma.png" },
  { name: "Google Cloud", image: "/images/home page/googlecloud.png" },
];

const Home = () => {
  return (
    <main className="viyugaa-home">
      {/* HERO */}
      <section className="vh-hero">
        <div className="vh-hero-background" aria-hidden="true">
          <span className="vh-hero-circle vh-circle-one" />
          <span className="vh-hero-circle vh-circle-two" />
          <span className="vh-hero-grid" />
        </div>

        <div className="vh-container vh-hero-layout">
          <motion.div
            className="vh-hero-copy"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="vh-eyebrow">
              <span className="vh-eyebrow-dot" />
              TECHNOLOGY FOR A CHANGING WORLD
            </div>

            <p className="vh-welcome">WELCOME TO VIYUGAA TECHNOLOGIES</p>

            <h1>
              Ideas into
              <br />
              <span>Digital Impact.</span>
            </h1>

            <p className="vh-hero-description">
              We help businesses transform ideas into purposeful digital
              solutions through web development, mobile applications, and
              custom software built around real-world needs.
            </p>

            <div className="vh-hero-actions">
              <Link to="/contact" className="vh-button vh-button-primary">
                Discuss Your Project
                <FaArrowRight />
              </Link>

              <Link to="/services" className="vh-button vh-button-outline">
                Explore Our Services
              </Link>
            </div>

            <div className="vh-hero-note">
              <span className="vh-note-icon">
                <FaLightbulb />
              </span>
              <div>
                <strong>Thoughtful solutions.</strong>
                <p>Built around your business goals.</p>
              </div>
            </div>
          </motion.div>

          {/* Abstract visual: no robot, no Spline, no floating promo cards */}
          <motion.div
            className="vh-hero-art"
            aria-hidden="true"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="vh-art-orbit vh-art-orbit-one" />
            <div className="vh-art-orbit vh-art-orbit-two" />
            <div className="vh-art-orbit vh-art-orbit-three" />

            <div className="vh-art-center">
              <div className="vh-art-icon">
                <FaCode />
              </div>
              <span>IDEAS</span>
              <div className="vh-art-divider" />
              <span>INNOVATION</span>
            </div>

            <span className="vh-art-node vh-node-one">
              <FaLaptopCode />
            </span>
            <span className="vh-art-node vh-node-two">
              <FaMobileAlt />
            </span>
            <span className="vh-art-node vh-node-three">
              <FaCloud />
            </span>

            <span className="vh-art-dot vh-dot-one" />
            <span className="vh-art-dot vh-dot-two" />
            <span className="vh-art-dot vh-dot-three" />
          </motion.div>
        </div>

        <div className="vh-hero-footer">
          <span>INNOVATION</span>
          <i />
          <span>ENGINEERING</span>
          <i />
          <span>GROWTH</span>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="vh-section vh-intro-section">
        <div className="vh-container vh-intro-layout">
          <div className="vh-section-heading">
            <p className="vh-section-label">WHO WE ARE</p>
            <h2>
              Technology with
              <br />
              <span>a clear purpose.</span>
            </h2>
          </div>

          <div className="vh-intro-copy">
            <p>
              Viyugaa Technologies is a growing technology company founded in
              2025. We focus on creating practical digital solutions that
              connect business needs with thoughtful design and modern
              engineering.
            </p>
            <p>
              Our approach begins with understanding your goals and finding
              the right way to turn your ideas into useful digital experiences.
            </p>

            <Link to="/about" className="vh-text-link">
              Discover Viyugaa <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="vh-section vh-services-section">
        <div className="vh-container">
          <div className="vh-section-top">
            <div className="vh-section-heading">
              <p className="vh-section-label">WHAT WE DO</p>
              <h2>
                Our <span>Services</span>
              </h2>
              <p className="vh-section-description">
                Practical technology services to help turn your business
                requirements into digital solutions.
              </p>
            </div>

            <Link to="/services" className="vh-button vh-button-light">
              View All Services <FaArrowRight />
            </Link>
          </div>

          <div className="vh-services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="vh-service-card"
                  key={service.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.4, delay: index * 0.04 }}
                >
                  <div className="vh-service-card-top">
                    <span className="vh-service-icon">
                      <Icon />
                    </span>
                    <span className="vh-service-number">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="vh-service-tag">{service.tag}</p>
                  <h3>{service.title}</h3>
                  <p className="vh-service-description">
                    {service.description}
                  </p>

                  <Link
                    to="/services"
                    className="vh-card-link"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    Learn more <FaArrowRight />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT / WHY VIYUGAA */}
      <section className="vh-section vh-about-section">
        <div className="vh-container vh-about-layout">
          <div className="vh-about-visual">
            <div className="vh-about-panel">
              <div className="vh-about-panel-top">
                <span className="vh-about-mark">V.</span>
                <span>VIYUGAA TECHNOLOGIES</span>
              </div>

              <div className="vh-about-big-text">
                Built with
                <br />
                <span>purpose.</span>
              </div>

              <div className="vh-about-panel-bottom">
                <span className="vh-about-line" />
                <p>Ideas. Engineering. Growth.</p>
              </div>
            </div>

            <div className="vh-founded-note">
              <span className="vh-founded-icon">
                <FaCheckCircle />
              </span>
              <span>
                <small>OUR JOURNEY BEGAN</small>
                <strong>2025</strong>
              </span>
            </div>
          </div>

          <div className="vh-about-content">
            <p className="vh-section-label">WHY VIYUGAA</p>
            <h2>
              A fresh perspective.
              <br />
              <span>A focused approach.</span>
            </h2>

            <p className="vh-about-description">
              As a growing technology company, we bring curiosity, care, and
              a practical mindset to every project. We believe good technology
              should make things clearer, simpler, and more useful.
            </p>

            <div className="vh-value-list">
              {values.map((value) => {
                const Icon = value.icon;

                return (
                  <div className="vh-value-item" key={value.title}>
                    <span className="vh-value-icon">
                      <Icon />
                    </span>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link to="/contact" className="vh-text-link">
              Let's work together <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="vh-section vh-process-section">
        <div className="vh-container">
          <div className="vh-centered-heading">
            <p className="vh-section-label">HOW WE WORK</p>
            <h2>
              From first idea
              <br />
              <span>to a clear solution.</span>
            </h2>
            <p className="vh-section-description">
              A collaborative process that keeps your goals at the center.
            </p>
          </div>

          <div className="vh-process-grid">
            {workSteps.map((step) => (
              <article className="vh-process-card" key={step.number}>
                <span className="vh-process-number">{step.number}</span>
                <div className="vh-process-rule" />
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="vh-section vh-industries-section">
        <div className="vh-container">
          <div className="vh-section-heading vh-industries-heading">
            <p className="vh-section-label">WHERE WE CAN HELP</p>
            <h2>
              Solutions for different
              <br />
              <span>business needs.</span>
            </h2>
            <p className="vh-section-description">
              We work to understand the needs of different teams and
              organizations before shaping a solution.
            </p>
          </div>

          <div className="vh-industries-grid">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <article className="vh-industry-card" key={industry.title}>
                  <span className="vh-industry-icon">
                    <Icon />
                  </span>
                  <div>
                    <h3>{industry.title}</h3>
                    <p>{industry.description}</p>
                  </div>
                  <FaArrowRight className="vh-industry-arrow" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGIES */}
      <section className="vh-section vh-tech-section">
        <div className="vh-container">
          <div className="vh-centered-heading">
            <p className="vh-section-label">OUR TECHNOLOGY LANDSCAPE</p>
            <h2>
              Tools for building
              <br />
              <span>digital experiences.</span>
            </h2>
            <p className="vh-section-description">
              We select technologies based on the needs and goals of each
              project.
            </p>
          </div>

          <div className="vh-tech-grid">
            {technologies.map((tech) => (
              <div className="vh-tech-card" key={tech.name}>
                <div className="vh-tech-image-wrap">
                  <img
                    src={tech.image}
                    alt={`${tech.name} logo`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section className="vh-cta-section">
        <div className="vh-container">
          <div className="vh-cta-panel">
            <div className="vh-cta-decoration" aria-hidden="true" />
            <div className="vh-cta-content">
              <p className="vh-section-label">HAVE AN IDEA?</p>
              <h2>
                Let's build something
                <br />
                <span>meaningful together.</span>
              </h2>
              <p>
                Tell us what you're working on. Let's explore how technology
                can support your next step.
              </p>
            </div>

            <Link to="/contact" className="vh-button vh-button-primary vh-cta-button">
              Discuss Your Project <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
