import React from "react";

const ContactMapSection = () => {
  return (
    <section className="map-section">
      <div className="container">

        <div className="map-grid">

          {/* MAP SIDE */}
          <div className="map-box">
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

          {/* INFO SIDE */}
          <div className="map-info">

            <div className="info-card">
              <h3>Head Office</h3>
              <p>Alimosho, Lagos, Nigeria</p>
            </div>

            <div className="info-card">
              <h3>Working Hours</h3>
              <p>Mon – Sat: 8:00am – 6:00pm</p>
            </div>

            <div className="info-card">
              <h3>Coverage</h3>
              <p>Lagos • Ogun • Oyo • Southwest Nigeria</p>
            </div>

            <a href="https://www.google.com/maps" target="_blank" className="map-btn">
              Get Directions
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactMapSection;