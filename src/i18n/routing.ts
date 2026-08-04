import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["mr", "en"],
  defaultLocale: "mr",
  localePrefix: "as-needed",
  // Always serve Marathi at `/` unless user explicitly chooses English (/en)
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
