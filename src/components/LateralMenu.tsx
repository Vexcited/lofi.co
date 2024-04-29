import { type Component, Show } from "solid-js";

import SkipPreviousIcon from "../assets/icons/SkipPrevious";
import SkipNextIcon from "../assets/icons/SkipNext";
import PlayIcon from "../assets/icons/Play";
import SettingsIcon from "../assets/icons/Settings";
import { currentSceneID, night, pixelated, setNight, setPixelated } from "../stores/set";
import { scenes } from "../assets/data/sets.data";
import { hasSupportFor } from "../utils/set";

const LateralMenu: Component = () => {
  const currentScene = () => scenes[currentSceneID()];
  const supportForNight = () => hasSupportFor(currentScene(), "night");
  const supportForPixel = () => hasSupportFor(currentScene(), "pixel");

  return (
    <div class="z-20 fixed bottom-[22px] inset-x-[17px] bg-bgd-100 rounded-[10px] h-[52px] border border-white/20 backdrop-blur-[30px] flex justify-center items-center px-4">
      {/* <p class="mr-auto">03:23 PM</p> */}

      <Show when={supportForNight()}>
        <input
          type="checkbox"
          checked={night()}
          onChange={() => {
            setNight(prev => !prev);
          }}
        />
      </Show>

      <Show when={supportForPixel()}>
        <input
          type="checkbox"
          checked={pixelated()}
          onChange={() => {
            setPixelated(prev => !prev);
          }}
        />
      </Show>

      <div class="flex items-center gap-3">
        <SkipPreviousIcon />
        <PlayIcon />
        <SkipNextIcon />
      </div>

      <div class="ml-auto">
        <SettingsIcon />
      </div>
    </div>
  );
};

export default LateralMenu;