// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://dixydres.github.io",
  base: "testTD",
  vite: {
    plugins: [tailwindcss()],
  },
});
