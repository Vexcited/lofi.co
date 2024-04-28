import { digitalOcean } from "../../common/constants";

const { EFFECTS_ROOT_URL, ALARMS_ROOT_URL, TRACKS_ROOT_URL } = digitalOcean;

export type EffectType = "fire" | "forest" | "rain_forest" | "waves" | "fan" | "city" | "storm" | "rain_street" | "river" | "birds" | "people" | "wind" | "ocean" | "fireplace" | "snow" | "keyboard" | "underwater" | "space" | "window_rain" | "train_noise" | "thunders" | "white_noise" | "pink_noise" | "brown_noise" | "plane";
export interface SoundEffect {
  type: EffectType;
  name: string;
  url: string;
}

const effects = [
  {
    type: "fire",
    name: "Campfire",
    url: EFFECTS_ROOT_URL + "campfire.mp3",
  },
  {
    type: "forest",
    name: "Forest",
    url: EFFECTS_ROOT_URL + "forest_night.mp3",
  },
  {
    type: "rain_forest",
    name: "Forest Rain",
    url: EFFECTS_ROOT_URL + "rain_forest.mp3",
  },
  {
    type: "waves",
    name: "Waves",
    url: EFFECTS_ROOT_URL + "waves.mp3",
  },
  {
    type: "fan",
    name: "Fan",
    url: EFFECTS_ROOT_URL + "fan.mp3",
  },
  {
    type: "city",
    name: "City traffic",
    url: EFFECTS_ROOT_URL + "city_traffic.mp3",
  },
  {
    type: "storm",
    name: "Summer Storm",
    url: EFFECTS_ROOT_URL + "summer_storm.mp3",
  },
  {
    type: "rain_street",
    name: "City Rain",
    url: EFFECTS_ROOT_URL + "rain_city.mp3",
  },
  {
    type: "river",
    name: "River",
    url: EFFECTS_ROOT_URL + "river.mp3",
  },
  {
    type: "birds",
    name: "Bird Chirping",
    url: EFFECTS_ROOT_URL + "birds.mp3",
  },
  {
    type: "people",
    name: "People Talking",
    url: EFFECTS_ROOT_URL + "people_talk_inside.mp3",
  },
  {
    type: "wind",
    name: "Wind",
    url: EFFECTS_ROOT_URL + "wind.mp3",
  },
  {
    type: "ocean",
    name: "Ocean",
    url: EFFECTS_ROOT_URL + "ocean.mp3",
  },
  {
    type: "fireplace",
    name: "Fireplace",
    url: EFFECTS_ROOT_URL + "fireplace.mp3",
  },
  {
    type: "snow",
    name: "Blizzard",
    url: EFFECTS_ROOT_URL + "snow.mp3",
  },
  {
    type: "keyboard",
    name: "Keyboard",
    url: EFFECTS_ROOT_URL + "keyboard.mp3",
  },
  {
    type: "underwater",
    name: "Underwater",
    url: EFFECTS_ROOT_URL + "underwater.mp3",
  },
  {
    type: "space",
    name: "Deep Space",
    url: EFFECTS_ROOT_URL + "deepspace.mp3",
  },
  {
    type: "window_rain",
    name: "Window Rain",
    url: EFFECTS_ROOT_URL + "window_rain.mp3",
  },
  {
    type: "train_noise",
    name: "Train",
    url: EFFECTS_ROOT_URL + "train.mp3",
  },
  {
    type: "thunders",
    name: "Thunders",
    url: EFFECTS_ROOT_URL + "thunders.mp3",
  },
  {
    type: "white_noise",
    name: "White noise",
    url: EFFECTS_ROOT_URL + "white-noise.mp3",
  },
  {
    type: "pink_noise",
    name: "Pink noise",
    url: EFFECTS_ROOT_URL + "pink-noise.mp3",
  },
  {
    type: "brown_noise",
    name: "Brown noise",
    url: EFFECTS_ROOT_URL + "brown-noise.mp3",
  },
  {
    type: "plane",
    name: "Plane",
    url: EFFECTS_ROOT_URL + "airplane.mp3",
  }
] satisfies SoundEffect[];

export type SoundTrackMood = "chill" | "jazzy" | "sleepy";

export interface SoundTrack {
  url: string;
}

const playlistsBase: { [key in SoundTrackMood]: SoundTrack[] } = {
  chill: [
    {
      url: TRACKS_ROOT_URL + "chill/chill_1.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_2.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_3.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_4.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_5.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_6.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_7.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_8.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_9.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_10.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_11.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_12.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_13.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_14.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_15.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_16.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_17.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_18.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_19.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_20.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_21.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_22.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_23.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "chill/chill_24.mp3",
    },
  ],
  jazzy: [
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_1.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_2.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_3.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_4.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_5.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_6.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_7.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_8.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_9.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_10.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_11.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_12.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_13.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_14.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_15.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_16.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_17.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_18.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_19.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_20.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_21.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_22.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_23.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_24.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "jazzy/jazzy_25.mp3",
    },
  ],
  sleepy: [
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_1.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_2.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_3.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_4.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_4.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_5.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_6.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_7.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_8.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_9.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_10.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_11.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_12.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_13.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_14.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_15.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_16.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_17.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_18.mp3",
    },
    {
      url: TRACKS_ROOT_URL + "sleepy/sleepy_19.mp3",
    },
  ],
};
const playlistsSpotify = {
  chill: {
    url: "https://open.spotify.com/embed/playlist/0iepisLXvVe5RxB3owHjlj?utm_source=generator",
  },
  jazzy: {
    url: "https://open.spotify.com/embed/playlist/4dJSLiR8n2ZQUccpyXYKvE?utm_source=generator",
  },
  sleepy: {
    url: "https://open.spotify.com/embed/playlist/1lVoSF8Bd6bQJaoEHFGegX?utm_source=generator",
  },
};
const alarms: string[] = [
  ALARMS_ROOT_URL + "Digital.mp3",
  ALARMS_ROOT_URL + "Easy+Tone.mp3",
  ALARMS_ROOT_URL + "Piano.mp3",
  ALARMS_ROOT_URL + "Ringtone.mp3",
  ALARMS_ROOT_URL + "Soft.mp3",
];
export { playlistsBase, playlistsSpotify, effects, alarms };
