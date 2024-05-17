import { createSignal } from "solid-js";
import { type EffectType, effects as sources } from "../assets/data/audio.data";
import { createEffect, createRoot } from "solid-js";
import { makeAudio } from "@solid-primitives/audio";

type EffectsVolumeStore = Record<EffectType, number>;

const effects = createRoot(() => {
  const [volume, setVolume] = createSignal<EffectsVolumeStore>({
    birds: 0,
    city: 0,
    fan: 0,
    forest: 0,
    rain_forest: 0,
    rain_street: 0,
    river: 0,
    storm: 0,
    waves: 0,
    people: 0,
    brown_noise: 0,
    pink_noise: 0,
    white_noise: 0,
    thunders: 0,
    keyboard: 0,
    space: 0,
    underwater: 0,
    fireplace: 0,
    ocean: 0,
    wind: 0,
    plane: 0,
    train_noise: 0,
    window_rain: 0,
    snow: 0,
    fire: 0
  });

  const audios = new Map<EffectType, HTMLAudioElement>();

  createEffect(() => {
    const volumes = volume();
    for (const effect of Object.keys(volumes) as EffectType[]) {
      if (volumes[effect] > 0) {
        let audioElement: HTMLAudioElement;

        if (!audios.has(effect)) {
          const source = sources.find((source) => source.type === effect);
          if (!source) {
            console.error("Could not find source for effect", effect);
            continue;
          }

          audioElement = makeAudio(source.url);
          audios.set(effect, audioElement);
        }
        else {
          audioElement = audios.get(effect)!;
        }

        audioElement.volume = volumes[effect];
        audioElement.loop = true;
        audioElement.play();
      }
      else if (volumes[effect] === 0) {
        const audioElement = audios.get(effect);

        if (audioElement) {
          audioElement.pause();
          audioElement.volume = 0;
        }
      }
    }
  })

  return {
    volume,
    setVolume
  };
});

export default effects;