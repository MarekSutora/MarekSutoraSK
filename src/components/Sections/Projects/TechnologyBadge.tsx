import React from "react";
import { Icon } from "../../Common/Icon";
import { cn } from "@/lib/utils";

type Props = {
  iconName?: string;
  technologyName: string;
  iconSize?: number;
  color?: string;
};

const TechnologyBadge = ({
  iconName,
  technologyName,
  iconSize = 19,
  color,
}: Props) => {
  return (
    <div
      className={cn(
        color === "white"
          ? "flex h-full flex-row items-center gap-1 rounded-full border-[1px] border-neutral-700 bg-zinc-200 p-1 px-2 text-xs font-medium text-black transition-all duration-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100"
          : "flex h-full flex-row items-center gap-1 rounded-full border-[1px] border-zinc-300 bg-neutral-800 p-1 px-2 text-xs font-medium text-gray-100 transition-all duration-300 dark:border-zinc-300 dark:bg-zinc-200 dark:text-black",
        "max-h-[29px]",
      )}
    >
      {iconName && <Icon nameIcon={iconName} propsIcon={{ size: iconSize }} />}
      <span>{technologyName}</span>
    </div>
  );
};

export default TechnologyBadge;
