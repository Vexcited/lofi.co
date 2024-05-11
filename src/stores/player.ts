import { type SoundTrackMood, playlistsBase } from "../assets/data/audio.data";
import { createAudio } from "@solid-primitives/audio"
import { createStore, unwrap } from "solid-js/store";
import { createRoot, onCleanup } from "solid-js";

export interface PlayerState {
  playing: boolean;
  volume: number;

  /** Key in `playlistsBase` object. */
  playlistMood: SoundTrackMood
  
  /** Index in the playlist tracks array. */
  currentTrackID: number;

  /** List of track IDs that have been played. */
  history: number[];
}

const player = createRoot(() => {
  const [state, setState] = createStore<PlayerState>({
    playing: false,
    volume: 1,

    playlistMood: "chill",
    // Pick a random index from the array.
    currentTrackID: Math.floor(Math.random() * playlistsBase.chill.length),
    history: []
  });

  /**
   * We don't want to play the same track twice in a row.
   * This function will find a suitable track to play next.
   * 
   * History is used to keep track of the tracks that have been played.
   * We want to prevent the same track from being used if it was played 5 tracks ago.
   * 
   * @returns The index of the track to play next.
   */
  const findSuitableTrack = () => {
    const playlist = playlistsBase[state.playlistMood];
    const trackIDs = playlist.map((_, i) => i);

    // Remove the current track from the list of possible tracks.
    const filteredTrackIDs = trackIDs.filter((id) => id !== state.currentTrackID);

    // Remove the tracks that have been played in the last 5 tracks.
    const suitableTrackIDs = filteredTrackIDs.filter((id) => {
      const index = state.history.indexOf(id);
      return index === -1 || state.history.length - index > 5;
    });

    // Pick a random track from the suitable tracks.
    return suitableTrackIDs[Math.floor(Math.random() * suitableTrackIDs.length)];
  };

  const track = () => playlistsBase[state.playlistMood][state.currentTrackID].url; 
  const [audio, controls] = createAudio(track);

  const handleNextTrack = () => {
    const trackID = findSuitableTrack();

    const history = unwrap(state.history);
    // Keep the history to a maximum of 10 tracks.
    if (history.length >= 10) history.shift();
    history.push(state.currentTrackID);

    setState({
      history: history,
      
      // Will update the audio player to play the new track.
      currentTrackID: trackID
    });

    // Will be paused, by default.
    controls.play();

    console.info("Playing track", trackID);
    console.info("History", history);
  };

  const handlePreviousTrack = () => {
    const history = unwrap(state.history);
    const previousTrackID = history.pop();

    setState({
      history: history,
      currentTrackID: previousTrackID
    });

    controls.play();

    console.info("Playing track", previousTrackID);
    console.info("History", history);
  };

  audio.player.addEventListener("ended", handleNextTrack);
  onCleanup(() => audio.player.removeEventListener("ended", handleNextTrack));
  
  return {
    audio,
    controls,
    
    mood: state.playlistMood,
    currentTrackID: state.currentTrackID,

    nextTrack: handleNextTrack,
    previousTrack: handlePreviousTrack,

    get hasPreviousTrack() {
      return state.history.length > 0;
    }
  }
});

export default player;
