import { Building2, Factory } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

export async function CommercialTeaser() {
  const t = await getTranslations("commercialTeaser");

  return (
    <section className="section-pad bg-navy text-white">
      <div className="container-narrow grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-yellow">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">{t("title")}</h2>
          <p className="mt-4 max-w-xl text-lg text-white/80">{t("body")}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href="/commercial">{t("cta")}</Link>
          </Button>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 soft-shadow">
            <Building2 className="h-8 w-8 text-yellow" />
            <p className="mt-4 text-xl font-semibold">Commercial</p>
          </div>
          <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15 soft-shadow">
            <Factory className="h-8 w-8 text-yellow" />
            <p className="mt-4 text-xl font-semibold">Industrial</p>
          </div>
        </div>
      </div>
    </section>
  );
}
