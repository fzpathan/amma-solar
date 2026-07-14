"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { cn } from "@/lib/utils";

type Category = "all" | "residential" | "installation" | "beforeAfter";

const items: { src: string; category: Exclude<Category, "all">; alt: string }[] =
  [
    {
      src: "/gallery/residential-1.png",
      category: "residential",
      alt: "AMMA SOLAR trust flyer / install visual",
    },
    {
      src: "/gallery/installation-1.png",
      category: "installation",
      alt: "PM Surya Ghar campaign visual",
    },
    {
      src: "/gallery/residential-2.png",
      category: "residential",
      alt: "Solar subsidy campaign home visual",
    },
    {
      src: "/images/flyer-trust.png",
      category: "beforeAfter",
      alt: "Customer trust campaign",
    },
  ];

export function GalleryGrid() {
  const t = useTranslations("galleryPage");
  const [filter, setFilter] = useState<Category>("all");

  const filters: Category[] = ["all", "residential", "installation", "beforeAfter"];

  const visible = useMemo(
    () =>
      filter === "all" ? items : items.filter((i) => i.category === filter),
    [filter]
  );

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
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item) => (
            <div
              key={`${item.src}-${item.category}`}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl soft-shadow"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition duration-500 hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
