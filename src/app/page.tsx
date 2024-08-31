"use client";

import ThemeSwitcher from "@/components/ThemeSwitcher";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <ThemeSwitcher />
    </main>
  );
}
