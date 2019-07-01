import React, { Component } from "react";
import PROJECTS from "../data/projects";

const Project = props => {
  const { title, image, description, link } = props.project;
  return (
    <div className="project">
      <h3>{title}</h3>
      <img src={image} style={{ width: 200, height: 200 }} alt="project" />
      <p>{description}</p>
      <a href={link}>{link}</a>
    </div>
  );
};

const Projects = () => (
  <div>
    <h1>Highlighted Projects</h1>
    <div>
      {PROJECTS.map(PROJECT => (
        <Project key={PROJECT.id} project={PROJECT} />
      ))}
    </div>
  </div>
);

export default Projects;
