import React from "react";


const LordIcon = (props: any) =>
  React.createElement("lord-icon" as any, props);

const FloatingActions = () => {
  return (
    <>
      <a
        href="https://wa.me/2348139336355"
        className="floating-action floating-action--whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <LordIcon
          src="https://cdn.lordicon.com/dhcosedn.json"
          trigger="loop"
          colors="primary:#ebe6ef,secondary:#109121"
          style={{ width: "75px", height: "75px" }}
        />
      </a>

      
    </>
  );
};

export default FloatingActions;