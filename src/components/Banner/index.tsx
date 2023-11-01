import { useTexture, Decal } from "@react-three/drei";

import { BannerProps } from "../../../src/types";

const Banner: React.FC<BannerProps> = ({ title, decal, ...props }) => {
  const [bannerDecal] = useTexture([decal]);

  return (
    <group {...props}>
      <mesh
        name={`${title}-banner`}
        userData={{ url: "https://www.kershey.pro/" }}
        scale={[1.2, 1, 0.25]}
        position={[0, 1.1, -0.75]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#000"
          metalness={1.5}
          roughness={0.25}
          envMapIntensity={1}
        />

        <mesh scale={[1.15, 0.5, 1]} position={[0, 0, 0.2]}>
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} color="#000000" />
          <Decal map={bannerDecal} />
        </mesh>
      </mesh>
    </group>
  );
};

export default Banner;
