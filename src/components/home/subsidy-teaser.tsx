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
      <div className="container-narrow section-pad relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 max-w-xl text-white/80">{t("body")}</p>
          <p className="mt-4 text-sm text-yellow/90">
            {t("deadline", { date: deadline })}
          </p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/subsidy">{t("cta")}</Link>
          </Button>
        </div>
        <div className="rounded-3xl bg-white/10 p-8 text-center ring-1 ring-white/15 backdrop-blur soft-shadow-lg">
          <p className="text-sm uppercase tracking-wider text-white/60">
            {t("amountLabel")}
          </p>
          <p className="mt-2 text-5xl font-bold text-yellow sm:text-6xl">
            {t("amount")}
          </p>
          <ul className="mt-6 space-y-2 text-left text-sm text-white/85">
            {siteConfig.subsidyTable.map((row) => (
              <li
                key={row.capacity}
                className="flex justify-between border-b border-white/10 py-2"
              >
                <span>{row.capacity}</span>
                <span className="font-semibold">
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
