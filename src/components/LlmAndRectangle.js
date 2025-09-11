import React from "react";
import "./LlmAndRectangle.css";

import llmImage from "../assets/llm.png";

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

export const LlmAndRectangleWrapper = () => {
  return (
    <div id="products" className="llm-rectangle-wrapper">
      <LlmSection />
    </div>
  );
};
