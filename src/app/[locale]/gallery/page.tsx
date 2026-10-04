import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { GalleryGrid } from "@/components/gallery/gallery-grid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("galleryTitle"),
    description: t("galleryDescription"),
  };
}

export default async function GalleryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("galleryPage");

  return (
    <section className="section-pad page-top">
      <div className="container-narrow">
        <div className="mb-8 max-w-2xl sm:mb-10">
          <h1 className="text-3xl font-bold text-navy sm:text-4xl md:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-3 text-muted sm:mt-4">{t("subtitle")}</p>
        </div>
        <GalleryGrid />
      </div>
    </section>
  );
}
