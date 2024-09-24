"use client";

import { EffectComposer } from "@react-three/postprocessing";

import { Fluid } from "@/lib/FluidEffect/Fluid";
import { Canvas } from "@react-three/fiber";

const FluidDistortion = () => {
  return (
    <Canvas
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: "100vh",
        width: "100vw",
        zIndex: 1,
        opacity: 0.15,
        pointerEvents: "none",
        overflow: "auto",
      }}
    >
      <EffectComposer>
        <Fluid
          intensity={0.52}
          force={0.8}
          distortion={0.8}
          curl={0.4}
          swirl={4}
          // fluidColor="#801110"
          blend={1}
          showBackground={false}
          rainbow={true}
          pressure={0.57}
          densityDissipation={0.99}
          velocityDissipation={0.99}
          radius={0.52}
        />
      </EffectComposer>
    </Canvas>
  );
};

export default FluidDistortion;
