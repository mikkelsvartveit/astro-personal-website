import { defineAction } from "astro:actions";
import { z } from "astro:schema";
import { env } from "cloudflare:workers";

export const server = {
  registerView: defineAction({
    input: z.object({ articleSlug: z.string() }),
    handler: async ({ articleSlug }) => {
      const ViewCountKV = env.ViewCountKV;

      let viewCount = (await ViewCountKV.get(articleSlug)) || 0;
      await ViewCountKV.put(articleSlug, ++viewCount);

      return viewCount;
    },
  }),
};
