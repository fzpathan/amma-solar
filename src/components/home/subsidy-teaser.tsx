import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/button";

export async function SubsidyTeaser() {
  const t = await getTranslations("subsidyTeaser");
  const locale = await getLocale();
  const deadline =
    locale === "mr"
      ? siteConfig.subsidyDeadlineDisplay.mr
      : siteConfig.subsidyDeadlineDisplay.en;

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(30,142,62,0.35),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(253,184,19,0.2),transparent_40%)]" />
      <div className="container-narrow section-pad relative grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow sm:text-sm">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base text-white/80 sm:text-lg">
            {t("body")}
          </p>
          <p className="mt-4 text-sm text-yellow/90">
            {t("deadline", { date: deadline })}
          </p>
          <Button asChild size="lg" className="mt-7 w-full sm:mt-8 sm:w-auto">
            <Link href="/subsidy">{t("cta")}</Link>
          </Button>
        </div>
        <div className="rounded-2xl bg-white/10 p-6 text-center ring-1 ring-white/15 backdrop-blur soft-shadow-lg sm:rounded-3xl sm:p-8">
          <p className="text-xs uppercase tracking-wider text-white/60 sm:text-sm">
            {t("amountLabel")}
          </p>
          <p className="mt-2 text-4xl font-bold text-yellow sm:text-5xl md:text-6xl">
            {t("amount")}
          </p>
          <ul className="mt-5 space-y-1 text-left text-sm text-white/85 sm:mt-6 sm:space-y-2">
            {siteConfig.subsidyTable.map((row) => (
              <li
                key={row.capacity}
                className="flex justify-between gap-3 border-b border-white/10 py-2.5"
              >
                <span>{row.capacity}</span>
                <span className="shrink-0 font-semibold">
                  ₹{row.amount.toLocaleString("en-IN")}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
