import React, { useState, useRef } from "react";
import "./CallCentreSection.css";
import CustomerTop from "../assets/Customer-top.png";
import CustomerDown from "../assets/Customer-down.png";

const CallCentreSection = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [position, setPosition] = useState("bottom"); // default
  const btnRef = useRef(null);

  const handleMouseEnter = () => {
    if (btnRef.current) {
      const rect = btnRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;
      const spaceAbove = rect.top;

      if (spaceBelow < 200 && spaceAbove > spaceBelow) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    }
    setShowPreview(true);
  };

  const handleMouseLeave = () => {
    setShowPreview(false);
  };

  return (
    <section id="services" className="call-centre-section">
      <div className="call-centre-top">
        <div className="customer-text">
          <p className="customer-text-bold">
            Make every <br />
            customer feel <br />
            heard. Instantly.
          </p>
          <p className="customer-text-light">
            Resolve over 50% of calls and consistently deliver your best brand
            experience.
          </p>
          <div
            ref={btnRef}
            className="learn-more-btn"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Learn more
            {showPreview && (
              <div className={`hover-preview ${position}`}>
                <h3>Preview</h3>
                <p>
                  This is a smart preview. It appears above or below depending
                  on available space.
                </p>
              </div>
            )}
          </div>
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
              The complete <span className="highlight-green">customer</span>{" "}
              service solution
            </p>
          </div>
          <div className="customer-down-subtext">
            <p className="manual-breaks">
              Bring together customer conversations from every possible channel,
              including phone,email, chat, social media, and many others,
              ensuring that your agents always have complete context and a clear
              understanding before they respond. With Alphanio Nexgen, your team
              can effortlessly access detailed, real-time dashboards and
              well-organized data, making it easy to monitor service quality,
              track performance, identify improvement opportunities, and take
              timely action. From the very first day, you can begin resolving
              requests automatically, reducing manual work, increasing
              efficiency, and delivering faster, more accurate responses that
              keep customers satisfied.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallCentreSection;
