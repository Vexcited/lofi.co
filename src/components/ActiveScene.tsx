import { For, type Component, createMemo } from "solid-js";
import clsx from 'clsx';

import "../assets/styles/ActiveScene.css";
import effects from "../stores/effects";
import { type EffectType } from "../assets/data/audio.data";
import { currentScene, night, pixelated } from "../stores/scene";
import { hasSupportFor } from "../utils/set";

const ActiveScene: Component = () => {
  /**
   * Variants are built like this:
   * - day with no effect   -> default
   * - day with effect      -> {effect}
   * - night with no effect -> default_night
   * - night with effect    -> {effect}_night
   * - pixel with no effect  -> default_pixel
   * ...and so on !
   */
  const currentVariant = createMemo(() => {
    let variant = "default";
    
    const sceneVariants = Object.keys(currentScene().variants);
    const effectsVolume = effects.volume();
    const enabledEffects = Object.keys(effectsVolume).filter(effect => effectsVolume[effect as EffectType] > 0);

    // check in enabled variants
    for (const lookupVariantName of sceneVariants) {
      for (const effectName of enabledEffects) {
        if (lookupVariantName === effectName) {
          variant = lookupVariantName;
          break;
        }
      }

      // We found a variant, no need to keep looking.
      if (variant !== "default") break;
    }

    // Add suffixes.
    if (night() && hasSupportFor(currentScene(), "night")) variant += "_night";
    if (pixelated() && hasSupportFor(currentScene(), "pixel")) variant += "_pixel";
    return variant;
  });

  return (
    <div class="background-video-scroll relative flex overflow-scroll h-screen w-screen">
      <For each={Object.keys(currentScene().variants)}>
        {(variant) => (
          <div class="background-video">
            <video src={currentScene().variants[variant]} preload="auto" autoplay loop muted playsinline
              class={clsx(
                "w-full h-full transition-opacity",
                variant === currentVariant() ? "opacity-100" : "opacity-0"
              )}
            ></video>
          </div>
        )}
      </For>
      <div class="background-cta z-10">
        <For each={currentScene().actions}>
          {action => (
            <div class="absolute flex flex-col items-center" style={{
              // 200px is the width of the action button on the original app.
              // Anyway, since button position depends on that width, it should
              // change when screen width is large, using 11.8% seems to be a good tradeoff.
              width: "11.8%", 
              top: action.position[1] + "%",
              left: action.position[0] + "%"
            }}>
              <div class="border-[3px] border-white rounded-[50%] h-[32px] w-[32px] group flex items-center justify-center cursor-pointer"
                onClick={() => {
                  if (action.type !== "sound") return;
                  // We start the volume at 20% to avoid the sound being too loud by default.
                  effects.setVolume(prev => ({...prev, [action.effect]: prev[action.effect] === 0 ? 0.2 : 0 }));
                }}
              >
                <div class={clsx(
                  "group-hover:opacity-100 bg-white transition h-[18px] w-[18px] rounded-[50%]",
                  action.type === "sound" && effects.volume()[action.effect] > 0 ? "opacity-100" : "opacity-0"
                )} />
              </div>
              <p>{action.title}</p>
            </div>
          )}
        </For>
      </div>
    </div>
  )
};

export default ActiveScene;
