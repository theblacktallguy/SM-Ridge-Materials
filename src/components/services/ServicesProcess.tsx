import React from "react";

const steps = [
  {
    title: "Request Submission",
    desc: "Client submits material requirements, quantities, and delivery details through our platform.",
  },
  {
    title: "Planning & Validation",
    desc: "We review specifications, validate availability, and optimize sourcing strategy.",
  },
  {
    title: "Sourcing & Coordination",
    desc: "Materials are sourced from trusted suppliers while logistics are scheduled.",
  },
  {
    title: "Delivery Execution",
    desc: "Materials are delivered to site with coordination to match project timelines.",
  },
];

const ServicesProcess = () => {
  return (
    <section className="services-process">
      <div className="container">

        <div className="process-header">
          <h2>How Our System Works</h2>
          <p>
            A structured and reliable process designed to ensure efficiency,
            accuracy, and timely delivery at every stage.
          </p>
        </div>

        <div className="process-timeline">

          {steps.map((step, i) => (
            <div key={i} className="process-step">

              {/* CONNECTOR LINE */}
              {i !== steps.length - 1 && <div className="connector" />}

              <div className="step-number">
                {i + 1}
              </div>

              <div className="step-content">
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesProcess;