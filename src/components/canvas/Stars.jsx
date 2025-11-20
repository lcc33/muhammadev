import { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = ({ count = 5000, color = "#f272c8", size = 0.002 }) => {
  const ref = useRef();
  // Ensure positions length is a multiple of 3 (x,y,z)
  const [sphere] = useState(() => random.inSphere(new Float32Array(count * 3), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (!ref.current) return;
    // slow animated rotation — keeps CPU/GPU pressure small
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color={color}
          size={size}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 500px)").matches;
  const count = isMobile ? 1200 : 5000;
  const size = isMobile ? 0.0035 : 0.002;
  const dpr = isMobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);

  return (
    <div className="w-full h-auto absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }} dpr={dpr} gl={{ antialias: false, powerPreference: "low-power" }}>
        <Suspense fallback={null}>
          <Stars count={count} size={size} />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
