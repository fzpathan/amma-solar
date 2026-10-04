import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";

export async function WhyUsSection() {
  const t = await getTranslations("whyUs");
  const points = ["1", "2", "3", "4"] as const;
  const checklist = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] as const;
  const badges = ["quality", "service", "satisfaction", "clean"] as const;

  return (
    <section className="section-pad">
      <div className="container-narrow grid gap-10 lg:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green sm:text-sm">
            {t("title")}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
            {t("headline")}
          </h2>
          <p className="mt-4 text-muted">{t("body")}</p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex gap-3 text-sm text-navy sm:text-base">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green text-white">
                  <Check className="h-3 w-3" />
                </span>
                {t(`points.${p}`)}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-full bg-surface px-3 py-1.5 text-xs font-semibold text-navy soft-shadow"
              >
                {t(`badges.${b}`)}
              </span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-white p-5 soft-shadow-lg sm:rounded-3xl sm:p-8">
          <h3 className="text-base font-semibold text-navy sm:text-lg">
            {t("checklistTitle")}
          </h3>
          <ol className="mt-5 grid gap-2.5 sm:grid-cols-2 sm:gap-3">
            {checklist.map((c) => (
              <li
                key={c}
                className="flex gap-3 rounded-xl bg-surface px-3 py-3 text-sm text-navy"
              >
                <span className="font-bold text-green">{c}.</span>
                <span>{t(`checklist.${c}`)}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
