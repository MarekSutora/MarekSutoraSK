import { motion } from "framer-motion";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

type BackgroundProps = {
  children: React.ReactNode;
};

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="w-full h-full dark:bg-zinc-950  bg-white">
      <ThemeSwitcher />
      <div className="noise-bg"> {children}</div>
    </div>
  );
};

export default Background;
