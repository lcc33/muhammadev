import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// 1. Import the necessary loaders from the 'three' package
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

// 2. Instantiate and configure the Draco loader
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath("/draco/"); // Make sure these files exist in public/draco/
dracoLoader.setDecoderConfig({ type: "js" });

// 3. Set the Draco loader on the GLTF loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

// 4. Preload with custom loader (only used on desktop)
useGLTF.preload("./desktop_pc/scene.gltf", gltfLoader);

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf", gltfLoader);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={isMobile ? 0.6 : 1}
        castShadow={!isMobile}
        shadow-mapSize={isMobile ? 256 : 1024}
      />
      <pointLight intensity={isMobile ? 0.5 : 1} />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
        castShadow={!isMobile}
        receiveShadow={!isMobile}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  // ────────────────────────────────────────────────
  //     SHOW STATIC FALLBACK IMAGE ON MOBILE
  // ────────────────────────────────────────────────
  if (isMobile) {
    return (
      <div className="w-full h-[500px] md:h-[600px] mt-56 flex items-center justify-center bg-transparent">
        <img
          src="/port.png"
          alt="Desktop PC workstation illustration"
          className="max-w-[90%] max-h-[90%] object-contain rounded-3xl shadow-lg"
          loading="lazy"
        />
      </div>
    );
  }

  // ────────────────────────────────────────────────
  //     FULL 3D CANVAS ONLY ON DESKTOP / LARGER SCREENS
  // ────────────────────────────────────────────────
  const dpr = Math.min(window.devicePixelRatio || 1, 2);

  return (
    <Canvas
      frameloop="demand"
      shadows
      antialias={true}
      dpr={dpr}
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{
        preserveDrawingBuffer: false,
        antialias: false,
        powerPreference: "low-power",
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
