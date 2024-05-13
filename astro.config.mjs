import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte()],
  output: "hybrid",
  adapter: cloudflare({
    imageService: "compile",
    platformProxy: {
      enabled: true,
    },
  }),
  vite: {
    ssr: {
      external: ["node:async_hooks"],
    },
  },
  experimental: {
    actions: true,
  },
});
