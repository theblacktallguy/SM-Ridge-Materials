import React from "react";

const WhatWeSupply: React.FC = () => {
  const supplies = [
    { label: "Cement & Bindings", description: "We offer a variety of premium cement and binding agents for construction projects." },
    { label: "Blocks & Bricks", description: "High-quality concrete blocks and bricks for building strong, reliable structures." },
    { label: "Sand & Granite", description: "We supply various grades of sand and granite for construction purposes." },
    { label: "Steel & Reinforcement", description: "Durable steel rods and reinforcement materials for all types of construction." },
    { label: "Roofing Materials", description: "Weather-resistant roofing materials for commercial and residential buildings." },
    { label: "Tiles & Finishing", description: "A wide selection of tiles and finishing materials for all project types." },
    { label: "Plumbing Materials", description: "Reliable plumbing materials including pipes, fittings, and accessories." },
    { label: "Electrical Materials", description: "We supply top-grade electrical components and materials for projects of all sizes." },
    { label: "Paints & Accessories", description: "High-quality paints and accessories for both residential and commercial buildings." },
    { label: "General Supplies", description: "A variety of other essential construction materials for every need." },
  ];

  return (
    <section className="what-we-supply">
      <div className="container">
       <div className="what-we-supply-section-header">
         <h2>What We Supply</h2>
         <p>
           At SM Ridge Materials, we supply a comprehensive range of high-quality construction materials to meet the diverse needs of contractors, developers, and project owners. Our products are carefully selected to ensure durability, reliability, and superior performance, supporting projects of all sizes. From raw materials like cement and granite to specialized products like roofing materials and plumbing supplies, we are committed to providing the best for every stage of your construction journey.
         </p>
       </div>

        <div className="about-supply-grid">
          {supplies.map((supply) => (
            <div key={supply.label} className="about-supply-card">
              <h3>{supply.label}</h3>
              <p>{supply.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeSupply;