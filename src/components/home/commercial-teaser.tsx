import { Building2, Factory } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function CommercialTeaser() {
  const t = await getTranslations("commercialTeaser");

  return (
    <section className="section-pad">
      <div className="container-narrow grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-green sm:text-sm">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-navy sm:text-3xl md:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 max-w-xl text-base text-muted sm:text-lg">
            {t("body")}
          </p>
          <Button asChild size="lg" className="mt-7 w-full sm:mt-8 sm:w-auto">
            <Link href="/commercial">{t("cta")}</Link>
          </Button>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 sm:gap-4">
          <div className="rounded-2xl border border-border bg-white p-5 soft-shadow sm:p-6">
            <Building2 className="h-7 w-7 text-green sm:h-8 sm:w-8" />
            <p className="mt-3 text-lg font-semibold text-navy sm:mt-4 sm:text-xl">
              Commercial
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-white p-5 soft-shadow sm:p-6">
            <Factory className="h-7 w-7 text-green sm:h-8 sm:w-8" />
            <p className="mt-3 text-lg font-semibold text-navy sm:mt-4 sm:text-xl">
              Industrial
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
