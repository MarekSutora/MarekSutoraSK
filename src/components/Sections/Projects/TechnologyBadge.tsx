import React from "react";
import { Icon } from "../Icon";

type Props = {
  iconName?: string;
  technologyName: string;
  iconSize?: number;
};

const TechnologyBadge = ({
  iconName,
  technologyName,
  iconSize = 22,
}: Props) => {
  return (
    <div className="flex h-full flex-row items-center gap-1 rounded-xl border-[1px] border-neutral-700 bg-neutral-800 p-1 px-2 text-xs text-gray-100 shadow-md transition-all duration-300 dark:border-zinc-300 dark:bg-zinc-200 dark:text-black">
      {iconName && <Icon nameIcon={iconName} propsIcon={{ size: iconSize }} />}
      <span>{technologyName}</span>
    </div>
  );
};

export default TechnologyBadge;
