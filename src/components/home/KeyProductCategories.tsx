// src/components/home/KeyProductCategories.tsx
import React from "react";
import { Link } from "react-router-dom";

const categories = [
  { label: "Granite", image: "/assets/granite.jpg", link: "/products#granite" },
  { label: "Cement", image: "/assets/cement.jpg", link: "/products#cement" },
  { label: "Blocks", image: "/assets/blocks.jpg", link: "/products#blocks" },
  { label: "Sand", image: "/assets/sand.jpg", link: "/products#sand" },
  { label: "Steel", image: "/assets/steel.jpg", link: "/products#steel" },
  { label: "Roofing Materials", image: "/assets/roofing.jpg", link: "/products#roofing" },
  { label: "Plumbing Materials", image: "/assets/plumbing.jpg", link: "/products#plumbing" },
  { label: "Electrical Materials", image: "/assets/electrical.jpg", link: "/products#electrical" },
];

const KeyProductCategories: React.FC = () => {
  return (
    <section className="key-product-categories">
      <div className="container">
        <h2>Our Key Product Categories</h2>
        <div className="category-grid">
          {categories.map((category) => (
            <div key={category.label} className="category-card">
              <img src={category.image} alt={category.label} />
              <h3>{category.label}</h3>
              <p>High-quality {category.label} materials for all your construction needs.</p>
              <Link to="/products" className="cta-btn">Learn More</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyProductCategories;