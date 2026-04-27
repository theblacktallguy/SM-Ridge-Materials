// src/components/home/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Building Stronger Tomorrows with Premium Construction Materials</h1>
          <p>
            Supplying Lagos & Southwest Nigeria with top-quality cement, blocks, sand,
            and building materials, backed by over 10 years of industry expertise.
          </p>
          <div className="cta-buttons">
            <Link to="/quote-request" className="cta-btn">
              Request a Quote
            </Link>
            <Link to="/about" className="cta-btn secondary">
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://wa.me/2348000000000" target="_blank" className="whatsapp-icon">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href="https://instagram.com/smridgematerials" target="_blank" className="instagram-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://facebook.com/smridgematerials" target="_blank" className="facebook-icon">
          <i className="fab fa-facebook"></i>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;