import React from "react";

const CompanyGallery: React.FC = () => {
  return (
    <section id="gallery" className="company-gallery">

      {/* HEADER */}
      <div className="gallery-header">
        <h2>Company Gallery</h2>
        <h3>Proven Work. Real Deliveries.</h3>
        <p>
          A structured visual record of our material supply operations,
          logistics, and construction support across active and completed projects.
        </p>
      </div>

      <div className="gallery-wrapper">

        {/* ================= FEATURED ================= */}
        <div className="gallery-feature">
          <img src="/gallery/featured-delivery.jpg" alt="Main delivery operation" />
        </div>

        {/* ================= BLOCK 1: DELIVERY ================= */}
        <div className="gallery-block">
          <h4>Delivery & Logistics</h4>

          <div className="block-grid">
            <img src="/gallery/truck-delivery.jpg" alt="Truck delivery" />
            <img src="/gallery/offloading.jpg" alt="Offloading materials" />
            <img src="/gallery/site-drop.jpg" alt="Site material drop" />
          </div>
        </div>

        {/* ================= BLOCK 2: MATERIALS ================= */}
        <div className="gallery-block">
          <h4>Material Supply</h4>

          <div className="block-grid">
            <img src="/gallery/granite-sand.jpg" alt="Granite Sand" />
            <img src="/gallery/cement-bags.jpg" alt="Cement bags" />
            <img src="/gallery/blocks-stack.jpg" alt="Blocks stack" />
          </div>
        </div>

        {/* ================= BLOCK 3: PROJECTS ================= */}
        <div className="gallery-block">
          <h4>Project Execution</h4>

          <div className="block-grid">
            <img src="/gallery/construction-site.jpg" alt="Construction site" />
            <img src="/gallery/foundation-work.jpg" alt="Foundation work" />
            <img src="/gallery/ongoing-build.jpg" alt="Ongoing construction" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default CompanyGallery;