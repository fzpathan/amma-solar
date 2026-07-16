import { MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { mapsUrl, siteConfig, telHref } from "@/lib/site";
import { Logo } from "@/components/shared/logo";

export async function Footer() {
  const t = await getTranslations("footer");
  const tn = await getTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-navy-deep text-white">
      <div className="container-narrow section-pad grid gap-10 md:grid-cols-2 lg:grid-cols-4 md:py-16">
        <div className="space-y-4">
          <Logo className="[&_span]:text-white [&_span.text-green]:text-yellow [&_span.text-muted]:text-white/60" />
          <p className="text-sm text-white/70">{t("tagline")}</p>
          <p className="text-sm font-medium text-yellow">{t("slogan")}</p>
          <p className="text-sm text-white/65">{t("vendor")}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            {t("quickLinks")}
          </h3>
          <ul className="space-y-2 text-sm">
            {(
              [
                ["/", "home"],
                ["/subsidy", "subsidy"],
                ["/commercial", "commercial"],
                ["/calculator", "calculator"],
                ["/gallery", "gallery"],
                ["/contact", "contact"],
              ] as const
            ).map(([href, key]) => (
              <li key={href}>
                <Link href={href} className="text-white/80 hover:text-yellow">
                  {tn(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            {t("contact")}
          </h3>
          <p className="text-sm font-semibold">{siteConfig.contactPerson}</p>
          <a
            href={telHref()}
            className="mt-2 inline-flex items-center gap-2 text-sm text-yellow hover:underline"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-4 text-xs uppercase tracking-wider text-white/50">
            {t("hours")}
          </p>
          <p className="mt-1 text-sm text-white/80">{t("hoursValue")}</p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/50">
            {t("addresses")}
          </h3>
          <ul className="space-y-4">
            {siteConfig.addresses.map((addr) => (
              <li key={addr.id} className="flex gap-2 text-sm text-white/75">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-yellow" />
                <a
                  href={mapsUrl(addr.mapsQuery)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-yellow"
                >
                  {addr.line}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-narrow flex flex-col gap-3 px-4 py-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>{t("copyright", { year })}</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white">
              {t("privacy")}
            </Link>
            <Link href="/terms" className="hover:text-white">
              {t("terms")}
            </Link>
          </div>
        </div>
        <p className="container-narrow px-4 pb-6 text-[11px] leading-relaxed text-white/40 sm:px-6 lg:px-8">
          {t("policyNote")}
        </p>
      </div>
    </footer>
  );
}
