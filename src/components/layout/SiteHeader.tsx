import brandLogo from "@/assets/images/js-investor-logo.png";
import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";

type HeaderItem = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type SiteHeaderProps = {
  items?: HeaderItem[];
  ctaLabel?: string;
  ctaHref?: string;
  /** Voliteľná ikona vľavo od textu CTA (napr. WhatsApp). */
  ctaIcon?: ReactNode;
  ctaOnClick?: () => void;
  secondaryCtaLabel?: string;
  secondaryCtaHref?: string;
  secondaryCtaOnClick?: () => void;
  /** Len logo (domovský odkaz), bez navigácie, CTA a mobilného menu. */
  logoOnly?: boolean;
};

const defaultItems: HeaderItem[] = [
  { label: "Lorem" },
  { label: "Ipsum" },
  { label: "Dolor" },
  { label: "Sit" },
  { label: "Amet" },
];

const SiteHeader = ({
  items = defaultItems,
  ctaLabel = "Lorem ipsum",
  ctaHref,
  ctaIcon,
  ctaOnClick,
  secondaryCtaLabel,
  secondaryCtaHref,
  secondaryCtaOnClick,
  logoOnly = false,
}: SiteHeaderProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (logoOnly) {
    return (
      <header
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-5 md:px-10 lg:px-12 xl:px-16 py-4 md:py-[0.8rem] backdrop-blur-md border-b border-primary/10"
        style={{ backgroundColor: "rgba(255, 249, 245, 0.9)" }}
      >
        <a href="/" className="flex items-center shrink-0">
          <img
            src={brandLogo}
            alt="JS Investor logo"
            className="h-8 md:h-12 w-auto max-w-none min-w-[102px] md:min-w-[153px] shrink-0 object-contain"
          />
        </a>
      </header>
    );
  }

  const handleItemClick = (item: HeaderItem) => {
    item.onClick?.();
    setMobileMenuOpen(false);
  };

  const ctaOpensNewTab = Boolean(ctaHref && /^https?:\/\//i.test(ctaHref));

  const ctaButton = ctaHref ? (
    <a
      href={ctaHref}
      {...(ctaOpensNewTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`btn-pill menu-cta-pill whitespace-nowrap justify-self-center xl:justify-self-auto${ctaIcon ? " gap-2" : ""}`}
    >
      {ctaIcon}
      {ctaLabel}
    </a>
  ) : (
    <button
      type="button"
      onClick={ctaOnClick}
      className="btn-pill menu-cta-pill whitespace-nowrap justify-self-center xl:justify-self-auto"
    >
      {ctaLabel}
    </button>
  );

  const secondaryCtaButton = secondaryCtaLabel ? (
    secondaryCtaHref ? (
      <a
        href={secondaryCtaHref}
        className="hidden md:inline-flex h-11 px-5 rounded-full border border-primary/30 bg-transparent font-sans text-sm font-semibold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
      >
        {secondaryCtaLabel}
      </a>
    ) : (
      <button
        type="button"
        onClick={secondaryCtaOnClick}
        className="hidden md:inline-flex h-11 px-5 rounded-full border border-primary/30 bg-transparent font-sans text-sm font-semibold text-primary hover:bg-primary/5 transition-colors whitespace-nowrap"
      >
        {secondaryCtaLabel}
      </button>
    )
  ) : null;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_1fr_auto] items-center gap-3 px-5 md:px-10 lg:px-12 xl:px-16 py-4 md:py-[0.8rem] backdrop-blur-md border-b border-primary/10"
      style={{ backgroundColor: "rgba(255, 249, 245, 0.9)" }}
    >
      <a href="/" className="flex items-center shrink-0">
        <img
          src={brandLogo}
          alt="JS Investor logo"
          className="h-8 md:h-12 w-auto max-w-none min-w-[102px] md:min-w-[153px] shrink-0 object-contain"
        />
      </a>

      <nav className="hidden xl:flex items-center justify-center gap-8 2xl:gap-10">
        {items.map((item) =>
          item.href ? (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ) : (
            <button
              key={item.label}
              type="button"
              onClick={() => item.onClick?.()}
              className="whitespace-nowrap font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          )
        )}
      </nav>

      <div className="xl:hidden justify-self-center">{ctaButton}</div>

      <div className="hidden xl:flex items-center gap-3 justify-self-end">
        {secondaryCtaButton}
        {ctaButton}
      </div>

      <button
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label={mobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
        aria-expanded={mobileMenuOpen}
        className="xl:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-primary/20 text-primary justify-self-end"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {mobileMenuOpen ? (
        <div
          className="xl:hidden absolute top-full left-0 right-0 border-t border-primary/10 border-b border-primary/10 px-5 py-3 shadow-[0_14px_26px_rgba(0,0,0,0.08)]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
        >
          <div className="flex flex-col">
            {items.map((item, index) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground ${
                    index < items.length - 1 ? "border-b border-primary/10" : ""
                  }`}
                >
                  {item.label}
                </a>
              ) : (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleItemClick(item)}
                  className={`w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground ${
                    index < items.length - 1 ? "border-b border-primary/10" : ""
                  }`}
                >
                  {item.label}
                </button>
              )
            )}
          </div>
          {secondaryCtaLabel ? (
            secondaryCtaHref ? (
              <a
                href={secondaryCtaHref}
                onClick={() => setMobileMenuOpen(false)}
                className="mt-3 block w-full text-center rounded-xl border border-primary/25 px-4 py-3 font-sans text-base font-semibold text-primary"
              >
                {secondaryCtaLabel}
              </a>
            ) : (
              <button
                type="button"
                onClick={() => {
                  secondaryCtaOnClick?.();
                  setMobileMenuOpen(false);
                }}
                className="mt-3 block w-full rounded-xl border border-primary/25 px-4 py-3 font-sans text-base font-semibold text-primary"
              >
                {secondaryCtaLabel}
              </button>
            )
          ) : null}
        </div>
      ) : null}
    </header>
  );
};

export default SiteHeader;
