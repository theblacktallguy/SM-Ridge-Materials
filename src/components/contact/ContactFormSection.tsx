import React, { useState } from "react";

const ContactFormSection = () => {
  const [step, setStep] = useState(1);
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [data, setData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

  const validateStep = (currentStep: number) => {
    if (currentStep === 1) {
      if (!data.name.trim()) {
        setFormError("Full Name is required before proceeding.");
        return false;
      }
    }

    if (currentStep === 2) {
      if (!data.phone.trim() || !data.email.trim()) {
        setFormError("Phone and Email are required before proceeding.");
        return false;
      }

      const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
      if (!emailValid) {
        setFormError("Please enter a valid email address.");
        return false;
      }
    }

    if (currentStep === 3) {
      if (!data.subject.trim() || !data.message.trim()) {
        setFormError("Subject and Message are required before proceeding.");
        return false;
      }
    }

    setFormError("");
    return true;
  };

  const next = () => {
    if (!validateStep(step)) return;
    setStep((s) => Math.min(s + 1, 4));
  };

  const prev = () => {
    setFormError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleSubmit = async () => {
    if (
      !data.name.trim() ||
      !data.phone.trim() ||
      !data.email.trim() ||
      !data.subject.trim() ||
      !data.message.trim()
    ) {
      setFormError("Please complete all required fields before submitting.");
      return;
    }

    try {
      setIsSubmitting(true);
      setFormError("");
      setSuccessMessage("");

      const response = await fetch(`${API_URL}/api/contact-request`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to send message.");
      }

      setSuccessMessage(
        "Your message has been sent successfully. We’ll get back to you shortly."
      );

      setData({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
      });

      setStep(1);

      setTimeout(() => {
        setSuccessMessage("");
      }, 5000);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.";

      setFormError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="elite-contact">
      <div className="container">
        <div className="contact-intro">
          <h2>Start a Conversation</h2>
          <p>
            Whether you need product clarification, logistics guidance, or support,
            our team is ready to respond quickly and professionally.
          </p>

          <div className="contact-hints">
            <span>✔ Fast response</span>
            <span>✔ Professional support</span>
            <span>✔ Clear communication</span>
          </div>
        </div>

        {formError && (
          <div className="form-error-banner">
            <span>{formError}</span>
            <button type="button" onClick={() => setFormError("")}>
              ✕
            </button>
          </div>
        )}

        {successMessage && (
          <div className="form-success-banner">
            <span>{successMessage}</span>
            <button type="button" onClick={() => setSuccessMessage("")}>
              ✕
            </button>
          </div>
        )}

        <div className="progress">
          {[1, 2, 3, 4].map((s) => (
            <div key={s} className={`dot ${step >= s ? "active" : ""}`} />
          ))}
          <span>Step {step} of 4</span>
        </div>

        <div className="elite-grid">
          <div className="form-panel">
            {step === 1 && (
              <div className="step">
                <h3>Your Identity</h3>

                <input
                  placeholder="Full Name"
                  value={data.name}
                  onChange={(e) => setData({ ...data, name: e.target.value })}
                />

                <div className="contact-form-nav">
                  <button type="button" onClick={next}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="step">
                <h3>Contact Details</h3>

                <input
                  placeholder="Phone"
                  value={data.phone}
                  onChange={(e) => setData({ ...data, phone: e.target.value })}
                />

                <input
                  placeholder="Email"
                  value={data.email}
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />

                <div className="nav">
                  <button type="button" onClick={prev}>
                    Back
                  </button>
                  <button type="button" onClick={next}>
                    Continue
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="step">
                <h3>Your Request</h3>

                <input
                  placeholder="Subject"
                  value={data.subject}
                  onChange={(e) => setData({ ...data, subject: e.target.value })}
                />

                <textarea
                  placeholder="Your message..."
                  value={data.message}
                  onChange={(e) => setData({ ...data, message: e.target.value })}
                />

                <div className="nav">
                  <button type="button" onClick={prev}>
                    Back
                  </button>
                  <button type="button" onClick={next}>
                    Review
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="step">
                <h3>Confirm Your Message</h3>

                <div className="summary">
                  <p><span>Name:</span> {data.name}</p>
                  <p><span>Phone:</span> {data.phone}</p>
                  <p><span>Email:</span> {data.email}</p>
                  <p><span>Subject:</span> {data.subject}</p>
                  <p><span>Message:</span> {data.message}</p>
                </div>

                <div className="nav">
                  <button type="button" onClick={prev} disabled={isSubmitting}>
                    Edit
                  </button>
                  <button
                    type="button"
                    className="submit"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="preview">
            <h4>Live Preview</h4>

            <div className="preview-box">
              <p><span>Name:</span> {data.name || "—"}</p>
              <p><span>Phone:</span> {data.phone || "—"}</p>
              <p><span>Email:</span> {data.email || "—"}</p>
              <p><span>Subject:</span> {data.subject || "—"}</p>
              <p><span>Message:</span> {data.message || "—"}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;