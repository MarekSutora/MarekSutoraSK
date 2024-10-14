"use client";

import { IconBaseProps } from "react-icons/lib";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import * as SiIcons from "react-icons/si";
import * as DiIcons from "react-icons/di";

interface typesPropsIcon {
  nameIcon: string;
  propsIcon?: IconBaseProps;
}

const iconLibraries: {
  [key: string]: { [key: string]: React.ComponentType<IconBaseProps> };
} = {
  fa: FaIcons,
  md: MdIcons,
  gi: GiIcons,
  ai: AiIcons,
  si: SiIcons,
  di: DiIcons,
};

export function Icon({ nameIcon, propsIcon }: typesPropsIcon): JSX.Element {
  const lib = nameIcon
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .split(" ")[0]
    .toLowerCase();

  const IconComponent = iconLibraries[lib]?.[
    nameIcon as keyof (typeof iconLibraries)[typeof lib]
  ] as React.ComponentType<IconBaseProps>;

  if (!IconComponent) {
    console.error(`Icon ${nameIcon} not found in the ${lib} library`);
    return <span>Icon not found</span>;
  }

  return <IconComponent {...propsIcon} />;
}
