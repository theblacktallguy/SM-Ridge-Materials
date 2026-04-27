import React, { useState, useEffect } from "react";

type Product = {
  id: string;
  title: string;
  description: string;
  images: string[];
  specs: string[];
};

const PRODUCTS: Product[] = [
  {
    id: "granite",
    title: "Granite",
    description:
      "Durable aggregates used for structural concrete, foundational layers, and finishing applications.",
    images: [
      "/assets/granite1.jpg",
      "/assets/granite2.jpg",
      "/assets/granite3.jpg",
    ],
    specs: [
      "3/4 Down – base filling",
      "3/4 – standard concrete mix",
      "1/2 Inch – finer mix",
      "7/8 – heavy-duty construction",
      "Rice – leveling",
      "Hardcore – foundation base",
      "Stone Dust – finishing",
    ],
  },
  {
    id: "cement",
    title: "Cement",
    description:
      "High-quality cement suitable for residential, commercial, and infrastructure development.",
    images: [
      "/assets/cement1.jpg",
      "/assets/cement2.jpg",
      "/assets/cement3.jpg",
    ],
    specs: ["Dangote", "BUA", "Lafarge"],
  },
  {
    id: "blocks",
    title: "Blocks",
    description:
      "Strong and reliable blocks for structural construction and partitioning.",
    images: [
      "/assets/blocks1.jpg",
      "/assets/blocks2.jpg",
      "/assets/blocks3.jpg",
    ],
    specs: ["6 inch", "9 inch", "Solid blocks", "Hollow blocks"],
  },
  {
    id: "sand",
    title: "Sand",
    description:
      "Washed and sharp sand for concrete, plastering, and filling applications.",
    images: [
      "/assets/sand1.jpg",
      "/assets/sand2.jpg",
      "/assets/sand3.jpg",
    ],
    specs: ["Sharp sand", "Plaster sand", "Filling sand"],
  },
  {
    id: "steel",
    title: "Steel",
    description:
      "Reinforcement materials for structural strength and durability.",
    images: [
      "/assets/steel1.jpg",
      "/assets/steel2.jpg",
      "/assets/steel3.jpg",
    ],
    specs: ["10mm", "12mm", "16mm", "20mm rods"],
  },
  {
    id: "roofing",
    title: "Roofing Materials",
    description:
      "Reliable roofing solutions for long-term weather protection.",
    images: [
      "/assets/roofing1.jpg",
      "/assets/roofing2.jpg",
      "/assets/roofing3.jpg",
    ],
    specs: ["Aluminium sheets", "Stone-coated", "Accessories"],
  },
  {
    id: "plumbing",
    title: "Plumbing Materials",
    description:
      "Pipes, fittings, and accessories for water systems.",
    images: [
      "/assets/plumbing1.jpg",
      "/assets/plumbing2.jpg",
      "/assets/plumbing3.jpg",
    ],
    specs: ["PVC pipes", "Fittings", "Valves"],
  },
  {
    id: "electrical",
    title: "Electrical Materials",
    description:
      "Electrical components for safe and efficient installations.",
    images: [
      "/assets/electrical1.jpg",
      "/assets/electrical2.jpg",
      "/assets/electrical3.jpg",
    ],
    specs: ["Wires", "Switches", "Panels"],
  },
  {
    id: "paints",
    title: "Paints",
    description:
      "Finishing materials for interior and exterior protection and aesthetics.",
    images: [
      "/assets/paint1.jpg",
      "/assets/paint2.jpg",
      "/assets/paint3.jpg",
    ],
    specs: ["Emulsion", "Gloss", "Textured coatings"],
  },
];

const ProductSection: React.FC<{ product: Product; reverse?: boolean }> = ({
  product,
  reverse,
}) => {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % product.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [product.images.length]);

  return (
    <div className={`product-section ${reverse ? "reverse" : ""}`}>
      {/* IMAGE */}
      <div className="product-image">
        {product.images.map((img, i) => (
          <img
            key={i}
            src={img}
            className={`bg ${i === index ? "active" : ""}`}
          />
        ))}
        <div className="overlay" />
      </div>

      {/* CONTENT */}
      <div className="product-content">
        <h2>{product.title}</h2>
        <p>{product.description}</p>

        <button onClick={() => setOpen(!open)} className="spec-btn">
          {open ? "Hide Specifications" : "View Specifications"}
        </button>

        {open && (
          <div className="specs">
            {product.specs.map((spec, i) => (
              <div key={i} className="spec-item">
                {spec}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ProductsPage: React.FC = () => {
  return (
    <section className="products-page">
      <div className="container">
        <div className="products-header">
          <h1>Construction Materials We Supply</h1>
          <p>
            A structured range of materials sourced for durability, reliability,
            and project efficiency.
          </p>
        </div>

        {PRODUCTS.map((product, i) => (
          <ProductSection
            key={i}
            product={product}
            reverse={i % 2 !== 0}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;