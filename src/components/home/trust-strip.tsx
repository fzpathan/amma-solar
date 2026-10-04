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
    <section className="border-y border-border bg-surface/80">
      <div className="container-narrow px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <p className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-muted sm:mb-6 sm:text-xs">
          {t("title")}
        </p>

        <ul className="snap-x-scroll sm:grid-cols-2 sm:gap-3 lg:grid-cols-5 lg:gap-4">
          {keys.map((key) => {
            const Icon = icons[key];
            return (
              <li
                key={key}
                className="flex w-[12.5rem] items-center gap-3 rounded-2xl bg-white px-4 py-3 soft-shadow sm:w-auto"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </span>
                <span className="text-sm font-semibold leading-snug text-navy">
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
