"use client";

import { Menu, Phone, X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig, telHref, whatsappUrl } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/layout/language-switcher";

const links = [
  { href: "/", key: "home" as const },
  { href: "/subsidy", key: "subsidy" as const },
  { href: "/calculator", key: "calculator" as const },
  { href: "/gallery", key: "gallery" as const },
  { href: "/contact", key: "contact" as const },
];

export function Navbar() {
  const t = useTranslations("nav");
  const tw = useTranslations("whatsapp");
  const pathname = usePathname();
  const locale = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-white/95 backdrop-blur soft-shadow"
          : "bg-transparent"
      )}
    >
      <div className="container-narrow flex h-20 items-center justify-between gap-3 px-4 sm:px-6 md:h-24 lg:px-8">
        <Link href="/" aria-label={siteConfig.name}>
          <Logo className={cn(!solid && isHome && "[&_span]:text-white [&_span.text-muted]:text-white/70 [&_span.text-green]:text-yellow")} />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-3 py-2 text-base font-medium transition",
                  solid
                    ? active
                      ? "bg-surface text-green"
                      : "text-navy/80 hover:text-green"
                    : active
                      ? "bg-white/15 text-white"
                      : "text-white/85 hover:text-white"
                )}
              >
                {t(link.key)}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher light={!solid && isHome} />
          <Button
            asChild
            size="sm"
            variant={solid ? "secondary" : "outline"}
            className="hidden sm:inline-flex"
          >
            <a href={telHref()}>
              <Phone className="h-4 w-4" />
              {t("callNow")}
            </a>
          </Button>
          <Button asChild size="sm" className="hidden md:inline-flex">
            <a
              href={whatsappUrl(tw("consultationMessage"))}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("getConsultation")}
            </a>
          </Button>
          <button
            type="button"
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-xl lg:hidden",
              solid ? "bg-surface text-navy" : "bg-white/15 text-white"
            )}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-4 py-4 lg:hidden">
          <div className="container-narrow flex flex-col gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-medium",
                  pathname === link.href
                    ? "bg-surface text-green"
                    : "text-navy hover:bg-surface"
                )}
              >
                {t(link.key)}
              </Link>
            ))}
            <a
              href={telHref()}
              className="mt-2 rounded-xl bg-navy px-3 py-3 text-center font-semibold text-white"
            >
              {t("callNow")} · {siteConfig.phoneDisplay}
            </a>
            <p className="pt-2 text-center text-xs text-muted">
              {locale === "mr" ? "भाषा: मराठी" : "Language: English"}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
