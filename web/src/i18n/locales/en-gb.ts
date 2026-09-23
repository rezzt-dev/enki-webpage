import type { DeepPartial } from "../index";
import type { Dictionary } from "./es";

/** English (UK): only what differs from `en` (US). */
export const enGbOverrides: DeepPartial<Dictionary> = {
  modules: {
    items: [undefined, undefined, undefined, undefined, undefined, { title: "Your tasks, on your mobile too." }],
  },
  how: {
    steps: [
      undefined,
      undefined,
      { body: "Link Polar to take your tasks to your mobile. If not, everything keeps working locally." },
    ],
  },
  polarBand: { title: "On your mobile? Polar." },
  faq: {
    items: [
      undefined,
      {
        a: "No. Enki works without signing up. You only need an account if you choose to link Polar to sync tasks with your mobile.",
      },
    ],
  },
};
