import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { Shield, TrendingUp, KeyRound, Sun } from "lucide-react";
import { ReactNode } from "react";

const phases: { num: string; icon: ReactNode; title: string; subtitle: string; body: string }[] = [
  {
    num: "01",
    icon: <Shield className="w-7 h-7 text-primary" strokeWidth={1.5} />,
    title: "Finančný základ",
    subtitle: "Tvorba rezerv a stabilizácia cashflow",
    body: "Skôr než začneme investovať, potrebujeme pevný základ. Spolu postavíme železnú rezervu, skontrolujeme tvoje výdavky, a zistíme koľko reálne mesačne vieš alokovať do investícií bez toho aby si si znížil kvalitu života.",
  },
  {
    num: "02",
    icon: <TrendingUp className="w-7 h-7 text-primary" strokeWidth={1.5} />,
    title: "Budovanie majetku",
    subtitle: "Akciové ETF portfólio",
    body: "Hlavný motor rastu tvojho kapitálu. Globálne diverzifikované ETF portfólio postavené na osvedčených indexoch. Bez zbytočných poplatkov, bez timingu trhu, bez emócií.",
  },
  {
    num: "03",
    icon: <KeyRound className="w-7 h-7 text-primary" strokeWidth={1.5} />,
    title: "Diverzifikácia do tehiel",
    subtitle: "Investičné nehnuteľnosti",
    body: "Keď tvoje aktívne portfólio dosiahne určitú úroveň, začneme riešiť prvú investičnú nehnuteľnosť. Dostaneš ROI kalkuláciu, stresové scenáre, model financovania. Len ak dáva matematický zmysel.",
  },
  {
    num: "04",
    icon: <Sun className="w-7 h-7 text-primary" strokeWidth={1.5} />,
    title: "Renta a sloboda",
    subtitle: "Príjem zo samotného majetku",
    body: "Cieľová fáza ku ktorej ťa vediem od prvého dňa. V správny moment tvoje aktíva prestavíme do rentového módu. Tvoj príjem začne generovať samotný majetok. To je skutočná finančná sloboda.",
  },
];

const FazySection = () => (
  <section className="section-white section-padding">
    <div className="section-container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Komplexná cesta"
          headline="Od prvých úspor po doživotnú rentu"
          subHeadline="S klientmi prechádzame štyri hlavné fázy budovania majetku. Každá má svoje pravidlá, svoje nástroje, svoje priority. Moja úloha je byť sprievodca na celej ceste."
        />
      </AnimatedSection>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block relative">
        {/* Connection line */}
        <div className="absolute top-[60px] left-[10%] right-[10%] h-px bg-primary/20" />
        <div className="grid grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.12}>
              <div className="text-center relative pt-0">
                <p className="font-serif text-5xl font-semibold text-primary/25 mb-3">
                  {p.num}
                </p>
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  {p.icon}
                </div>
                <p className="font-sans font-semibold text-lg text-foreground mb-1">
                  {p.title}
                </p>
                <p className="font-sans text-sm text-primary font-medium mb-3">
                  {p.subtitle}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="md:hidden space-y-8">
        {phases.map((p, i) => (
          <AnimatedSection key={p.num} delay={i * 0.1}>
            <div className="flex gap-5">
              <div className="flex flex-col items-center">
                <p className="font-serif text-3xl font-semibold text-primary/25">
                  {p.num}
                </p>
                <div className="w-px flex-1 bg-primary/20 mt-2" />
              </div>
              <div className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-3">
                  {p.icon}
                </div>
                <p className="font-sans font-semibold text-lg text-foreground mb-1">
                  {p.title}
                </p>
                <p className="font-sans text-sm text-primary font-medium mb-2">
                  {p.subtitle}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {p.body}
                </p>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <p className="quote-serif text-center max-w-3xl mx-auto mt-12 md:mt-16">
          „Nemusíš byť vo všetkých fázach naraz. Stretneme sa tam kde si — a
          postavíme plán dopredu."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default FazySection;
