import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { Check } from "lucide-react";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const stories = [
  {
    label: "Začiatočník s chaosom",
    name: "Samuel",
    meta: "Štátny zamestnanec · Spolupráca 3 roky",
    quote: "Mal som peniaze po troche v banke, v jednej appke, v krypte. Nevedel som čo s tým.",
    body: "Po úvodnom hovore sme jeho prostriedky konsolidovali do jedného ETF plánu a nastavili pravidelné investovanie.",
    highlightAmount: "+18 427 €",
    highlightLabel: "Portfólio narástlo za 3 roky",
    trend: [7, 9, 8, 11, 13, 12, 14, 16, 17, 20, 23, 27],
  },
  {
    label: "Podnikateľ s väčším kapitálom",
    name: "Andrej",
    meta: "Podnikateľ · Spolupráca 2 roky",
    quote: "Mal som 50 000 € na účte a bál som sa, že urobím chybu, ak to niekam dám.",
    body: "Postavili sme plán ktorý rešpektoval jeho averziu k riziku.",
    highlightAmount: "+20 743 €",
    highlightLabel: "Portfólio pridalo za 2 roky",
    trend: [11, 12, 13, 14, 13, 14, 15, 16, 17, 18, 20, 24],
  },
  {
    label: "Dlhoročná spolupráca",
    name: "Peter",
    meta: "Podnikateľ · Spolupráca 3 roky",
    quote: "Chcel som investovať postupne, ako mi firma uvoľní cashflow.",
    body: "Za 3 roky postupne vložil 119 000 €. Dôležitejšie než číslo — má konečne pokoj v hlave.",
    highlightAmount: "+59 898 €",
    highlightLabel: "Zisk k vkladom",
    trend: [5, 8, 7, 10, 14, 12, 16, 15, 19, 22, 24, 29],
  },
];

const getSparklinePath = (values: number[], width = 320, height = 56) => {
  if (values.length < 2) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
};

const VysledkySection = () => (
  <section className="section-white section-padding relative overflow-hidden">
    <div className="absolute bottom-0 left-[20%] w-[400px] h-[400px] rounded-full bg-forest-glow/3 blur-[100px] pointer-events-none" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Reálne príbehy"
          headline={
            <>
              Toto sú <span className="italic text-primary">výsledky ľudí,</span>{" "}
              ktorým som postavil plán.
            </>
          }
          subHeadline={
            <>
              <strong>Nikto z nich nemal všetko vyriešené.</strong> Každý prišiel s
              vlastnou situáciou — chaos, banka, žiadny plán. Spolu sme to rozmotali.
            </>
          }
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {stories.map((s, i) => (
          <AnimatedSection key={s.name} delay={i * 0.1}>
            <div className="card-glass-cream h-full flex flex-col p-5 md:p-6">
              <p className="mb-3 inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-white">
                {s.label}
              </p>
              <p className="[font-family:var(--font-serif)] font-bold text-2xl text-foreground">{s.name}</p>
              <p className="font-sans text-sm md:text-[15px] text-foreground/70 mb-4">
                {s.meta}
              </p>
              <p className="font-serif italic text-base text-foreground/70 mb-4 leading-relaxed">
                „{s.quote}"
              </p>
              <p className="font-sans text-sm font-semibold text-muted-foreground leading-relaxed mb-6 flex-1">
                {s.body}
              </p>
              <div className="rounded-2xl px-3 py-2.5 bg-background/80 border border-primary/20">
                <div className="mb-4">
                  <svg
                    viewBox="0 0 320 56"
                    className="w-full h-12"
                    role="img"
                    aria-label={`Trend pre ${s.name}`}
                    preserveAspectRatio="none"
                  >
                    <path
                      d={getSparklinePath(s.trend)}
                      fill="none"
                      stroke="hsl(var(--primary))"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p className="[font-family:var(--font-serif)] text-[1.65rem] md:text-[1.85rem] leading-none font-extrabold text-primary">
                  {s.highlightAmount}
                </p>
                <p className="mt-1 font-sans text-xs md:text-sm font-medium text-foreground/70">
                  {s.highlightLabel}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <p className="text-[13px] md:text-sm text-muted-foreground text-center w-full mt-10 leading-relaxed">
          Uvedené výsledky sú individuálne prípady klientov z obdobia 2021-2024,
          ktoré bolo charakteristické silným rastom globálnych akciových trhov. Nie
          sú reprezentatívnou vzorkou všetkých klientov a nezaručujú podobné
          výsledky v budúcnosti. Minulá výkonnosť nie je zárukou budúcich výnosov.
        </p>
      </AnimatedSection>

      <AnimatedSection>
        <div className="text-center mt-8 md:mt-10">
          <button onClick={scrollToBooking} className="btn-primary text-lg">
            Rezervovať úvodný hovor
          </button>
          <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-sans text-muted-foreground mt-4">
            {["Bezplatný úvodný hovor", "Online 30 minút", "Bez záväzku a predaja"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default VysledkySection;
