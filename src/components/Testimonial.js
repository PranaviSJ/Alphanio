import React from "react";
import "./Testimonial.css";
import plaintestimonial from "../assets/plaintestimonial.png";
import testimonial from "../assets/testimonial.png";
import quotes from "../assets/quotes.png";

// Profile images
import man from "../assets/man.png";
import man2 from "../assets/man2.png";
import man3 from "../assets/man3.png";
import man4 from "../assets/man4.png";
import man5 from "../assets/man5.png";
import man6 from "../assets/man6.png";

const items = [
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small", person: man },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small", person: man2 },
  { src: testimonial, alt: "Featured customer testimonial - Cognizant", size: "large", person: man3 },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small", person: man4 },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small", person: man5 },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small", person: man6 },
];

function Testimonial() {
  return (
    <section className="testimonial-container" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className="testimonial-heading">
        Customers love Alphanio
      </h2>

      <p className="testimonial-subtext">
        We always wanted to give the best solution to our customers,<br />
        and so far we made it. Hear what our customer says
      </p>

      {/* Marquee wrapper */}
      <div className="marquee-wrapper">
        <div className="marquee">
          {items.map((item, i) => (
            <figure
              key={`set1-${i}`}
              className={`card ${item.size === "large" ? "card-large" : "card-small"}`}
            >
              <div className="img-wrap">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.size === "large" ? "large-img" : "small-img"}
                  loading="lazy"
                />

                <figcaption className="below-caption">
                  <div className="below-brand">COGNIZANT</div>
                  <div className="below-quote">
                    Alphanio Team helped me to migrate from AWS to SAP Platform.
                  </div>

                  <img src={quotes} alt="Quote mark" className="quotes-img" loading="lazy" />

                  <div className="inline-row">
                    <div className="below-line1">Peary Man</div>
                    <img src={item.person} alt="profile" className="thumb thumb--s" loading="lazy" />
                  </div>

                  <div className="below-line2">Cognizant - Tech</div>
                </figcaption>
              </div>
            </figure>
          ))}

          {/* duplicate for seamless loop */}
          {items.map((item, i) => (
            <figure
              key={`set2-${i}`}
              className={`card ${item.size === "large" ? "card-large" : "card-small"}`}
            >
              <div className="img-wrap">
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.size === "large" ? "large-img" : "small-img"}
                  loading="lazy"
                />

                <figcaption className="below-caption">
                  <div className="below-brand">COGNIZANT</div>
                  <div className="below-quote">
                    Alphanio Team helped me to migrate from AWS to SAP Platform.
                  </div>

                  <img src={quotes} alt="Quote mark" className="quotes-img" loading="lazy" />

                  <div className="inline-row">
                    <div className="below-line1">Peary Man</div>
                    <img src={item.person} alt="profile" className="thumb thumb--s" loading="lazy" />
                  </div>

                  <div className="below-line2">Cognizant - Tech</div>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
