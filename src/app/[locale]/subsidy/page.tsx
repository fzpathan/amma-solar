import type { Metadata } from "next";
import { getLocale, getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { siteConfig, whatsappUrl } from "@/lib/site";
import { formatINR } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { FaqSection } from "@/components/home/faq";
import { CtaBanner } from "@/components/home/cta-banner";
import { ProcessTimeline } from "@/components/home/process-timeline";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("subsidyTitle"),
    description: t("subsidyDescription"),
  };
}

export default async function SubsidyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("subsidyPage");
  const tw = await getTranslations("whatsapp");
  const tc = await getTranslations("common");
  const loc = await getLocale();
  const deadline =
    loc === "mr"
      ? siteConfig.subsidyDeadlineDisplay.mr
      : siteConfig.subsidyDeadlineDisplay.en;

  return (
    <>
      <section className="bg-navy pb-16 pt-28 text-white md:pt-32">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-white/80">{t("intro")}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild size="lg">
              <a
                href={whatsappUrl(tw("consultationMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                {tc("checkEligibility")}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/calculator">{tc("learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-green p-8 text-white soft-shadow-lg">
            <h2 className="text-2xl font-bold">{t("zeroTitle")}</h2>
            <p className="mt-3 text-white/90">{t("zeroBody")}</p>
            <p className="mt-4 text-xs text-white/70">{tc("policyFootnote")}</p>
          </div>
          <div className="rounded-3xl border border-orange/30 bg-orange/10 p-8 soft-shadow">
            <h2 className="text-2xl font-bold text-navy">{t("deadlineTitle")}</h2>
            <p className="mt-2 text-4xl font-bold text-orange">{deadline}</p>
            <p className="mt-3 text-sm text-muted">
              {t("deadlineBody", { date: deadline })}
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-surface pt-0">
        <div className="container-narrow grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold text-navy">{t("eligibilityTitle")}</h2>
            <p className="mt-3 text-muted">{t("eligibilityBody")}</p>
            <h3 className="mt-8 text-lg font-semibold text-navy">
              {t("docsTitle")}
            </h3>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {siteConfig.documents.map((doc) => (
                <li
                  key={doc}
                  className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-navy soft-shadow"
                >
                  {t(`docs.${doc}`)}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-6 soft-shadow-lg sm:p-8">
            <h2 className="text-2xl font-bold text-navy">{t("tableTitle")}</h2>
            <table className="mt-6 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted">
                  <th className="pb-3 font-medium">{t("tableCapacity")}</th>
                  <th className="pb-3 font-medium">{t("tableSubsidy")}</th>
                </tr>
              </thead>
              <tbody>
                {siteConfig.subsidyTable.map((row) => (
                  <tr key={row.capacity} className="border-b border-border/70">
                    <td className="py-3 font-semibold text-navy">
                      {row.capacity}
                    </td>
                    <td className="py-3 text-green">{formatINR(row.amount)}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <h3 className="mt-8 text-lg font-semibold text-navy">
              {t("sizingTitle")}
            </h3>
            <table className="mt-4 w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-muted">
                  <th className="pb-3 font-medium">{t("sizingUnits")}</th>
                  <th className="pb-3 font-medium">{t("sizingKw")}</th>
                </tr>
              </thead>
              <tbody>
                {siteConfig.sizingTable.map((row) => (
                  <tr key={row.units} className="border-b border-border/70">
                    <td className="py-3 text-navy">{row.units}</td>
                    <td className="py-3 font-semibold text-navy">{row.kw}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow grid gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-white p-8 soft-shadow">
            <h2 className="text-2xl font-bold text-navy">{t("loanTitle")}</h2>
            <p className="mt-3 text-muted">{t("loanBody")}</p>
          </div>
          <div className="rounded-3xl border border-border bg-white p-8 soft-shadow">
            <h2 className="text-2xl font-bold text-navy">{t("warrantyTitle")}</h2>
            <ul className="mt-4 space-y-2 text-sm text-navy">
              <li>• {t("warrantyPanel")}</li>
              <li>• {t("warrantyInverter")}</li>
              <li>• {t("warrantyTeam")}</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="pb-4">
        <h2 className="container-narrow px-4 text-center text-3xl font-bold text-navy sm:px-6 lg:px-8">
          {t("processTitle")}
        </h2>
      </div>
      <ProcessTimeline />

      <FaqSection />

      <section className="section-pad pt-0">
        <div className="container-narrow rounded-3xl bg-navy px-6 py-12 text-center text-white soft-shadow-lg sm:px-12">
          <h2 className="text-3xl font-bold">{t("ctaTitle")}</h2>
          <p className="mx-auto mt-3 max-w-xl text-white/80">{t("ctaBody")}</p>
          <Button asChild size="lg" className="mt-8">
            <a
              href={whatsappUrl(tw("consultationMessage"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </Button>
          <p className="mt-4 text-xs text-white/50">{tc("policyFootnote")}</p>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
