"use client";

import { MessageCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { whatsappUrl } from "@/lib/site";

export function WhatsAppFloat() {
  const t = useTranslations("whatsapp");
  const href = whatsappUrl(t("defaultMessage"));

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("floatLabel")}
      className="fixed z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white soft-shadow-lg transition hover:scale-105 hover:bg-[#1ebe57] active:scale-95 sm:h-14 sm:w-14"
      style={{
        bottom: "calc(1.25rem + var(--safe-bottom))",
        right: "max(1.25rem, env(safe-area-inset-right, 0px))",
      }}
    >
      <MessageCircle className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" />
    </a>
  );
}
