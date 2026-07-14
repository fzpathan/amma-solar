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
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-muted">{t("subtitle")}</p>
        </div>
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {keys.map((key) => {
            const Icon = icons[key];
            return (
              <li
                key={key}
                className="rounded-2xl border border-border/80 bg-white p-6 soft-shadow transition hover:-translate-y-0.5 hover:soft-shadow-lg"
              >
                <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="text-lg font-semibold text-navy">
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
