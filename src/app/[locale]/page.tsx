import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import { BenefitsSection } from "@/components/home/benefits";
import { CommercialTeaser } from "@/components/home/commercial-teaser";
import { CtaBanner } from "@/components/home/cta-banner";
import { FaqSection } from "@/components/home/faq";
import { GalleryPreview } from "@/components/home/gallery-preview";
import { HeroSection } from "@/components/home/hero";
import { ProcessTimeline } from "@/components/home/process-timeline";
import { SubsidyTeaser } from "@/components/home/subsidy-teaser";
import { TrustStrip } from "@/components/home/trust-strip";
import { WhyUsSection } from "@/components/home/why-us";
import { FaqJsonLd } from "@/components/shared/faq-json-ld";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("homeTitle"),
    description: t("defaultDescription"),
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <FaqJsonLd />
      <HeroSection />
      <TrustStrip />
      <BenefitsSection />
      <SubsidyTeaser />
      <CommercialTeaser />
      <ProcessTimeline />
      <WhyUsSection />
      <GalleryPreview />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
