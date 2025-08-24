import React from "react";
import "./LlmAndRectangle.css";

import llmImage from "../assets/llm.png";
import rectangleImage from "../assets/Rectangle.png";
import externalLinkIcon from "../assets/ExternalLink.png";

export const LlmSection = () => {
  return (
    <section className="llm-section">
      <div className="llm-content">
        <h1 className="llm-heading">
          <span className="gradient-text">LLM</span> for smarter Customer Communication
        </h1>

        <ul className="llm-bullets">
          <li>Data-Driven Insights</li>
          <li>Smart Conversations</li>
          <li>Automated follow-ups</li>
        </ul>
      </div>

      <div className="llm-image-container">
        <img src={llmImage} alt="LLM Illustration" className="llm-image" />
      </div>
    </section>
  );
};

export const Rectangle = () => {
  return (
    <div className="rectangle-container">
      <div className="rectangle-with-text">
        <img src={rectangleImage} alt="Rectangle 1" className="rectangle-img" />
        <div className="text-overlay">
          <p className="llm-text">
            Try our LLM in your
            <br />
            Application
          </p>
          <div className="learn-more-container">
            <span className="learn-more-text">Learn More</span>
            <img src={externalLinkIcon} alt="External link" className="external-link-icon" />
          </div>
        </div>
      </div>
      <div className="rectangle-with-text right-rectangle-text">
        <img src={rectangleImage} alt="Rectangle 2" className="rectangle-img" />
        <div className="text-overlay right-text-overlay">
          <p className="right-rectangle-text-main">
            Multilingual Communication <br />
            & Personalization
          </p>
          <span className="right-explore-now">Explore Now →</span>
        </div>
      </div>
    </div>
  );
};

export const LlmAndRectangleWrapper = () => {
  return (
    <div id = "products" className="llm-rectangle-wrapper">
      <LlmSection />
      <Rectangle />
    </div>
  );
};
