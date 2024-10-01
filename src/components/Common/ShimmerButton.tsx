import React from "react";
import { Icon } from "./Icon";

type Props = {
  text: string;
  iconName: string;
  iconSize?: number;
  handleClick?: () => void;
};

const ShimmerButton = ({
  handleClick,
  text,
  iconName,
  iconSize = 22,
}: Props) => {
  return (
    <button
      className="flex animate-shimmer flex-row items-center justify-center gap-1 rounded-md border bg-[linear-gradient(110deg,#1a1a1a,45%,#4a4a4a,55%,#1a1a1a)] bg-[length:300%_100%] p-1 text-sm font-medium text-gray-100 transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:border-neutral-900 dark:bg-[linear-gradient(110deg,#f5f5f5,45%,#cccccc,55%,#f5f5f5)] dark:bg-[length:300%_100%] dark:text-neutral-900"
      onClick={handleClick}
    >
      {iconName && <Icon nameIcon={iconName} propsIcon={{ size: iconSize }} />}
      <span>{text}</span>
    </button>
  );
};

export default ShimmerButton;
