const ServicesTrust = () => {
  return (
    <section className="services-trust">

      <div className="container">

        <div className="trust-wrapper">

          {/* LEFT */}
          <div className="trust-left">
            <h2>Built on Reliability, Scale & Trust</h2>
            <p>
              SM Ridge Materials is more than a supplier — we are a
              logistics-backed construction partner trusted across Lagos
              and Southwest Nigeria for consistent delivery and verified
              material sourcing.
            </p>
          </div>

          {/* RIGHT */}
          <div className="trust-list">

            <div className="trust-item">
              <h4>Verified Supply Network</h4>
              <span>Direct sourcing from trusted manufacturers</span>
            </div>

            <div className="trust-item">
              <h4>Fast Regional Delivery</h4>
              <span>Coordinated logistics across Southwest Nigeria</span>
            </div>

            <div className="trust-item">
              <h4>Quality Assurance</h4>
              <span>Every material batch is quality checked</span>
            </div>

          </div>

        </div>

        {/* METRICS */}
        <div className="trust-metrics">

          <div className="metric-box">
            <h3>10+ Years</h3>
            <p>Industry Experience</p>
          </div>

          <div className="metric-box">
            <h3>500+</h3>
            <p>Projects Supplied</p>
          </div>

          <div className="metric-box">
            <h3>5–12h</h3>
            <p>Average Delivery Window</p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default ServicesTrust;