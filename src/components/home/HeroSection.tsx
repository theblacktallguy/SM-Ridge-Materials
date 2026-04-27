// src/components/home/HeroSection.tsx
import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <section className="home-hero">
      <div className="home-hero-overlay"></div>

      <img
        src="/assets/home-hero.png"
        alt="Construction materials warehouse"
        className="home-hero__bg"
      />

      <div className="container home-hero__content">

        <h1>Building Stronger Tomorrows with Premium Construction Materials</h1>

        <p>
          Supplying Lagos & Southwest Nigeria with top-quality cement, blocks, sand,
          and building materials, backed by over 10 years of industry expertise.
        </p>
        
        <div className="home-hero__cta">
          <a href="/quote-request" className="btn-primary">Request a Quote</a>
          <a href="/about" className="btn-secondary">Learn More About Us</a>
        </div>

      </div>
      
    </section>
  );
};

export default HeroSection;