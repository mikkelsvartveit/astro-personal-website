import { defineConfig } from "astro/config";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [svelte(), mdx()],
  output: "static",
  adapter: cloudflare({
    imageService: "compile",
  }),
  vite: {
    plugins: [tailwindcss()],
    ssr: {
      external: ["node:async_hooks"],
    },
  },
  site: "https://mikkelsvartveit.com",
  redirects: {
    "/meet": "https://cal.com/misva/",
    "/cv": "/files/resume.pdf",
    "/resume": "/files/resume.pdf",
  },
});
