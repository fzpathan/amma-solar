import { MapPin, Mail, Phone, User } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "@/components/contact/contact-form";
import { mapsUrl, siteConfig, telHref } from "@/lib/site";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("contactTitle"),
    description: t("contactDescription"),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("contactPage");
  const tc = await getTranslations("common");

  return (
    <section className="section-pad pt-32 md:pt-40">
      <div className="container-narrow">
        <div className="mb-10 max-w-2xl">
          <h1 className="text-4xl font-bold text-navy sm:text-5xl">
            {t("title")}
          </h1>
          <p className="mt-4 text-lg text-muted">{t("subtitle")}</p>
          <p className="mt-3 rounded-2xl bg-green/10 px-4 py-3 text-base font-medium text-navy">
            {t("vendorNote")}
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl bg-surface p-6 soft-shadow">
              <p className="text-sm uppercase tracking-wider text-muted">
                {t("person")}
              </p>
              <ul className="mt-4 space-y-5">
                {siteConfig.contacts.map((person) => (
                  <li
                    key={person.phone}
                    className="border-b border-border/70 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3">
                      <User className="h-5 w-5 text-green" />
                      <p className="text-lg font-semibold text-navy">
                        {person.name}
                      </p>
                    </div>
                    <a
                      href={telHref(person.phone)}
                      className="mt-2 flex items-center gap-3 text-navy hover:text-green"
                    >
                      <Phone className="h-5 w-5 text-green" />
                      <div>
                        <p className="text-sm uppercase tracking-wider text-muted">
                          {t("phoneLabel")}
                        </p>
                        <p className="text-lg font-semibold">
                          {person.phoneDisplay}
                        </p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-6 border-t border-border/70 pt-5">
                <p className="mb-2 text-sm uppercase tracking-wider text-muted">
                  {t("emailsLabel")}
                </p>
                {siteConfig.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="mt-2 flex items-center gap-3 text-navy hover:text-green"
                  >
                    <Mail className="h-5 w-5 shrink-0 text-green" />
                    <span className="break-all text-base font-semibold">
                      {email}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-semibold text-navy">
                {t("addressLabel")}
              </h2>
              <ul className="space-y-4">
                {siteConfig.addresses.map((addr) => (
                  <li
                    key={addr.id}
                    className="flex gap-3 rounded-2xl border border-border bg-white p-4 soft-shadow"
                  >
                    <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-green" />
                    <div>
                      <p className="text-base text-navy">{addr.line}</p>
                      <a
                        href={mapsUrl(addr.mapsQuery)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block text-base font-semibold text-green hover:underline"
                      >
                        {tc("openMaps")}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="overflow-hidden rounded-3xl soft-shadow">
              <iframe
                title="Amma Solar map"
                src="https://maps.google.com/maps?q=Ashoka%20Marg%20Nashik%20422006&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
