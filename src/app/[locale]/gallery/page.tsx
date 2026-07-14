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
    <section className="section-pad pt-32 md:pt-40">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-4xl font-bold text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-muted">{t("subtitle")}</p>
        </div>
        <GalleryGrid />
      </div>
    </section>
  );
}
