import { Show, type Component } from "solid-js";
import LateralMenu from "../components/LateralMenu";
import ActiveScene from "../components/ActiveScene";
import AudioPlayer from "../components/AudioPlayer";
import SceneSelector from "../components/SceneSelector";
import EffectPlayer from "../components/EffectPlayer";
import { showSceneSelector } from "../stores/app";

const HomePage: Component = () => {
  return (
    <>
      <Show when={showSceneSelector()}>
        <SceneSelector />
      </Show>
      
      <ActiveScene />
      <LateralMenu />
      <AudioPlayer />
      <EffectPlayer />
    </>
  );
};

export default HomePage;