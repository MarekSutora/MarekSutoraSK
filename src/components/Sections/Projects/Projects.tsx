import React from "react";
import { projects } from "@/lib/constants";
import Image from "next/image";
import TechnologyBadge from "./TechnologyBadge";
import ShimmerLink from "@/components/Common/ShimmerLink";

const Projects = () => {
  return (
    <div className="z-50 flex w-full flex-col gap-3">
      {projects.map((project, index) => {
        return (
          <div
            key={index}
            className="flex flex-col gap-3 rounded-md border-[1px] border-zinc-300 bg-zinc-200 p-2 text-black shadow-md dark:border-neutral-900 dark:bg-neutral-800 dark:text-gray-100"
          >
            <div className="flex w-full flex-row items-center justify-between">
              <h2 className="text-lg font-semibold">{project.title}</h2>
              <span className="text-sm">{project.duration}</span>
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
              {project.technologies.all && (
                <ul className="flex flex-row flex-wrap gap-1">
                  {project.technologies.all.map((tech, index) => (
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
            <div className="flex flex-col justify-between py-2 md:flex-row gap-2">
              <div className="flex w-full flex-col gap-1 md:w-[45%]">
                <p className="text-base">{project.description}</p>
              </div>
              <div className="flex w-full flex-col gap-1 md:w-[46%]">
                <div className="relative hidden h-52 md:block">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="rounded-md border border-zinc-300 object-cover shadow-sm"
                  />
                </div>
                <div className="flex flex-row gap-1">
                  {project.sourceCode &&
                  typeof project.sourceCode === "string" ? (
                    <ShimmerLink
                      href={project.sourceCode}
                      text="Code"
                      iconName="FaGithub"
                    />
                  ) : (
                    <>
                      {typeof project.sourceCode === "object" &&
                        project.sourceCode.frontend && (
                          <ShimmerLink
                            href={project.sourceCode.frontend}
                            text="Frontend Code"
                            iconName="FaGithub"
                          />
                        )}
                      {typeof project.sourceCode === "object" &&
                        project.sourceCode.backend && (
                          <ShimmerLink
                            href={project.sourceCode.backend}
                            text="Backend Code"
                            iconName="FaGithub"
                          />
                        )}
                    </>
                  )}
                  <ShimmerLink
                    href={project.liveDemo}
                    text="Preview"
                    iconName="FaExternalLinkAlt"
                    iconSize={16}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Projects;
