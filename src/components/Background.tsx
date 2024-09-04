import { motion } from "framer-motion";
import Image from "next/image";
import ThemeSwitcher from "./ThemeSwitcher";

const Background = () => {
  return (
    <div className="dark:bg-zinc-950 bg-gray-100 noise-bg dark:opacity-50 opacity-100 -z-50"></div>
  );
};

export default Background;
