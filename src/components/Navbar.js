import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";   // ✅ add this
import "./Navbar.css";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [animating, setAnimating] = useState("");
  const navigate = useNavigate();   // ✅ hook for navigation

  const toggleMenu = () => setMenuOpen(!menuOpen);

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
    <nav className={`navbar ${scrolled ? "fixed" : ""} ${animating}`} onAnimationEnd={onAnimationEnd}>
      <img src={logo} alt="Logo" className="logo" />

      <button className={`hamburger ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>

      <ul className={`navbar-right ${menuOpen ? "active" : ""}`}>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#products" onClick={() => setMenuOpen(false)}>Products</a></li>

    
        <li>
          <span
            onClick={() => {
              setMenuOpen(false);
              navigate("/chat");
            }}
            style={{ cursor: "pointer" }}
          >
            Contact
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
