import React, { useState, useEffect } from "react";
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
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small" },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small" },
  { src: testimonial, alt: "Featured customer testimonial - Cognizant", size: "large" },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small" },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small" },
  { src: plaintestimonial, alt: "Customer testimonial - Cognizant", size: "small" },
];

function Testimonial() {
  const [pages, setPages] = useState(1);
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    const container = document.querySelector(".image-row");

    const calculatePages = () => {
      if (!container || container.children.length === 0) return;

      const card = container.children[0];
      const cardWidth = card.offsetWidth;
      const visibleCards = Math.floor(container.offsetWidth / cardWidth);
      const totalCards = container.children.length;

      const newPages = Math.ceil(totalCards / visibleCards);
      setPages(newPages);
    };

    calculatePages();
    window.addEventListener("resize", calculatePages);

    return () => window.removeEventListener("resize", calculatePages);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".image-row");
    if (!container) return;

    const handler = () => {
      const scrollLeft = container.scrollLeft;
      const pageWidth = container.offsetWidth;
      const newPage = Math.round(scrollLeft / pageWidth);
      setActivePage(newPage);
    };

    container.addEventListener("scroll", handler, { passive: true });
    return () => container.removeEventListener("scroll", handler);
  }, [pages]);

  const handleDotClick = (index) => {
    const container = document.querySelector(".image-row");
    if (!container) return;
    const pageWidth = container.offsetWidth;
    container.scrollTo({ left: index * pageWidth, behavior: "smooth" });
  };

  return (
    <section className="testimonial-container" aria-labelledby="testimonial-heading">
      <h2 id="testimonial-heading" className="testimonial-heading">
        Customers love Alphanio
      </h2>

      <p className="testimonial-subtext">
        We always wanted to give the best solution to our customers,<br />
        and so far we made it. Hear what our customer says
      </p>

      <div className="image-row" role="list" aria-label="Customer testimonials">
        {items.map((item, i) => (
          <figure
            key={i}
            className={`card ${item.size === "large" ? "card-large" : "card-small"}`}
            role="listitem"
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

                <img
                  src={quotes}
                  alt="Quote mark"
                  className="quotes-img"
                  loading="lazy"
                />

                <div className="inline-row">
                  <div className="below-line1">Peary Man</div>
                  <img
                    src={
                      i === 0 ? man :
                      i === 1 ? man2 :
                      i === 2 ? man3 :
                      i === 3 ? man4 :
                      i === 4 ? man5 :
                      man6
                    }
                    alt="profile"
                    className="thumb thumb--s"
                    loading="lazy"
                  />
                </div>

                <div className="below-line2">Cognizant - Tech</div>
              </figcaption>
            </div>
          </figure>
        ))}
      </div>

      {/* Carousel dots by page */}
      <div className="carousel-dots">
        {Array.from({ length: pages }).map((_, i) => (
          <div
            key={i}
            className={`carousel-dot ${activePage === i ? "active" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Testimonial;
