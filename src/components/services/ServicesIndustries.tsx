import React, { useState } from "react";

const industries = [
  {
    title: "Residential Projects",
    desc: "Supplying materials for homes, estates, and private developments.",
    details: [
      "Individual home builds",
      "Estate developments",
      "Renovations & upgrades",
      "Flexible order quantities",
    ],
    image: "/assets/residential1.jpg",
  },
  {
    title: "Commercial Developments",
    desc: "Reliable supply for commercial construction and real estate projects.",
    details: [
      "Office buildings",
      "Retail spaces",
      "Warehouses",
      "Bulk material coordination",
    ],
    image: "/assets/commercial1.jpg",
  },
  {
    title: "Infrastructure & Large Scale",
    desc: "Supporting large-scale and government-backed construction projects.",
    details: [
      "Road construction",
      "Bridges & civil works",
      "Public sector supply",
      "High-volume logistics",
    ],
    image: "/assets/infrastructure1.jpg",
  },
];

const ServicesIndustries = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="services-industries">
      <div className="container">

        <div className="industries-header">
          <h2>Industries We Serve</h2>
          <p>
            Our supply system supports a wide range of construction sectors,
            adapting to the specific demands of each project type.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, i) => (
            <div
              key={i}
              className={`industry-card ${active === i ? "active" : ""}`}
              style={{ backgroundImage: `url(${item.image})` }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="overlay" />

              <div className="industry-content">
                <h3>{item.title}</h3>
                <p className="desc">{item.desc}</p>

                <div className="industry-details">
                  {item.details.map((d, idx) => (
                    <span key={idx}>• {d}</span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesIndustries;