"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { Love_Ya_Like_A_Sister } from "next/font/google";

const fredericka_the_Great = Love_Ya_Like_A_Sister({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="w-full h-full">
      <ThemeSwitcher />

      <div
        className={cn(
          "w-full h-full flex flex-col items-center text-black font-bold dark:text-zinc-300  drop-shadow-2xl pt-28 select-none z-20",
          fredericka_the_Great.className
        )}
      >
        <p className="text-huge">Marek Šútora</p>
        <p className="text-6xl">Fullstack Web Developer</p>
      </div>
    </main>
  );
}
