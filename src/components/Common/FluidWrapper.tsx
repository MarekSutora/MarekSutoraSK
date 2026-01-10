"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const FluidDistortion = dynamic(() => import("@/components/Common/FluidDistortion"), {
  ssr: false,
  loading: () => null,
});

const FluidWrapper = () => {
  const [showFluid, setShowFluid] = useState(false);

  useEffect(() => {
    // Check for WebGL support and performance
    const canvas = document.createElement("canvas");
    const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    setShowFluid(!!gl && window.innerWidth > 768); // Only on desktop
  }, []);

  return showFluid ? <FluidDistortion /> : null;
};

export default FluidWrapper;