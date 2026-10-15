import React from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaPhp,
  FaAndroid,
  FaApple,
  FaMobileAlt,
  FaCode,
  FaArrowRight,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiDotnet,
  SiSharp,
  SiFlutter,
  SiVuedotjs,
  SiMongodb,
} from "react-icons/si";

import "../styles/technologies.css";

const technologyCategories = [
  {
    id: "frontend",
    number: "01",
    title: "Front End Technologies",
    description:
      "Modern frontend technologies for responsive, interactive and engaging digital experiences.",

    technologies: [
      {
        name: "ReactJS",
        path: "/technologies/reactjs",
        icon: <FaReact />,
        description:
          "A component-based library for building dynamic and scalable web interfaces.",
      },

      {
        name: "AngularJS",
        path: "/technologies/angularjs",
        icon: <FaAngular />,
        description:
          "A structured framework for developing feature-rich web applications.",
      },

      {
        name: "Knockout.js",
        path: "/technologies/knockoutjs",
        icon: <FaCode />,
        description:
          "A JavaScript library for responsive user interfaces with data binding.",
      },

      {
        name: "Vue.js",
        path: "/technologies/vuejs",
        icon: <SiVuedotjs />,
        description:
          "A progressive framework for flexible and interactive web applications.",
      },

      {
        name: "Next.js",
        path: "/technologies/nextjs",
        icon: <SiNextdotjs />,
        description:
          "A React framework for modern, performant web applications.",
      },
    ],
  },

  {
    id: "backend",
    number: "02",
    title: "Backend Technologies",
    description:
      "Backend technologies for APIs, business logic, data processing and application services.",

    technologies: [
      {
        name: "ASP.NET",
        path: "/technologies/aspnet",
        icon: <SiDotnet />,
        description:
          "Microsoft technology for developing robust web applications and services.",
      },

      {
        name: "ASP.NET Core",
        path: "/technologies/aspnetcore",
        icon: <SiDotnet />,
        description:
          "A cross-platform framework for high-performance web apps and APIs.",
      },

      {
        name: "VB.NET",
        path: "/technologies/vbnet",
        icon: <FaCode />,
        description:
          "A Microsoft programming language used for application development.",
      },

      {
        name: "C#",
        path: "/technologies/csharp",
        icon: <SiSharp />,
        description:
          "A versatile language for web, desktop, cloud and enterprise software.",
      },

      {
        name: "PHP",
        path: "/technologies/php",
        icon: <FaPhp />,
        description:
          "A server-side scripting language used to build dynamic websites.",
      },

      {
        name: "Node.js",
        path: "/technologies/nodejs",
        icon: <FaNodeJs />,
        description:
          "A JavaScript runtime for scalable backend applications and APIs.",
      },
    ],
  },

  {
    id: "mobile",
    number: "03",
    title: "Mobile Technologies",
    description:
      "Mobile development technologies for building applications across devices.",

    technologies: [
      {
        name: "Android",
        path: "/technologies/android",
        icon: <FaAndroid />,
        description:
          "A platform for developing applications across a wide range of mobile devices.",
      },

      {
        name: "Flutter",
        path: "/technologies/flutter",
        icon: <SiFlutter />,
        description:
          "A cross-platform framework for apps built from a shared codebase.",
      },

      {
        name: "iOS",
        path: "/technologies/ios",
        icon: <FaApple />,
        description:
          "Apple's platform for developing apps for iPhone and iPad.",
      },

      {
        name: "React Native",
        path: "/technologies/react-native",
        icon: <FaMobileAlt />,
        description:
          "A framework for building cross-platform mobile apps using React.",
      },

      {
        name: "On-Demand App Solutions",
        path: "/technologies/ondemandappsolutions",
        icon: <FaCode />,
        description:
          "Application solutions designed around on-demand services and user needs.",
      },
    ],
  },

  {
    id: "database",
    number: "04",
    title: "Database Technologies",
    description:
      "Database platforms that support structured data storage and application management.",

    technologies: [
      {
        name: "Microsoft SQL Server",
        path: "/technologies/mssqlserver",

        // Replaced SiMicrosoftsqlserver because
        // it is not available in your installed react-icons version.
        icon: <FaCode />,

        description:
          "A relational database platform for structured business and application data.",
      },

      {
        name: "MongoDB",
        path: "/technologies/mongodb",
        icon: <SiMongodb />,
        description:
          "A document-oriented database for flexible application data management.",
      },
    ],
  },
];

function TechnologyCard({ technology, index }) {
  return (
    <NavLink
      to={technology.path}
      className="technology-card-link"
      aria-label={`Explore ${technology.name}`}
    >
      <motion.article
        className="technology-card"
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.15 }}
        whileHover={{ y: -6 }}
        transition={{
          duration: 0.35,
          delay: (index % 4) * 0.04,
        }}
      >
        <div className="technology-card-top">
          <div className="technology-icon">
            {technology.icon}
          </div>

          <span
            className="technology-arrow"
            aria-hidden="true"
          >
            <FaArrowRight />
          </span>
        </div>

        <h3>{technology.name}</h3>

        <p>{technology.description}</p>
      </motion.article>
    </NavLink>
  );
}

export default function Technologies() {
  return (
    <main className="technologies-page">

      {/* HERO */}
      <section className="technologies-hero">
        <div
          className="technologies-hero-background"
          aria-hidden="true"
        >
          <span className="tech-orb tech-orb-one" />
          <span className="tech-orb tech-orb-two" />

          <span className="tech-line tech-line-one" />
          <span className="tech-line tech-line-two" />
        </div>

        <motion.div
          className="technologies-hero-content"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="technologies-eyebrow">
            VIYUGAA TECHNOLOGIES
          </span>

          <h1>
            Technologies We
            <span>Work With</span>
          </h1>

          <p>
            Explore the technologies and development frameworks we use to
            build scalable, responsive and reliable digital solutions.
          </p>
        </motion.div>
      </section>

      {/* INTRO */}
      <section className="technologies-intro">
        <div className="technologies-container">
          <motion.div
            className="technologies-intro-content"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="section-label">
              OUR TECHNOLOGY STACK
            </span>

            <h2>
              The right technology for every digital challenge
            </h2>

            <p>
              Browse our technology stack by area. Select a technology card
              to visit its dedicated page.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TECHNOLOGY CATEGORIES */}
      <section className="technology-categories">
        <div className="technologies-container">

          {technologyCategories.map(
            (category, categoryIndex) => (
              <motion.section
                className="technology-category"
                key={category.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.08,
                }}
                transition={{
                  duration: 0.5,
                  delay: categoryIndex * 0.04,
                }}
              >
                <div className="technology-category-header">

                  <div className="category-number">
                    {category.number}
                  </div>

                  <div className="category-heading">
                    <span>TECHNOLOGY AREA</span>

                    <h2>
                      {category.title}
                    </h2>

                    <p>
                      {category.description}
                    </p>
                  </div>

                </div>

                <div className="technology-grid">
                  {category.technologies.map(
                    (technology, index) => (
                      <TechnologyCard
                        key={technology.name}
                        technology={technology}
                        index={index}
                      />
                    )
                  )}
                </div>
              </motion.section>
            )
          )}

        </div>
      </section>

      {/* CTA */}
      <section className="technologies-cta-section">
        <motion.div
          className="technologies-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <div className="technologies-cta-content">

            <span>
              BUILD WITH THE RIGHT TECHNOLOGY
            </span>

            <h2>
              Have a project in mind?
            </h2>

            <p>
              Tell us about your requirements and let's explore the right
              technology approach for your project.
            </p>

          </div>

          <NavLink
            to="/contact"
            className="technologies-cta-button"
          >
            Discuss Your Project
            <FaArrowRight />
          </NavLink>
        </motion.div>
      </section>

    </main>
  );
}