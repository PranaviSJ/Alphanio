import React from "react";
import "./Partner.css";
import companiesImage from "../assets/companies.png";
import trustedBy from "../assets/Trustedby.png";
import partnerImage from "../assets/partnerimage.png";

function Partner() {
  return (
    <section id="partners" className="partner-section" aria-labelledby="partner-heading">
      <h2 id="partner-heading" className="sr-only">Our Partners</h2>

      <div className="partner-wrap">
        <div className="partner-left">
          <p className="partner-text">
            Alphanio Nexgen proudly works with leading enterprises to deliver best-in-class AI solutions, ensuring every customer receives exceptional service, innovation, and value.
          </p>

          <div className="partner-logos" aria-label="Trusted by">
            <img
              src={trustedBy}
              alt="Trusted by leading companies"
              className="trustedby-img"
              loading="lazy"
              decoding="async"
            />
          </div>

          <div className="companies-list">
            <img
              src={companiesImage}
              alt="Logos of our partner companies"
              className="partner-collage-img"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="partner-right">
          <img
            src={partnerImage}
            alt="Business handshake with AI assistant"
            className="partner-img"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}

export default Partner;
