// src/components/sections/AboutHero.tsx
import React from "react";

const AboutHero: React.FC = () => {
  return (
    <section className="about-hero">
      <div className="about-hero__overlay"></div>

      <img
        src="/assets/about-hero.png"
        alt="Construction materials warehouse"
        className="about-hero__bg"
      />

      <div className="container about-hero__content">
        <h1>About SM Ridge Materials</h1>

        <p>
          Supplying quality construction materials with reliable sourcing,
          responsive service, and dependable delivery support across Southwest Nigeria.
        </p>

        <div className="about-hero__cta">
          <a href="/quote" className="btn-primary">Request a Quote</a>
          <a href="/contact" className="btn-secondary">Contact Us</a>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;