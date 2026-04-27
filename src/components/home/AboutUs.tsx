// src/components/home/AboutUs.tsx
import React from "react";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
  return (
    <section className="about-us-section">
      <div className="container">
        <div className="about-us-content">
          <div className="about-us-text">
            <h2>About SM Ridge Materials</h2>
            <p>
                SM Ridge Materials is a leading supplier of construction materials, offering high-quality
                Granite, Cement, Blocks, Sand, Iron Rods, Steel, Roofing Materials, and other building
                materials to contractors, developers, businesses, and homeowners across Southwest Nigeria.
                With over 10 years of industry experience, we are committed to providing premium materials
                and reliable, responsive service to our clients. Our goal is to be your trusted partner for
                all your construction needs, delivering top-notch materials with unmatched quality and
                efficiency.
            </p>
            <div className="about-us-key-points">
              <ul>
                <li>10+ years of industry experience</li>
                <li>Serving Southwest Nigeria</li>
                <li>Quality materials at competitive prices</li>
                <li>Dependable, responsive service</li>
              </ul>
            </div>
            <Link to="/about" className="cta-btn">Learn More About Us</Link>
          </div>

          <div className="about-us-image">
            <img src="/assets/about-us-image.jpg" alt="About SM Ridge Materials" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;