import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

const previews = [
  { src: "/gallery/residential-1.png", alt: "AMMA SOLAR residential" },
  { src: "/gallery/installation-1.png", alt: "AMMA SOLAR subsidy campaign" },
  { src: "/gallery/residential-2.png", alt: "AMMA SOLAR solar home" },
];

export async function GalleryPreview() {
  const t = await getTranslations("galleryPreview");

  return (
    <section className="section-pad bg-surface">
      <div className="container-narrow">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">
              {t("title")}
            </h2>
            <p className="mt-2 max-w-xl text-muted">{t("subtitle")}</p>
          </div>
          <Button asChild variant="secondary">
            <Link href="/gallery">{t("cta")}</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {previews.map((img) => (
            <div
              key={img.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl soft-shadow"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
