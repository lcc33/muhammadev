import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

// 1. Moving the 3D logic into its own internal component.
// We remove the manual DRACOLoader boilerplate because 'drei' handles it internally!
const Computers = () => {
  // Pass the draco path as the second argument.
  // This only fires if the 'Computers' component is mounted (Desktop only).
  const { scene } = useGLTF("./desktop_pc/scene.gltf", "/draco/");
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={0}
        castShadow
      />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        scale={isMobile ? 0.55 : 0.65}
        position={[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(null); // Start with null to prevent "Hydration" flicker

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () =>
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  // Don't render anything until the screen size is detected
  if (isMobile === null) return null;

  // MOBILE: Return ONLY the image. No Three.js hooks are called.

  // if (isMobile) {
  //   return (
  //     <div className="w-full h-[400px] mt-20 flex items-center justify-center">
  //       <img
  //         src="/port.png"
  //         alt="Desktop PC workstation"
  //         className="w-[85%] h-auto object-contain mt-96 rounded-3xl drop-shadow-2xl"
  //         loading="eager"
  //       />
  //     </div>
  //   );
  // }

  // DESKTOP: Full 3D Experience

  return (
    <Canvas
      frameloop="demand"
      shadows
      dpr={[0, 1]} // Standard way to handle pixel density
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: false, powerPreference: "high-performance" }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
