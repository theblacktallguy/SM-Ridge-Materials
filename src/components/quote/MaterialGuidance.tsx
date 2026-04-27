import React from "react";

const materialsGuide = [
  {
    name: "Granite",
    subtitle: "Engineering Aggregate Material",
    sizes: "3/4 Down • 3/4 • 1/2 Inch • 7/8 • Rice • Hardcore • Stone Dust",
    usage: "Foundations, slabs, road base, structural filling",
    note: "Size selection directly affects structural strength and compaction level",
  },
  {
    name: "Cement",
    subtitle: "Binding Construction Material",
    sizes: "50kg Bags • Bulk Supply",
    usage: "Concrete mixing, plastering, structural binding",
    note: "Store in dry conditions to maintain strength integrity",
  },
  {
    name: "Sand",
    subtitle: "Fine Aggregate Material",
    sizes: "Sharp Sand • Filling Sand • Washed Sand",
    usage: "Block work, plastering, concrete mixing",
    note: "Choice depends on structural or finishing application",
  },
  {
    name: "Steel",
    subtitle: "Reinforcement Material",
    sizes: "8mm • 10mm • 12mm • 16mm • 20mm",
    usage: "Reinforced concrete structures, beams, columns",
    note: "Grade selection affects load-bearing capacity",
  },
  {
    name: "Blocks",
    subtitle: "Wall Construction Units",
    sizes: "6 Inch • 9 Inch • Hollow • Solid",
    usage: "Wall construction and structural partitioning",
    note: "Thickness depends on structural design requirements",
  },
];

const MaterialGuidance: React.FC = () => {
  return (
    <section className="material-reference">
      <div className="container">

        {/* HEADER */}
        <div className="material-guide-header">
          <h2>Material Reference Guide</h2>
          <p>
            Technical overview of core construction materials to help you make
            accurate and informed quotation requests.
          </p>
        </div>

        {/* SCROLL WALL */}
        <div className="material-strip-wrapper">

          {materialsGuide.map((item, index) => (
            <div className="material-strip" key={index}>

              <h3>{item.name}</h3>
              <p className="subtitle">{item.subtitle}</p>

              <div className="spec-line">
                <strong>Sizes:</strong> {item.sizes}
              </div>

              <div className="spec-line">
                <strong>Usage:</strong> {item.usage}
              </div>

              <div className="spec-note">
                {item.note}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default MaterialGuidance;