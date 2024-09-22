import React from "react";
import { projects } from "@/lib/constants";
import Image from "next/image";
import TechnologyBadge from "./TechnologyBadge";

const Projects = () => {
  return (
    <div className="flex w-full flex-col gap-3">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-md border-[1px] border-zinc-300 bg-zinc-200 p-2 text-black shadow-md"
          >
            <div className="flex w-full flex-row items-center justify-between">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <span className="text-sm">{project.duration}</span>
            </div>
            <div className="flex flex-row py-2">
              <div className="flex w-full flex-col gap-1 md:w-[45%]">
                <p className="text-base">{project.description}</p>
              </div>
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={200}
              />
            </div>
            <div className="flex flex-col gap-1">
              {project.technologies.frontend && (
                <ul className="flex flex-row flex-wrap gap-1">
                  {project.technologies.frontend.map((tech, index) => (
                    <li key={index}>
                      <TechnologyBadge
                        iconName={tech.icon}
                        technologyName={tech.name}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {project.technologies.backend && (
                <ul className="flex flex-row flex-wrap gap-1">
                  {project.technologies.backend.map((tech, index) => (
                    <li key={index}>
                      <TechnologyBadge
                        iconName={tech.icon}
                        technologyName={tech.name}
                      />
                    </li>
                  ))}
                </ul>
              )}
              {project.technologies.deployment && (
                <ul className="flex flex-row flex-wrap gap-1">
                  {project.technologies.deployment.map((tech, index) => (
                    <li key={index}>
                      <TechnologyBadge
                        iconName={tech.icon}
                        technologyName={tech.name}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
