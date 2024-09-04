"use client";

import React from "react";
import AnimatedCursor from "react-animated-cursor";

type Props = {};

const CustomCursor = (props: Props) => {
  return (
    <AnimatedCursor
      innerSize={10}
      outerSize={10}
      color="0, 0, 0"
      outerAlpha={0.2}
      innerScale={0.5}
      outerScale={5}
    />
  );
};

export default CustomCursor;
