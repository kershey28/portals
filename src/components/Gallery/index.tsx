import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useMedia } from "react-use";
import { Canvas, useFrame } from "@react-three/fiber";
import { TextureLoader } from "three";
import {
  useCursor,
  MeshReflectorMaterial,
  Image,
  Text,
  Environment,
  useTexture,
  Decal,
} from "@react-three/drei";
import { useRoute, useLocation } from "wouter";
import { easing } from "maath";
import { useSnapshot } from "valtio";

import {
  ImagesGalleryProps,
  FramesProps,
  FrameProps,
  OctaBtnType,
} from "../../../src/types";

import state from "../../store";
import Banner from "../Banner";
import DecalTrans from "../DecalTrans";
import { titleToPath } from "../../utils";
import {
  iconNext,
  iconPrev,
  iconBack,
  iconStar,
} from "../../../src/assets/icons";
import { bannerMain } from "../../../src/assets/banner";

const GOLDENRATIO = 1.61803398875;

const Frame: React.FC<FrameProps> = ({
  src,
  title,
  url,
  portal,
  hoverImg,
  portalImg,
  hasStar,
  nextPortal,
  prevPortal,
  ...props
}) => {
  const image = useRef<any>(null);
  const frame = useRef<any>(null);
  const [, params] = useRoute(`/portal/:id`);
  const [isHovered, setIsHovered] = useState(false);
  const [isConnectHovered, setIsConnectHovered] = useState(false);
  const [rnd] = useState(() => Math.random());
  const [, setLocation] = useLocation();
  const [decalNext, decalPrev, decalBack, decalStar] = useTexture([
    iconNext,
    iconPrev,
    iconBack,
    iconStar,
  ]);
  const isDesktop = useMedia(`screen and  (min-width:1280px)`, true);

  const isActive = params?.id === titleToPath(title);
  const btnPositionX = isDesktop ? -1.1 : -1;

  const renderOctaBtn = (
    type: OctaBtnType,
    decal: THREE.Texture,
    color: string,
    position: any
  ) => {
    const getOnClick = (type: OctaBtnType) => {
      const onClickFunc = {
        next: () => setLocation(`/portal/` + titleToPath(nextPortal.title)),
        prev: () => setLocation(`/portal/` + titleToPath(prevPortal.title)),
        back: () => {
          state.activeGallery = "main";
          setLocation(`/portal`);
        },
        none: null,
      };
      const func = onClickFunc[type] || (() => {});

      return () => {
        func();
        setTimeout(() => {
          setIsConnectHovered(false);
        }, 50);
      };
    };

    return (
      <mesh
        castShadow
        receiveShadow
        scale={0.1}
        position={position}
        onPointerOver={(e) => (e.stopPropagation(), setIsConnectHovered(true))}
        onPointerOut={() => setIsConnectHovered(false)}
        onClick={getOnClick(type)}
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

  useCursor(isHovered);
  useCursor(isConnectHovered);
  useFrame((state, dt) => {
    if (image.current.material) {
      image.current.material.zoom =
        1.5 + Math.sin(rnd * 10000 + state.clock.elapsedTime / 3) / 2;
    }

    easing.damp3(
      image.current.scale,
      [
        0.85 * (!isActive && isHovered ? 0.85 : 1),
        0.9 * (!isActive && isHovered ? 0.905 : 1),
        1,
      ],
      0.1,
      dt
    );

    if (frame.current.material) {
      easing.dampC(
        frame.current.material.color,
        isHovered ? "#060b16" : "#FFF",
        0.1,
        dt
      );
    }
  });

  return (
    <group {...props}>
      <mesh
        name={titleToPath(title)}
        userData={{ url: url, portal: portal }}
        onPointerOver={(e) => (e.stopPropagation(), setIsHovered(true))}
        onPointerOut={() => setIsHovered(false)}
        onClick={() => {
          setTimeout(() => setIsHovered(false), 50);
        }}
        scale={[1, GOLDENRATIO, 0.05]}
        position={[0, GOLDENRATIO / 2, 0]}
      >
        <boxGeometry />
        <meshStandardMaterial
          color="#000000"
          metalness={0.5}
          roughness={0.7}
          envMapIntensity={2}
        />

        <mesh
          ref={frame}
          raycast={() => null}
          scale={[0.9, 0.93, 0.9]}
          position={[0, 0, 0.2]}
        >
          <boxGeometry />
          <meshBasicMaterial toneMapped={false} fog={false} />
        </mesh>
        <Image
          raycast={() => null}
          ref={image}
          position={[0, 0, 0.7]}
          url={isHovered ? (isActive ? portalImg : hoverImg) : src}
        />
      </mesh>

      {isActive && (
        <>
          <mesh position={[0.6, GOLDENRATIO - 0.095, -0.1]}>
            <planeGeometry args={[0.45, 0.25]} />
            <meshBasicMaterial color="black" />
          </mesh>

          <Text
            maxWidth={0.15}
            anchorX="left"
            anchorY="top"
            position={[0.55, GOLDENRATIO - 0.06, 0]}
            fontSize={0.04}
          >
            {title}
          </Text>

          {renderOctaBtn("back", decalBack, "#660000", [btnPositionX, 1.5, -1])}
          {nextPortal &&
            renderOctaBtn(
              "next",
              decalNext,
              "#006600",
              !prevPortal ? [btnPositionX, 1.75, -1] : [btnPositionX, 2, -1]
            )}
          {prevPortal &&
            renderOctaBtn("prev", decalPrev, "#666600", [
              btnPositionX,
              1.75,
              -1,
            ])}
          {hasStar && (
            <DecalTrans decal={decalStar} position={[0.6, 1.25, 0]} />
          )}
        </>
      )}
    </group>
  );
};

const Frames = ({
  images,
  hoverImg,
  portalImg,
  q = new THREE.Quaternion(),
  p = new THREE.Vector3(),
}: FramesProps) => {
  const ref = useRef<any>(null);
  const clicked = useRef<any>(null);
  const [, params] = useRoute(`/portal/:id`);
  const [, setLocation] = useLocation();
  const isTabletLandscape = useMedia(
    `screen and (min-width: 1024px) and (max-width:1279px)`,
    true
  );
  const isTabletPortrait = useMedia(
    `screen and (min-width: 641px) and (max-width:1023px)`,
    true
  );
  const isPhone = useMedia(`screen and  (max-width:640px)`, true);
  const snap = useSnapshot(state);

  const getCameraDistance = (isActive?: boolean) => {
    if (isActive) {
      if (isTabletLandscape) return 2;
      if (isTabletPortrait) return 2.5;
      if (isPhone) return 2.75;
      return 1.5;
    } else {
      if (isTabletLandscape) return 6;
      if (isTabletPortrait) return 7;
      if (isPhone) return 8.5;
      return 5.5;
    }
  };

  useEffect(() => {
    clicked.current = ref.current.getObjectByName(params?.id);
    if (clicked.current) {
      clicked.current.parent.updateWorldMatrix(true, true);
      clicked.current.parent.localToWorld(
        p.set(0, GOLDENRATIO / 2, getCameraDistance(true))
      );
      clicked.current.parent.getWorldQuaternion(q);
    } else {
      p.set(0, 0, getCameraDistance());
      q.identity();
    }
  }, [params?.id, q, p]);

  useFrame((state, dt) => {
    easing.damp3(state.camera.position, p, 0.4, dt);
    easing.dampQ(state.camera.quaternion, q, 0.4, dt);
  });

  return (
    <group
      ref={ref}
      onClick={(e) => {
        e.stopPropagation();

        state.activePortal = titleToPath(e.object.name);
        if (clicked.current === e.object) {
          if (e.object.userData?.portal) {
            state.activeGallery = e.object.userData?.portal;
          } else {
            window.open(e.object.userData.url, "_blank");
          }

          return;
        }
        if (e.object.name) setLocation(`/portal/` + titleToPath(e.object.name));
      }}
      onPointerMissed={() => {
        setLocation(`/portal/` + titleToPath(snap.activeGallery));
      }}
    >
      {images.map((props, i) => {
        return (
          <Frame
            key={i}
            hoverImg={hoverImg}
            portalImg={portalImg}
            nextPortal={images[i + 1]}
            prevPortal={images[i - 1]}
            {...props}
          />
        );
      })}

      <Banner
        title={titleToPath(snap.activeGallery)}
        decal={bannerMain}
        position={[0, 2, 1.5]}
        rotation={[0, 0, 0]}
      />
    </group>
  );
};

const ImagesGallery: React.FC<ImagesGalleryProps> = ({
  images,
  bg,
  hoverImg,
  portalImg,
  colors,
}) => {
  const textureLoader = new TextureLoader();
  const backgroundImage = textureLoader.load(bg);

  return (
    <Canvas dpr={[1, 1.5]} camera={{ fov: 70, position: [0, 2, 15] }}>
      <ambientLight intensity={-10.2} />
      <primitive object={backgroundImage} attach="background" />

      <fog attach="fog" args={[colors.fog, 0, 15]} />
      <group position={[0, -0.5, 0]}>
        <Frames images={images} hoverImg={hoverImg} portalImg={portalImg} />
        <mesh rotation={[-Math.PI / 2, 0, 0]}>
          <planeGeometry args={[50, 50]} />
          <MeshReflectorMaterial
            mirror={1}
            blur={[300, 100]}
            resolution={2048}
            mixBlur={1}
            mixStrength={80}
            roughness={0.9}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={colors.floor}
            metalness={0.5}
          />
        </mesh>
      </group>
      <Environment preset="warehouse" />
    </Canvas>
  );
};

export default ImagesGallery;
