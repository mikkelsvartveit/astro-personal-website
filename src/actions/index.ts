import { defineAction } from "astro:actions";
import { z } from "astro:schema";

export const server = {
  registerView: defineAction({
    input: z.object({ articleSlug: z.string() }),
    handler: async ({ articleSlug }, context) => {
      // @ts-ignore
      const ViewCountKV = context.locals.runtime?.env?.ViewCountKV;

      let viewCount = (await ViewCountKV.get(articleSlug)) || 0;
      await ViewCountKV.put(articleSlug, ++viewCount);

      return viewCount;
    },
  }),
};
