import { defineConfig, presetUno, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [presetUno()],
  transformers: [transformerVariantGroup()],

  theme: {
    colors: {
      primary: "#f3a952",
      "primary-st": "#f3a95230",
      secondary: "#8b8aa2",
      success: "#4bb543",
      bgd: {
        "100": "hsla(0,0%,7%,.75)",
        "200": "rgba(40,40,40,.3)",
        "300": "hsla(0,0%,100%,.05)"
      },
      bg: {
        "100": "#000000cb",
        "150": "#00000080",
        "300": "#24242f"
      }
    },
    
    fontFamily: {
      sans: "'Roboto', sans-serif"
    }
  }
});
