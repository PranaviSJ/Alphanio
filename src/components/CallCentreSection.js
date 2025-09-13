import React from "react";
import "./CallCentreSection.css";
import CustomerTop from "../assets/Customer-top.png";
import CustomerDown from "../assets/Customer-down.png";

const CallCentreSection = () => {
  return (
    <section id="services" className="call-centre-section">
      <div className="call-centre-top">
        <div className="customer-text">
          <p className="customer-text-bold">
            Deliver Instant,<br />
            Impactful Customer<br />
            Engagement
          </p>
          <p className="customer-text-light">
            Empower every interaction with AI-driven precision, so customers feel
            heard, valued, and understood in real time.
          </p>
          <p className="customer-text-light">
            Automate over 50% of inbound calls with intelligent workflows while
            ensuring a trusted, empathetic brand experience across every channel.
          </p>
          <p className="customer-text-light">
            At Alphanio Nexgen, we help enterprises scale service excellence
            with adaptive AI that listens, learns, and responds instantly.
          </p>
        </div>
        <img
          src={CustomerTop}
          alt="Customer Service Top"
          className="customer-top"
        />
      </div>

      <div className="call-centre-bottom">
        <img
          src={CustomerDown}
          alt="Customer Service Bottom"
          className="customer-down"
        />
        <div className="side-text-wrapper">
          <div className="customer-down-text">
            <p>
              Unified <span className="highlight-green">Customer</span>{" "}
              Service Intelligence
            </p>
          </div>
          <div className="customer-down-subtext">
            <p>
              Seamless, Scalable, and AI-Powered
              At Alphanio Nexgen, we deliver a comprehensive customer service solution that unifies conversations across phone, email, chat, social media, and more—ensuring agents have full context and clarity before every interaction.
              Our platform empowers service teams with:

            </p>
            <p>
              📊 Real-Time Dashboards & Unified Data Views
              Gain instant access to structured, actionable insights that help monitor service quality, track KPIs, and identify areas for continuous improvement.

            </p>
            <p>
              🤖 Intelligent Automation from Day One
              Automate request resolution and reduce manual workloads with AI-powered workflows—accelerating response times and enhancing accuracy across channels.

            </p>
            <p>
              🔄 Omnichannel Contextual Awareness
              Equip agents with a 360° view of customer history and sentiment, enabling personalized, empathetic engagement that drives satisfaction and loyalty.
            </p>
            <p>
              Whether you're scaling support operations or transforming CX, Alphanio Nexgen delivers the tools to elevate efficiency, empower agents, and exceed customer expectations—from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallCentreSection;
