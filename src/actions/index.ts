import { defineAction, z, getApiContext } from "astro:actions";

export const server = {
  registerView: defineAction({
    input: z.object({ articleSlug: z.string() }),
    handler: async ({ articleSlug }) => {
      const context = getApiContext();

      // @ts-ignore
      const { ViewCountKV } = context.locals.runtime.env;

      let viewCount = (await ViewCountKV.get(articleSlug)) || 0;
      await ViewCountKV.put(articleSlug, ++viewCount);

      return viewCount;
    },
  }),
};
