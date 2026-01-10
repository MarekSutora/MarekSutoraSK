"use client";

import { useTheme } from "next-themes";
import React, { useState, useEffect } from "react";
import AnimatedCursor from "react-animated-cursor";

// const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
//   ssr: false,
// });

const CustomCursor = () => {
  const { resolvedTheme } = useTheme();
  const [isDesktop, setIsDesktop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    setIsDesktop(window.innerWidth > 1024);
  }, []);

  if (!isClient || !isDesktop) return null;

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
