import { For, type Component } from "solid-js";
import effects from "../stores/effects";
import type { EffectType } from "../assets/data/audio.data";

const EffectPlayer: Component = () => {
  const enabledEffects = () => {
    const effectsVolume = effects.volume();
    return Object.keys(effectsVolume).filter(effect => effectsVolume[effect as EffectType] > 0) as EffectType[];
  }

  return (
    <div class="absolute top-[252px] inset-x-[18px] z-20 p-4 bg-[#fff2] w-fit rounded-lg backdrop-blur-md border border-white/20 shadow-lg">
      <p class="text-xl mb-2">EffectPlayer__DEBUG</p>

      <For each={enabledEffects()}>
        {(effect) => (
          <p>{effect}: {effects.volume()[effect] * 100}%</p>
        )}
      </For>
    </div>
  )
};

export default EffectPlayer;
