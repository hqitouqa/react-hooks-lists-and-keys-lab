import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
  const projectsItems = projects.map((project) => {
    return <h1 key={project.id}>{project.name}</h1>})
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">
        {projectsItems}
      </div>
    </div>
  );
}

export default ProjectList;
