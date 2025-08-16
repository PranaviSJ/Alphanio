import React from "react";
import "./CallCentreSection.css";
import CustomerTop from "../assets/Customer-top.png";   // lowercase t in 'top'
import CustomerDown from "../assets/Customer-down.png"; // lowercase d in 'down'

const CallCentreSection = () => {
  return (
   <section id="call-centre" className="call-centre-section">
      <div className="call-centre-top">

        <div className="customer-text">
          <p className="customer-text-bold">
            Make every <br />
            customer feel <br />
            heard. Instantly.
          </p>
          <p className="customer-text-light">
            Resolve over 50% of calls and consistently deliver your best brand experience.
          </p>
          <div className="learn-more-btn">Learn more</div>
        </div>
        <img src={CustomerTop} alt="Customer Service Top" className="customer-top" />
      </div>
      <div className="call-centre-bottom">
        <img src={CustomerDown} alt="Customer Service Bottom" className="customer-down" />

        <div className="customer-down-text">
          The complete <span className="highlight-green">customer</span> service solution
          <div className="customer-down-subtext">
          <p className="manual-breaks">
            Bring together customer conversations from every possible channel, including 
            phone,email, chat, social media, and many others, ensuring that your agents
            always have complete context and a clear understanding before they respond.
            With Alphanio Nexgen, your team can effortlessly access detailed, real-time 
            dashboards and well-organized data, making it easy to monitor service quality, 
            track performance, identify improvement opportunities, and take timely action.
            From the very first day, you can begin resolving requests automatically, reducing 
            manual work, increasing efficiency, and delivering faster, more accurate responses that keep customers satisfied.
          </p>
        </div>
        </div>
      </div>

    </section>
  );
};

export default CallCentreSection;
