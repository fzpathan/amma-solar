import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return { title: t("privacyTitle") };
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("privacy");

  return (
    <section className="section-pad page-top">
      <div className="container-narrow max-w-3xl">
        <h1 className="text-3xl font-bold text-navy sm:text-4xl">{t("title")}</h1>
        <p className="mt-2 text-sm text-muted">{t("updated")}</p>
        <p className="mt-8 leading-relaxed text-navy/80">{t("body")}</p>
      </div>
    </section>
  );
}
