"use client";

import { useTheme } from "next-themes";
import React from "react";
import AnimatedCursor from "react-animated-cursor";

const CustomCursor = () => {
  const { resolvedTheme } = useTheme();
  console.log(resolvedTheme);
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color={resolvedTheme === "light" ? "0, 0, 0" : "255, 255, 255"}
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={5}
    />
  );
};

export default CustomCursor;
