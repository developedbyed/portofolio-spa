import Lottie from "react-lottie";
import React from "react";
import animationData from "../img/contact.json";

const ContactAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="contact-animation">
      <Lottie options={defaultOptions} height={200} width={300} />
    </div>
  );
};

export default ContactAnimation;
