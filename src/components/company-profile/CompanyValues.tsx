import React from "react";

const CompanyValues: React.FC = () => {
  return (
    <section className="company-values">
      <div className="values-container">

        {/* LEFT */}
        <div className="values-intro">
          <h2>Built on Reliability. Driven by Precision.</h2>
          <p>
            Every project we support is backed by a commitment to quality,
            timely delivery, and transparent service. We don’t just supply materials —
            we support the success of your build.
          </p>
        </div>

        {/* RIGHT */}
        <div className="values-list">

          <div className="value-item">
            <h3>Reliability</h3>
            <p>Consistent delivery you can depend on without delays.</p>
          </div>

          <div className="value-item offset">
            <h3>Transparency</h3>
            <p>Clear pricing, honest communication, no hidden surprises.</p>
          </div>

          <div className="value-item">
            <h3>Speed</h3>
            <p>Fast response and efficient logistics across all orders.</p>
          </div>

          <div className="value-item offset">
            <h3>Quality Assurance</h3>
            <p>We source and deliver only trusted, durable materials.</p>
          </div>

          <div className="value-item">
            <h3>Customer Commitment</h3>
            <p>Your project success is our responsibility.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default CompanyValues;