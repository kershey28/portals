import {
  lana,
  rae,
  lexi,
  konan,
  kamiki,
  beppler,
  pandora,
  clutch,
  gotti,
  colby,
  lennon,
  meguri,
  remu,
  elfie,
  walker,
  yuzuriha,
  yua,
  riho,
  aimi,
} from "../../src/assets/artists";

const portalArtists = [
  // Front
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    src: lana,
    title: "Lana Rhoades",
    url: "https://www.instagram.com/lanarhoades/",
  },

  // Front Left
  {
    position: [-1.75, 0, 0],
    rotation: [0, Math.PI / 2.5, 0],
    src: walker,
    title: "Anny Walker",
    url: "https://twitter.com/ph_annyfans?lang=en",
    hasStar: true,
  },
  {
    position: [-2.15, 0, 1.5],
    rotation: [0, Math.PI / 2.5, 0],
    src: pandora,
    title: "Pandora Kaaki",
    url: "https://www.instagram.com/pandorakaaki/",
    hasStar: true,
  },
  {
    position: [-2, 0, 3.25],
    rotation: [0, Math.PI / 2.5, 0],
    src: clutch,
    title: "Elly Clutch",
    url: "https://www.instagram.com/ellyclutchh/",
  },

  // Front Right
  {
    position: [1.75, 0, 0],
    rotation: [0, -Math.PI / 2.5, 0],
    src: colby,
    title: "Bunny Colby",
    url: "https://www.instagram.com/bunnycolby/",
  },
  {
    position: [2.15, 0, 1.5],
    rotation: [0, -Math.PI / 2.5, 0],
    src: gotti,
    title: "Leah Gotti",
    url: "https://www.instagram.com/loveleah_gotti/",
  },
  {
    position: [2, 0, 3.25],
    rotation: [0, -Math.PI / 2.5, 0],
    src: beppler,
    title: "Jessica Beppler",
    url: "https://www.instagram.com/jessicabeppler/",
    hasStar: true,
  },

  // Back Left
  {
    position: [-8, 0, -2.5],
    rotation: [0, Math.PI / 4, 0],
    src: elfie,
    title: "Eva Elfie",
    url: "https://www.instagram.com/theevaelfie/",
  },
  {
    position: [-4, 0, -5],
    rotation: [0, Math.PI / 4, 0],
    src: kamiki,
    title: "Rei Kamiki",
    url: "https://www.instagram.com/rei.kamiki/",
  },
  {
    position: [-5, 0, -13],
    rotation: [0, Math.PI / 9, 0],
    src: riho,
    title: "Riho Fujimori",
    url: "https://www.instagram.com/fujimoriho123/",
  },

  // Back Right
  {
    position: [8, 0, -2.5],
    rotation: [0, -Math.PI / 4, 0],
    src: rae,
    title: "Rae Lil Black",
    url: "https://www.instagram.com/raelilblack/",
  },
  {
    position: [4, 0, -5],
    rotation: [0, -Math.PI / 4, 0],
    src: lexi,
    title: "Lexi Lore",
    url: "https://www.instagram.com/lexiloreonyoutube/",
  },
  {
    position: [5, 0, -13],
    rotation: [0, -Math.PI / 9, 0],
    src: yuzuriha,
    title: "Karen Yuzuriha",
    url: "https://www.instagram.com/karen_yuzuriha/",
  },

  // Back Edge Left
  {
    position: [-4, 0, -16.9],
    rotation: [0, 0, 0],
    src: aimi,
    title: "Aimi Yoshikawa",
    url: "https://www.instagram.com/aimiyoshikawa3/",
  },
  {
    position: [-8, 0, -20],
    rotation: [0, 0, 0],
    src: lennon,
    title: "Lacy Lennon",
    url: "https://www.instagram.com/itslacylennon/",
  },
  {
    position: [-3, 0, -25],
    rotation: [0, 0, 0],
    src: remu,
    title: "Remu Suzumori",
    url: "https://www.instagram.com/remu19971203/",
  },

  // Back Edge Right
  {
    position: [4, 0, -16.9],
    rotation: [0, 0, 0],
    src: konan,
    title: "Konan Koyoi",
    url: "https://www.instagram.com/konankoyoiii/",
  },
  {
    position: [8, 0, -20],
    rotation: [0, 0, 0],
    src: yua,
    title: "Yua Mikami",
    url: "https://www.instagram.com/yua_mikami/",
  },
  {
    position: [3, 0, -25],
    rotation: [0, 0, 0],
    src: meguri,
    title: "Meguri Fujiura",
    url: "https://www.instagram.com/meguri.0504/",
  },
];

export default portalArtists;
