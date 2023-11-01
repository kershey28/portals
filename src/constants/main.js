import {
  tarotDeath,
  tarotHunger,
  tarotFortune,
  tarotTemperance,
  tarotLovers,
  tarotStar,
  tarotMagician,
} from "../../src/assets/tarots";

const portalMain = [
  // Mid
  {
    position: [0, 0, 2.5],
    rotation: [0, 0, 0],
    src: tarotTemperance,
    title: "My Websites",
    url: "",
    portal: "my websites",
  },
  // Left
  {
    position: [-2, 0, -0.75],
    rotation: [0, Math.PI / 6.5, 0],
    src: tarotHunger,
    title: "My Artists",
    url: "",
    portal: "my artists",
  },
  // Back Left
  {
    position: [-4.8, 0, -2.5],
    rotation: [0, Math.PI / 8, 0],
    src: tarotStar,
    title: "My Dramas",
    url: "",
    portal: "my dramas",
  },
  // Edge Left
  {
    position: [-3, 0, -7.5],
    rotation: [0, Math.PI / 8, 0],
    src: tarotMagician,
    title: "My Animes",
    url: "",
    portal: "my animes",
  },
  // Right
  {
    position: [1.75, 0, 1.75],
    rotation: [0, -Math.PI / 6.5, 0],
    src: tarotFortune,
    title: "My Music",
    url: "",
    portal: "my music",
  },
  // Back Right
  {
    position: [1.75, 0, -4.5],
    rotation: [0, -Math.PI / 8, 0],
    src: tarotLovers,
    title: "My Lovelife",
    url: "",
    portal: "my lovelife",
  },
  // Edge Right
  {
    position: [5.75, 0, -1.5],
    rotation: [0, -Math.PI / 8, 0],
    src: tarotDeath,
    title: "don't enter",
    url: "",
    portal: "don't enter",
  },
];

export default portalMain;
