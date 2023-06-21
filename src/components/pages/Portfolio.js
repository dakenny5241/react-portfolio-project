import React from 'react';
import FriendCard from "../FriendCard";
import projects from "../../projects.json";
export default function Portfolio() {
  return (
    <div>
      {projects.map(project => (
        <FriendCard
          id={project.id}
          key={project.id}
          title={project.title}
          image={project.image}
          occupation={project.occupation}
          location={project.location}
        />
      ))}
    </div>
  );
}