import React from "react";
import { Truck, Warehouse, MapPin, ShieldCheck } from "lucide-react";

const SupplyCapabilities: React.FC = () => {
  return (
    <section className="supply-capabilities">

      <div className="supply-wrapper">

        {/* LEFT: CAPABILITY STACK */}
        <div className="supply-metrics">

          <div className="metric-block">
            <strong>Bulk Supply Capacity</strong>
            <span>
              We handle large volume orders across multiple material categories
              without compromising delivery timelines.
            </span>
          </div>

          <div className="metric-block">
            <strong>Reliable Logistics</strong>
            <span>
              Coordinated delivery network ensuring materials arrive on-site
              efficiently and safely.
            </span>
          </div>

          <div className="metric-block">
            <strong>Multi-Project Support</strong>
            <span>
              Ability to supply and manage multiple project sites simultaneously.
            </span>
          </div>

        </div>

        {/* RIGHT: FEATURE RAIL */}
        <div className="supply-rail">

          <div className="rail-item">
            <Truck size={20} />
            <div>
              <h4>Fast Delivery</h4>
              <p>Quick dispatch and transport coordination.</p>
            </div>
          </div>

          <div className="rail-item">
            <Warehouse size={20} />
            <div>
              <h4>Material Availability</h4>
              <p>Consistent sourcing of essential materials.</p>
            </div>
          </div>

          <div className="rail-item">
            <MapPin size={20} />
            <div>
              <h4>Wide Coverage</h4>
              <p>Serving Lagos and surrounding regions.</p>
            </div>
          </div>

          <div className="rail-item">
            <ShieldCheck size={20} />
            <div>
              <h4>Trusted Quality</h4>
              <p>Verified suppliers and durable materials.</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SupplyCapabilities;