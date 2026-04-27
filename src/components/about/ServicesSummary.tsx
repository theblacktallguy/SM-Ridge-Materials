import React, { useState } from "react";

const SERVICES = [
  {
    id: 1,
    title: "Materials Sourcing",
    description:
      "We source reliable and high-quality construction materials from trusted suppliers to ensure consistency across all project requirements.",
  },
  {
    id: 2,
    title: "Bulk Order Coordination",
    description:
      "We handle large-scale procurement with precision, ensuring correct quantities, cost efficiency, and smooth execution.",
  },
  {
    id: 3,
    title: "Project Supply Support",
    description:
      "Continuous material supply support to ensure construction projects run without interruptions or delays.",
  },
  {
    id: 4,
    title: "Logistics Delivery",
    description:
      "Timely and coordinated delivery of materials directly to construction sites across Lagos and surrounding regions.",
  },
  {
    id: 5,
    title: "Procurement Support",
    description:
      "Strategic support for contractors in selecting and sourcing the right materials at the right time.",
  },
  {
    id: 6,
    title: "Quotation Services",
    description:
      "Fast and accurate quotation responses to support efficient decision-making and project planning.",
  },
];

const Services: React.FC = () => {
  const [active, setActive] = useState(SERVICES[0]);

  return (
    <section className="services-split-view">
      <div className="container">

        <div className="section-header">
          <h2>Our Services</h2>
          <p>
            Select a service to view detailed information about how we support your projects.
          </p>
        </div>

        <div className="services-split-view__layout">

          {/* LEFT: LIST */}
          <div className="services-split-view__list">
            {SERVICES.map((service) => (
              <div
                key={service.id}
                onClick={() => setActive(service)}
                className={`service-item ${
                  active.id === service.id ? "active" : ""
                }`}
              >
                <span className="service-dot"></span>
                <span className="service-title">{service.title}</span>
              </div>
            ))}
          </div>

          {/* RIGHT: DETAILS */}
          <div className="services-split-view__panel">
            <h3>{active.title}</h3>
            <p>{active.description}</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;