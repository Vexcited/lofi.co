import { type Component } from "solid-js";
import LateralMenu from "../components/LateralMenu";
import ActiveScene from "../components/ActiveScene";
import AudioPlayer from "../components/AudioPlayer";
import SceneSelector from "../components/SceneSelector";
import EffectPlayer from "../components/EffectPlayer";

const HomePage: Component = () => {
  return (
    <>
      <SceneSelector />
      
      <ActiveScene />
      <LateralMenu />
      <AudioPlayer />
      <EffectPlayer />
    </>
  );
};

export default HomePage;