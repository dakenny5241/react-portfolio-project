import React from 'react';
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json";
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Portfolio() {
  return (
    <div>
      {projects.map(project => (
        <ProjectCard
          id={project.id}
          key={project.id}
          title={project.title}
          image={project.image}
          github repo={project.githubRepo}
          application link={project.applicationLink}
        />
      ))}
    </div>
  );
}