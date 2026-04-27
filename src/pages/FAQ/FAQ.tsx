import React, { useState } from "react";
import PageBanner from "@/components/layout/PageBanner";
import MainLayout from "@/components/layout/MainLayout";


export const metadata = {
  title: "FAQs | Construction Materials Supply in Lagos | SM Ridge Materials",
  description:
    "Find answers to common questions about construction materials supply, pricing, delivery, and quotes in Southwest Nigeria. Get clear information from SM Ridge Materials.",
  keywords: [
    "construction materials FAQ Lagos",
    "cement supply questions Nigeria",
    "building materials delivery Lagos",
    "how to order construction materials",
    "material supply FAQ Nigeria",
  ],
  openGraph: {
    title: "SM Ridge Materials FAQs",
    description:
      "Answers to common questions about materials, delivery, and quotes across Southwest Nigeria.",
    url: "https://smridgematerials.com/faq",
    siteName: "SM Ridge Materials",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const faqData = [
  {
    category: "General",
    items: [
      {
        q: "What materials do you supply?",
        a: "We supply a wide range of construction materials including cement, granite, sand, blocks, steel, roofing materials, plumbing, and electrical supplies."
      },
      {
        q: "Do you work with individuals or only contractors?",
        a: "We work with both individual builders and large contractors. Whether your project is small or large-scale, we can support you."
      }
    ]
  },
  {
    category: "Pricing & Quotes",
    items: [
      {
        q: "How do I request a quote?",
        a: "You can request a quote directly through our website by filling out the quote form. Provide your material needs and project details, and we’ll respond promptly."
      },
      {
        q: "Are your prices fixed?",
        a: "Prices may vary depending on quantity, location, and market conditions. We always provide the most competitive and transparent pricing."
      }
    ]
  },
  {
    category: "Delivery & Logistics",
    items: [
      {
        q: "Do you deliver materials to site?",
        a: "Yes, we handle full delivery logistics and ensure materials arrive safely and on time to your project location."
      },
      {
        q: "Which areas do you cover?",
        a: "We cover Lagos and surrounding Southwest regions. For large orders, we can extend delivery coverage further."
      }
    ]
  },
  {
    category: "Materials & Quality",
    items: [
      {
        q: "Are your materials quality assured?",
        a: "Yes, we source from trusted suppliers and ensure all materials meet industry standards for durability and performance."
      },
      {
        q: "Can I order in bulk?",
        a: "Absolutely. We specialize in bulk supply and can handle large volume orders efficiently."
      }
    ]
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  let count = 0;

  return (
    <MainLayout>
      <PageBanner
        eyebrow="Frequently Asked Questions"
        title="Answers to common questions about our materials and services"
        text="Find helpful information about our products, supply process, delivery coverage, quote requests, and how SM Ridge Materials supports construction projects across Southwest Nigeria."
      />

      <section className="faq-page">
        <div className="faq-container">

          {faqData.map((section, i) => (
            <div key={i} className="faq-category">

              <h2>{section.category}</h2>

              {section.items.map((item, j) => {
                const currentIndex = count;
                count++;

                return (
                  <div
                    key={j}
                    className={`faq-item ${activeIndex === currentIndex ? "active" : ""}`}
                  >
                    <div
                      className="faq-question"
                      onClick={() => toggle(currentIndex)}
                    >
                      <span>{item.q}</span>
                      <span className="faq-icon">
                        {activeIndex === currentIndex ? "−" : "+"}
                      </span>
                    </div>

                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </div>
                );
              })}

            </div>
          ))}

          {/* SUPPORT BLOCK */}
          <div className="faq-support">
            <h3>Still need help?</h3>
            <p>Contact our team and we’ll assist you with your request.</p>
            <a href="/contact" className="faq-contact-btn">
              Contact Us
            </a>
          </div>

        </div>
      </section>
    </MainLayout>
  );
};

export default FAQ;