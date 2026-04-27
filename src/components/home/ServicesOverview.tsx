// src/components/sections/ServicesOverview.tsx
import React from "react";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Building Materials Supply",
    description:
      "Cement, steel, sand, blocks, roofing materials and more delivered reliably.",
  },
  {
    title: "Bulk Procurement",
    description:
      "Efficient sourcing and supply for contractors and large-scale projects.",
  },
  {
    title: "Site Delivery",
    description:
      "Fast and secure delivery across Lagos and Southwest Nigeria.",
  },
  {
    title: "Contractor Support",
    description:
      "Long-term supply partnerships for ongoing construction projects.",
  },
  {
    title: "Product Sourcing",
    description:
      "We source rare and specialized construction materials on demand.",
  },
  {
    title: "Consultation",
    description:
      "Expert advice to help you choose cost-effective building materials.",
  },
];

const ServicesOverview: React.FC = () => {
  return (
    <section className="services-section">
      <div className="our-service-container">
        <h2 className="title">Our Services</h2>
        <p className="subtitle">
          Reliable construction material supply and logistics across Lagos and Southwest Nigeria.
        </p>

        <div className="grid">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="card"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="glow" />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="cta">
          <Link to="/services" className="btn">
            Explore All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;