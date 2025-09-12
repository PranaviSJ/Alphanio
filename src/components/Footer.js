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
  <a
    href="https://www.google.com/maps/place/Alphanio+Nexgen/@12.9779248,77.6373175,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1724464f9b41:0x2087065a01ae572d!8m2!3d12.9779248!4d77.6398924!16s%2Fg%2F11q9m8yx8g?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"
    target="_blank"
    rel="noopener noreferrer"
    className="quicklink-item"
  >
    Contact Us
  </a>
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
