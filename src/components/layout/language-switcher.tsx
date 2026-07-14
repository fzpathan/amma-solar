"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ light = false }: { light?: boolean }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchTo = (next: "mr" | "en") => {
    router.replace(pathname, { locale: next });
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full p-1 text-xs font-semibold",
        light ? "bg-white/15 text-white" : "bg-surface text-navy"
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("mr")}
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          locale === "mr"
            ? light
              ? "bg-white text-navy"
              : "bg-white text-green soft-shadow"
            : "opacity-70 hover:opacity-100"
        )}
      >
        मराठी
      </button>
      <button
        type="button"
        onClick={() => switchTo("en")}
        className={cn(
          "rounded-full px-2.5 py-1 transition",
          locale === "en"
            ? light
              ? "bg-white text-navy"
              : "bg-white text-green soft-shadow"
            : "opacity-70 hover:opacity-100"
        )}
      >
        EN
      </button>
    </div>
  );
}
