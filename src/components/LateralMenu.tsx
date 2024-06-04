import { type Component, Show, type VoidComponent, type JSX } from "solid-js";
import { Tooltip } from "@kobalte/core/tooltip";

import SkipPreviousIcon from "../assets/icons/SkipPrevious";
import SkipNextIcon from "../assets/icons/SkipNext";
import PlayIcon from "../assets/icons/Play";
import SettingsIcon from "../assets/icons/Settings";
import { currentScene, night, pixelated, setNight, setPixelated } from "../stores/scene";
import { hasSupportFor } from "../utils/set";
import VolumeIcon from "../assets/icons/Volume";
import VolumeMuteIcon from "../assets/icons/VolumeMute";
import MixerIcon from "../assets/icons/Mixer";
// import TemplatesIcon from "../assets/icons/Templates";
import ScenesIcon from "../assets/icons/Scenes";
import ToolsIcon from "../assets/icons/Tools";
import PipIcon from "../assets/icons/Pip";
import FullscreenIcon from "../assets/icons/Fullscreen";
import player from "../stores/player";
import PauseIcon from "../assets/icons/Pause";
import { AudioState } from "@solid-primitives/audio";
import { setShowSceneSelector } from "../stores/app";

const Divider = () => (
  <div class="bg-[#fff2] rounded-[2px] h-[1px] my-[20px] w-[20px] rotate-90" />
);

const LateralMenu: Component = () => {
  const supportForNight = () => hasSupportFor(currentScene(), "night");
  const supportForPixel = () => hasSupportFor(currentScene(), "pixel");

  const Button: VoidComponent<{
    name: string
    icon: JSX.Element,
    onClick: () => void
  }> = (props) => (
    <Tooltip>
      <Tooltip.Trigger
        type="button"
        class="p-2 hover:(bg-[#fff]/20 scale-110) rounded-lg transition"
        onClick={() => props.onClick()}
      >
        {props.icon}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content class="z-50 bg-bgd-100 rounded-[10px] px-3 py-2 mb-3 border border-white/20 backdrop-blur-[30px]">
          <p>{props.name}</p>
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip>
  )

  return (
    <div class="z-20 fixed bottom-[22px] inset-x-[17px] bg-bgd-100 rounded-[10px] h-[52px] border border-white/20 backdrop-blur-[30px] flex justify-between items-center px-4">
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

      <div class="flex items-center gap-1.5">
        <Button
          name="Previous track"
          icon={<SkipPreviousIcon />}
          onClick={() => player.previousTrack()}
        />

        <Button
          name={player.audio.state === AudioState.PLAYING ? "Pause" : "Play"}
          icon={player.audio.state === AudioState.PLAYING ? <PauseIcon /> : <PlayIcon />}
          onClick={() => player.audio.state === AudioState.PLAYING ? player.controls.pause() : player.controls.play()}
        />

        <Button
          name="Next track"
          icon={<SkipNextIcon />}
          onClick={() => player.nextTrack()}
        />

        <Button
          name="Volume"
          icon={<VolumeIcon />}
          onClick={() => void 0}
        />
        <Button
          name="Mute"
          icon={<VolumeMuteIcon />}
          onClick={() => player.controls.setMuted(!player.audio.muted)}
        />
        
        <Divider />

        <Button
          name="Mixer"
          icon={<MixerIcon />}
          onClick={() => void 0}
        />
        {/* <Button
          name="Templates"
          icon={<TemplatesIcon />}
          onClick={() => void 0}
        /> */}
        <Button
          name="Scenes"
          icon={<ScenesIcon />}
          onClick={() => setShowSceneSelector(prev => !prev)}
        />
        <Button
          name="Tools"
          icon={<ToolsIcon />}
          onClick={() => void 0}
        />
        <Divider />
        <Button
          name="Picture-in-picture"
          icon={<PipIcon />}
          onClick={() => void 0}
        />
        <Button
          name="Fullscreen"
          icon={<FullscreenIcon />}
          onClick={() => void 0}
        />
      </div>

      <div>
        <SettingsIcon />
      </div>
    </div>
  );
};

export default LateralMenu;