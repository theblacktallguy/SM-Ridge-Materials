import React, { useState } from "react";

const services = [
  {
    title: "Material Supply",
    desc: "Reliable supply of high-quality construction materials across multiple categories.",
    details: [
      "Granite (all sizes)",
      "Cement supply",
      "Blocks & sand",
      "Steel & reinforcement materials",
    ],
  },
  {
    title: "Bulk Procurement",
    desc: "Large-scale sourcing solutions for contractors and developers.",
    details: [
      "Volume discounts",
      "Supplier network access",
      "Consistent availability",
      "Cost optimization",
    ],
  },
  {
    title: "Logistics & Delivery",
    desc: "Coordinated delivery systems to ensure materials arrive on time.",
    details: [
      "Scheduled dispatch",
      "Fleet coordination",
      "Real-time updates",
      "Site-ready delivery",
    ],
  },
  {
    title: "Site Coordination",
    desc: "On-ground support to align supply with project execution.",
    details: [
      "Delivery planning",
      "Material staging",
      "Project syncing",
      "On-site adjustments",
    ],
  },
  {
    title: "Custom Orders",
    desc: "Specialized sourcing based on project-specific requirements.",
    details: [
      "Non-standard materials",
      "Flexible sourcing",
      "Custom logistics",
      "Tailored solutions",
    ],
  },
];

const ServicesCore = () => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="services-core">
      <div className="container">

        <div className="services-header">
          <h2>Our Core Services</h2>
          <p>
            We provide structured material supply solutions designed to support
            projects of all sizes with efficiency and reliability.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service-card ${active === i ? "active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="service-inner">

                <h3>{service.title}</h3>
                <p className="short">{service.desc}</p>

                <div className="service-details">
                  {service.details.map((d, idx) => (
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

export default ServicesCore;