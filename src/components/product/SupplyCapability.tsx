import React from "react";

const capabilities = [
  {
    title: "Bulk Supply Capacity",
    text: "We handle high-volume material supply for large-scale construction projects with consistent availability and reliable sourcing channels.",
  },
  {
    title: "Structured Sourcing Network",
    text: "Our network of verified suppliers ensures quality materials across all categories, reducing delays and supply inconsistencies.",
  },
  {
    title: "Logistics Coordination",
    text: "We manage delivery planning and coordination to ensure materials arrive on-site when needed, supporting uninterrupted project flow.",
  },
  {
    title: "Project-Based Supply",
    text: "We support full project lifecycles, from initial supply to continuous material replenishment as construction progresses.",
  },
  {
    title: "Flexible Order Handling",
    text: "From small orders to large-scale procurement, we adapt to project requirements with responsive service and scalable supply.",
  },
];

const SupplyCapability: React.FC = () => {
  return (
    <section className="supply-capability">
      <div className="container supply-capability__grid">

        {/* LEFT */}
        <div className="supply-capability__intro">
          <h2>Supply Capability</h2>
          <p>
            Our operations are structured to support construction projects with
            reliable sourcing, coordinated delivery, and scalable material supply
            across different project sizes.
          </p>

          <span className="label">Operational Strength</span>
        </div>

        {/* RIGHT */}
        <div className="supply-capability__list">
          {capabilities.map((item, index) => (
            <div key={index} className="cap-item">
              <span className="cap-index">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SupplyCapability;