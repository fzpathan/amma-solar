import {
  IndianRupee,
  Leaf,
  Home,
  Sparkles,
  Timer,
  Wrench,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const keys = [
  "savings",
  "subsidy",
  "value",
  "eco",
  "longevity",
  "maintenance",
] as const;

const icons = {
  savings: IndianRupee,
  subsidy: Sparkles,
  value: Home,
  eco: Leaf,
  longevity: Timer,
  maintenance: Wrench,
};

export async function BenefitsSection() {
  const t = await getTranslations("benefits");

  return (
    <section className="section-pad">
      <div className="container-narrow">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-12">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted">{t("subtitle")}</p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {keys.map((key) => {
            const Icon = icons[key];
            return (
              <li
                key={key}
                className="rounded-2xl border border-border/80 bg-white/90 p-5 transition hover:-translate-y-0.5 hover:soft-shadow-lg sm:p-6 soft-shadow"
              >
                <span className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-green/10 text-green sm:mb-4 sm:h-12 sm:w-12">
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </span>
                <h3 className="text-base font-semibold text-navy sm:text-lg">
                  {t(`items.${key}.title`)}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`items.${key}.desc`)}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
