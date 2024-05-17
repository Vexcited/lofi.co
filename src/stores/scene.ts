import { createSignal } from "solid-js";

import { type Scene, scenes } from "../assets/data/sets.data";

export const [night, setNight] = createSignal(false);
export const [pixelated, setPixelated] = createSignal(false);

export const [currentScene, setCurrentScene] = createSignal<Scene>(scenes.cozyStudio);
