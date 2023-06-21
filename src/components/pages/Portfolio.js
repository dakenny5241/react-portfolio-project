import React from 'react';
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json";
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
          application link={project.applicationlink}
        />
      ))}
    </div>
  );
}