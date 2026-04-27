import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section className="mission-vision">
      <div className="container">

        <div className="section-header">
          <h2>Our Mission & Vision</h2>
          <p>
            We are driven by a commitment to excellence in construction supply,
            supporting builders, contractors, and developers with reliable materials
            and dependable service across every stage of their projects.
          </p>
        </div>

        <div className="mission-vision__grid">

          <div className="mission-card">
            <h3>Our Mission</h3>
            <p>
              To consistently deliver high-quality construction materials and
              solutions that empower efficient project execution. We are committed
              to reliability, timely supply, and professional service that helps
              contractors and developers reduce delays, control costs, and build
              with confidence across every project scale.
            </p>
          </div>

          <div className="vision-card">
            <h3>Our Vision</h3>
            <p>
              To become one of the most trusted and recognized construction
              materials supply partners in Nigeria, known for operational
              excellence, integrity, and long-term value creation. We aim to
              support infrastructure growth across Lagos and beyond by setting
              standards in service reliability and industry trust.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionVision;