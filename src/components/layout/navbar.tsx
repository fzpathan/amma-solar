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
  { href: "/commercial", key: "commercial" as const },
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
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const solid = scrolled || !isHome || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-white/95 backdrop-blur-md soft-shadow"
          : "bg-transparent"
      )}
      style={{ paddingTop: "var(--safe-top)" }}
    >
      <div className="container-narrow flex h-[var(--header-h)] items-center justify-between gap-2 px-4 sm:gap-3 sm:px-6 lg:px-8">
        <Link href="/" aria-label={siteConfig.name} className="min-w-0 shrink">
          <Logo
            className={cn(
              !solid &&
                isHome &&
                "[&_span]:text-white [&_span.text-muted]:text-white/70 [&_span.text-green]:text-yellow"
            )}
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-lg px-2.5 py-2 text-sm font-medium transition lg:px-3 lg:text-base",
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

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-2">
          <LanguageSwitcher light={!solid && isHome} />
          <Button
            asChild
            size="sm"
            variant={solid ? "secondary" : "outline"}
            className="hidden sm:inline-flex"
          >
            <a href={telHref()}>
              <Phone className="h-4 w-4" />
              <span className="hidden md:inline">{t("callNow")}</span>
            </a>
          </Button>
          <Button asChild size="sm" className="hidden lg:inline-flex">
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
              "inline-flex h-10 w-10 items-center justify-center rounded-xl xl:hidden",
              solid ? "bg-surface text-navy" : "bg-white/15 text-white"
            )}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="max-h-[calc(100svh-var(--header-h)-var(--safe-top))] overflow-y-auto border-t border-border bg-white px-4 py-4 xl:hidden">
          <div className="container-narrow flex flex-col gap-1 pb-[calc(5rem+var(--safe-bottom))]">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-xl px-3 py-3.5 text-base font-medium transition active:scale-[0.99]",
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
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-navy px-3 py-3.5 text-center font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {t("callNow")} · {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappUrl(tw("consultationMessage"))}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-green px-3 py-3.5 text-center font-semibold text-white"
            >
              {t("getConsultation")}
            </a>
            <p className="pt-3 text-center text-xs text-muted">
              {locale === "mr" ? "भाषा: मराठी" : "Language: English"}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
