import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const stories = [
  {
    label: "Začiatočník s chaosom",
    name: "Samuel",
    meta: "Štátny zamestnanec · Spolupráca 3 roky",
    quote: "Mal som peniaze po troche v banke, v jednej appke, v krypte. Nevedel som čo s tým.",
    body: "Po úvodnom hovore sme jeho prostriedky konsolidovali do jedného ETF plánu a nastavili pravidelné investovanie.",
    highlight: "Portfólio narástlo o +18 427 € za 3 roky",
  },
  {
    label: "Podnikateľ s väčším kapitálom",
    name: "Andrej",
    meta: "Podnikateľ · Spolupráca 2 roky",
    quote: "Mal som 50 000 € na účte a bál som sa, že urobím chybu, ak to niekam dám.",
    body: "Postavili sme plán ktorý rešpektoval jeho averziu k riziku.",
    highlight: "Portfólio pridalo +20 743 € za 2 roky",
  },
  {
    label: "Dlhoročná spolupráca",
    name: "Peter",
    meta: "Podnikateľ · Spolupráca 3 roky",
    quote: "Chcel som investovať postupne, ako mi firma uvoľní cashflow.",
    body: "Za 3 roky postupne vložil 119 000 €. Dôležitejšie než číslo — má konečne pokoj v hlave.",
    highlight: "+59 898 € k vkladom",
  },
];

const VysledkySection = () => (
  <section className="section-white section-padding relative overflow-hidden">
    <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full bg-forest-glow/3 blur-[100px] pointer-events-none" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Reálne príbehy"
          headline="Toto sú výsledky ľudí, ktorým som postavil plán."
          subHeadline="Nikto z nich nemal všetko vyriešené. Každý prišiel s vlastnou situáciou — chaos, banka, žiadny plán. Spolu sme to rozmotali."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stories.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.1}>
            <div className="card-glass-cream h-full flex flex-col">
              <p className="eyebrow !mb-3 !text-xs">{s.label}</p>
              <p className="font-sans font-bold text-xl text-foreground">{s.name}</p>
              <p className="font-sans text-xs text-muted-foreground mb-4">{s.meta}</p>
              <p className="font-serif italic text-base text-foreground/70 mb-4 leading-relaxed">
                „{s.quote}"
              </p>
              <p className="font-sans text-sm text-muted-foreground leading-relaxed mb-6 flex-1">
                {s.body}
              </p>
              <div className="rounded-xl px-4 py-3 bg-primary/10 border border-primary/20 glow-border">
                <p className="font-sans font-semibold stat-gradient text-sm">
                  {s.highlight}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto mt-10">
          Uvedené výsledky sú individuálne prípady klientov z obdobia 2021-2024,
          ktoré bolo charakteristické silným rastom globálnych akciových trhov. Nie
          sú reprezentatívnou vzorkou všetkých klientov a nezaručujú podobné
          výsledky v budúcnosti. Minulá výkonnosť nie je zárukou budúcich výnosov.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default VysledkySection;
