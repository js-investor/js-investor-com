import ivanPortrait from "@/assets/ivan-portrait.jpg";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section className="bg-cream min-h-screen relative">
    {/* Header */}
    <header className="flex items-center justify-between px-5 md:px-10 lg:px-16 py-5 md:py-6">
      <div className="flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-primary inline-block" />
        <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-foreground">
          JS Investor
        </span>
      </div>
      <button onClick={scrollToBooking} className="btn-pill">
        Rezervovať hovor
      </button>
    </header>

    {/* Hero Content */}
    <div className="px-5 md:px-10 lg:px-16 pb-16 md:pb-24 pt-8 md:pt-16 max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
        {/* Left Column */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow">Úvodný hovor · Bezplatne · Online</p>
          <h1 className="headline-hero mb-6 md:mb-8">
            Investuješ chaoticky?{" "}
            <span className="block">Alebo neinvestuješ vôbec?</span>
          </h1>
          <p className="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed mb-6">
            Za pár dní ti viem postaviť plán, ktorý dáva zmysel. Začneme jedným
            bezplatným hovorom.
          </p>
          <p className="font-serif italic text-base md:text-lg text-foreground/70 mb-8 leading-relaxed">
            Už 8 rokov staviam Slovákom finančné stratégie, ktoré fungujú aj v
            kríze. Celá spolupráca je pod dohľadom Národnej banky Slovenska.
          </p>

          <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
            <button onClick={scrollToBooking} className="btn-primary text-lg">
              Rezervovať úvodný hovor
            </button>
          </div>
          <button onClick={scrollToBooking} className="text-link text-sm mb-8 block">
            Vyplniť krátky dotazník (5 min) →
          </button>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm font-sans text-muted-foreground">
            {["Bezplatné", "Bez záväzku", "30 minút"].map((t) => (
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
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative">
            <img
              src={ivanPortrait}
              alt="Ivan Jasik — JS Investor"
              className="rounded-3xl w-full max-w-[420px] object-cover aspect-[3/4]"
              width={768}
              height={960}
            />
            <div className="absolute bottom-4 right-4 bg-cream/95 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-lg">
              <span className="font-sans text-sm font-semibold text-foreground">
                8+ rokov · 531 klientov
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
