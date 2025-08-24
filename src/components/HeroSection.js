import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section id="about" className="hero-section">
      <div className="hero-text-block">
        <p className="mini-heading">Think Smarter. Think AI.</p>

        <h1 className="main-heading">
          Empowering<br />
          People with AI<br />
          Solutions
        </h1>

        <div className="sub-heading">
          <p>
            We specialize in building AI-powered solutions that enhance productivity
            and decision-making. At Alphanio Nexgen, we're shaping the future with
            smart, adaptive technologies.
          </p>
        </div>

        <div className="hero-buttons">
          <button className="btn black">Get Started</button>
          <button className="btn transparent">Watch Demo</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
