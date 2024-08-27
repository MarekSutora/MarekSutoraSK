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

  const setThemeHandler = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    console.log("theme", theme);
  };

  const renderThemeChanger = () => {
    if (!mounted) return null;
    if (theme === "dark") {
      return <button onClick={setThemeHandler}>Light Mode</button>;
    } else {
      return <button onClick={setThemeHandler}>Dark Mode</button>;
    }
  };

  return <>{renderThemeChanger()}</>;
};

export default ThemeSwitcher;
