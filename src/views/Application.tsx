import { type Component } from "solid-js";

import HomePage from "./HomePage";

/**
 * Main entry point for the application.
 */
const Application: Component = () => {
  return (
    <div onContextMenu={(e) => e.preventDefault()}>
      <HomePage />
    </div>
  );
};

export default Application;