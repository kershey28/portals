import { useSnapshot } from "valtio";
import { useState, useEffect, Suspense } from "react";

import { Snap, GalleryConfig } from "./types";

import ImagesGallery from "./components/Gallery";
import Loader from "./components/Loader";
import {
  portalMain,
  portalArtists,
  portalDramas,
  portalAnimes,
  portalMusic,
  portalWebsites,
  portalLovelife,
  portalHorror,
} from "./constants";
import {
  bgBlue,
  bgGreen,
  bgCity,
  bgWhite,
  bgSkull,
  bgCrack,
  bgLines,
  bgFall,
  portalWhite,
  portalSkull,
} from "../src/assets/portals";
import state from "./store";

const App = () => {
  const snap = useSnapshot(state);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(delay);
    };
  }, []);

  const galleryConfigs: { [key: string]: GalleryConfig } = {
    main: {
      images: portalMain,
      colors: { floor: "#0C090A", fog: "#343434" },
      bg: bgCrack,
      hoverImg: bgCrack,
      portalImg: portalWhite,
    },
    "my animes": {
      images: portalAnimes,
      colors: { floor: "#04090d", fog: "#041112" },
      bg: bgGreen,
      hoverImg: bgGreen,
      portalImg: portalWhite,
    },
    "my dramas": {
      images: portalDramas,
      colors: { floor: "#080808", fog: "#1a1a1a" },
      bg: bgCity,
      hoverImg: bgCity,
      portalImg: portalWhite,
    },
    "my music": {
      images: portalMusic,
      colors: { floor: "#0a0b0a", fog: "#bec1ba" },
      bg: bgLines,
      hoverImg: bgLines,
      portalImg: portalWhite,
    },
    "my websites": {
      images: portalWebsites,
      colors: { floor: "#040404", fog: "#bec1ba" },
      bg: bgWhite,
      hoverImg: bgWhite,
      portalImg: portalWhite,
    },
    "my lovelife": {
      images: portalLovelife,
      colors: { floor: "#0b0b0a", fog: "#974307" },
      bg: bgFall,
      hoverImg: bgFall,
      portalImg: portalWhite,
    },
    "don't enter": {
      images: portalHorror,
      colors: { floor: "#070707", fog: "#27010b" },
      bg: bgSkull,
      hoverImg: portalSkull,
      portalImg: portalWhite,
    },
    default: {
      images: portalArtists,
      colors: { floor: "#040406", fog: "#132240" },
      bg: bgBlue,
      hoverImg: bgBlue,
      portalImg: portalWhite,
    },
  };

  const getActiveGallery = (snap: Snap): JSX.Element => {
    const galleryType = snap.activeGallery.toLowerCase();
    const config = galleryConfigs[galleryType] || galleryConfigs.default;

    return (
      <ImagesGallery
        images={config.images}
        colors={config.colors}
        bg={config.bg}
        hoverImg={config.hoverImg}
        portalImg={config.portalImg}
      />
    );
  };

  return (
    <div className={"wrapper"}>
      <Suspense fallback={<Loader />}>
        {loading ? <Loader /> : getActiveGallery(snap)}
      </Suspense>
    </div>
  );
};

export default App;
