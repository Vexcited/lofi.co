import { type Component } from "solid-js";
import LateralMenu from "../components/LateralMenu";
import ActiveScene from "../components/ActiveScene";

const HomePage: Component = () => {
  return (
    <>
      <ActiveScene />
      <LateralMenu />
    </>
  );
};

export default HomePage;