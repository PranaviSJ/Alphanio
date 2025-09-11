import React from "react";
import "./AgentAi.css";
import agentImage from "../assets/Agent.png"; // adjust path as needed

const AgentAi = () => {
  return (
    <section id ="Agentic AI" className="agent-ai-wrapper">
      <div className="agent-ai-content">
        <div className="agent-ai-text-group">
          <h1 className="agent-ai-heading">
            <span className="make-gradient">Make</span> your decision with <br />
            Agentic AI
          </h1>
          <p className="agent-ai-description">
            Agentic AI is an AI system that combines multiple types of<br />
            artificial intelligence that, together, make it capable of<br />
            planning, acting, learning, and improving.
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
