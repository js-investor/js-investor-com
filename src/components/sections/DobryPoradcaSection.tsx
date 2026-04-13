import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { TrendingUp, Wallet, Clock } from "lucide-react";
import { ReactNode } from "react";

const cards: { icon: ReactNode; stat: string; title: string; body: string }[] = [
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    stat: "+3 % ročne",
    title: "Vyššie výnosy",
    body: "Kvalitný správca majetku pridá podľa štúdie Vanguard v priemere o 3 % ročne — cez správnu alokáciu, daňovú optimalizáciu a elimináciu emočných rozhodnutí. Za 20 rokov je to rozdiel desiatok tisíc eur.¹",
  },
  {
    icon: <Wallet className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    stat: "2-4× viac",
    title: "Väčší majetok v dôchodku",
    body: "Ľudia s písomným finančným plánom majú pri odchode do dôchodku 2-4× väčší majetok ako tí, ktorí plánujú podľa pocitu. Rozdiel nie je v príjme — je v pláne.²",
  },
  {
    icon: <Clock className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    stat: "350+ hodín",
    title: "Čas pre rodinu ročne",
    body: "Samostatná správa financií zaberie v priemere viac ako 350 hodín ročne. To je 7 hodín týždenne, ktoré môžeš stráviť s rodinou, v práci alebo na dovolenke. Toto je hodnota, ktorú si nikto necení dostatočne — kým ju nemá.³",
  },
];

const DobryPoradcaSection = () => (
  <section className="section-white section-padding">
    <div className="section-container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Aký je rozdiel"
          headline="Čo dokáže priniesť dobrý sprievodca"
          subHeadline="Toto nie sú moje sľuby. Sú to dáta z medzinárodných štúdií Vanguard, Russell Investments a Northwestern Mutual."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="card-premium bg-cream h-full">
              <div className="mb-5">{c.icon}</div>
              <p className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-2">
                {c.stat}
              </p>
              <p className="font-sans font-semibold text-lg text-foreground mb-3">
                {c.title}
              </p>
              <p className="font-sans text-muted-foreground leading-relaxed text-sm md:text-base">
                {c.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <p className="text-xs md:text-sm text-muted-foreground text-center max-w-4xl mx-auto mt-10">
          ¹ Vanguard Advisor's Alpha Study | ² Northwestern Mutual Planning &
          Progress Study | ³ Odhad na základe priemerného času samostatnej správy
          financií. Uvedené štatistiky pochádzajú z priemyselných štúdií a
          nepredstavujú prísľub budúcich výnosov.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default DobryPoradcaSection;
