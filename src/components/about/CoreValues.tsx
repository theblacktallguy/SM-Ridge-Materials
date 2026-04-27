import React from "react";

const CoreValues: React.FC = () => {
  const values = [
    { label: "Reliability", description: "We deliver on time, every time, no matter the project scale." },
    { label: "Quality Focus", description: "Our materials are of the highest quality, ensuring lasting results." },
    { label: "Professional Service", description: "We maintain professionalism and clear communication throughout every step." },
    { label: "Partnership Mindset", description: "We work alongside our clients, ensuring successful project outcomes." },
  ];

  return (
    <section className="core-values">
      <div className="container">
        <div className="core-section-header">
          <h2>Core Values</h2>
          <p>
            The principles that guide how we operate, serve clients, and deliver
            every project support solution.
          </p>
        </div>
        <div className="core-values__grid">
          {values.map((value) => (
            <div key={value.label} className="core-value-card">
              <h3>{value.label}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;