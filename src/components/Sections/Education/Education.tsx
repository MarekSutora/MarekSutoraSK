import React from "react";
import FriLogo from "./FriLogo";
import { education } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TechnologyBadge from "../Projects/TechnologyBadge";
import ShimmerButton from "@/components/Common/ShimmerButton";

const Education = () => {
  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-grow flex-col gap-6 p-[1px]">
        {education.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{item.university}</h2>
            <h3 className="text-lg font-medium">{item.faculty}</h3>
            <p className="pt-1">{item.duration}</p>
            <div className="flex flex-row items-center justify-between">
              <p>{item.degree}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <ShimmerButton
                    text="Learn more"
                    iconName="FaInfo"
                    iconSize={19}
                    className="z-50"
                  />
                </DialogTrigger>
                <DialogContent className="flex flex-col gap-3 border-neutral-900 bg-gray-200 text-black dark:bg-neutral-800 dark:text-gray-100">
                  <DialogHeader>
                    <h1 className="text-xl font-semibold">{item.degree}</h1>
                  </DialogHeader>
                  <DialogDescription className="text-base">
                    {item.description}
                  </DialogDescription>
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row flex-wrap gap-1">
                      {item.fields.map((tech, techIndex) => (
                        <TechnologyBadge
                          key={techIndex}
                          technologyName={tech.name}
                          color="white"
                        />
                      ))}
                    </div>
                    <div className="flex flex-row flex-wrap gap-1">
                      {item.technologies.map((tech, techIndex) => (
                        <TechnologyBadge
                          key={techIndex}
                          technologyName={tech.name}
                          iconName={tech.icon}
                        />
                      ))}
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            {index == 0 && (
              <div className="my-auto mt-6 h-[1px] w-full rounded-full bg-zinc-700/60 dark:bg-zinc-700"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-shrink: 1 hidden md:block md:pt-6">
        <FriLogo />
      </div>
    </div>
  );
};

export default Education;
