import player from "../stores/player";

import { type Component } from "solid-js";

const AudioPlayer: Component = () => {
  return (
    <div class="absolute top-[12px] inset-x-[18px] z-20 p-4 bg-[#fff2] w-fit rounded-lg backdrop-blur-md border border-white/20 shadow-lg">
      <p class="text-xl mb-2">AudioPlayer__DEBUG</p>
      
      <p>TIMING: {player.audio.currentTime}/{player.audio.duration} seconds</p>
      <p>VOLUME: {!player.audio.muted ? player.audio.volume * 100 + "%" : "MUTED"}</p>
      <p>PLAYLIST_MOOD: {player.mood}</p>
      <p>TRACK_INDEX: {player.currentTrackID}</p>
      
      <button
        class="mt-2 bg-[#fff2] hover:bg-[#fff4] active:bg-[#fff6] w-full py-2 rounded-md transition"
        onClick={() => player.controls.seek(player.audio.currentTime + 10)}
      >
        Click to seek +10 seconds
      </button>
    </div>
  )
};

export default AudioPlayer;
