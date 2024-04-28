import { createStore } from "solid-js/store";
import { EffectType } from "../assets/data/audio.data";

type EffectsStore = Record<EffectType, number>;

export const [effectsVolume, setEffectsVolume] = createStore<EffectsStore>({
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
