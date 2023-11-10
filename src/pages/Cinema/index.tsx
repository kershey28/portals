import * as THREE from "three";
import React, { forwardRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useNavigate } from "react-router-dom";
import {
  useCursor,
  useTexture,
  CubeCamera,
  Float,
  MeshReflectorMaterial,
  Text,
  Decal,
  OrbitControls,
} from "@react-three/drei";
import { EffectComposer, GodRays, Bloom } from "@react-three/postprocessing";
import { easing } from "maath";

import { iconExit } from "../../../src/assets/icons";

const Rig: React.FC = () => {
  useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [
        5 + state.pointer.x,
        0 + +state.pointer.y,
        18 + Math.atan2(state.pointer.x, state.pointer.y) * 2,
      ],
      0.4,
      delta
    );
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

const Floor: React.FC = () => (
  <mesh position={[0, -5.02, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
    <planeGeometry args={[50, 50]} />
    <MeshReflectorMaterial
      mirror={1}
      blur={[300, 50]}
      resolution={1024}
      mixBlur={1}
      mixStrength={100}
      roughness={1}
      depthScale={1.2}
      minDepthThreshold={0.4}
      maxDepthThreshold={1.4}
      color="#202020"
      metalness={0.8}
    />
  </mesh>
);

const Emitter = forwardRef<THREE.Mesh>((props, ref) => {
  const [video] = useState(() =>
    Object.assign(document.createElement("video"), {
      src: "/code.mp4",
      crossOrigin: "Anonymous",
      loop: true,
      muted: true,
    })
  );

  useEffect(() => void video.play(), [video]);
  return (
    <mesh ref={ref} position={[0, 0, -16]} {...props}>
      <planeGeometry args={[16, 10]} />
      <meshBasicMaterial>
        <videoTexture
          attach="map"
          args={[video]}
          colorSpace={THREE.SRGBColorSpace}
        />
      </meshBasicMaterial>
      <mesh scale={[16.05, 10.05, 1]} position={[0, 0, -0.01]}>
        <planeGeometry />
        <meshBasicMaterial color="black" />
      </mesh>
    </mesh>
  );
});

const Screen = () => {
  const [material, set] = useState<THREE.Mesh | undefined>();
  const [isConnectHovered, setIsConnectHovered] = useState(false);
  const [decalBack] = useTexture([iconExit]);
  const navigate = useNavigate();

  useCursor(isConnectHovered);

  const renderOctaBtn = (
    decal: THREE.Texture,
    color: string,
    position: any
  ) => {
    const getOnClick = () => {
      return () => {
        navigate("/");
        setTimeout(() => {
          setIsConnectHovered(false);
        }, 50);
      };
    };

    return (
      <mesh
        castShadow
        receiveShadow
        scale={0.5}
        position={position}
        onPointerOver={(e) => (e.stopPropagation(), setIsConnectHovered(true))}
        onPointerOut={() => setIsConnectHovered(false)}
        onClick={getOnClick()}
      >
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0.25, -0.15, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
        />
      </mesh>
    );
  };

  return (
    <>
      {renderOctaBtn(decalBack, "#000000", [0, -5.5, -1])}
      <Emitter
        ref={
          set as React.Ref<
            THREE.Mesh<
              THREE.BufferGeometry<THREE.NormalBufferAttributes>,
              THREE.Material | THREE.Material[]
            >
          >
        }
      />
      {material && (
        <EffectComposer disableNormalPass multisampling={8}>
          <GodRays sun={material} exposure={0.34} decay={0.8} blur />
          <Bloom
            luminanceThreshold={0}
            mipmapBlur
            luminanceSmoothing={0.0}
            intensity={1}
          />
        </EffectComposer>
      )}
    </>
  );
};

const Cinema: React.FC = () => {
  return (
    <div className={"wrapper"}>
      <Canvas
        camera={{ position: [0, 0, 30], fov: 35, near: 1, far: 60 }}
        gl={{ antialias: false }}
      >
        <color attach="background" args={["#050505"]} />
        <ambientLight />

        <Screen />

        <Float rotationIntensity={3} floatIntensity={3} speed={1}>
          <CubeCamera
            position={[-3, -1, -5]}
            resolution={256}
            frames={Infinity}
          >
            {(texture) => (
              <mesh>
                <sphereGeometry args={[2, 32, 32]} />
                <meshStandardMaterial
                  metalness={1}
                  roughness={0.1}
                  envMap={texture}
                />
              </mesh>
            )}
          </CubeCamera>
        </Float>

        <Floor />

        <Text
          maxWidth={9}
          position={[-11, 4, -10]}
          font="/RobotoMedium.ttf"
          fontSize={3}
        >
          Thanks for the visit!
          <meshStandardMaterial color="#000" toneMapped={false} />
        </Text>

        <Rig />
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableDamping={true}
          dampingFactor={0.05}
          rotateSpeed={0.3}
          enablePan={false}
          enableRotate={true}
          minDistance={5}
          maxDistance={20}
        />
      </Canvas>
    </div>
  );
};

export default Cinema;
