import {
  Building2,
  Factory,
  Landmark,
  Mail,
  Phone,
  Warehouse,
} from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Button } from "@/components/ui/button";
import { mailto, siteConfig, telHref, whatsappUrl } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("commercialTitle"),
    description: t("commercialDescription"),
  };
}

const whoIcons = [Factory, Warehouse, Building2, Landmark, Factory];

export default async function CommercialPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("commercialPage");
  const tw = await getTranslations("whatsapp");
  const whoKeys = ["1", "2", "3", "4", "5"] as const;
  const whyKeys = ["1", "2", "3", "4"] as const;
  const indiaKeys = ["1", "2", "3", "4"] as const;
  const mhKeys = ["1", "2", "3", "4", "5"] as const;
  const processKeys = ["1", "2", "3", "4", "5", "6"] as const;

  return (
    <>
      <section className="bg-navy page-top pb-12 text-white sm:pb-16">
        <div className="container-narrow px-4 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-yellow sm:text-sm">
            {t("eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-bold sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">{t("intro")}</p>
          <p className="mt-4 max-w-2xl rounded-2xl bg-white/10 px-4 py-3 text-base text-yellow ring-1 ring-yellow/30">
            {t("vendor")}
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{t("whoTitle")}</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whoKeys.map((k, i) => {
              const Icon = whoIcons[i] ?? Factory;
              return (
                <li
                  key={k}
                  className="flex items-start gap-3 rounded-2xl border border-border bg-white p-5 soft-shadow"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green/10 text-green">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="pt-2 text-base font-semibold text-navy">
                    {t(`who.${k}`)}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="section-pad bg-surface pt-0">
        <div className="container-narrow">
          <h2 className="text-2xl font-bold text-navy sm:text-3xl">{t("whyTitle")}</h2>
          <ul className="mt-8 grid gap-6 md:grid-cols-2">
            {whyKeys.map((k) => (
              <li
                key={k}
                className="rounded-2xl border border-border bg-white p-6 soft-shadow"
              >
                <h3 className="text-xl font-semibold text-navy">
                  {t(`why.${k}.title`)}
                </h3>
                <p className="mt-2 text-muted">{t(`why.${k}.desc`)}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-narrow">
          <h2 className="text-3xl font-bold text-navy sm:text-4xl">
            {t("financeTitle")}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-muted">{t("financeIntro")}</p>

          <div className="mt-8 rounded-3xl border border-orange/30 bg-orange/10 p-6 soft-shadow">
            <h3 className="text-xl font-bold text-navy">{t("noCfaTitle")}</h3>
            <p className="mt-2 text-muted">{t("noCfaBody")}</p>
          </div>

          <h3 className="mt-12 text-2xl font-bold text-navy">{t("indiaTitle")}</h3>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {indiaKeys.map((k) => (
              <li
                key={k}
                className="rounded-2xl bg-white p-5 soft-shadow ring-1 ring-border"
              >
                <p className="font-semibold text-green">{t(`india.${k}.title`)}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`india.${k}.desc`)}
                </p>
              </li>
            ))}
          </ul>

          <h3 className="mt-12 text-2xl font-bold text-navy">{t("mhTitle")}</h3>
          <ul className="mt-6 space-y-4">
            {mhKeys.map((k) => (
              <li
                key={k}
                className="rounded-2xl border border-border bg-surface p-5"
              >
                <p className="font-semibold text-navy">{t(`mh.${k}.title`)}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t(`mh.${k}.desc`)}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-muted">{t("footnote")}</p>
        </div>
      </section>

      <section className="section-pad bg-surface">
        <div className="container-narrow">
          <h2 className="mb-8 text-center text-3xl font-bold text-navy">
            {t("processTitle")}
          </h2>
          <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {processKeys.map((k) => (
              <li
                key={k}
                className="rounded-2xl bg-white p-5 text-center soft-shadow"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green text-lg font-bold text-white">
                  {k}
                </span>
                <p className="mt-3 font-semibold text-navy">
                  {t(`process.${k}`)}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section-pad pt-0">
        <div className="container-narrow rounded-3xl bg-navy px-6 py-12 text-white soft-shadow-lg sm:px-12">
          <h2 className="text-3xl font-bold">{t("contactTitle")}</h2>
          <p className="mt-3 max-w-2xl text-lg text-white/80">{t("contactBody")}</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={mailto(t("email1"), "Commercial / Industrial solar inquiry")}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-navy soft-shadow hover:bg-yellow"
            >
              <Mail className="h-5 w-5" />
              {t("email1")}
            </a>
            <a
              href={mailto(t("email2"), "Commercial / Industrial solar inquiry")}
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 font-semibold text-white ring-1 ring-white/30 hover:bg-white/20"
            >
              <Mail className="h-5 w-5" />
              {t("email2")}
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">{t("orCall")}</p>
          <div className="mt-3 flex flex-wrap gap-3">
            <Button asChild size="lg" variant="whatsapp">
              <a
                href={whatsappUrl(tw("commercialMessage"))}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={telHref()}>
                <Phone className="h-4 w-4" />
                {siteConfig.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
