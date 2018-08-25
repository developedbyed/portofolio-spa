import Lottie from "react-lottie";
import React from "react";
import animationData from "../img/sleep.json";

const ProjectAnimation = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className="project-animation">
      <Lottie options={defaultOptions} height={200} width={300} />
    </div>
  );
};

export default ProjectAnimation;
