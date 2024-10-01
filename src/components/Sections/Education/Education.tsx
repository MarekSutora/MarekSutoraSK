import React from "react";
import FriLogo from "./FriLogo";
import { education } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TechnologyBadge from "../Projects/TechnologyBadge";
import ShimmerButton from "@/components/Common/ShimmerButton";

const Education = () => {

  return (
    <div className="z-50 flex flex-row items-start justify-between">
      <div className="flex flex-grow flex-col gap-6 p-[1px]">
        {education.map((item, index) => (
          <div key={index}>
            <h2 className="text-xl font-semibold">{item.university}</h2>
            <h3 className="text-lg font-medium">{item.faculty}</h3>
            <p>{item.duration}</p>
            <div className="flex flex-row justify-between">
              <p>{item.degree}</p>
              <Dialog>
                <DialogTrigger asChild>
                  <ShimmerButton
                    text="Learn more"
                    iconName="FaInfo"
                    iconSize={19}
                  />
                </DialogTrigger>
                <DialogContent className="bg-gray-200">
                  <DialogHeader>
                    <DialogTitle>{item.degree}</DialogTitle>
                    <DialogDescription>
                      {item.description}
                      <div className="mt-4 flex flex-row flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <TechnologyBadge
                            key={techIndex}
                            technologyName={tech.name}
                            iconName={tech.icon}
                          />
                        ))}
                      </div>
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
      <div className="flex-shrink: 1 hidden md:block">
        <FriLogo />
      </div>
    </div>
  );
};

export default Education;
