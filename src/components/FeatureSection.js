import React from "react";
import "./FeatureSection.css";

// eslint-disable-next-line no-unused-vars
import heroImg1 from "../assets/hero-img-1.png";
import heroImg2 from "../assets/hero-img-2.png";
import heroImg3 from "../assets/hero-img-3.png";
import diagram1 from "../assets/diagram1.png";
import playIcon from "../assets/Play.png";

const FeatureSection = () => {
  return (
    <section id = "media"className="feature-section">
      {/* Card 1 - Smarter Workflow */}
      <div
        className="feature-box img-1"

      >
        <div className="img-1-overlay">
          <img src={diagram1} alt="icon" className="img-1-icon" />
          <p className="img-1-title">Smarter Workflow Automation</p>
        </div>
      </div>

      {/* Card 2 - Experience Count */}
      <div className="feature-box img-2">
        <img src={heroImg2} alt="Feature 2" className="feature-img" />
        <div className="feature-overlay">
          <p className="feature-number">3+</p>
          <p className="feature-subtitle">
            Years of experience in crafting AI solutions
          </p>
        </div>
      </div>

      {/* Card 3 - Play Video */}
      <div
        className="feature-box img-3"
        style={{ backgroundImage: `url(${heroImg3})` }}
      >
        <div className="img-3-left-text">
          <p className="img-3-line">Discover what our AI</p>
          <p className="img-3-line">can do</p>
        </div>
        <a
          href="https://youtu.be/U6fC4Ij608A?si=m9c6SM4BHfTFjwTw"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playIcon} alt="Play" className="img-3-play-icon" />
        </a>

      </div>
    </section>
  );
};

export default FeatureSection;
