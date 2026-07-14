import {
  BadgeCheck,
  Banknote,
  Gauge,
  Shield,
  Wrench,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

const icons = {
  subsidy: BadgeCheck,
  warranty: Shield,
  install: Wrench,
  netMeter: Gauge,
  loan: Banknote,
} as const;

export async function TrustStrip() {
  const t = await getTranslations("trust");
  const keys = Object.keys(icons) as (keyof typeof icons)[];

  return (
    <section className="border-y border-border bg-surface">
      <div className="container-narrow px-4 py-8 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.18em] text-muted">
          {t("title")}
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {keys.map((key) => {
            const Icon = icons[key];
            return (
              <li
                key={key}
                className="flex items-center gap-3 rounded-2xl bg-white px-4 py-3 soft-shadow"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                  <Icon className="h-5 w-5" />
                </span>
                <span className="text-sm font-semibold text-navy">
                  {t(`items.${key}`)}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
