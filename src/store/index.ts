import { proxy } from "valtio";

const state = proxy({
  activeGallery: "main",
  activePortal: "none",
});

export default state;
