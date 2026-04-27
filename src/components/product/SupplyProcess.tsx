import React from "react";

const steps = [
  {
    title: "Request Materials",
    text: "Reach out via WhatsApp, phone, or contact form with your required materials and project details.",
  },
  {
    title: "Quotation & Availability",
    text: "We review your request and provide pricing, availability, and estimated delivery timeline.",
  },
  {
    title: "Order Confirmation",
    text: "Once approved, your order is confirmed and logistics planning begins immediately.",
  },
  {
    title: "Delivery to Site",
    text: "Materials are delivered directly to your project location with coordinated scheduling.",
  },
];

const SupplyProcess: React.FC = () => {
  return (
    <section className="supply-process">
      <div className="container">

        {/* HEADER */}
        <div className="supply-process__header">
          <h2>How Supply Works</h2>
          <p>
            A simple, structured process designed to make material ordering
            fast, clear, and reliable for every project.
          </p>
        </div>

        {/* FLOW */}
        <div className="supply-process__flow">

          {steps.map((step, index) => (
            <div key={index} className="step">
              
              <div className="step__top">
                <span className="step__number">
                  {(index + 1).toString().padStart(2, "0")}
                </span>
                <h3>{step.title}</h3>
              </div>

              <p>{step.text}</p>

              {/* connector (desktop only visual) */}
              {index !== steps.length - 1 && (
                <div className="step__connector" />
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default SupplyProcess;