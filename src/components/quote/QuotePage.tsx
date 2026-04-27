import React, { useState } from "react";
import ConfirmQuoteModal from "@/components/quote/ConfirmQuoteModal";

const materials = [
  { name: "Granite", image: "/assets/granite2.jpg" },
  { name: "Cement", image: "/assets/cement1.jpg" },
  { name: "Blocks", image: "/assets/blocks1.jpg" },
  { name: "Sand", image: "/assets/sand1.jpg" },
  { name: "Steel", image: "/assets/steel1.jpg" },
  { name: "Roofing", image: "/assets/roofing2.jpg" },
  { name: "Plumbing", image: "/assets/plumbing2.jpg" },
  { name: "Electrical", image: "/assets/electrical.jpg" },
  { name: "Paint", image: "/assets/paint2.jpg" },
];

const QuotePage: React.FC = () => {
  // UI states
  const [showSelector, setShowSelector] = useState(false);
  const [index, setIndex] = useState(0);
  const [formError, setFormError] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // form state
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    location: "",
    address: "",
    projectType: "",
    timeline: "",
    quantity: "",
    notes: "",
  });

  // carousel controls
  const next = () => {
    setIndex((prev) => (prev + 1) % materials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev === 0 ? materials.length - 1 : prev - 1));
  };

  // validation
  const isValidForm = () => {
    return (
      formData.fullName.trim() !== "" &&
      formData.phone.trim() !== "" &&
      formData.location.trim() !== "" &&
      formData.address.trim() !== "" &&
      formData.projectType !== "" &&
      formData.projectType !== "Project Type" &&
      formData.timeline !== "" &&
      formData.timeline !== "Timeline" &&
      formData.quantity.trim() !== ""
    );
  };

  // open review modal
  const handleReview = () => {
    if (!isValidForm()) {
      setFormError("Please complete all required fields before proceeding.");
      setShowConfirm(false);
      return;
    }

    setFormError("");
    setShowConfirm(true);
  };

  // final submit after confirmation
  const handleConfirmSubmit = async () => {
    try {
      setIsSubmitting(true);

      const payload = {
        ...formData,
        material: materials[index].name,
      };

      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

      const response = await fetch(`${API_URL}/api/quote-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to submit quote request.");
      }

      setShowConfirm(false);
      setFormError("");
      setSuccessMessage(
        "Your quote request has been submitted successfully. We’ll get back to you shortly."
      );

      setFormData({
        fullName: "",
        phone: "",
        location: "",
        address: "",
        projectType: "",
        timeline: "",
        quantity: "",
        notes: "",
      });

      setIndex(0);
      setShowSelector(false);

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while submitting your request.";

      setFormError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="quote-page">
      <div className="container">
        {/* HERO */}
        <div className="quote-header">
          <h1>Request a Quote</h1>
          <p>
            Provide your material requirements and project details. We’ll respond
            with pricing, availability, and delivery coordination.
          </p>
        </div>

        {/* FORM PANEL */}
        <div className="quote-form-panel">
          <h3>Project Request</h3>

          {/* ERROR BANNER */}
          {formError && (
            <div className="form-error-banner">
              <span>{formError}</span>
              <button type="button" onClick={() => setFormError("")}>
                ✕
              </button>
            </div>
          )}

          {/* SUCCESS BANNER */}
          {successMessage && (
            <div className="form-success-banner">
              <span>{successMessage}</span>
              <button type="button" onClick={() => setSuccessMessage("")}>
                ✕
              </button>
            </div>
          )}

          {/* BASIC INFO */}
          <div className="form-group">
            <input
              placeholder="Full Name"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
            />

            <input
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
            />

            <input
              placeholder="Project Location"
              value={formData.location}
              onChange={(e) =>
                setFormData({ ...formData, location: e.target.value })
              }
            />

            <input
              placeholder="Delivery Address"
              value={formData.address}
              onChange={(e) =>
                setFormData({ ...formData, address: e.target.value })
              }
            />
          </div>

          {/* PROJECT DETAILS */}
          <div className="form-group">
            <select
              value={formData.projectType}
              onChange={(e) =>
                setFormData({ ...formData, projectType: e.target.value })
              }
            >
              <option value="">Project Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Renovation">Renovation</option>
              <option value="Infrastructure">Infrastructure</option>
            </select>

            <select
              value={formData.timeline}
              onChange={(e) =>
                setFormData({ ...formData, timeline: e.target.value })
              }
            >
              <option value="">Timeline</option>
              <option value="Immediate">Immediate</option>
              <option value="1 week">Within 1 week</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          {/* MATERIAL TRIGGER */}
          <div
            className="material-trigger"
            onClick={() => setShowSelector((prev) => !prev)}
          >
            <span>Select Material</span>
            <span>{showSelector ? "−" : "+"}</span>
          </div>

          {/* MATERIAL SELECTOR */}
          {showSelector && (
            <div className="material-selector-box">
              <div className="material-carousel">
                {materials.map((item, i) => {
                  const position =
                    i === index
                      ? "active"
                      : i === index - 1 ||
                        (index === 0 && i === materials.length - 1)
                      ? "left"
                      : i === index + 1 ||
                        (index === materials.length - 1 && i === 0)
                      ? "right"
                      : "hidden";

                  return (
                    <div key={i} className={`carousel-item ${position}`}>
                      <img src={item.image} alt={item.name} />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="carousel-controls">
                <button id="1" type="button" onClick={prev}>
                  ←
                </button>
                <button id="2" type="button" onClick={next}>
                  →
                </button>
              </div>

              <div className="selected-material">
                Selected: <strong>{materials[index].name}</strong>
              </div>
            </div>
          )}

          {/* MATERIAL DETAILS */}
          <div className="form-group">
            <h4>Material Details</h4>

            <input
              placeholder="Quantity (e.g. 50 bags, 3 tons)"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
            />

            <textarea
              placeholder="Additional notes about your request..."
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
            />
          </div>

          {/* SUBMIT */}
          <button
            type="button"
            className="quote-submit"
            onClick={handleReview}
          >
            Review Request
          </button>
        </div>

        {/* CONFIRMATION MODAL COMPONENT */}
        <ConfirmQuoteModal
          isOpen={showConfirm}
          setIsOpen={setShowConfirm}
          formData={formData}
          material={materials[index].name}
          isSubmitting={isSubmitting}
          onConfirm={handleConfirmSubmit}
        />
      </div>
    </section>
  );
};

export default QuotePage;