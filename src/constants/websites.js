import {
  portfolio,
  paladise,
  callsaul,
  cashy,
  trips,
  recipe,
  newtral,
  rentz,
} from "../../src/assets/websites";

const portalWebsites = [
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    src: portfolio,
    title: "Portfolio",
    url: "https://www.kershey.pro/",
    hasStar: true,
  },
  {
    position: [-1, 0, 0],
    rotation: [0, 0, 0],
    src: paladise,
    title: "Paladise Tours",
    url: "https://paladise.netlify.app/",
  },
  {
    position: [-2, 0, -1],
    rotation: [-0.5, 0, 0],
    src: trips,
    title: "Your Trips",
    url: "https://yourtrips.netlify.app/",
  },
  {
    position: [1, 0, 0],
    rotation: [0, 0, 0],
    src: cashy,
    title: "Cashy Bank",
    url: "https://cashybank.netlify.app/",
  },
  {
    position: [2, 0, -1],
    rotation: [-0.5, 0, 0],
    src: recipe,
    title: "Go Recipe",
    url: "https://gorecipe.netlify.app/",
  },
  {
    position: [-4.5, 0, -3],
    rotation: [0, Math.PI / 4, 0],
    src: callsaul,
    title: "Call Saul",
    url: "https://callsaul.netlify.app/",
  },
  {
    position: [3.75, 0, -1.5],
    rotation: [0, -Math.PI / 8, 0],
    src: newtral,
    title: "Newtral",
    url: "https://newtral.netlify.app/",
    hasStar: true,
  },
  {
    position: [-7, 0, -4],
    rotation: [0, Math.PI / 4, 0],
    src: rentz,
    title: "Rentz",
    url: "https://rentz.netlify.app/",
  },
];

export default portalWebsites;
