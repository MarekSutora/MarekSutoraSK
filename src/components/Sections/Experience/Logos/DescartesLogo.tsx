import React from "react";
import Image from "next/image";
import DescartesLogoImg from "@/root/public/experience/Descartes_Logo_Color_RGB.png";

type Props = {};

const DescartesLogo = (props: Props) => {
  return <Image src={DescartesLogoImg} alt="Descartes logo" width={200} />;
};

export default DescartesLogo;
