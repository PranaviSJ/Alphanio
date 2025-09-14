import React from "react";
import "./LlmAndRectangle.css";

export const LlmSection = () => {
  return (
    <section className="llm-section">
      <div className="llm-content">
        <h1 className="llm-heading">
          <span className="gradient-text">Reimagining</span> Contact Center
          Intelligence with the Alpha Suite by Alphanio Nexgen
        </h1>

        <p className="llm-intro">
          In today’s experience-driven economy, enterprises demand more than just
          reactive support—they need intelligent, proactive, and scalable solutions
          that elevate every customer interaction. At Alphanio Nexgen, we’ve
          engineered the Alpha Suite: a modular, AI-powered ecosystem designed to
          revolutionize contact center operations across industries.
        </p>

        {/* 🔹 Agent Enablement */}
        <h2 className="category-heading">Agent Enablement</h2>
        <ul className="llm-feature-list">
          <li>
            <span className="feature-title">🔍 Alpha-Flashbook</span> <br />
            Your real-time agent enablement engine. Alpha-Flashbook delivers instant
            access to contextual knowledge, dynamic scripts, and compliance-ready
            responses—empowering agents to resolve queries faster and with greater
            confidence.
          </li>
          <li>
            <span className="feature-title">❓ Alpha-FAQ</span> <br />
            A self-service powerhouse that transforms static FAQs into dynamic,
            conversational experiences. Powered by LLMs, it understands natural
            language, adapts to evolving queries, and deflects up to 40% of
            repetitive interactions.
          </li>
        </ul>

        {/* 🔹 Healthcare */}
        <h2 className="category-heading">Healthcare</h2>
        <ul className="llm-feature-list">
          <li>
            <span className="feature-title">🏥 Alpha-Healthcare Assist</span> <br />
            Built for healthcare contact centers, this solution leverages
            domain-tuned LLMs to triage patient inquiries, automate appointment
            handling, and ensure HIPAA-compliant engagement. It enhances empathy
            while reducing wait times and operational overhead.
          </li>
        </ul>

        {/* 🔹 Finance & Insurance */}
        <h2 className="category-heading">Finance & Insurance</h2>
        <ul className="llm-feature-list">
          <li>
            <span className="feature-title">💳 Alpha-Banking Assist</span> <br />
            Designed for financial institutions, this assistant handles KYC,
            transaction inquiries, fraud alerts, and loan servicing with precision.
            It ensures secure, real-time engagement while maintaining regulatory
            compliance and customer trust.
          </li>
          <li>
            <span className="feature-title">🛡️ Alpha-Insurance Assist</span> <br />
            Tailored for insurers, this solution automates claims intake, policy
            queries, and underwriting support. It integrates seamlessly with core
            systems to deliver fast, compliant, and personalized service across the
            policyholder journey.
          </li>
        </ul>

        {/* 🔹 Engagement & Scheduling */}
        <h2 className="category-heading">Engagement & Scheduling</h2>
        <ul className="llm-feature-list">
          <li>
            <span className="feature-title">📅 Alpha-Schedular</span> <br />
            An intelligent scheduling assistant that automates appointment booking,
            rescheduling, and reminders across channels. Integrated with CRM and
            calendar systems, it ensures frictionless coordination between
            customers and service teams.
          </li>
          <li>
            <span className="feature-title">🔁 Alpha-Redirector</span> <br />
            Smart call and chat routing powered by real-time intent detection and
            sentiment analysis. Alpha-Redirector ensures every interaction reaches
            the right agent or bot—reducing transfers, improving resolution rates,
            and optimizing queue management.
          </li>
          <li>
            <span className="feature-title">📞 Alpha-Outbound Assist</span> <br />
            A proactive engagement engine that orchestrates outbound campaigns—be it
            renewals, upsells, surveys, or reminders. With predictive dialing,
            personalization, and compliance tracking, it maximizes outreach impact
            and agent productivity.
          </li>
        </ul>
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
