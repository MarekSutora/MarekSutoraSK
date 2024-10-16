"use client";

import { useTheme } from "next-themes";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

const CustomCursor = () => {
  const { resolvedTheme } = useTheme();

  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color={resolvedTheme === "light" ? "0, 0, 0" : "255, 255, 255"}
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={5}
      trailingSpeed={1}
    />
  );
};

export default CustomCursor;
