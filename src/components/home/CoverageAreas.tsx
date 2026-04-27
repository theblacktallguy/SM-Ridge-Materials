import React from "react";

const CoverageAreas: React.FC = () => {
  return (
    <section id="coverage-area" className="coverage-section">
      <div className="container coverage-grid">

        {/* LEFT CONTENT */}
        <div className="coverage-text">
          <h2>Delivery & Coverage Areas</h2>

          <p>
            We supply high-quality construction materials across Lagos and
            the entire Southwest region of Nigeria with reliable logistics support.
          </p>

          <div className="coverage-list">
            <h3>Lagos State (Core Coverage)</h3>
            <ul>
              <li>Lagos Mainland</li>
              <li>Lagos Island</li>
              <li>Ikorodu</li>
              <li>Ajah / Lekki Axis</li>
              <li>Surrounding construction hubs</li>
            </ul>

            <h3>Ogun State</h3>
            <ul>
              <li>Abeokuta</li>
              <li>Ota</li>
              <li>Ifo</li>
              <li>Ijebu areas</li>
            </ul>

            <h3>Other Southwest Areas</h3>
            <ul>
              <li>Ibadan (Oyo State)</li>
              <li>Ondo State (on-demand)</li>
              <li>Osun State (on-demand)</li>
              <li>Ekiti State (project-based delivery)</li>
            </ul>
          </div>

          <div className="coverage-cta">
            <a href="/contact" className="btn-primary">
              Request Delivery Info
            </a>

            <a href="https://wa.me/2348139336355" target="_blank" className="btn-secondary">
              Check on WhatsApp
            </a>
          </div>

          <p className="note">
            Delivery availability may vary depending on order size and logistics requirements.
          </p>
        </div>

        {/* RIGHT CONTENT (MAP) */}
        <div className="coverage-map">
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
    </section>
  );
};

export default CoverageAreas;