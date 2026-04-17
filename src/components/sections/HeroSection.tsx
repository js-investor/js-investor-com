import ivanKniha from "@/assets/images/js-investor-ivan-kniha.jpg";
import brandLogo from "@/assets/images/js-investor-logo.png";
import { Check, Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuSectionClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
  <section className="relative overflow-hidden" style={{ backgroundColor: "#FFF9F5" }}>
    {/* Dot grid background */}
    <div className="absolute inset-0 bg-dot-grid opacity-50" />

    {/* Decorative gradient orbs */}
    <div className="absolute top-20 right-[20%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full bg-forest-glow/5 blur-[80px] pointer-events-none" />

    {/* Header */}
    <header
      className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_1fr_auto] items-center gap-3 px-5 md:px-10 lg:px-16 py-4 md:py-[0.8rem] backdrop-blur-md border-b border-primary/10"
      style={{ backgroundColor: "rgba(255, 249, 245, 0.9)" }}
    >
      <a href="/" className="flex items-center">
        <img
          src={brandLogo}
          alt="JS Investor logo"
          className="h-10 md:h-12 w-auto"
        />
      </a>
      <nav className="hidden md:flex items-center justify-center gap-6 lg:gap-8">
        <button
          type="button"
          onClick={() => scrollToSection("prvy-krok")}
          className="font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Prvý krok
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("vysledky")}
          className="font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Výsledky klientov
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("co-dostanes")}
          className="font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Čo dostaneš
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("recenzie")}
          className="font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Skúsenosti klientov
        </button>
        <button
          type="button"
          onClick={() => scrollToSection("faq")}
          className="font-sans text-sm lg:text-base font-medium text-foreground/80 hover:text-primary transition-colors"
        >
          Časté otázky
        </button>
      </nav>
      <button onClick={scrollToBooking} className="btn-pill menu-cta-pill justify-self-center md:justify-self-auto">
        Rezervovať hovor
      </button>
      <button
        type="button"
        onClick={() => setMobileMenuOpen((prev) => !prev)}
        aria-label={mobileMenuOpen ? "Zavrieť menu" : "Otvoriť menu"}
        aria-expanded={mobileMenuOpen}
        className="md:hidden h-10 w-10 inline-flex items-center justify-center rounded-full border border-primary/20 text-primary justify-self-end"
      >
        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {mobileMenuOpen ? (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t border-primary/10 border-b border-primary/10 px-5 py-3 shadow-[0_14px_26px_rgba(0,0,0,0.08)]"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.98)" }}
        >
          <div className="flex flex-col">
            <button
              type="button"
              onClick={() => handleMenuSectionClick("prvy-krok")}
              className="w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground hover:bg-primary hover:text-white transition-colors border-b border-primary/10"
            >
              Prvý krok
            </button>
            <button
              type="button"
              onClick={() => handleMenuSectionClick("vysledky")}
              className="w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground hover:bg-primary hover:text-white transition-colors border-b border-primary/10"
            >
              Výsledky klientov
            </button>
            <button
              type="button"
              onClick={() => handleMenuSectionClick("co-dostanes")}
              className="w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground hover:bg-primary hover:text-white transition-colors border-b border-primary/10"
            >
              Čo dostaneš
            </button>
            <button
              type="button"
              onClick={() => handleMenuSectionClick("recenzie")}
              className="w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground hover:bg-primary hover:text-white transition-colors border-b border-primary/10"
            >
              Skúsenosti klientov
            </button>
            <button
              type="button"
              onClick={() => handleMenuSectionClick("faq")}
              className="w-full text-center px-4 py-3.5 rounded-xl font-sans text-base font-medium text-foreground hover:bg-primary hover:text-white transition-colors"
            >
              Časté otázky
            </button>
          </div>
        </div>
      ) : null}
    </header>

    {/* Hero Content */}
    <div className="relative z-10 px-5 md:px-10 lg:px-16 pb-[4rem] pt-[8rem] max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,60%)_minmax(0,40%)] gap-10 lg:gap-8 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="lg:pr-4"
        >
          <h1 className="headline-hero !text-[2.5rem] sm:!text-[3.25rem] md:!text-[3.8rem] lg:!text-6xl xl:!text-6xl mb-6 md:mb-8">
            Investuješ <span className="italic text-primary">chaoticky</span>
            <br className="hidden lg:block" />
            {" "}
            <span className="lg:mt-1 lg:inline-block">
              alebo <span className="italic text-primary">neinvestuješ vôbec?</span>
            </span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed mb-6">
            Do 14 dní ti postavím <strong>plán, ktorý dáva zmysel.</strong> Začneme úvodným
            bezplatným hovorom.
          </p>
          <p className="font-serif italic text-base md:text-lg text-foreground/70 mb-8 leading-relaxed">
            Už 8 rokov staviam Slovákom <strong>finančné stratégie, ktoré fungujú aj v
            kríze.</strong> Celá spolupráca je pod dohľadom Národnej banky Slovenska.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
            <button onClick={scrollToBooking} className="btn-primary text-lg">
              Rezervovať úvodný hovor
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-sans text-muted-foreground">
            {["Bezplatný úvodný hovor", "Online 30 minút", "Bez záväzku a predaja"].map((t) => (
              <span key={t} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary" />
                {t}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right Column */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative flex justify-center"
        >
          <div className="relative w-full max-w-[420px]">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-black/8 blur-xl" />
              <img
                src={ivanKniha}
                alt="Ivan Jašík s knihou"
                className="relative rounded-3xl w-full object-cover aspect-[4/5] ring-1 ring-black/20"
                width={768}
                height={960}
                loading="eager"
                decoding="async"
              />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-4 right-4 card-glass rounded-2xl px-4 py-3"
              >
                <span className="font-sans text-sm font-semibold text-foreground">
                  8+ rokov · 531 klientov · Licencia NBS
                </span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default HeroSection;
