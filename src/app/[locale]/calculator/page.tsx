import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SolarCalculator } from "@/components/calculator/solar-calculator";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("calculatorTitle"),
    description: t("calculatorDescription"),
  };
}

export default async function CalculatorPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("calculatorPage");

  return (
    <section className="section-pad page-top">
      <div className="container-narrow">
        <div className="mx-auto mb-8 max-w-2xl text-center sm:mb-10">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-muted sm:mt-4">{t("subtitle")}</p>
        </div>
        <SolarCalculator />
      </div>
    </section>
  );
}
