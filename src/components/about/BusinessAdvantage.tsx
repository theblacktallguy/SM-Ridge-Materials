import React from "react";

const BusinessAdvantage: React.FC = () => {
  return (
    <section className="business-manifesto">
      <div className="container business-manifesto__grid">

        

        {/* CENTER CONTENT */}
        <div className="business-manifesto__content">

          <h3>
            Positioning, Purpose, Performance.
          </h3>

          <p>
            We operate as a structured construction support partner focused on
            reliability, execution efficiency, and long-term value delivery across
            all project scales.
          </p>

          <p>
            Every process we run is designed to reduce delays, improve sourcing
            accuracy, and ensure consistent material availability for contractors
            and developers.
          </p>

          {/* SIGNATURE LINE */}
          <div className="manifesto-line">
            Built for reliability. Designed for execution.
          </div>

        </div>

        {/* Right ANCHOR */}
        <div className="business-manifesto__anchor">
          <h2>Our Advantage</h2>
          <span className="label">We are more than a materials supplier.</span>
        </div>

      </div>
    </section>
  );
};

export default BusinessAdvantage;