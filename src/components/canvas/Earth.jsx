import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
  const earth = useGLTF("./planet/scene.gltf");

  return (
    <primitive object={earth.scene} scale={2.5} position-y={0} rotation-y={0} />
  );
};

const EarthCanvas = () => {
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 500px)").matches;
  const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

  return (
    <Canvas
      shadows={!isMobile}
      // Earth has autoRotate — keep continuous frames for animation
      frameloop={"always"}
      dpr={dpr}
      gl={{ preserveDrawingBuffer: false, antialias: true, powerPreference: "low-power" }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />

        <Preload all />
      </Suspense>
    </Canvas>
  );
};

export default EarthCanvas;
