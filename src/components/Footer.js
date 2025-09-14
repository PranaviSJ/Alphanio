import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";
import { features } from "./LlmAndRectangle";

const OFFSET = 120; // pixels from top

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      {/* Logo */}
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />
      </div>

      {/* Links */}
      <div className="footer-links">
        {/* Quick links */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Quick links</h3>
          <ul className="quicklinks-list">
            <li>
              <HashLink
                smooth
                to="/#about"
                scroll={el => window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })}
                className="quicklink-item"
              >
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#services"
                scroll={el => window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })}
                className="quicklink-item"
              >
                Services
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#products"
                scroll={el => window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })}
                className="quicklink-item"
              >
                Products
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Products dynamically scroll to feature heading with offset */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Products</h3>
          <ul className="quicklinks-list">
            {features.map((feature, index) => (
              <li key={index}>
                <HashLink
                  smooth
                  to={`/#${feature.title.replace(/\s+/g, "-")}`}
                  scroll={el => window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })}
                  className="quicklink-item"
                >
                  {feature.title}
                </HashLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Company</h3>
          <ul className="quicklinks-list">
            <li>
              <HashLink
                smooth
                to="/#media"
                scroll={el => window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })}
                className="quicklink-item"
              >
                Media center
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#partners"
                scroll={el => window.scrollTo({ top: el.offsetTop - OFFSET, behavior: "smooth" })}
                className="quicklink-item"
              >
                Our partners
              </HashLink>
            </li>
          </ul>
        </div>
      </div>

      {/* Rights */}
      <div className="footer-rights">
        <span className="rights-symbol">©</span>
        <span className="rights-text">
          &nbsp;2025 Alphanio Nexgen All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
