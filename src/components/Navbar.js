// Navbar.jsx
import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState(""); // "" | "slide-up"

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight * 0.8;

      if (window.scrollY > heroHeight) {
        // Entering sticky state (downwards)
        if (!scrolled) setScrolled(true);
        if (animating) setAnimating(""); // cancel any leftover animation class
      } else {
        // Leaving sticky state (upwards): trigger slide-up ONCE
        if (scrolled && !animating) setAnimating("slide-up");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled, animating]);

  // After slide-up finishes, remove classes
  const onAnimationEnd = () => {
    if (animating === "slide-up") {
      setAnimating("");
      setScrolled(false); // now drop 'fixed'
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
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#product" onClick={() => setMenuOpen(false)}>Products</a></li>
        <li><a href="#solution" onClick={() => setMenuOpen(false)}>Solutions</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
