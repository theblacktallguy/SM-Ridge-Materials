import React from "react";

const SupplyCapability: React.FC = () => {
  return (
    <section className="supply-section">
      <div className="container">

        <div className="supply-header">
          <h2>Supply Capability & Coverage Network</h2>
          <p>
            Our logistics system is designed to support construction projects
            across Lagos and surrounding regions with structured delivery coordination.
          </p>
        </div>

        <div className="supply-grid">

          {/* LEFT PANEL */}
          <div className="supply-info">

            <div className="supply-item">Bulk material distribution across Lagos</div>
            <div className="supply-item">Project-based delivery coordination</div>
            <div className="supply-item">Rapid dispatch for construction sites</div>
            <div className="supply-item">Flexible logistics for all project sizes</div>
            <div className="supply-item">Verified sourcing and supply chain network</div>

          </div>

          {/* RIGHT PANEL - MAP */}
          <div className="supply-map">

            <div className="map-frame">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126841.26978259606!2d3.201558671589217!3d6.548218935579283!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1777204253242!5m2!1sen!2sng" 
                width="100%"
                height="420"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SM Ridge coverage map"
              />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SupplyCapability;