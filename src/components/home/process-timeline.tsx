"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = ["1", "2", "3", "4", "5", "6", "7"] as const;

export function ProcessTimeline() {
  const t = useTranslations("process");

  return (
    <section className="section-pad bg-surface">
      <div className="container-narrow">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted">{t("subtitle")}</p>
        </div>

        <ol className="relative space-y-0 md:grid md:grid-cols-7 md:gap-3 md:space-y-0">
          <div
            className="absolute bottom-3 left-[1.375rem] top-3 w-px bg-green/25 md:bottom-auto md:left-[7%] md:right-[7%] md:top-7 md:h-0.5 md:w-auto"
            aria-hidden
          />
          {steps.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.05, duration: 0.35 }}
              className="relative flex items-start gap-4 py-3 md:flex-col md:items-center md:py-0 md:text-center"
            >
              <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-green text-base font-bold text-white soft-shadow md:h-14 md:w-14 md:text-lg">
                {step}
              </span>
              <span className="pt-2.5 text-base font-semibold text-navy md:mt-3 md:pt-0 md:text-sm md:leading-snug">
                {t(`steps.${step}`)}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
