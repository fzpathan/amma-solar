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
        "inline-flex items-center rounded-full p-0.5 text-[11px] font-semibold sm:p-1 sm:text-xs",
        light ? "bg-white/15 text-white" : "bg-surface text-navy"
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => switchTo("mr")}
        className={cn(
          "rounded-full px-2 py-1 transition sm:px-2.5",
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
          "rounded-full px-2 py-1 transition sm:px-2.5",
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
