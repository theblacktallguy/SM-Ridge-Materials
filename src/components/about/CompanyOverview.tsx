import React from "react";

const CompanyOverview: React.FC = () => {
  return (
    <section className="company-overview">
      <div className="container company-overview__wrapper">
        
        <div className="company-overview__text">
          <h2>Company Overview</h2>

          <p>
            SM Ridge Materials is a construction materials supply company focused on
            supporting building projects with practical, reliable, and responsive
            supply solutions. We work with contractors, developers, businesses, and
            individual project owners who require quality materials and dependable
            service coordination.
          </p>

          <p>
            Our goal is to simplify material sourcing and delivery, helping projects
            move efficiently from planning to execution. We are building a reputation
            around professionalism, responsiveness, and supply confidence across Southwest Nigeria.
          </p>
        </div>

        <div className="company-overview__image">
          <img
            src="/assets/warehouse-hero.png"
            alt="Warehouse stacked with construction materials"
          />
        </div>

      </div>
    </section>
  );
};

export default CompanyOverview;