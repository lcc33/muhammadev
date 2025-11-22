import React, { lazy, Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// 1. Import the necessary loaders from the 'three' package
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// ... other imports

// 2. Instantiate and configure the Draco loader
const dracoLoader = new DRACOLoader();
// Set the path to the Draco decoder files. These files (e.g., draco_decoder.wasm, draco_decoder.js)
// are typically copied from the 'node_modules/draco3d/draco/' directory to your public directory (e.g., 'public/draco/').
dracoLoader.setDecoderPath("/draco/"); // <--- **Important: Update this path**
dracoLoader.setDecoderConfig({ type: "js" }); // Optional: specify 'js' or 'wasm'

// 3. Set the Draco loader on the GLTF loader
const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

// 4. Use the custom loader in useGLTF
useGLTF.preload("./desktop_pc/scene.gltf", gltfLoader);

const Computers = ({ isMobile }) => {
  // Pass the custom loader to useGLTF
  const computer = useGLTF("./desktop_pc/scene.gltf", gltfLoader);

  return (
    <mesh>
      {/* ... your lighting and primitive setup ... */}
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
        // avoid shadows on mobile to reduce cost
        castShadow={!isMobile}
        receiveShadow={!isMobile}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Add a listener for changes to the screen size
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    // Set the initial value of the `isMobile` state variable
    setIsMobile(mediaQuery.matches);

    // Define a callback function to handle changes to the media query
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    // Add the callback function as a listener for changes to the media query
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

  return (
    <Canvas
      // computers are mostly static; demand frame loop helps perf
      frameloop={"demand"}
      shadows={!isMobile}
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
