import React from "react";
import "./Footer.css";
import logo from "../assets/logo.png"; // adjust path if needed
import arrowImg from "../assets/arrow.png"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Company Logo" className="footer-logo" />

        <nav className="footer-links footer-links--compact">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">Pinterest</a>
        </nav>

        <p className="footer-text">We'll keep you updated!</p>
        <p className="email-label email-label-position">Enter your Email address</p>

        <form className="email-form" onSubmit={(e) => e.preventDefault()}>
          <div className="email-input-wrap email-input-position">
            <input
              type="email"
              className="email-input"
              placeholder=""
              aria-label="Email address"
              required
            />
            <button type="submit" className="email-submit" aria-label="Submit email">
              <img src={arrowImg} alt="Submit" className="arrow-icon" />
            </button>

          </div>
        </form>
      </div>

      {/* Quick links column (single) */}
      <div className="footer-quicklinks quicklinks-position">
        <h3 className="quicklinks-title">Quick links</h3>
        <ul className="quicklinks-list">
          <li><a href="#" className="quicklink-item">About Us</a></li>
          <li><a href="#" className="quicklink-item">Services</a></li>
          <li><a href="#" className="quicklink-item">Products</a></li>
          <li><a href="#" className="quicklink-item">Contact Us</a></li>
          <li><a href="#" className="quicklink-item">Home</a></li>
        </ul>
      </div>

      {/* Products column */}
      <div className="footer-quicklinks products-position">
        <h3 className="quicklinks-title">Products</h3>
        <ul className="quicklinks-list">
          <li><a href="#" className="quicklink-item">Call Center</a></li>
          <li><a href="#" className="quicklink-item">LLM</a></li>
          <li><a href="#" className="quicklink-item">Agentic AI</a></li>
          <li><a href="#" className="quicklink-item">Cloud Solutions</a></li>
        </ul>
      </div>

      {/* Company column (new) */}
      <div className="footer-quicklinks company-position">
        <h3 className="quicklinks-title">Company</h3>
        <ul className="quicklinks-list">
          <li><a href="#" className="quicklink-item">Media center</a></li>
          <li><a href="#" className="quicklink-item">Our partners</a></li>
          <li><a href="#" className="quicklink-item">Linked-in</a></li>
        </ul>
      </div>

      {/* Bottom-right copyright */}
      <div className="footer-rights">
        <span className="rights-symbol">©</span>
        <span className="rights-text">&nbsp;2025 Alphanio Nexgen All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
