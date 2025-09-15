import React from "react";
import "./AgentAi.css";
import agentImage from "../assets/Agent.png"; 

const AgentAi = () => {
  return (
    <section id="Agentic AI" className="agent-ai-wrapper">
      <div className="agent-ai-content">
        <div className="agent-ai-text-group">
          <h1 className="agent-ai-heading">
            <span className="make-gradient"> Why Alpha Suite?</span>
          </h1>
          <ul className="agent-ai-description">
            <li>Omnichannel Integration: Unified across voice, chat, email, and social platforms</li>
            <li>LLM-Powered Intelligence: Context-aware, adaptive, and continuously learning</li>
            <li>Enterprise-Grade Security: Built for compliance across BFSI, healthcare, and telecom</li>
            <li>Scalable Architecture: Modular deployment for fast time-to-value and future-proofing</li>
          </ul>
          <p className="agent-ai-description">
            The Alpha Suite isn’t just a product line—it’s a strategic leap toward autonomous, intelligent, and empathetic customer engagement. Whether you're in healthcare, banking, insurance, or telecom, Alphanio Nexgen delivers the tools to transform your contact center into a competitive advantage.
          </p>
        </div>

        <div className="agent-ai-image-container">
          <img src={agentImage} alt="Agent AI Illustration" className="agent-ai-image" />
        </div>
      </div>
    </section>
  );
};

export default AgentAi;
