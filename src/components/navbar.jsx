import React from "react";
import "../styles/Navbar.css";

const Navbar = () => {
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
        { label: "AI Tools", to: "/ai-tools" },
        { label: "AI Projects", to: "/ai-projects" },
      ],
    },
  ];

  return (
    <div className="navbar">
      <div className="navbar-links">
        <img className="logo" src="/download.png" alt="logo" />

        {navItems.map((item) => (
          <div key={item.to} className="dropdown">
            <p to={item.to} className="navLink">
              {item.label}
            </p>
            <div className="dropdown-content">
              {item.subItems.map((subItem) => (
                <p key={subItem.to} to={subItem.to}>
                  {subItem.label}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="end-links">
        <p to="/pricing" className="navLink-pricing">
          Pricing
        </p>
        <div className="dropdown">
          <p to="#" className="navLink">
            Learn
          </p>
          <div className="dropdown-content">
            <p to="/tutorials">Tutorials</p>
            <p to="/guides">Guides</p>
            <p to="/docs">Docs</p>
          </div>
        </div>

        <div className="dropdown">
          <p to="#" className="navLink">
            Languages
          </p>
          <div className="dropdown-content">
            <p to="/english">English</p>
            <p to="/spanish">Spanish</p>
            <p to="/french">French</p>
          </div>
        </div>

        <p to="/signin" className="button sign-in">
          Sign In
        </p>

        <p to="/try-for-free" className="button try-for-free">
          Try for Free
        </p>
      </div>
    </div>
  );
};

export default Navbar;
