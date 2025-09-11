import React from "react";
import { useNavigate } from "react-router-dom";   
import "./Footer.css";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();  

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
            <li><a href="#about" className="quicklink-item">About Us</a></li>
            <li><a href="#services" className="quicklink-item">Services</a></li>
            <li><a href="#products" className="quicklink-item">Products</a></li>
            <li>
              <span 
                onClick={() => navigate("/chat")} 
                className="quicklink-item quicklink-clickable"
              >
                Contact Us
              </span>
            </li>
            <li><a href="#about" className="quicklink-item">Home</a></li>
          </ul>
        </div>

        {/* Products */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Products</h3>
          <ul className="quicklinks-list">
            <li><a href="#services" className="quicklink-item">Call Center</a></li>
            <li><a href="#products" className="quicklink-item">LLM</a></li>
            <li><a href="#Agentic AI" className="quicklink-item">Agentic AI</a></li>
            <li><a href="#services" className="quicklink-item">Cloud Solutions</a></li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-quicklinks">
          <h3 className="quicklinks-title">Company</h3>
          <ul className="quicklinks-list">
            <li><a href="#media" className="quicklink-item">Media center</a></li>
            <li><a href="#partners" className="quicklink-item">Our partners</a></li>
            <li>
              <a 
                href="https://www.linkedin.com/company/alphanio-nexgen/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="quicklink-item"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Rights */}
      <div className="footer-rights">
        <span className="rights-symbol">©</span>
        <span className="rights-text">&nbsp;2025 Alphanio Nexgen All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
