import { defineAction } from "astro:actions";

export const server = {
  dummy: defineAction({
    handler: async () => {
      return 0;
    },
  }),
};
