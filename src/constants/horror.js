import { cam, plane, hacker } from "../../src/assets/horror";

const portalHorror = [
  {
    position: [0, 0, 1.5],
    rotation: [0, 0, 0],
    src: cam,
    title: "Willard Ghost",
    url: "https://www.willardghost.com/",
  },
  {
    position: [-5, 0, -5],
    rotation: [-0.25, Math.PI / 4, 0],
    src: plane,
    title: "Plane Crash Info",
    url: "https://www.planecrashinfo.com/lastwords.htm",
  },
  {
    position: [9, 0, -9],
    rotation: [-0.5, 0, 0],
    src: hacker,
    title: "Have I been Pawned",
    url: "https://haveibeenpwned.com/",
  },
];

export default portalHorror;
