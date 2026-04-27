import React from "react";

interface QuoteFormData {
  fullName: string;
  phone: string;
  location: string;
  address: string;
  projectType: string;
  timeline: string;
  quantity: string;
  notes: string;
}

interface Props {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  formData: QuoteFormData;
  material: string;
  isSubmitting: boolean;
  onConfirm: () => void;
}

const ConfirmQuoteModal: React.FC<Props> = ({
  isOpen,
  setIsOpen,
  formData,
  material,
  isSubmitting,
  onConfirm,
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="confirm-overlay"
      onClick={() => {
        if (!isSubmitting) setIsOpen(false);
      }}
    >
      <div
        className="confirm-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE */}
        <button
          type="button"
          className="modal-close"
          onClick={() => {
            if (!isSubmitting) setIsOpen(false);
          }}
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="confirm-header">
          <h2>Review Your Quote Request</h2>
          <p>Please verify your details before submission.</p>
        </div>

        {/* BODY */}
        <div className="confirm-body">
          <div className="confirm-section">
            <h4>Customer Details</h4>

            <div className="confirm-row">
              <span>Name</span>
              <div className="confirm-value">{formData.fullName || "—"}</div>
            </div>

            <div className="confirm-row">
              <span>Phone</span>
              <div className="confirm-value">{formData.phone || "—"}</div>
            </div>

            <div className="confirm-row">
              <span>Location</span>
              <div className="confirm-value">{formData.location || "—"}</div>
            </div>
            <div className="confirm-row">
              <span>Delivery Address</span>
              <div className="confirm-value">{formData.address || "—"}</div>
            </div>
          </div>

          <div className="confirm-section">
            <h4>Project Details</h4>

            <div className="confirm-row">
              <span>Type</span>
              <div className="confirm-value">{formData.projectType || "—"}</div>
            </div>

            <div className="confirm-row">
              <span>Timeline</span>
              <div className="confirm-value">{formData.timeline || "—"}</div>
            </div>
          </div>

          <div className="confirm-section highlight">
            <h4>Material Selection</h4>

            <div className="confirm-row">
              <span>Material</span>
              <div className="confirm-value">{material || "—"}</div>
            </div>

            <div className="confirm-row">
              <span>Quantity</span>
              <div className="confirm-value">{formData.quantity || "—"}</div>
            </div>
          </div>

          <div className="confirm-section">
            <h4>Notes</h4>
            <div className="confirm-notes">
              {formData.notes?.trim() ? formData.notes : "No additional notes provided."}
            </div>
          </div>
        </div>

        {/* ACTIONS */}
        <div className="confirm-actions">
          <button
            type="button"
            className="edit-btn"
            onClick={() => {
              if (!isSubmitting) setIsOpen(false);
            }}
            disabled={isSubmitting}
          >
            Edit
          </button>

          <button
            type="button"
            className="confirm-btn"
            onClick={onConfirm}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Confirm"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmQuoteModal;