import React from "react";
import "./FeatureSection.css";

// eslint-disable-next-line no-unused-vars
import heroImg1 from "../assets/hero-img-1.png";
import heroImg2 from "../assets/hero-img-2.png";
import heroImg3 from "../assets/hero-img-3.png";
import diagram1 from "../assets/diagram1.png";


const FeatureSection = () => {
  return (
    <section id="media" className="feature-section">
      {/* Card 1 - Smarter Workflow */}
      <div className="feature-box img-1">
        <div className="img-1-overlay">
          <img src={diagram1} alt="icon" className="img-1-icon" />
          <p className="img-1-title">Smarter Workflow Automation</p>
          <p className="img-1-subtitle">
            Simplify operations and enhance customer experience with AI-driven automation at scale.
          </p>
        </div>
      </div>

      {/* Card 2 - Experience Count */}
      <div className="feature-box img-2">
        <img src={heroImg2} alt="Feature 2" className="feature-img" />
        <div className="feature-overlay">
          <p className="feature-number">13+</p>
          <p className="feature-subtitle">
            Years of hands-on experience designing and deploying AI solutions across mission-critical domains, delivering measurable impact and innovation.
          </p>
        </div>
      </div>

      {/* Card 3 - Customer Success / Impact */}
      <div className="feature-box img-3">
        <img src={heroImg3} alt="Feature 3" className="feature-img" />
        <div className="feature-overlay">
          <p className="feature-number">100K+</p>
          <p className="feature-subtitle">
            Harnessing advanced conversational AI to automate over 10,00000 interactions, driving efficiency, consistency, and customer satisfaction across channels.
          </p>
        </div>
      </div>

    </section>
  );
};

export default FeatureSection;
