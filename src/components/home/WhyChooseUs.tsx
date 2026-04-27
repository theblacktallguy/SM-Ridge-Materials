// src/components/sections/WhyChooseUs.tsx
import React from "react";
import { Link } from "react-router-dom";

const LordIcon = (props: any) =>
  React.createElement("lord-icon" as any, props);

const reasons = [
  {
    label: "10+ Years of Experience",
    icon: "https://cdn.lordicon.com/howkgief.json",
    description:
      "With over a decade of experience, we understand the construction material supply business like no one else.",
  },
  {
    label: "Reliable & Timely Delivery",
    icon: "https://cdn.lordicon.com/pkyxcgiq.json",
    description:
      "We pride ourselves on timely deliveries, ensuring your projects stay on track and on time.",
  },
  {
    label: "Quality Materials",
    icon: "https://cdn.lordicon.com/edplgash.json",
    description:
      "We supply only the highest quality materials, ensuring the success and longevity of your projects.",
  },
  {
    label: "Serving Southwest Nigeria",
    icon: "https://cdn.lordicon.com/ebfcponz.json",
    description:
      "Focused on the Southwest region, we provide local expertise and reliable support.",
  },
  {
    label: "Competitive Pricing",
    icon: "https://cdn.lordicon.com/hwjbuzha.json",
    description:
      "Our competitive pricing ensures you get the best value for your investment without compromising on quality.",
  },
  {
    label: "Expert Team",
    icon: "https://cdn.lordicon.com/abhwievu.json",
    description:
      "Our expert team brings years of specialized knowledge and skills to ensure the success of your projects.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="why-choose-us-section">
      <div className="container">
        <h2>Why Choose SM Ridge Materials</h2>
        <p>
          Here’s why customers prefer SM Ridge Materials for all their construction needs:
        </p>

        <div className="reasons-list">
          {reasons.map((reason) => (
            <div key={reason.label} className="reason-card">
              <LordIcon
                src={reason.icon}
                trigger="loop"
                style={{
                  width: "60px",
                  height: "60px",
                  marginBottom: "20px",
                }}
              />

              <h3>{reason.label}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>

        <Link to="/contact" className="cta-btn">
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default WhyChooseUs;