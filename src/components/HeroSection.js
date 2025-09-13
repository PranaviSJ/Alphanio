import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-text-block">
        <p className="mini-heading">Think Smarter. Think AI.</p>

        <h1 className="main-heading">
          Empowering<br />
          Telecom with Intelligent<br />
          Contact Center Solutions
        </h1>

        <div className="sub-heading">
          <p>
            At Alphanio Nexgen, we engineer AI-powered platforms that transform telecom operations with precision, agility, and insight. Our adaptive technologies are redefining customer experience and operational resilience through advanced Contact Center LLM integration
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
