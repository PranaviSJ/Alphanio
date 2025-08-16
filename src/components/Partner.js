import React from "react";
import "./Partner.css";
import partnerImage from "../assets/partnerimage.png";
import trustedBy from "../assets/Trustedby.png";
import companies from "../assets/companies.png";

function Partner() {
  return (
    <section className="partner-section" aria-labelledby="partner-heading">
      <h2 id="partner-heading" className="sr-only">Our Partners</h2>

      <div className="partner-wrap">
        {/* LEFT: text + logos */}
        <div className="partner-left">
          <p className="partner-text">
            Alphanio partnered with various companies,
            to provide the customer “The Best”
          </p>
          <div className="partner-logos">
            <img
              src={trustedBy}
              alt="Trusted by leading companies"
              className="trustedby-img"
              loading="lazy"
            />
            <img
              src={companies}
              alt="Company logos"
              className="companies-img"
              loading="lazy"
            />
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
