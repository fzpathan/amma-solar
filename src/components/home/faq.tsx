import { getTranslations } from "next-intl/server";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export async function FaqSection({
  namespace = "faq",
}: {
  namespace?: "faq" | "subsidyPage";
}) {
  const t = await getTranslations(namespace === "faq" ? "faq" : "faq");
  const keys = ["1", "2", "3", "4"] as const;

  return (
    <section className="section-pad" id="faq">
      <div className="container-narrow max-w-3xl">
        <h2 className="mb-6 text-center text-2xl font-bold text-navy sm:mb-8 sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl bg-white px-3 soft-shadow sm:px-4"
        >
          {keys.map((k) => (
            <AccordionItem key={k} value={k}>
              <AccordionTrigger className="text-sm sm:text-base">
                {t(`items.${k}.q`)}
              </AccordionTrigger>
              <AccordionContent>{t(`items.${k}.a`)}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
