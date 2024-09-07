"use client";

import About from "@/components/About/About";
import FluidDistortion from "@/components/Fluid/FluidDistortion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { Love_Ya_Like_A_Sister } from "next/font/google";

const fredericka_the_Great = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="w-full h-full z-20 dark:text-zinc-200 text-black relative">
      <ThemeSwitcher />
      <FluidDistortion />
      <div className="flex flex-col justify-center items-center h-full md:w-5/6 w-11/12 m-auto">
        <section
          className={cn(
            "w-full h-full font-bold drop-shadow-2xl md:pt-44 pt-36 select-none text-center",
            fredericka_the_Great.className
          )}
        >
          <p className="md:text-huge text-6xl">Marek Šútora</p>
          <p className="md:text-6xl text-3xl">Fullstack Web Developer</p>
        </section>
        <About />
      </div>
    </main>
  );
}
