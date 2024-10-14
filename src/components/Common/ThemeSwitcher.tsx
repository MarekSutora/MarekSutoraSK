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
      className="z-50 rounded-full bg-zinc-300 p-1 dark:bg-zinc-900 h-9 w-9"
    >
      {theme === "dark" ? (
        <SunIcon className="text-zinc-900 dark:text-zinc-300" />
      ) : (
        <MoonIcon className="text-zinc-900 dark:text-zinc-300" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
