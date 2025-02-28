import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 998;

  const navItems = [
    {
      label: "Videos",
      to: "/videos",
      subItems: [
        { label: "Tutorials", to: "/tutorials" },
        { label: "Guides", to: "/guides" },
        { label: "Docs", to: "/docs" },
      ],
    },
    {
      label: "Websites",
      to: "/websites",
      subItems: [
        { label: "Templates", to: "/templates" },
        { label: "Examples", to: "/examples" },
      ],
    },
    {
      label: "Logos",
      to: "/logos",
      subItems: [
        { label: "Branding", to: "/branding" },
        { label: "Logo Set", to: "/logoset" },
      ],
    },
    {
      label: "Mockups",
      to: "/mockups",
      subItems: [
        { label: "Print", to: "/print" },
        { label: "Web", to: "/web" },
      ],
    },
    {
      label: "Designs",
      to: "/designs",
      subItems: [
        { label: "Minimal", to: "/minimal" },
        { label: "Modern", to: "/modern" },
      ],
    },
    {
      label: "Explore AI",
      to: "/explore-ai",
      subItems: [
        { label: "AI Video Generator", to: "/VideoGenerator" },
        { label: "Text to video Ai", to: "/ai-projects" },
        { label: "Ai Animation Generator", to: "/AnimationGenerator" },
        { label: "Ai Carton Generator", to: "/" },
      ],
    },
  ];

  return (
    <header className="main-header">
      <div className="navbar">
        <div className="navbar-links">
          <NavLink to="/">
            <img className="logo" src="/download.png" alt="logo" />
          </NavLink>

          <div className="hamburger" onClick={toggleMobileMenu}>
            <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
            <div className={`bar ${isMobileMenuOpen ? "open" : ""}`}></div>
          </div>

          <div className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            {navItems.map((item) => (
              <div key={item.to} className="dropdown">
                {isMobile ? (
                  <p className="navLink">{item.label}</p>
                ) : (
                  <NavLink to={item.to} className="navLink">
                    {item.label}
                  </NavLink>
                )}
                <div className="dropdown-content">
                  {item.subItems.map((subItem) => (
                    <NavLink
                      key={subItem.to}
                      to={subItem.to}
                      className="dropdown-item"
                    >
                      {subItem.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="end-links">
          <NavLink to="/pricing" className="navLink-pricing">
            Pricing
          </NavLink>

          <div className="dropdown">
            <p className="navLink">Learn</p>
            <div className="dropdown-content">
              <NavLink to="/tutorials">Tutorials</NavLink>
              <NavLink to="/guides">Guides</NavLink>
              <NavLink to="/docs">Docs</NavLink>
            </div>
          </div>

          <div className="dropdown">
            <p className="navLink">Languages</p>
            <div className="dropdown-content">
              <NavLink to="/english">English</NavLink>
              <NavLink to="/spanish">Spanish</NavLink>
              <NavLink to="/french">French</NavLink>
            </div>
          </div>

          <NavLink to="/signin" className="button sign-in">
            Sign In
          </NavLink>

          <NavLink to="/try-for-free" className="button try-for-free">
            Try for Free
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
