import React, { useEffect, useState } from "react";

const points = [
  "Verified Supply Network",
  "Consistent Material Availability",
  "Project-Based Reliability",
  "Responsive Communication",
  "Contractor-Focused Support",
  "On-Time Delivery Coordination",
];

const TrustBlock: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % points.length);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="trust-block">
      <div className="container trust-block__wrapper">

        <div className="trust-icons">
            <span>🏗️</span>
            <span>🚛</span>
            <span>⚙️</span>
            <span>🧱</span>
            <span>🔩</span>
            <span>🏢</span>
            <span>🔍</span>
            <span>📦</span>
            <span>🧭</span>
            <span>🔧</span>
            <span>🛡️</span>
        </div>

        {/* STATIC HEADER */}
        <div className="trust-block__intro">
          <h2>Why Clients Trust Us</h2>
          <p>
            Reliable construction materials supply for consistent project
            delivery across Lagos and Southwest Nigeria.
          </p>
        </div>

        {/* ANIMATED CENTER */}
        <div className="trust-block__carousel">
          <div className="trust-item">
            <span className="trust-text active">
              {points[index]}
            </span>
          </div>
        </div>

        {/* FOOTER LINE */}
        <div className="trust-block__footer">
          We work directly with contractors, developers, and project owners to ensure dependable supply at every stage of construction.
        </div>

      </div>
    </section>
  );
};

export default TrustBlock;