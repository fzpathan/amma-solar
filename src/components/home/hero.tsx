"use client";

import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import { heroImage } from "@/lib/gallery";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("hero");
  const tw = useTranslations("whatsapp");
  const locale = useLocale();
  const deadline =
    locale === "mr"
      ? siteConfig.subsidyDeadlineDisplay.mr
      : siteConfig.subsidyDeadlineDisplay.en;

  return (
    <section className="relative min-h-[100svh] overflow-x-hidden">
      <div
        className="absolute inset-0 scale-105 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/85 via-navy/78 to-navy-deep/96" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(253,184,19,0.12),_transparent_55%)]" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy-deep to-transparent" />

      <div className="container-narrow relative flex min-h-[100svh] flex-col justify-end px-5 pb-[calc(5.5rem+var(--safe-bottom))] pt-[calc(var(--header-h)+1.5rem+var(--safe-top))] sm:justify-center sm:px-6 sm:pb-24 lg:px-8 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-1.5 text-xl font-extrabold tracking-tight text-yellow drop-shadow-sm sm:mb-3 sm:text-4xl md:text-5xl">
            {t("brand")}
          </p>

          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.14em] text-white/70 sm:mb-4 sm:text-sm sm:tracking-[0.16em]">
            {t("vendorBadge")}
          </p>

          <h1
            className={`text-[1.45rem] font-bold leading-[1.25] text-white drop-shadow-sm sm:text-4xl sm:leading-[1.2] md:text-5xl ${
              locale === "mr" ? "font-deva" : ""
            }`}
          >
            {t("headline")}
          </h1>

          <p className="mt-3 max-w-xl text-[0.95rem] leading-relaxed text-white/88 sm:mt-5 sm:text-xl">
            {t("subhead")}
          </p>

          <p className="mt-3 text-sm font-medium text-yellow sm:mt-5 sm:text-base">
            {t("deadlineBadge", { date: deadline })}
          </p>

          <p className="mt-1.5 max-w-xl text-sm leading-snug text-white/75 sm:mt-2 sm:text-base">
            {t("zeroOffer")}
          </p>

          <div className="mt-2.5 flex flex-wrap gap-x-2 gap-y-1 text-[11px] font-semibold text-white/85 sm:mt-4 sm:text-sm">
            <span>{t("panelWarranty")}</span>
            <span className="text-white/35" aria-hidden>
              ·
            </span>
            <span>{t("inverterWarranty")}</span>
          </div>

          <div className="mt-6 flex w-full flex-col gap-2.5 sm:mt-9 sm:w-auto sm:flex-row sm:flex-wrap sm:gap-3">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a
                href={whatsappUrl(tw("consultationMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("ctaPrimary")}
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto"
            >
              <a
                href={whatsappUrl(tw("defaultMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("ctaSecondary")}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
