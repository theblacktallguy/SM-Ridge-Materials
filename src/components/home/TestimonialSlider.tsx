// src/components/sections/TestimonialSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const testimonials = [
  {
    name: "Oluwaseun Adebayo",
    testimonial: "SM Ridge Materials helped us get the right materials quickly and at affordable prices. Their service was top-notch, and our project was completed on time. Highly recommended!"
  },
  {
    name: "Folake Ogunleye",
    testimonial: "I’ve worked with a lot of suppliers, but none match the professionalism of SM Ridge Materials. They provide quality products and timely delivery every time. Truly dependable!"
  },
  {
    name: "Chinonso Okafor",
    testimonial: "I had a tight deadline for my construction, and SM Ridge Materials delivered all my materials within the agreed time. I’ll definitely work with them again for future projects."
  },
  {
    name: "Abdulrasaq Bello",
    testimonial: "What impressed me the most was the dedication to customer satisfaction. The materials I received were of great quality, and they were exactly what I ordered. I’ll be a repeat customer for sure."
  },
  {
    name: "Kemi Alabi",
    testimonial: "Their team was very knowledgeable and guided us on the right materials to use for our specific needs. I’m very happy with the service and the materials provided."
  },
  {
    name: "Adedayo Ayodele",
    testimonial: "Great service! They not only provided the materials I needed but also ensured I got them right on time. The quality is top-tier, and I wouldn’t hesitate to recommend them."
  },
  {
    name: "Adebimpe Fashola",
    testimonial: "Working with SM Ridge Materials made my construction project so much easier. The customer support was excellent, and the materials arrived right on schedule. Thank you for your exceptional service!"
  },
  {
    name: "Olamide Tijani",
    testimonial: "As a contractor, I’ve had many challenges with material suppliers. SM Ridge Materials made the process simple. The quality is excellent, and their delivery is fast. I’ll continue using their services for all my future projects."
  },
  {
    name: "Babatunde Lawal",
    testimonial: "I can always count on SM Ridge Materials for high-quality building materials. Their timely delivery and exceptional service made my last project a success. I will certainly use them again."
  },
  {
    name: "Adebayo Sulaimon",
    testimonial: "SM Ridge Materials made the material procurement process so easy and stress-free. Their professionalism is unmatched, and I look forward to working with them on future projects."
  }
];

const TestimonialSlider: React.FC = () => {
  return (
    <section className="testimonial-section">
      <div className="container">
        <h2>What Our Clients Say</h2>
        <p className="subtitle">
          Trusted by contractors and builders across Southwest Nigeria.
        </p>

        <Swiper
            modules={[Autoplay, Pagination, EffectFade]}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
            }}
            loop={true}
            speed={800}
            effect="fade"
            pagination={{ clickable: true }}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-card">
                <div className="quote">“</div>
                <p>{item.testimonial}</p>
                <h4>- {item.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialSlider;