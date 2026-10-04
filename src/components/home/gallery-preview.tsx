import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { galleryImages } from "@/lib/gallery";
import { Button } from "@/components/ui/button";

export async function GalleryPreview() {
  const t = await getTranslations("galleryPreview");

  return (
    <section className="section-pad bg-surface">
      <div className="container-narrow">
        <div className="mb-8 flex flex-col items-stretch justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-2 max-w-xl text-muted">{t("subtitle")}</p>
          </div>
          <Button asChild variant="secondary" className="w-full sm:w-auto">
            <Link href="/gallery">{t("cta")}</Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          {galleryImages.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl soft-shadow"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
