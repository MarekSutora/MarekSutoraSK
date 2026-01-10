import React from "react";
import CodiumLogoImg from "@/root/public/experience/codium2.svg";
import CodiumLogoText from "@/root/public/experience/codium-text.svg";
import Image from "next/image";

type Props = {};

const CodiumLogo = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={CodiumLogoImg}
        alt="Codium logo"
        width={70}
        priority={false}
      />
      <Image
        src={CodiumLogoText}
        alt="Codium logo text"
        width={70}
        className="pt-1"
        priority={false}
      />
    </div>
  );
};

export default CodiumLogo;
