export interface ImageProps {
  position: number[];
  rotation: number[];
  src: string;
  title: string;
  url?: string;
  portal?: string;
  hasStar?: boolean;
}

export interface BannerProps {
  title: string;
  decal: string;
  position: any;
  rotation: any;
}

export interface DecalTransProps {
  decal: THREE.Texture;
  position: any;
}

export interface ImagesGalleryProps {
  images: ImageProps[];
  hoverImg: string;
  portalImg: string;
  bg: string;
  colors: Record<string, string>;
}

export interface FramesProps {
  images: ImageProps[];
  hoverImg: string;
  portalImg: string;
  q?: THREE.Quaternion;
  p?: THREE.Vector3;
}

export interface FrameProps {
  src: string;
  title: string;
  hoverImg: string;
  portalImg: string;
  url?: string;
  portal?: string;
  hasStar?: boolean;
  nextPortal?: any;
  prevPortal?: any;
}

export interface Snap {
  activeGallery: string;
  activePortal: string;
}

export interface GalleryConfig {
  images: any[];
  colors: { floor: string; fog: string };
  bg: string;
  hoverImg: string;
  portalImg: string;
}

export type OctaBtnType = "next" | "prev" | "back" | "none";
