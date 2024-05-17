import { For, Show, createSignal, type Component } from "solid-js";
import { type SceneSet, sets } from "../assets/data/sets.data";
import { setCurrentScene } from "../stores/scene";

const SceneSelector: Component = () => {
  const [sceneSelected, setSceneSelected] = createSignal<SceneSet | null>(null);

  return (
    <div class="z-20 fixed inset-x-[17px] bottom-[80px] bg-bgd-100 rounded-[10px] border border-white/20 backdrop-blur-[30px] flex gap-4 px-4 py-3 max-w-screen overflow-auto">
      <Show when={sceneSelected()}
        fallback={
          <For each={sets}>
            {set => (
              <button type="button" class="flex-shrink-0" onClick={
                () => setSceneSelected(set)
              }>
                <img src={set.thumbnail} alt={set.name} class="w-[360px]" />
              </button>
            )}
          </For>
        }
      >
        {selected => (
          <div class="flex-shrink-0">
            <button type="button" onClick={() => setSceneSelected(null)}>
              Go back to sets
            </button>
            <For each={selected().scenes}>
              {scene => (
                <button type="button" class="flex-shrink-0" onClick={
                  () => setCurrentScene(scene)
                }>
                  <img src={scene.thumbnail} alt={selected().name} class="w-[360px]" />
                </button>
              )}
            </For>
          </div>
        )}
      </Show>
    </div>
  );
};

export default SceneSelector;
