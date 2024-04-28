import { defineConfig } from 'vite';

import unocss from 'unocss/vite';
import solid from 'vite-plugin-solid';
import icons from "unplugin-icons/vite";

export default defineConfig({
  plugins: [unocss(), icons({ compiler: "solid" }), solid()],
  server: {
    port: 3000,
    strictPort: true
  }
})
