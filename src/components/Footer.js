import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

const Footer = () => {
  return (
    <footer id="contact" className="footer">
      {/* Logo */}
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />
      </div>

      {/* ✅ Grouped links */}
      <div className="footer-links">
        {/* Quick links */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Quick links</h3>
          <ul className="quicklinks-list">
            <li>
              <HashLink smooth to="/#about" className="quicklink-item">
                About Us
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" className="quicklink-item">
                Services
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#products" className="quicklink-item">
                Products
              </HashLink>
            </li>
            <li>
              <a
                href="https://www.google.com/maps/place/Alphanio+Nexgen/@12.9779248,77.6373175,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="quicklink-item"
              >
                Contact Us
              </a>
            </li>
            <li>
              <HashLink smooth to="/#about" className="quicklink-item">
                Home
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Products</h3>
          <ul className="quicklinks-list">
            <li>
              <HashLink smooth to="/#services" className="quicklink-item">
                Call Center
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#products" className="quicklink-item">
                LLM
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#Agentic AI" className="quicklink-item">
                Agentic AI
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#services" className="quicklink-item">
                Cloud Solutions
              </HashLink>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Company</h3>
          <ul className="quicklinks-list">
            <li>
              <HashLink smooth to="/#media" className="quicklink-item">
                Media center
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/#partners" className="quicklink-item">
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
