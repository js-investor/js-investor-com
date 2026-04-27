import AnimatedSection from "@/components/AnimatedSection";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const steps = [
  {
    num: "01",
    title: "Pýtam sa, ty hovoríš",
    body: "Prvých 15 minút sa pýtam ja. Aká je tvoja aktuálna situácia, čo už máš naakumulované, kam smeruješ. Bez hodnotenia, bez tlaku.",
  },
  {
    num: "02",
    title: "Otvorene odpovedám",
    body: "Druhých 15 minút hovorím ja. Poviem ti čo by som robil na tvojom mieste, kde vidím priestor, a či ti viem reálne pomôcť. Aj keď odpoveď je nie.",
  },
  {
    num: "03",
    title: "Žiadny záväzok",
    body: "Po hovore nemusíš nič podpisovať. Ak si to chceš premyslieť, premyslíš si. Ak chceme pokračovať, dohodneme ďalší krok. Šetríme tvoj aj môj čas.",
  },
];

type UvodnyHovorSectionProps = {
  ctaLabel?: string;
};

const UvodnyHovorSection = ({ ctaLabel = "Rezervovať úvodný hovor" }: UvodnyHovorSectionProps) => (
  <section id="prvy-krok" className="section-cream section-padding relative overflow-hidden scroll-mt-24">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Prvý krok</p>
          <h2 className="headline-serif">
            Ale <span className="text-primary font-bold">najprv potrebujeme zistiť,</span>{" "}
            či ti vôbec viem pomôcť.
          </h2>
          <p className="sub-headline">
            Predtým než ti niečo sľúbim, potrebujem rozumieť tvojej situácii.
            Preto <strong>všetko začína jedným bezplatným úvodným hovorom,</strong> bez nátlaku,
            bez záväzku, bez predaja.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.1}>
            <div className="text-center md:text-left card-glass-cream !bg-transparent !border-0 !shadow-none !p-0">
              <p className="[font-family:var(--font-serif)] text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4 bg-gradient-to-b from-primary/95 to-primary/45 bg-clip-text text-transparent">
                {s.num}
              </p>
              <p className="font-sans font-semibold text-xl md:text-2xl text-foreground mb-3">
                {s.title}
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                {s.num === "01" && (
                  <>
                    Prvých 15 minút sa pýtam ja. <strong>Aká je tvoja aktuálna situácia,</strong>{" "}
                    čo už máš naakumulované, kam smeruješ. Bez hodnotenia, bez tlaku.
                  </>
                )}
                {s.num === "02" && (
                  <>
                    Druhých 15 minút hovorím ja. Poviem ti čo by som robil na tvojom
                    mieste, <strong>kde vidím priestor, a či ti viem reálne pomôcť.</strong>{" "}
                    Aj keď odpoveď je nie.
                  </>
                )}
                {s.num === "03" && (
                  <>
                    <strong>Po hovore nemusíš nič podpisovať</strong>. Ak si to chceš
                    premyslieť, premyslíš si. Ak chceme pokračovať, dohodneme ďalší
                    krok. Šetríme tvoj aj môj čas.
                  </>
                )}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="text-center">
          <button onClick={scrollToBooking} className="btn-primary text-lg mb-4">
            {ctaLabel}
          </button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default UvodnyHovorSection;
