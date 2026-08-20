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
    <section className="relative min-h-[100svh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/75 via-navy/70 to-navy-deep/90" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(253,184,19,0.18),_transparent_50%)]" />

      <div className="container-narrow relative flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:justify-center sm:pb-24 sm:pt-40 lg:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <p className="mb-3 text-3xl font-extrabold tracking-tight text-yellow sm:text-4xl md:text-5xl">
            {t("brand")}
          </p>
          <p className="mb-4 inline-flex rounded-full bg-green/20 px-4 py-1.5 text-sm font-semibold text-white ring-1 ring-green/40 sm:text-base">
            {t("vendorBadge")}
          </p>
          <h1
            className={`text-3xl font-bold leading-[1.15] text-white sm:text-4xl md:text-5xl ${
              locale === "mr" ? "font-deva" : ""
            }`}
          >
            {t("headline")}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-white/90 sm:text-xl">
            {t("subhead")}
          </p>
          <p className="mt-4 inline-flex rounded-full bg-yellow/15 px-4 py-2 text-base font-medium text-yellow ring-1 ring-yellow/30">
            {t("deadlineBadge", { date: deadline })}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 sm:text-base">
              {t("panelWarranty")}
            </span>
            <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/25 sm:text-base">
              {t("inverterWarranty")}
            </span>
          </div>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            {t("zeroOffer")}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={whatsappUrl(tw("consultationMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("ctaPrimary")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
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
