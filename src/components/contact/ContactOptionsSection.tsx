import React from "react";
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
} from "lucide-react";

const ContactOptionsSection = () => {
  return (
    <section className="contact-options">
      <div className="container">

        {/* SECTION TITLE */}
        <div className="contact-options-header">
          <h2>Reach Us Directly</h2>
          <p>
            Choose the fastest way to connect with our team. We respond quickly across all channels.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="contact-grid">

          {/* CALL */}
          <a href="tel:+2348139336355" className="contact-card">
            <div className="icon"><Phone /></div>
            <h3>Call Us</h3>
            <p>Speak directly with our sales team</p>
            <span>Instant response</span>
          </a>

          {/* WHATSAPP */}
          <a
            href="https://wa.me/2348139336355?text=Hello%20SM%20Ridge%20Materials%2C%20I%20would%20like%20to%20inquire%20about%20your%20products."
            target="_blank"
            className="contact-card highlight"
          >
            <div className="icon"><MessageCircle /></div>
            <h3>WhatsApp</h3>
            <p>Fastest way to get pricing & availability</p>
            <span>Recommended</span>
          </a>

          {/* EMAIL */}
          <a href="mailto:info@smridgematerials.com" className="contact-card">
            <div className="icon"><Mail /></div>
            <h3>Email</h3>
            <p>Send detailed project enquiries</p>
            <span>2-3hrs response</span>
          </a>

          {/* LOCATION */}
          <div className="contact-card">
            <div className="icon"><MapPin /></div>
            <h3>Visit Office</h3>
            <p>Alimosho, Lagos, Nigeria</p>
            <span>Mon–Sat: 8am–6pm</span>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactOptionsSection;