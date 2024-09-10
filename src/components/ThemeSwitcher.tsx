"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@heroicons/react/24/outline";
import { MoonIcon } from "@heroicons/react/24/solid";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleSetTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <button
      onClick={handleSetTheme}
      className="p-2 rounded-full bg-zinc-300 dark:bg-zinc-900 fixed top-3 right-3 z-50"
    >
      {theme === "dark" ? (
        <SunIcon className="w-6 h-6 text-zinc-900 dark:text-zinc-300" />
      ) : (
        <MoonIcon className="w-6 h-6 text-zinc-900 dark:text-zinc-300" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
