import React from "react";
import "./LlmAndRectangle.css";

// Import images
import agent from "../assets/AgentAi.png";
import faq from "../assets/FAQ.png";
import healthcare from "../assets/healthcare.png";
import banking from "../assets/Banking.png";
import insurance from "../assets/Insurance.png";
import scheduler from "../assets/Scheduler.png";
import redirector from "../assets/Redirector.png";
import outbound from "../assets/Outbound.png";

// Feature data array to simplify zig-zag
const features = [
  { 
    title: "Alpha-Flashbook", 
    text: "Your real-time agent enablement engine. Alpha-Flashbook delivers instant access to contextual knowledge, dynamic scripts, and compliance-ready responses—empowering agents to resolve queries faster and with greater confidence.", 
    img: agent 
  },
  { 
    title: "Alpha-FAQ", 
    text: "A self-service powerhouse that transforms static FAQs into dynamic, conversational experiences. Powered by LLMs, it understands natural language, adapts to evolving queries, and deflects up to 40% of repetitive interactions.", 
    img: faq 
  },
  { 
    title: "Alpha-Healthcare Assist", 
    text: "Built for healthcare contact centers, this solution leverages domain-tuned LLMs to triage patient inquiries, automate appointment handling, and ensure HIPAA-compliant engagement. It enhances empathy while reducing wait times and operational overhead.", 
    img: healthcare 
  },
  { 
    title: "Alpha-Banking Assist", 
    text: "Designed for financial institutions, this assistant handles KYC, transaction inquiries, fraud alerts, and loan servicing with precision. It ensures secure, real-time engagement while maintaining regulatory compliance and customer trust.", 
    img: banking 
  },
  { 
    title: "Alpha-Insurance Assist", 
    text: "Tailored for insurers, this solution automates claims intake, policy queries, and underwriting support. It integrates seamlessly with core systems to deliver fast, compliant, and personalized service across the policyholder journey.", 
    img: insurance 
  },
  { 
    title: "Alpha-Schedular", 
    text: "An intelligent scheduling assistant that automates appointment booking, rescheduling, and reminders across channels. Integrated with CRM and calendar systems, it ensures frictionless coordination between customers and service teams.", 
    img: scheduler 
  },
  { 
    title: "Alpha-Redirector", 
    text: "Smart call and chat routing powered by real-time intent detection and sentiment analysis. Alpha-Redirector ensures every interaction reaches the right agent or bot—reducing transfers, improving resolution rates, and optimizing queue management.", 
    img: redirector 
  },
  { 
    title: "Alpha-Outbound Assist", 
    text: "A proactive engagement engine that orchestrates outbound campaigns—be it renewals, upsells, surveys, or reminders. With predictive dialing, personalization, and compliance tracking, it maximizes outreach impact and agent productivity.", 
    img: outbound 
  },
];

export const LlmSection = () => {
  return (
    <section className="llm-section">
      <div className="llm-content">
        <h1 className="llm-heading">
          <span className="gradient-text">Reimagining</span> Contact Center Intelligence
        </h1>

        {features.map((feature, index) => (
          <div
            key={index}
            className={`llm-feature zigzag ${index % 2 === 0 ? "normal" : "reverse"}`}
          >
            <img src={feature.img} alt={feature.title} className="feature-image" />
            <div className="feature-text">
              <span className="feature-title">{feature.title}</span>
              <p>{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const LlmAndRectangleWrapper = () => (
  <div id="products" className="llm-rectangle-wrapper">
    <LlmSection />
  </div>
);
