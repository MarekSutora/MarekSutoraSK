import React from "react";
import Image from "next/image";
import DescartesLogoImg from "@/root/public/experience/Descartes_Logo_Color_RGB.png";

type Props = {};

const DescartesLogo = (props: Props) => {
  return (
    <Image
      src={DescartesLogoImg}
      alt="Descartes logo"
      width={200}
      priority={false}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQ..."
    />
  );
};

export default DescartesLogo;
