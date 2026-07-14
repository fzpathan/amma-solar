import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["mr", "en"],
  defaultLocale: "mr",
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
