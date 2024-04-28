import {
  cafeInPreview,
  cafeOutPreview,
  cafeThumb,
  forestInsidePreview,
  forestOutsidePreview,
  forestThumb,
  summerOutPreview,
  summerPreview,
  summerThumb,
  vanOutPreview,
  vanPreview,
  vanThumb,
  oceanPreview,
  oceanOutPreview,
  oceanThumb,
  chillVibes,
  livingRoom,
  bedRoom,
  lofi_desk,
  studyCity,
  studyBeach,
  studyMountain,
  cottage,
  cottageIn,
  cottageOut,
  bookCafe,
  bookOut,
  bookIn,
  kyoto,
  kyotoPark,
  kyotoStreet,
  dreamingScene,
  spacePW,
  underwaterPW,
  honoluluIn,
  honoluluOut,
  honoluluPW,
  trainJourney,
  trainJourneyCity,
  trainJourneyCountry,
  newYorkBedroom,
  newYorkCentralPark,
  newYorkPreview,
  greenHousePreview,
  backseat,
  noisePreview,
  white,
  pink,
  brown,
  backseatPreview,
  futurePreview,
  futureDesk,
  futureBedroom,
  slowGardenPreview,
  slowGarden,
  libraryPreview,
  library,
  artRoom,
  artRoomPreview,
  plane,
  planePreview,
  inthewoodsInside,
  inthewoodsOutside,
  inthewoodsPreview,
  lakeHousePreview,
  lakeHouseOutside,
  lakeHouseInside,
  fuji,
  fujiPreview,
  floatingPreview,
  floating,
  seaSideInside,
  seaSideOutside,
  seaSidePreview,
  sunsetCamping,
  sunsetCampingPreview,
  tokyoNightAlley,
  tokyoNightRamenShop,
  tokyoNightPreview,
  treeHouse,
  treeHousePreview,
  winterNight,
  winterNightPreview,
  cozyStudio,
  cozyStudioPreview,
  dreamyForest,
  dreamyForestPreview,
  greenHouse,
  seoulInside,
  seoulOutside,
  seoulPreview
} from "../thumbnails";
import videos from "../videos";
import { digitalOcean } from "../../common/constants";
import type { EffectType } from "./audio.data";

const { SCENES_ROOT_URL, WALLPAPERS_ROOT_URL } = digitalOcean;

export interface Scene {
  thumbnail: string;
  wallpaper: string;
  variants: { [key in string]: string };
  actions: ({
    position: [number, number];
    title: string;
  } & (
    | {
      type: "sound";
      effect: EffectType;
    }
    | {
      type: "next-set";
    }
  ))[];
}

export const scenes: { [key in string]: Scene } = {
  forestInside: {
    thumbnail: forestInsidePreview,
    wallpaper: WALLPAPERS_ROOT_URL + "forest-house/forest1.jpg",
    variants: {
      default: SCENES_ROOT_URL + videos.forest.inside,
      rain_forest: SCENES_ROOT_URL + videos.forest.insideRain,
      default_pixel: SCENES_ROOT_URL + videos.forest.insidePix,
      rain_forest_pixel: SCENES_ROOT_URL + videos.forest.insideRainPix,
    },
    actions: [
      {
        position: [70, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [15, 20],
        title: "Bird chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  forestOutside: {
    thumbnail: forestOutsidePreview,
    wallpaper: WALLPAPERS_ROOT_URL + "forest-house/forest2.jpg",
    variants: {
      default: SCENES_ROOT_URL + videos.forest.outside,
      rain_forest: SCENES_ROOT_URL + videos.forest.outsideRain,
      default_pixel: SCENES_ROOT_URL + videos.forest.outsidePix,
      rain_forest_pixel: SCENES_ROOT_URL + videos.forest.outsideRainPix,
    },

    actions: [
      {
        position: [70, 70],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [10, 50],
        title: "Bird chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [67, 12],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
    ],
  },
  vanInside: {
    thumbnail: vanPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.van.in,
      rain_forest: SCENES_ROOT_URL + videos.van.inRain,
    },

    wallpaper: WALLPAPERS_ROOT_URL + "van/van.jpg",
    actions: [
      {
        position: [50, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [55, 20],
        title: "Forest",
        type: "sound",
        effect: "forest",
      },
    ],
  },
  vanOutside: {
    thumbnail: vanOutPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.van.out,
      fire: SCENES_ROOT_URL + videos.van.outFire,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "van/lofi3.jpg",
    actions: [
      {
        position: [10, 20],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
      {
        position: [42, 78],
        title: "Campfire sound",
        type: "sound",
        effect: "fire",
      },
    ],
  },
  library: {
    thumbnail: library,
    wallpaper: WALLPAPERS_ROOT_URL + "library/library.png",
    variants: {
      default: SCENES_ROOT_URL + videos.library.outRain,
      window_rain: SCENES_ROOT_URL + videos.library.inRain,
    },
    actions: [
      {
        position: [55, 25],
        title: "Thunders",
        type: "sound",
        effect: "thunders",
      },
      {
        position: [66, 24],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
      {
        position: [60, 56],
        title: "Fireplace",
        type: "sound",
        effect: "fireplace",
      },
    ],
  },
  artRoom: {
    thumbnail: artRoom,
    wallpaper: WALLPAPERS_ROOT_URL + "artroom/artroom.jpg",
    variants: {
      default: SCENES_ROOT_URL + videos.artRoom.inDay,
      rain_street: SCENES_ROOT_URL + videos.artRoom.inDayRain,
      default_night: SCENES_ROOT_URL + videos.artRoom.inNight,
      rain_street_night: SCENES_ROOT_URL + videos.artRoom.inNightRain,
    },
    actions: [
      {
        position: [49, 36],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [56, 14],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [60, 29],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
    ],
  },
  cafeInside: {
    thumbnail: cafeInPreview,
    wallpaper: WALLPAPERS_ROOT_URL + "lofi-cafe/cafe2.jpg",
    variants: {
      default: SCENES_ROOT_URL + videos.cafe.inDay,
      default_night: SCENES_ROOT_URL + videos.cafe.inNight,
      rain_street_night: SCENES_ROOT_URL + videos.cafe.inNightRain,
      rain_street: SCENES_ROOT_URL + videos.cafe.inDayRain,
    },

    actions: [
      {
        position: [20, 38],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [50, 70],
        title: "People Talks",
        type: "sound",
        effect: "people",
      },
    ],
  },
  cafeOutside: {
    thumbnail: cafeOutPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.cafe.outDay,
      rain_street: SCENES_ROOT_URL + videos.cafe.outDayRain,
      default_night: SCENES_ROOT_URL + videos.cafe.outNight,
      rain_street_night: SCENES_ROOT_URL + videos.cafe.outNightRain,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "lofi-cafe/cafe1.jpg",
    actions: [
      {
        position: [75, 80],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [35, 35],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
    ],
  },
  summerInside: {
    thumbnail: summerPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.summer.inside,
      storm: SCENES_ROOT_URL + videos.summer.insideRain,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "summer/beach2.jpg",
    actions: [
      {
        position: [30, 25],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
      {
        position: [60, 45],
        title: "Fan",
        type: "sound",
        effect: "fan",
      },
    ],
  },
  summerOutside: {
    thumbnail: summerOutPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.summer.outside,
      storm: SCENES_ROOT_URL + videos.summer.outsideRain,
      default_pixel: SCENES_ROOT_URL + videos.summer.outsidePix,
      storm_pixel: SCENES_ROOT_URL + videos.summer.outsideRainPix,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "summer/beach1.jpg",

    actions: [
      {
        position: [75, 80],
        title: "Sea Waves",
        type: "sound",
        effect: "waves",
      },
      {
        position: [85, 15],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  oceanInside: {
    thumbnail: oceanPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.ocean.in,
      storm: SCENES_ROOT_URL + videos.ocean.inRain,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "ocean-tales/inside.png",

    actions: [
      {
        position: [8, 59],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
      {
        position: [59, 31],
        title: "Summer Storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  oceanOutside: {
    thumbnail: oceanOutPreview,
    variants: {
      default: SCENES_ROOT_URL + videos.ocean.out,
      storm: SCENES_ROOT_URL + videos.ocean.outRain,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "ocean-tales/outside.png",

    actions: [
      {
        position: [8, 15],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
      {
        position: [42, 64],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
      {
        position: [48, 13],
        title: "Summer Storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  lrBedRoom: {
    thumbnail: bedRoom,
    variants: {
      default: SCENES_ROOT_URL + videos.chillVibes.bed,
      rain_street: SCENES_ROOT_URL + videos.chillVibes.bedRain,
      default_night: SCENES_ROOT_URL + videos.chillVibes.bedNight,
      rain_street_night: SCENES_ROOT_URL + videos.chillVibes.bedRainNight,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "chill-vibes/office.png",
    actions: [
      {
        position: [82, 20],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [7, 18],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  lrLivingRoom: {
    thumbnail: livingRoom,
    variants: {
      default: SCENES_ROOT_URL + videos.chillVibes.lr,
      rain_street: SCENES_ROOT_URL + videos.chillVibes.lrRain,
      default_night: SCENES_ROOT_URL + videos.chillVibes.lrNight,
      rain_street_night: SCENES_ROOT_URL + videos.chillVibes.lrNightRain,
    },
    wallpaper: WALLPAPERS_ROOT_URL + "chill-vibes/living-room.png",
    actions: [
      {
        position: [40, 14],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [4, 68],
        title: "Fireplace",
        type: "sound",
        effect: "fireplace",
      },
    ],
  },
  deskCity: {
    variants: { default: SCENES_ROOT_URL + videos.study.city },
    thumbnail: studyCity,
    wallpaper: WALLPAPERS_ROOT_URL + "study/city.jpg",
    actions: [
      {
        position: [44, 52.5],
        title: "Change place",
        type: "next-set",
      },
      {
        position: [40, 15],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  deskBeach: {
    variants: { default: SCENES_ROOT_URL + videos.study.beach },
    thumbnail: studyBeach,
    wallpaper: WALLPAPERS_ROOT_URL + "study/beach.jpg",
    actions: [
      {
        position: [44, 52.5],
        title: "Change place",
        type: "next-set",
      },
      {
        position: [40, 15],
        title: "Waves",
        type: "sound",
        effect: "waves",
      },
    ],
  },
  deskSnow: {
    variants: {
      default: SCENES_ROOT_URL + videos.study.snow,
      snow: SCENES_ROOT_URL + videos.study.snowBlizzard,
    },
    thumbnail: studyMountain,
    wallpaper: WALLPAPERS_ROOT_URL + "study/snow.jpg",
    actions: [
      {
        position: [44, 52.5],
        title: "Change place",
        type: "next-set",
      },
      {
        position: [40, 15],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
    ],
  },
  cottageIn: {
    variants: {
      default: SCENES_ROOT_URL + videos.cottage.in,
      snow: SCENES_ROOT_URL + videos.cottage.inSnow,
    },
    thumbnail: cottageIn,
    wallpaper: WALLPAPERS_ROOT_URL + "cottage/interior.png",
    actions: [
      {
        position: [10, 70],
        title: "Fireplace",
        type: "sound",
        effect: "fireplace",
      },
      {
        position: [30, 15],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
      {
        position: [50, 50],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  cottageOut: {
    variants: {
      default: SCENES_ROOT_URL + videos.cottage.out,
      snow: SCENES_ROOT_URL + videos.cottage.outSnow,
    },
    thumbnail: cottageOut,
    wallpaper: WALLPAPERS_ROOT_URL + "cottage/exterior.png",
    actions: [
      {
        position: [25, 45],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
    ],
  },
  bookCafeIn: {
    variants: {
      default: SCENES_ROOT_URL + videos.bookCafe.in,
      default_night: SCENES_ROOT_URL + videos.bookCafe.inNight,
      rain_street: SCENES_ROOT_URL + videos.bookCafe.inRain,
      rain_street_night: SCENES_ROOT_URL + videos.bookCafe.inRainNight,
    },
    thumbnail: bookIn,

    wallpaper: WALLPAPERS_ROOT_URL + "book-cafe/int.png",
    actions: [
      {
        position: [17, 20],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [84, 72],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  bookCafeOut: {
    variants: {
      default: SCENES_ROOT_URL + videos.bookCafe.out,
      default_night: SCENES_ROOT_URL + videos.bookCafe.outNight,
      rain_street: SCENES_ROOT_URL + videos.bookCafe.outRain,
      rain_street_night: SCENES_ROOT_URL + videos.bookCafe.outRainNight,
    },
    thumbnail: bookOut,
    wallpaper: WALLPAPERS_ROOT_URL + "book-cafe/ext.png",
    actions: [
      {
        position: [6, 40],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [30, 65],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [60, 60],
        title: "Enter",
        type: "next-set",
      },
    ],
  },
  kyotoPark: {
    variants: {
      default: SCENES_ROOT_URL + videos.kyoto.park,
      default_night: SCENES_ROOT_URL + videos.kyoto.parkNight,
    },
    thumbnail: kyotoPark,
    wallpaper: WALLPAPERS_ROOT_URL + "kyoto/kyoto-park.png",
    actions: [
      {
        position: [30, 20],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [50, 70],
        title: "River",
        type: "sound",
        effect: "river",
      },
    ],
  },
  kyotoStreet: {
    variants: {
      default: SCENES_ROOT_URL + videos.kyoto.street,
      default_night: SCENES_ROOT_URL + videos.kyoto.streetNight,
    },
    thumbnail: kyotoStreet,
    wallpaper: WALLPAPERS_ROOT_URL + "kyoto/kyoto-street.png",

    actions: [
      {
        position: [50, 27],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [30, 85],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  underwater: {
    variants: {
      default: SCENES_ROOT_URL + videos.dreaming.underwater,
    },
    thumbnail: underwaterPW,
    wallpaper: WALLPAPERS_ROOT_URL + "am-i-dreaming/underwater-wp.png",

    actions: [
      {
        position: [40, 27],
        title: "Underwater",
        type: "sound",
        effect: "underwater",
      },
      {
        position: [67, 77],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  space: {
    variants: {
      default: SCENES_ROOT_URL + videos.dreaming.space,
    },
    thumbnail: spacePW,
    wallpaper: WALLPAPERS_ROOT_URL + "am-i-dreaming/space-wp.png",

    actions: [
      {
        position: [40, 27],
        title: "Deep space",
        type: "sound",
        effect: "space",
      },
      {
        position: [67, 77],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  honoluluIN: {
    variants: {
      default: SCENES_ROOT_URL + videos.honolulu.inside,
      storm: SCENES_ROOT_URL + videos.honolulu.insideRain,
      default_night: SCENES_ROOT_URL + videos.honolulu.insideNight,
      storm_night: SCENES_ROOT_URL + videos.honolulu.insideNightRain,
    },
    thumbnail: honoluluIn,
    wallpaper: WALLPAPERS_ROOT_URL + "honolulu/honolulu-balcony.png",

    actions: [
      {
        position: [40, 27],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
      {
        position: [67, 82],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  honoluluOut: {
    variants: {
      default: SCENES_ROOT_URL + videos.honolulu.outside,
      storm: SCENES_ROOT_URL + videos.honolulu.outsideRain,
      default_night: SCENES_ROOT_URL + videos.honolulu.outsideNight,
      storm_night: SCENES_ROOT_URL + videos.honolulu.outsideNightRain,
    },
    thumbnail: honoluluOut,
    wallpaper: WALLPAPERS_ROOT_URL + "honolulu/honolulu-beach.png",

    actions: [
      {
        position: [40, 27],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
      {
        position: [67, 60],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
    ],
  },
  trainJourneyCity: {
    variants: {
      default: SCENES_ROOT_URL + videos.train.cityDay,
      window_rain: SCENES_ROOT_URL + videos.train.cityDayRain,
      default_night: SCENES_ROOT_URL + videos.train.cityNight,
      window_rain_night: SCENES_ROOT_URL + videos.train.cityNightRain,
    },
    thumbnail: trainJourneyCity,
    wallpaper: WALLPAPERS_ROOT_URL + "train/train-city.png",

    actions: [
      {
        position: [25, 27],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
      {
        position: [64, 68],
        title: "Train",
        type: "sound",
        effect: "train_noise",
      },
      {
        position: [16, 85],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  trainJourneyCountry: {
    variants: {
      default: SCENES_ROOT_URL + videos.train.countryDay,
      window_rain: SCENES_ROOT_URL + videos.train.countryRainDay,
      default_night: SCENES_ROOT_URL + videos.train.countryNight,
      window_rain_night: SCENES_ROOT_URL + videos.train.countryRainNight,
    },
    thumbnail: trainJourneyCountry,
    wallpaper: WALLPAPERS_ROOT_URL + "train/train-country.png",

    actions: [
      {
        position: [25, 27],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
      {
        position: [64, 68],
        title: "Train",
        type: "sound",
        effect: "train_noise",
      },
      {
        position: [16, 85],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  newYorkBedroom: {
    variants: {
      default: SCENES_ROOT_URL + videos.newYork.bedRoomDay,
      default_night: SCENES_ROOT_URL + videos.newYork.bedRoomNight,
      rain_street: SCENES_ROOT_URL + videos.newYork.bedRoomDayRain,
      rain_street_night: SCENES_ROOT_URL + videos.newYork.bedRoomNightRain,
    },
    thumbnail: newYorkBedroom,
    wallpaper: WALLPAPERS_ROOT_URL + "new-york/bedroom-day.png",

    actions: [
      {
        position: [57, 27],
        title: "City rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [8, 30],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  newYorkCentralPark: {
    variants: {
      default: SCENES_ROOT_URL + videos.newYork.centralParkDay,
      default_night: SCENES_ROOT_URL + videos.newYork.centralParkNight,
      rain_street: SCENES_ROOT_URL + videos.newYork.centralParkDayRain,
      rain_street_night: SCENES_ROOT_URL + videos.newYork.centralParkNightRain,
    },
    thumbnail: newYorkCentralPark,
    wallpaper: WALLPAPERS_ROOT_URL + "new-york/central-park.png",

    actions: [
      {
        position: [52, 20],
        title: "City rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [15, 32],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  greenHouse: {
    variants: {
      default: SCENES_ROOT_URL + videos.greenHouse.greenHouseDay,
      default_night: SCENES_ROOT_URL + videos.greenHouse.greenHouseNight,
      rain_forest: SCENES_ROOT_URL + videos.greenHouse.greenHouseDayRain,
      rain_forest_night:
        SCENES_ROOT_URL + videos.greenHouse.greenHouseNightRain,
    },
    thumbnail: greenHouse,
    wallpaper: WALLPAPERS_ROOT_URL + "green-house/garden" + ".png",

    actions: [
      {
        position: [20, 20],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [43, 55],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [75, 20],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  seoulInside: {
    variants: {
      default: SCENES_ROOT_URL + videos.seoul.insideDay,
      default_night: SCENES_ROOT_URL + videos.seoul.insideNight,
      rain_street: SCENES_ROOT_URL + videos.seoul.insideDayRain,
      rain_street_night: SCENES_ROOT_URL + videos.seoul.insideNightRain,
    },
    thumbnail: seoulInside,
    wallpaper: WALLPAPERS_ROOT_URL + "seoul/seoul-indoor.png",

    actions: [
      {
        position: [39, 82],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [59, 44],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
    ],
  },
  seoulOutside: {
    variants: {
      default: SCENES_ROOT_URL + videos.seoul.outsideDay,
      default_night: SCENES_ROOT_URL + videos.seoul.outsideNight,
      rain_street: SCENES_ROOT_URL + videos.seoul.outsideDayRain,
      rain_street_night: SCENES_ROOT_URL + videos.seoul.outsideNightRain,
    },
    thumbnail: seoulOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "seoul/seoul-outdoor.png",

    actions: [
      {
        position: [36, 28],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [85, 70],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  backseat: {
    variants: {
      default: SCENES_ROOT_URL + videos.backseat.backseatNight,
      window_rain: SCENES_ROOT_URL + videos.backseat.backseatNightRain,
    },
    thumbnail: backseat,
    wallpaper: WALLPAPERS_ROOT_URL + "backseat/drive.png",

    actions: [
      {
        position: [36, 20],
        title: "Thunders",
        type: "sound",
        effect: "thunders",
      },
      {
        position: [36, 60],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [60, 20],
        title: "Window Rain",
        type: "sound",
        effect: "window_rain",
      },
    ],
  },
  whiteNoise: {
    variants: {
      default: SCENES_ROOT_URL + videos.noise.whiteNoise,
    },
    thumbnail: white,
    wallpaper: WALLPAPERS_ROOT_URL + "noise/white.jpg",

    actions: [
      {
        position: [36, 20],
        title: "White noise",
        type: "sound",
        effect: "white_noise",
      },
    ],
  },
  pinkNoise: {
    variants: {
      default: SCENES_ROOT_URL + videos.noise.pinkNoise,
    },
    thumbnail: pink,
    wallpaper: SCENES_ROOT_URL + "noise/pink.jpg",

    actions: [
      {
        position: [36, 20],
        title: "Pink noise",
        type: "sound",
        effect: "pink_noise",
      },
    ],
  },
  brownNoise: {
    variants: {
      default: SCENES_ROOT_URL + videos.noise.brownNoise,
    },
    thumbnail: brown,
    wallpaper: WALLPAPERS_ROOT_URL + "noise/brown.jpg",

    actions: [
      {
        position: [36, 20],
        title: "Brown noise",
        type: "sound",
        effect: "brown_noise",
      },
    ],
  },
  futureDesk: {
    variants: {
      default: SCENES_ROOT_URL + videos.future.deskGalaxy,
      default_night: SCENES_ROOT_URL + videos.future.deskCity,
      // galaxy: null,
    },
    thumbnail: futureDesk,
    wallpaper: WALLPAPERS_ROOT_URL + "future/desk-galaxy.png",

    actions: [
      {
        position: [78, 40],
        title: "Deep space",
        type: "sound",
        effect: "space",
      },
      {
        position: [40, 65],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [78, 40],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  futureBedroom: {
    variants: {
      default: SCENES_ROOT_URL + videos.future.bedroomGalaxy,
      default_night: SCENES_ROOT_URL + videos.future.bedroomCity,
      // galaxy: null,
    },
    thumbnail: futureBedroom,
    wallpaper: WALLPAPERS_ROOT_URL + "future/bedroom-galaxy.png",

    actions: [
      {
        position: [78, 40],
        title: "Deep space",
        type: "sound",
        effect: "space",
      },
      {
        position: [60, 54],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [78, 40],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  slowGarden: {
    variants: {
      default: SCENES_ROOT_URL + videos.slowGarden.gardenDay,
      default_night: SCENES_ROOT_URL + videos.slowGarden.gardenNight,
    },
    thumbnail: slowGarden,
    wallpaper: WALLPAPERS_ROOT_URL + "slowgarden/slowgarden.jpeg",

    actions: [
      {
        position: [40, 30],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [44, 80],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [27, 50],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
    ],
  },
  plane: {
    variants: {
      default: SCENES_ROOT_URL + videos.aboveTheClouds.planeDay,
      default_night: SCENES_ROOT_URL + videos.aboveTheClouds.planeNight,
    },
    thumbnail: plane,
    wallpaper: WALLPAPERS_ROOT_URL + "plane/plane.png",

    actions: [
      {
        position: [70, 30],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [30, 50],
        title: "Plane",
        type: "sound",
        effect: "plane",
      },
      {
        position: [60, 70],
        title: "Brown noise",
        type: "sound",
        effect: "brown_noise",
      },
    ],
  },
  inTheWoodsInside: {
    variants: {
      default: SCENES_ROOT_URL + videos.inTheWoods.insideSun,
      rain_forest: SCENES_ROOT_URL + videos.inTheWoods.insideRain,
    },
    thumbnail: inthewoodsInside,
    wallpaper: WALLPAPERS_ROOT_URL + "inthewoods/inside.jpg",

    actions: [
      {
        position: [27, 20],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [58, 34],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  inTheWoodsOutside: {
    variants: {
      default: SCENES_ROOT_URL + videos.inTheWoods.outsideSun,
      rain_forest: SCENES_ROOT_URL + videos.inTheWoods.outsideRain,
    },
    thumbnail: inthewoodsOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "inthewoods/outside.jpg",

    actions: [
      {
        position: [13, 47],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [44, 35],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [78, 40],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
    ],
  },
  lakeHouseInside: {
    variants: {
      default: SCENES_ROOT_URL + videos.lakeHouse.insideDay,
      default_night: SCENES_ROOT_URL + videos.lakeHouse.insideNight,
      rain_forest: SCENES_ROOT_URL + videos.lakeHouse.insideDayRain,
      rain_forest_night: SCENES_ROOT_URL + videos.lakeHouse.insideNightRain,
    },
    thumbnail: lakeHouseInside,
    wallpaper: WALLPAPERS_ROOT_URL + "lake-house/inside-day.jpg",

    actions: [
      {
        position: [28, 47],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [58, 35],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [72, 78],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
    ],
  },
  lakeHouseOutside: {
    variants: {
      default: SCENES_ROOT_URL + videos.lakeHouse.outsideDay,
      default_night: SCENES_ROOT_URL + videos.lakeHouse.outsideNight,
      rain_forest: SCENES_ROOT_URL + videos.lakeHouse.outsideDayRain,
      rain_forest_night: SCENES_ROOT_URL + videos.lakeHouse.outsideNightRain,
    },
    thumbnail: lakeHouseOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "lake-house/outside-day.jpg",

    actions: [
      {
        position: [13, 75],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [46, 45],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [80, 40],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  fuji: {
    variants: {
      default: SCENES_ROOT_URL + videos.fuji.day,
      default_night: SCENES_ROOT_URL + videos.fuji.night,
    },
    thumbnail: fuji,
    wallpaper: WALLPAPERS_ROOT_URL + "Fuji/fuji2.jpg",

    actions: [
      {
        position: [4, 50],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
      {
        position: [44, 78],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [77, 45],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  floating: {
    variants: {
      default: SCENES_ROOT_URL + videos.floating.day,
      default_night: SCENES_ROOT_URL + videos.floating.night,
    },
    thumbnail: floating,
    wallpaper: WALLPAPERS_ROOT_URL + "floating/floating.jpg",

    actions: [
      {
        position: [10, 35],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
      {
        position: [25, 55],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
      {
        position: [70, 60],
        title: "Underwater",
        type: "sound",
        effect: "underwater",
      },
    ],
  },
  seaSideInside: {
    variants: {
      default: SCENES_ROOT_URL + videos.seaSide.insideDay,
      default_night: SCENES_ROOT_URL + videos.seaSide.insideNight,
      storm: SCENES_ROOT_URL + videos.seaSide.insideDayRain,
      storm_night: SCENES_ROOT_URL + videos.seaSide.insideNightRain,
    },
    thumbnail: seaSideInside,
    wallpaper: WALLPAPERS_ROOT_URL + "seaside/room.jpg",

    actions: [
      {
        position: [40, 50],
        title: "Waves",
        type: "sound",
        effect: "waves",
      },
      {
        position: [25, 20],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  seaSideOutside: {
    variants: {
      default: SCENES_ROOT_URL + videos.seaSide.outsideDay,
      default_night: SCENES_ROOT_URL + videos.seaSide.outsideNight,
      storm: SCENES_ROOT_URL + videos.seaSide.outsideDayRain,
      storm_night: SCENES_ROOT_URL + videos.seaSide.outsideNightRain,
    },
    thumbnail: seaSideOutside,
    wallpaper: WALLPAPERS_ROOT_URL + "seaside/outside.jpg",

    actions: [
      {
        position: [67, 60],
        title: "Ocean",
        type: "sound",
        effect: "ocean",
      },
      {
        position: [40, 60],
        title: "Waves",
        type: "sound",
        effect: "waves",
      },
      {
        position: [65, 25],
        title: "Summer storm",
        type: "sound",
        effect: "storm",
      },
    ],
  },
  sunsetCamping: {
    variants: {
      default: SCENES_ROOT_URL + videos.sunsetCamping.sunny,
      rain_forest: SCENES_ROOT_URL + videos.sunsetCamping.rainy,
    },
    thumbnail: sunsetCamping,
    wallpaper: WALLPAPERS_ROOT_URL + "sunset-camping/camping.png",

    actions: [
      {
        position: [63, 76],
        title: "Campfire sound",
        type: "sound",
        effect: "fire",
      },
      {
        position: [34, 38],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [77, 16],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  tokyoNightRamenShop: {
    variants: {
      default: SCENES_ROOT_URL + videos.tokyoNight.ramenShop,
      rain_street: SCENES_ROOT_URL + videos.tokyoNight.ramenShopRain,
    },
    thumbnail: tokyoNightRamenShop,
    wallpaper: WALLPAPERS_ROOT_URL + "TokyoNight/RamenShop.jpg",

    actions: [
      {
        position: [68, 28],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [18, 84],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
    ],
  },
  tokyoNightAlley: {
    variants: {
      default: SCENES_ROOT_URL + videos.tokyoNight.alley,
      rain_street: SCENES_ROOT_URL + videos.tokyoNight.alleyRain,
    },
    thumbnail: tokyoNightAlley,
    wallpaper: WALLPAPERS_ROOT_URL + "TokyoNight/Alley.jpg",

    actions: [
      {
        position: [76, 20],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
      {
        position: [30, 80],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [43, 14],
        title: "Thunders",
        type: "sound",
        effect: "thunders",
      },
    ],
  },
  treeHouse: {
    variants: {
      default: SCENES_ROOT_URL + videos.treeHouse.day,
      default_night: SCENES_ROOT_URL + videos.treeHouse.night,
      rain_forest: SCENES_ROOT_URL + videos.treeHouse.dayRain,
      rain_forest_night: SCENES_ROOT_URL + videos.treeHouse.nightRain,
    },
    thumbnail: treeHouse,
    wallpaper: WALLPAPERS_ROOT_URL + "treehouse/treehouse.jpg",

    actions: [
      {
        position: [32, 68],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [63, 45],
        title: "Forest Rain",
        type: "sound",
        effect: "rain_forest",
      },
      {
        position: [72, 25],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
    ],
  },
  winterNight: {
    thumbnail: winterNight,
    wallpaper: WALLPAPERS_ROOT_URL + "winternight/winternight.png",
    variants: {
      default: SCENES_ROOT_URL + videos.winterNight.day,
      snow: SCENES_ROOT_URL + videos.winterNight.snow,
    },
    actions: [
      {
        position: [37, 66],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [16, 16],
        title: "Blizzard",
        type: "sound",
        effect: "snow",
      },
      {
        position: [49, 29],
        title: "Wind",
        type: "sound",
        effect: "wind",
      },
    ],
  },
  cozyStudio: {
    thumbnail: cozyStudio,
    wallpaper: WALLPAPERS_ROOT_URL + "cozy_studio/studio_day.png",
    variants: {
      default: SCENES_ROOT_URL + videos.cozyStudio.day,
      default_night: SCENES_ROOT_URL + videos.cozyStudio.night,
      rain_street: SCENES_ROOT_URL + videos.cozyStudio.dayRain,
      rain_street_night: SCENES_ROOT_URL + videos.cozyStudio.nightRain,
    },
    actions: [
      {
        position: [37, 48],
        title: "City Traffic",
        type: "sound",
        effect: "city",
      },
      {
        position: [66.7, 76],
        title: "Keyboard",
        type: "sound",
        effect: "keyboard",
      },
      {
        position: [64.5, 35.5],
        title: "City Rain",
        type: "sound",
        effect: "rain_street",
      },
    ],
  },
  dreamyForest: {
    thumbnail: dreamyForest,
    wallpaper: WALLPAPERS_ROOT_URL + "dreamy-forest/forestimage.jpeg",
    variants: {
      default: SCENES_ROOT_URL + videos.dreamyForest.day,
      default_night: SCENES_ROOT_URL + videos.dreamyForest.night,
    },
    actions: [
      {
        position: [8, 25],
        title: "Birds chirping",
        type: "sound",
        effect: "birds",
      },
      {
        position: [50, 73],
        title: "River",
        type: "sound",
        effect: "river",
      },
      {
        position: [80, 27],
        title: "Forest sound",
        type: "sound",
        effect: "forest",
      },
    ],
  },
} as const;

export interface SceneSet {
  _id: string;
  thumbnail: string;
  name: string;
  scenes: Scene[];
  effects: string[];
  premium?: boolean;
}

const sets: SceneSet[] = [
  {
    _id: "cozy_studio",
    thumbnail: cozyStudioPreview,
    name: "Cozy Studio",
    scenes: [scenes.cozyStudio],
    effects: ["keyboard", "city", "rain_street"],
  },

  {
    _id: "dreamy_forest",
    thumbnail: dreamyForestPreview,
    name: "Dreamy Forest",
    scenes: [scenes.dreamyForest],
    effects: ["birds", "forest", "river"],
  },

  {
    _id: "dreaming",
    thumbnail: dreamingScene,
    name: "Am I Dreaming?",
    scenes: [scenes.space, scenes.underwater],
    effects: ["keyboard", "space", "underwater"],
  },

  {
    _id: "winter_night",
    thumbnail: winterNightPreview,
    name: "Winter Night",
    scenes: [scenes.winterNight],
    effects: ["city", "wind", "snow"],
    premium: true,
  },

  {
    _id: "seoul",
    thumbnail: seoulPreview,
    name: "Seoul",
    scenes: [scenes.seoulInside, scenes.seoulOutside],
    effects: ["keyboard", "city", "rain_street"],
    premium: true,
  },

  {
    _id: "tree_house",
    thumbnail: treeHousePreview,
    name: "Tree House",
    scenes: [scenes.treeHouse],
    effects: ["rain_forest", "birds", "keyboard"],
    premium: true,
  },

  {
    _id: "lofi_cafe",
    thumbnail: cafeThumb,
    name: "Lofi café",
    scenes: [scenes.cafeOutside, scenes.cafeInside],
    effects: ["city", "rain_street", "people", "rain_window"],
    premium: true,
  },

  {
    _id: "in_the_woods",
    thumbnail: inthewoodsPreview,
    name: "In the Woods",
    scenes: [scenes.inTheWoodsInside, scenes.inTheWoodsOutside],
    effects: ["rain_forest", "birds", "forest"],
    premium: true,
  },

  {
    _id: "tokyo_night",
    thumbnail: tokyoNightPreview,
    name: "Tokyo Night",
    scenes: [scenes.tokyoNightRamenShop, scenes.tokyoNightAlley],
    effects: ["city", "rain_street", "thunders"],
    premium: true,
  },

  {
    _id: "lake_house",
    thumbnail: lakeHousePreview,
    name: "Lake House",
    scenes: [scenes.lakeHouseOutside, scenes.lakeHouseInside],
    effects: ["rain_forest", "birds", "keyboard"],
    premium: true,
  },

  {
    _id: "sunset_camping",
    thumbnail: sunsetCampingPreview,
    name: "Sunset Camping",
    scenes: [scenes.sunsetCamping],
    effects: ["rain_forest", "birds", "fire"],
    premium: true,
  },

  {
    _id: "sea_side",
    thumbnail: seaSidePreview,
    name: "Sea Side",
    scenes: [scenes.seaSideInside, scenes.seaSideOutside],
    effects: ["ocean", "waves", "storm"],
    premium: true,
  },

  {
    _id: "floating",
    thumbnail: floatingPreview,
    name: "Floating",
    scenes: [scenes.floating],
    effects: ["wind", "ocean", "underwater"],
    premium: true,
  },

  {
    _id: "fuji",
    thumbnail: fujiPreview,
    name: "Fuji",
    scenes: [scenes.fuji],
    effects: ["forest", "river", "birds"],
    premium: true,
  },

  {
    _id: "plane",
    thumbnail: planePreview,
    name: "Above the clouds",
    scenes: [scenes.plane],
    effects: ["keyboard", "plane", "brown_noise"],
    premium: true,
  },

  {
    _id: "artroom",
    thumbnail: artRoomPreview,
    name: "Art room",
    scenes: [scenes.artRoom],
    effects: ["birds", "rain_street", "wind"],
    premium: true,
  },

  {
    _id: "library",
    thumbnail: libraryPreview,
    name: "Library",
    scenes: [scenes.library],
    effects: ["thunders", "window_rain", "fireplace"],
    premium: true,
  },

  {
    _id: "slowgarden",
    thumbnail: slowGardenPreview,
    name: "Slow Garden",
    scenes: [scenes.slowGarden],
    effects: ["river", "birds", "wind"],
    premium: true,
  },

  {
    _id: "noise",
    thumbnail: noisePreview,
    name: "Noise",
    scenes: [scenes.whiteNoise, scenes.pinkNoise, scenes.brownNoise],
    effects: ["white_noise", "pink_noise", "brown_noise"],
    premium: true,
  },

  {
    _id: "future",
    thumbnail: futurePreview,
    name: "Future",
    scenes: [scenes.futureBedroom, scenes.futureDesk],
    effects: ["keyboard", "city", "space"],
    premium: true,
  },

  {
    _id: "backseat",
    thumbnail: backseatPreview,
    name: "Backseat",
    scenes: [scenes.backseat],
    effects: ["city", "thunders", "window_rain"],
    premium: true,
  },

  {
    _id: "green_house",
    thumbnail: greenHousePreview,
    name: "Green House",
    scenes: [scenes.greenHouse],
    effects: ["rain_forest", "river", "birds"],
    premium: true,
  },

  {
    _id: "new_york",
    thumbnail: newYorkPreview,
    name: "New York",
    scenes: [scenes.newYorkBedroom, scenes.newYorkCentralPark],
    effects: ["city", "rain_street", "birds"],
    premium: true,
  },

  {
    _id: "honolulu",
    thumbnail: honoluluPW,
    name: "Honolulu",
    scenes: [scenes.honoluluIN, scenes.honoluluOut],
    effects: ["keyboard", "storm", "ocean"],
    premium: true,
  },

  {
    _id: "train_journey",
    thumbnail: trainJourney,
    name: "Train Journey",
    scenes: [scenes.trainJourneyCity, scenes.trainJourneyCountry],
    effects: ["window_rain", "train_noise", "keyboard"],
    premium: true,
  },

  {
    _id: "kyoto",
    thumbnail: kyoto,
    name: "Kyoto",
    scenes: [scenes.kyotoStreet, scenes.kyotoPark],
    effects: ["city", "birds", "river"],
    premium: true,
  },
  {
    _id: "chill_vibes",
    thumbnail: chillVibes,
    name: "Chill Vibes",
    scenes: [scenes.lrBedRoom, scenes.lrLivingRoom],
    effects: ["city", "rain_street", "fireplace"],
    premium: true,
  },

  {
    _id: "book_cafe",
    thumbnail: bookCafe,
    name: "Book Cafe",
    scenes: [scenes.bookCafeOut, scenes.bookCafeIn],
    effects: ["city", "rain_street", "keyboard"],
    premium: true,
  },

  {
    _id: "cottage",
    thumbnail: cottage,
    premium: true,
    name: "Northern Lights",
    scenes: [scenes.cottageIn, scenes.cottageOut],
    effects: ["snow", "keyboard", "fireplace"],
  },
  {
    _id: "desk_lofi",
    thumbnail: lofi_desk,
    name: "Lofi Desk",
    scenes: [scenes.deskCity, scenes.deskBeach, scenes.deskSnow],
    effects: ["city", "waves", "snow"],
    premium: true,
  },
  {
    _id: "forest_house",
    thumbnail: forestThumb,
    name: "Forest House",
    scenes: [scenes.forestInside, scenes.forestOutside],
    effects: ["rain_forest", "birds", "river"],
    premium: true,
  },
  {
    _id: "ocean_tale",
    thumbnail: oceanThumb,
    name: "Ocean Tales",
    scenes: [scenes.oceanInside, scenes.oceanOutside],
    effects: ["ocean", "wind", "storm"],
    premium: true,
  },
  {
    _id: "van_life",
    thumbnail: vanThumb,
    name: "Van Life",
    scenes: [scenes.vanInside, scenes.vanOutside],
    effects: ["fire", "forest", "rain_forest"],
    premium: true,
  },

  {
    _id: "summer_days",
    thumbnail: summerThumb,
    name: "Summer Days",
    scenes: [scenes.summerInside, scenes.summerOutside],
    effects: ["storm", "fan", "waves"],
    premium: true,
  },
];

export { sets };
