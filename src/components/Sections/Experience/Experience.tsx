import React from "react";
import { experienceSk, experienceEn } from "@/lib/constants";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import ShimmerButton from "@/components/Common/ShimmerButton";
import TechnologyBadge from "../Projects/TechnologyBadge";
import { useLocale } from "next-intl";
import DescartesLogo from "./Logos/DescartesLogo";
import CodiumLogo from "./Logos/CodiumLogo";

const Experience = () => {
  const locale = useLocale();

  const experience = locale === "sk" ? experienceSk : experienceEn;

  return (
    <div className="flex flex-row items-start justify-between">
      <div className="flex flex-grow flex-col gap-6 p-[1px]">
        {experience.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between">
              <div>
                <h2 className="text-xl font-semibold">{item.company}</h2>
                <h3 className="text-lg font-medium">{item.position}</h3>
                <p className="pt-1">{item.duration}</p>
                <div className="flex flex-row items-center justify-between pt-1">
                  <p>{item.workType}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between items-end pt-1">
                {item.company === "Descartes" && <DescartesLogo />}
                {item.company === "Codium" && <CodiumLogo />}
                <Dialog>
                  <DialogTrigger asChild>
                    <ShimmerButton
                      text={locale === "sk" ? "Viac info" : "More info"}
                      iconName="FaInfo"
                      iconSize={19}
                      className="z-50 h-[30px] w-auto"
                    />
                  </DialogTrigger>
                  <DialogContent className="flex flex-col gap-3 border-neutral-900 bg-gray-200 text-black dark:bg-neutral-800 dark:text-gray-100">
                    <DialogHeader>
                      <h1 className="text-xl font-semibold">
                        {item.position} {locale === "sk" ? "v" : "at"}{" "}
                        {item.company}
                      </h1>
                    </DialogHeader>
                    <DialogDescription className="text-base">
                      {item.description}
                    </DialogDescription>
                    <div className="flex flex-col gap-2">
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
            </div>
            {index == 0 && experience.length > 1 && (
              <div className="my-auto mt-6 h-[1px] w-full rounded-full bg-zinc-700/60 dark:bg-zinc-700"></div>
            )}
          </div>
        ))}
      </div>
      <div className="flex-shrink: 1 hidden md:block md:pt-6"></div>
    </div>
  );
};

export default Experience;
