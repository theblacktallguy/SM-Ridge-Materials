import React from "react";

const ClientTypes: React.FC = () => {
  return (
    <section className="client-structure">
      <div className="container client-structure__grid">

        {/* LEFT ANCHOR */}
        <div className="client-structure__anchor">
          <h2>Who We Serve</h2>
          <p>
            We operate across multiple construction and infrastructure stakeholders,
            supporting projects at different scales with structured supply capability.
          </p>

        </div>

        {/* RIGHT CONTENT */}
        <div className="client-structure__content">

          <div className="client-row">
            <span className="num">01</span>
            <div>
              <h3>Contractors</h3>
              <p>Project execution support and material coordination.</p>
            </div>
          </div>

          <div className="client-row">
            <span className="num">02</span>
            <div>
              <h3>Developers</h3>
              <p>Large-scale residential and commercial developments.</p>
            </div>
          </div>

          <div className="client-row">
            <span className="num">03</span>
            <div>
              <h3>Corporate Buyers</h3>
              <p>Structured procurement for enterprise infrastructure needs.</p>
            </div>
          </div>

          <div className="client-row">
            <span className="num">04</span>
            <div>
              <h3>Retail Clients</h3>
              <p>Smaller construction and renovation supply needs.</p>
            </div>
          </div>

          <div className="client-row">
            <span className="num">05</span>
            <div>
              <h3>Project Owners</h3>
              <p>Direct support for private and commercial builds.</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ClientTypes;