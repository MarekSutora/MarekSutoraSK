import React from "react";
import { Love_Ya_Like_A_Sister } from "next/font/google";
import { cn } from "@/lib/utils";

const love_Ya_Like_A_Sister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

const Title = () => {
  return (
    <section
      className={cn(
        "w-full select-none pt-36 text-center font-bold drop-shadow-2xl md:pt-36",
        love_Ya_Like_A_Sister.className,
      )}
    >
      <p className="z-50 text-6xl md:text-huge">Marek Šútora</p>
      <p className="z-50 text-3xl md:text-6xl">Web Developer</p>
    </section>
  );
};

export default Title;
