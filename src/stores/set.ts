import { createSignal } from "solid-js";

export const [night, setNight] = createSignal(false);
export const [pixelated, setPixelated] = createSignal(false);

export const [currentSceneID, setCurrentSceneID] = createSignal("cozyStudio");
