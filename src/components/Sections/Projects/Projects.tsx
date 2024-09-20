import React from "react";
import { projects } from "@/lib/constants";

const Projects = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      {projects.map((project, index) => {
        return <div key={index}>test</div>;
      })}
    </div>
  );
};

export default Projects;
