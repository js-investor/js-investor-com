import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2, XCircle } from "lucide-react";

const beforeItems = [
  "30 000 € (alebo viac) vám leží na účte a inflácia vám z neho každý rok zožerie 1 200 € a viac.",
  "Dotujete banky a poradcov skrytými poplatkami (1 - 3 % ročne), ktoré vás ukrátia za tie roky až o 30 % majetku.",
  "Neviete, či máte kúpiť investičný byt, navýšiť ETF, alebo radšej čakať? Rozhodujete sa podľa intuície, nie podľa dát.",
  "Pri každom poklese trhu a vášho portfólia cítite stres a neistotu. A neviete, či čakať, alebo predať.",
];

const afterItems = [
  "Jeden logický systém, kde vaše ETF, nehnuteľnosti a biznis spolupracujú na vašej doživotnej rente.",
  "V modernej aplikácii v reálnom čase vidíte, ako váš čistý majetok rastie.",
  "Platíte férové poplatky 0,49 % ročne do 100 000 €. Nad 100 000 € je exkluzívny poplatok 0,35 %.",
  "Pri každom dôležitom finančnom rozhodnutí máte partnera, ktorý vám povie: \"Toto urobme, toto je nezmysel.\"",
];

const PredPoSection = () => (
  <section className="section-cream section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-12">
          <h2 className="headline-serif">
            Konečne prestaňte mať pocit,
            <br />
            že <span className="text-primary italic font-bold">ste na všetko vo financiách sami.</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
        <AnimatedSection>
          <article className="rounded-2xl border border-primary/12 bg-[#f7f4ef] p-6 md:p-7">
            <h3 className="font-serif text-3xl font-extrabold text-[#B64A4A] mb-5">
              PRED <span className="text-foreground/70 text-[1.7rem]">(Chaos)</span>
            </h3>
            <div className="space-y-4">
              {beforeItems.map((item) => (
                <p key={item} className="flex items-start gap-2.5 font-sans text-sm md:text-base leading-relaxed text-foreground/85">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#B64A4A]" />
                  <span>→ {item}</span>
                </p>
              ))}
            </div>
          </article>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <article className="rounded-2xl border border-primary/12 bg-[#f7f4ef] p-6 md:p-7">
            <h3 className="font-serif text-3xl font-extrabold text-primary mb-5">
              PO <span className="text-foreground/70 text-[1.7rem]">(JS Wealth Map™)</span>
            </h3>
            <div className="space-y-4">
              {afterItems.map((item) => (
                <p key={item} className="flex items-start gap-2.5 font-sans text-sm md:text-base leading-relaxed text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </article>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="mt-10 text-center">
          <a href="#booking" className="btn-primary text-lg">
            Získať JS Wealth Map™
          </a>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PredPoSection;
