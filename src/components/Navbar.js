import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

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
      <HashLink smooth to="/#hero" onClick={() => setMenuOpen(false)}>
        <img src={logo} alt="Logo" className="logo" />
      </HashLink>

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
          <HashLink smooth to="/#about" onClick={() => setMenuOpen(false)}>
            About
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#services" onClick={() => setMenuOpen(false)}>
            Services
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/#products" onClick={() => setMenuOpen(false)}>
            Products
          </HashLink>
        </li>
        <li>
          <HashLink smooth to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </HashLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
