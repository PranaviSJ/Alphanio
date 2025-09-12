import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;
      if (window.scrollY > heroHeight) {
        if (!scrolled) setScrolled(true);
        if (animating) setAnimating("");
      } else {
        if (scrolled && !animating) setAnimating("slide-up");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, animating]);

  const onAnimationEnd = () => {
    if (animating === "slide-up") {
      setAnimating("");
      setScrolled(false);
    }
  };

  return (
    <nav
      className={`navbar ${scrolled ? "fixed" : ""} ${animating}`}
      onAnimationEnd={onAnimationEnd}
    >
      <img src={logo} alt="Logo" className="logo" />

      <button
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
        </li>
        <li>
          <a href="#services" onClick={() => setMenuOpen(false)}>
            Services
          </a>
        </li>
        <li>
          <a href="#products" onClick={() => setMenuOpen(false)}>
            Products
          </a>
        </li>

      
        <li>
          <a
            href="https://www.google.com/maps/place/Alphanio+Nexgen/@12.9779248,77.6373175,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae1724464f9b41:0x2087065a01ae572d!8m2!3d12.9779248!4d77.6398924!16s%2Fg%2F11q9m8yx8g?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            style={{ cursor: "pointer" }}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
