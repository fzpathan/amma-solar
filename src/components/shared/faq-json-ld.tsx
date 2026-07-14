import { getTranslations } from "next-intl/server";

export async function FaqJsonLd() {
  const t = await getTranslations("faq");
  const keys = ["1", "2", "3", "4"] as const;
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: keys.map((k) => ({
      "@type": "Question",
      name: t(`items.${k}.q`),
      acceptedAnswer: {
        "@type": "Answer",
        text: t(`items.${k}.a`),
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
