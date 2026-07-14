"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = ["1", "2", "3", "4", "5", "6", "7"] as const;

export function ProcessTimeline() {
  const t = useTranslations("process");

  return (
    <section className="section-pad bg-surface">
      <div className="container-narrow">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted">{t("subtitle")}</p>
        </div>
        <ol className="relative grid gap-4 md:grid-cols-7">
          <div className="pointer-events-none absolute left-0 right-0 top-7 hidden h-0.5 bg-green/25 md:block" />
          {steps.map((step, i) => (
            <motion.li
              key={step}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative flex flex-col items-center text-center"
            >
              <span className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-green text-lg font-bold text-white soft-shadow">
                {step}
              </span>
              <span className="mt-3 text-sm font-semibold text-navy">
                {t(`steps.${step}`)}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
