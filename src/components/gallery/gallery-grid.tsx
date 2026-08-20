"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { galleryImages } from "@/lib/gallery";
import { cn } from "@/lib/utils";

type Category = "all" | "residential" | "installation" | "beforeAfter";

export function GalleryGrid() {
  const t = useTranslations("galleryPage");
  const [filter, setFilter] = useState<Category>("all");

  const filters: Category[] = ["all", "residential", "installation"];

  const visible = useMemo(() => {
    if (filter === "all") return galleryImages;
    return galleryImages.filter((i) => i.category === filter);
  }, [filter]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={cn(
              "rounded-full px-4 py-2 text-sm font-semibold transition soft-shadow",
              filter === f
                ? "bg-green text-white"
                : "bg-white text-navy hover:bg-surface"
            )}
          >
            {t(`filters.${f}`)}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-muted">{t("empty")}</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {visible.map((item) => (
            <div
              key={item.src}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl soft-shadow"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width:768px) 100vw, 50vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
