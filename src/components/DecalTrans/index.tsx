import { Decal } from "@react-three/drei";

import { DecalTransProps } from "../../../src/types";

const DecalTrans: React.FC<DecalTransProps> = ({ decal, position }) => {
  return (
    <mesh castShadow receiveShadow scale={0.1} position={position}>
      <icosahedronGeometry args={[1, 1]} />
      <meshStandardMaterial
        polygonOffset
        polygonOffsetFactor={-5}
        flatShading
        transparent
        opacity={0}
      />
      <Decal
        position={[-0.3, -0.15, 0.5]}
        rotation={[0, 0, 6.25]}
        scale={1}
        map={decal}
      />
    </mesh>
  );
};

export default DecalTrans;
