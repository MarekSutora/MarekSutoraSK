import React from "react";
import { cn } from "@/lib/utils";
import { Love_Ya_Like_A_Sister } from "next/font/google";

const love_Ya_Like_A_Sister = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

const Title = () => {
  return (
    <section
      className={cn(
        "w-full font-bold drop-shadow-2xl md:pt-36 pt-36 select-none text-center",
        love_Ya_Like_A_Sister.className
      )}
    >
      <p className="md:text-huge text-6xl">Marek Šútora</p>
      <p className="md:text-6xl text-3xl">Web Developer</p>
    </section>
  );
};

export default Title;
