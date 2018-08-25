import React from "react";

const ProjectBox = props => (
  <div className="box">
    <a href={props.visit}>
      <img className="box-image" src={props.image} alt="projects" />{" "}
    </a>
    <h4>{props.title}</h4>
    <p style={{ textAlign: "center", padding: "5px", fontSize: "16px" }}>
      {props.text}
    </p>
  </div>
);

export default ProjectBox;
