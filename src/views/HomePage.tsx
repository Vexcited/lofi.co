import { type Component } from "solid-js";
import LateralMenu from "../components/LateralMenu";
import ActiveScene from "../components/ActiveScene";
import AudioPlayer from "../components/AudioPlayer";

const HomePage: Component = () => {
  return (
    <>
      <ActiveScene />
      <LateralMenu />
      <AudioPlayer />
    </>
  );
};

export default HomePage;