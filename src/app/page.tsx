"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { cn } from "@/lib/utils";
import { Fredericka_the_Great } from "next/font/google";

const fredericka_the_Great = Fredericka_the_Great({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  return (
    <main className="w-full h-full flex flex-col">
      <ThemeSwitcher />
      <div className={cn(
          "w-full h-full flex flex-col justify-center items-center text-black text-huge font-bold",
          fredericka_the_Great.className
        )}>
        <p>Marek</p>
        <p>Šútora</p>
      </div>
    </main>
  );
}
