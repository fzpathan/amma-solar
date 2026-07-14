import { getTranslations } from "next-intl/server";
import { telHref, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";

export async function CtaBanner() {
  const t = await getTranslations("ctaBanner");
  const tw = await getTranslations("whatsapp");

  return (
    <section className="section-pad pt-0">
      <div className="container-narrow overflow-hidden rounded-3xl bg-gradient-to-br from-green to-green-dark px-6 py-12 text-center text-white soft-shadow-lg sm:px-12">
        <h2 className="text-3xl font-bold sm:text-4xl">{t("title")}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/90">{t("body")}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" variant="soft">
            <a
              href={whatsappUrl(tw("surveyMessage"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("primary")}
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/50"
          >
            <a href={telHref()}>{t("secondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
