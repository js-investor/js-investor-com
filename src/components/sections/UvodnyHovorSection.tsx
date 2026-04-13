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

const UvodnyHovorSection = () => (
  <section className="section-cream section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Prvý krok</p>
          <h2 className="headline-serif">
            Ale najprv potrebujeme zistiť, či ti vôbec viem pomôcť.
          </h2>
          <p className="sub-headline">
            Predtým než ti niečo sľúbim, potrebujem rozumieť tvojej situácii.
            Preto všetko začína jedným bezplatným úvodným hovorom — bez nátlaku,
            bez záväzku, bez predaja.
          </p>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
        {steps.map((s, i) => (
          <AnimatedSection key={s.num} delay={i * 0.1}>
            <div className="text-center md:text-left card-glass-cream !bg-transparent !border-0 !shadow-none !p-0">
              <p className="font-serif text-5xl md:text-6xl lg:text-7xl font-semibold futuristic-num mb-4">
                {s.num}
              </p>
              <p className="font-sans font-semibold text-lg text-foreground mb-3">
                {s.title}
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                {s.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="text-center">
          <button onClick={scrollToBooking} className="btn-primary text-lg mb-4">
            Rezervovať úvodný hovor
          </button>
          <br />
          <button onClick={scrollToBooking} className="text-link text-sm">
            Alebo vyplň krátky dotazník (5 min) →
          </button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default UvodnyHovorSection;
