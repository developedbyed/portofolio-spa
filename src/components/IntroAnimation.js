import Lottie from "react-lottie";
import React from "react";
import animationData from "../img/data.json";

const LootieAnimation = () => {
  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  const style = {
    animation: "runningFrames 2.5s forwards"
  };

  return (
    <div className="animation-wrapper">
      <Lottie options={defaultOptions} height={200} width={200} style={style} />
    </div>
  );
};

export default LootieAnimation;
