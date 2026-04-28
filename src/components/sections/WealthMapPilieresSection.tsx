import AnimatedSection from "@/components/AnimatedSection";
import brandPattern from "@/assets/logo/js-brand-pattern.svg";
import { Building2, Gem, Landmark, WalletCards } from "lucide-react";

const pillars = [
  {
    icon: <Landmark className="h-6 w-6 -translate-x-0.5 text-primary" strokeWidth={1.8} />,
    title: "Inteligentné ETF stratégie",
    body: "Výhodné globálne fondy bez zbytočných ročných poplatkov. Nastavíme vám portfólio presne podľa vášho horizontu. Žiadny \"jeden fond pre všetkých\", ale stratégia na mieru pre vašu situáciu. Bezpečne, jasne a bez predražených sprostredkovateľov.",
  },
  {
    icon: <Building2 className="h-6 w-6 -translate-x-0.5 text-primary" strokeWidth={1.8} />,
    title: "Investičné nehnuteľnosti",
    subtitle: "(ktoré dávajú zmysel pre vás)",
    body: "Nie každý potrebuje investičný byt. Ale ak ho kúpite, musí vám dávať matematický zmysel. Odo mňa dostanete ROI kalkulačku, stresové scenáre a model financovania. Žiadne \"kúpim, lebo ceny rastú.\" Prísne čísla, ktoré logicky zapadnú do vášho majetku.",
  },
  {
    icon: <Gem className="h-6 w-6 -translate-x-0.5 text-primary" strokeWidth={1.8} />,
    title: "Prémiové investície",
    body: "Fondy kvalifikovaných investorov, ku ktorým bežný človek nemá prístup. Od 50 000 € majetku vám odomknem dvere k neverejným investíciám. Ide o projekty s cielenými fixnými výnosmi 4 - 7 % ročne, ktoré dopĺňajú dynamickú časť portfólia.",
  },
  {
    icon: <WalletCards className="h-6 w-6 -translate-x-0.5 text-primary" strokeWidth={1.8} />,
    title: "Renta a skutočná sloboda",
    body: "Neinvestujete len pre pekné čísla v aplikácii, ale pre svoju nezávislosť. V správny moment vaše aktíva prestavíme do rentového módu a vytvoríme vám bezpečný systém výberov, ktorý vám zabezpečí stabilný pasívny príjem.",
  },
];

const WealthMapPilieresSection = () => (
  <section id="riesenie" className="bg-footer-bg section-padding relative overflow-hidden scroll-mt-24">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="headline-serif text-cream">
            Dajte svojim peniazom <span className="text-[#d4dfdb] font-bold">jasnú stratégiu.</span>
          </h2>
          <p className="sub-headline !text-cream/85">
            Spolu s JS Wealth Map™ sa konečne zbavíte finančného chaosu a získate presný plán, ktorý bude pracovať pre
            vás.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <p className="mt-10 text-center font-serif text-xl md:text-2xl font-extrabold tracking-[0.06em] text-[#d4dfdb]">
          4 piliere JS Wealth Map™
        </p>
      </AnimatedSection>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, index) => (
          <AnimatedSection key={pillar.title} delay={index * 0.06}>
            <article className="h-full rounded-2xl border border-white/20 bg-white/95 p-6 md:p-7">
              <div
                className="mb-4 inline-flex h-11 w-11 items-center justify-center"
                style={{
                  backgroundColor: "#d4dfdb",
                  WebkitMaskImage: `url(${brandPattern})`,
                  WebkitMaskRepeat: "no-repeat",
                  WebkitMaskPosition: "center",
                  WebkitMaskSize: "contain",
                  maskImage: `url(${brandPattern})`,
                  maskRepeat: "no-repeat",
                  maskPosition: "center",
                  maskSize: "contain",
                }}
              >
                {pillar.icon}
              </div>
              <h3 className="font-serif text-2xl font-extrabold text-foreground leading-tight">{pillar.title}</h3>
              {pillar.subtitle ? (
                <p className="mt-1 font-sans text-sm md:text-base text-muted-foreground italic">{pillar.subtitle}</p>
              ) : null}
              <p className="mt-4 font-sans text-sm md:text-base text-muted-foreground leading-relaxed">{pillar.body}</p>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default WealthMapPilieresSection;
