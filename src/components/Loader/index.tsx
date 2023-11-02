import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useMedia } from "react-use";

const Loader = () => {
  const blackhole = useGLTF(
    `${import.meta.env.VITE_PUBLIC_URL}/blackhole/scene.gltf`
  );
  const isTabletLandscape = useMedia(`screen and  (min-width:1024px)`, true);

  return (
    <Canvas
      shadows
      style={{ background: "#000" }}
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 65,
        near: 0.1,
        far: 50,
        position: [0, isTabletLandscape ? 10 : 20, 6],
        rotation: [-Math.PI / 2, 0, 0],
      }}
    >
      <OrbitControls
        autoRotate
        enableZoom={false}
        maxPolarAngle={1}
        minPolarAngle={-2}
      />
      <primitive object={blackhole.scene} scale={2} />
    </Canvas>
  );
};

export default Loader;
