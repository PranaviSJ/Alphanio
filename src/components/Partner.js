import React from "react";
import "./Partner.css";
import partnerImage from "../assets/partnerimage.png";
import trustedBy from "../assets/Trustedby.png";

function Partner() {
  const companies = [
    "Accenture", "Infosys", "DBS Bank", "NTT Data", "Google",
    "Twilio", "Kore AI", "Salesforce", "ServiceNow", "Nice",
    "Genesys", "Five9", "Modivcare Labs", "Hexaware", "Servion",
    "Verint", "Zoom", "Microsoft", "Amazon", "Mulesoft",
    "NextGen", "Avaya", "Cisco", "Sprinklr"
  ];

  return (
    <section id="partners" className="partner-section" aria-labelledby="partner-heading">
      <h2 id="partner-heading" className="sr-only">Our Partners</h2>

      <div className="partner-wrap">
        {/* LEFT: text + logos */}
        <div className="partner-left">
          <p className="partner-text">
            Alphanio Nexgen proudly works with leading enterprises
            to deliver best-in-class AI solutions, 
            ensuring every customer receives exceptional service,
            innovation, and value.
          </p>
          <div className="partner-logos">
            <img
              src={trustedBy}
              alt="Trusted by leading companies"
              className="trustedby-img"
              loading="lazy"
            />

            {/* Companies as text */}
            <div className="companies-list">
              {companies.map((company, index) => (
                <span key={index} className="company-name">{company}</span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Partner illustration */}
        <div className="partner-right">
          <img
            src={partnerImage}
            alt="Partner illustration"
            className="partner-img"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
