import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import { TrendingDown, Percent, Compass } from "lucide-react";
import { ReactNode } from "react";

const cards: { icon: ReactNode; stat: string; title: string; body: string }[] = [
  {
    icon: <TrendingDown className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    stat: "1 200 € ročne",
    title: "Inflácia",
    body: "Ak ti na účte leží 30 000 €, inflácia ti z nich tichu zožerie viac ako 1 200 € ročne. Za 10 rokov je to 12 000 €. Bez toho aby si urobil čokoľvek zlé. Stačilo neurobiť nič.",
  },
  {
    icon: <Percent className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    stat: "Až 30 %",
    title: "Skryté poplatky",
    body: "Bankové fondy a tradiční poradcovia ti účtujú 1,5 – 2 % ročne. Znie to ako málo. Ale za 30 rokov ti tieto poplatky zoberú tretinu majetku. V eurách to často znamená desiatky tisíc.",
  },
  {
    icon: <Compass className="w-8 h-8 text-primary" strokeWidth={1.5} />,
    stat: "Bez smeru",
    title: "Chýbajúci plán",
    body: "Aj keď investuješ, ale robíš to chaoticky — raz ETF, raz krypto, raz kamarát mi povedal — výnosy zaostávajú. A pri prvom poklese trhu predáš v strate, lebo nemáš plán ktorého sa môžeš držať.",
  },
];

const StrataSection = () => (
  <section className="section-cream section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-grid opacity-30" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Prečo to má zmysel riešiť"
          headline="Každý mesiac bez plánu ťa stojí reálne peniaze."
          subHeadline="Toto nie sú scary čísla z marketingu. Toto je matematika, ktorú väčšina ľudí ignoruje, kým je neskoro."
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((c, i) => (
          <AnimatedSection key={c.title} delay={i * 0.1}>
            <div className="card-glass h-full">
              <div className="mb-5 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center timeline-node">
                {c.icon}
              </div>
              <p className="font-serif text-3xl md:text-4xl font-semibold stat-gradient mb-2">
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
        <p className="quote-serif text-center max-w-3xl mx-auto mt-12 md:mt-16">
          „Najdrahšie investovanie nie je to so zlými rozhodnutiami. Je to
          investovanie bez plánu."
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default StrataSection;
