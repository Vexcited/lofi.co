import type { Scene } from "../assets/data/sets.data";
export const hasSupportFor = (scene: Scene, type: "night" | "pixel"): boolean => {
  const sceneVariants = Object.keys(scene.variants);
  return sceneVariants.findIndex((v) => v.includes(type)) >= 0;
};
