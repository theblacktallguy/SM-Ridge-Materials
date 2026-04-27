import React from "react";

const journey = [
  {
    year: "2016",
    title: "Foundation",
    text: "SM Ridge Materials began operations with a clear focus on supplying reliable construction materials and building trust within the local market."
  },
  {
    year: "2017",
    title: "First Project",
    text: "Successfully delivered the first construction supply project, laying the groundwork for future client relationships and credibility."
  },
  {
    year: "2018",
    title: "Market Entry",
    text: "Expanded presence by working with more contractors and handling multiple small-to-mid scale residential projects."
  },
  {
    year: "2020",
    title: "Operational Growth",
    text: "Improved sourcing channels and logistics, enabling faster delivery timelines and better material availability."
  },
  {
    year: "2022",
    title: "Scale & Capacity",
    text: "Began handling bulk supply orders and supporting larger construction projects across multiple locations."
  },
  {
    year: "Today",
    title: "Trusted Industry Partner",
    text: "Recognized as a dependable supplier known for quality materials, efficient delivery, and strong client relationships."
  }
];

const CompanyJourney: React.FC = () => {
  return (
    <section className="company-journey">
      <div className="journey-header">
        <h2>Our Journey</h2>
        <p>
          From humble beginnings to becoming a trusted supplier,
          our journey is built on consistency, growth, and reliability.
        </p>
      </div>

      <div className="journey-track">

        <div className="journey-line" />

        {journey.map((item, i) => (
          <div key={i} className="journey-card">

            <div className="journey-year">{item.year}</div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

          </div>
        ))}

      </div>
    </section>

    
  );
};

export default CompanyJourney;