
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/header.css";
import InstallPrompt from "./InstallPrompt";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = () => setDrawerOpen(false);
  const openDrawer = () => setDrawerOpen(true);

  return (
    <header className="header" data-aos="fade-down">
      <div className="header-inner">
        {/* LOGO */}
        <div className="header-left">
          <Link to="/" className="brand" onClick={closeDrawer}>
            <img
              src="/logo.png"
              alt="Viyugaa Technologies"
              className="brand-logo"
            />
            <div className="brand-text">
              <div className="brand-name">Viyugaa Technologies</div>
              <div className="brand-tag">
                Crafting digital experiences that scale
              </div>
            </div>
          </Link>
        </div>

        {/* MOBILE DRAWER */}
        <div
          className={`mobile-drawer${drawerOpen ? " open" : ""}`}
          role="dialog"
          aria-modal="true"
          aria-hidden={!drawerOpen}
        >
          <div className="mobile-drawer-header">
            <div className="mobile-menu-title">Menu</div>
            <button
              type="button"
              className="close-drawer"
              aria-label="Close menu"
              onClick={closeDrawer}
            >
              ✕
            </button>
          </div>

          <nav className="mobile-nav">
            <NavLink to="/" className="nav-link" onClick={closeDrawer}>
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="nav-link"
              onClick={closeDrawer}
            >
              Services
            </NavLink>
            <NavLink
              to="/technologies"
              className="nav-link"
              onClick={closeDrawer}
            >
              Technologies
            </NavLink>
            <NavLink
              to="/projects"
              className="nav-link"
              onClick={closeDrawer}
            >
              Projects
            </NavLink>
            <NavLink
              to="/career"
              className="nav-link"
              onClick={closeDrawer}
            >
              Career
            </NavLink>
            <NavLink
              to="/contact"
              className="nav-link"
              onClick={closeDrawer}
            >
              Contact
            </NavLink>
          </nav>
        </div>

        {/* RIGHT SIDE */}
        <div className="header-right">
          <button
            type="button"
            aria-label="Open menu"
            className="hamburger"
            onClick={openDrawer}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6h18M3 12h18M3 18h18"
                stroke="#222"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* DESKTOP NAVIGATION */}
          <nav className="nav">
            <NavLink to="/services" className="nav-btn">
              Services
            </NavLink>
            <NavLink to="/technologies" className="nav-btn">
              Technologies
            </NavLink>
            <NavLink to="/projects" className="nav-btn">
              Projects
            </NavLink>
            <NavLink to="/career" className="nav-btn">
              Career
            </NavLink>
            <NavLink to="/contact" className="nav-btn">
              Contact Us
            </NavLink>
          </nav>

          <div className="install-wrapper">
            <InstallPrompt />
          </div>
        </div>
      </div>
    </header>
  );
}