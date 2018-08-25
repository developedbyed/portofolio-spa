import React from "react";
import ProjectBox from "./ProjectBox";
import swirl from "../img/swirl-website.jpg";
import tap from "../img/tap-music.jpg";
import weather from "../img/weather-app.jpg";
import ProjectAnimation from "./ProjectAnimation";

const Projects = () => (
  <div className="project-wrapper">
    <div className="project-title">
      <p className="p-title"> Projects </p>
    </div>
    <div className="project-list">
      <ProjectBox
        visit="https://devedwin.github.io/Swirl-Website/"
        title="Swirl Website"
        image={swirl}
        text="Designed for a Photography program. This is the mockup version."
      />
      <ProjectBox
        visit="https://devedwin.github.io/tap-music/"
        title="Tap Music"
        image={tap}
        text="A web app for creating sick beats with some added visuals!"
      />
      <ProjectBox
        visit="https://devedwin.github.io/weather-app/"
        title="Weather App"
        image={weather}
        text="A geolocation based web app. Check it out in case you need an umbrella."
      />
    </div>
    <ProjectAnimation />
  </div>
);

export default Projects;
