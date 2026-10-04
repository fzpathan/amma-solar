import { getTranslations } from "next-intl/server";
import { telHref, whatsappUrl } from "@/lib/site";
import { Button } from "@/components/ui/button";

export async function CtaBanner() {
  const t = await getTranslations("ctaBanner");
  const tw = await getTranslations("whatsapp");

  return (
    <section className="section-pad pt-0">
      <div className="container-narrow overflow-hidden rounded-2xl bg-gradient-to-br from-green to-green-dark px-5 py-10 text-center text-white soft-shadow-lg sm:rounded-3xl sm:px-12 sm:py-12">
        <h2 className="text-2xl font-bold sm:text-3xl md:text-4xl">
          {t("title")}
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-sm text-white/90 sm:text-base">
          {t("body")}
        </p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap">
          <Button asChild size="lg" variant="soft" className="w-full sm:w-auto">
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
            className="w-full border-white/50 sm:w-auto"
          >
            <a href={telHref()}>{t("secondary")}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
