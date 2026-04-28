import AnimatedSection from "@/components/AnimatedSection";
import { useState } from "react";
import type { ReactNode } from "react";

const faqs = [
  {
    question: "Prečo by som potreboval vás, keď investujem sám cez appku?",
    answer:
      "Appka je nástroj, nie stratégia. Nevie vám povedať, kedy zmeniť portfólio, kedy kúpiť investičný byt, ako daňovo optimalizovať zisky alebo kedy začať čerpať rentu. A keď trh padne o 30 % a vstanete s panikou, appka vám nezdvihne telefón. Ja áno. To je rozdiel medzi nástrojom a partnerom.",
  },
  {
    question: "Koľko ma to celé bude stáť? Aké sú presné poplatky?",
    answer:
      "Začíname na férovej sadzbe 0,49 % ročne za správu portfólia do 100 000 €. Nad 100 000 € platíte už len exkluzívnych 0,35 % p.a. Plus maximálne 1 % vstupný poplatok z vkladov. Žiadne skryté náklady, všetko je vopred jasné a férovo dohodnuté.\n\nBežná banka si bere 1,5 - 2 % ročne. Za 30 rokov vás to pripraví až o tretinu majetku. Pri mesačnej investícii 300 € to znamená rozdiel až 117 000 € vo váš prospech.",
  },
  {
    question: "Sú moje peniaze v bezpečí?",
    answer:
      "Áno. Som licencovaný správca majetku pod prísnym dohľadom Národnej banky Slovenska (NBS). Vaše peniaze sú uložené na investičných účtoch na vaše meno, nie na mojom účte. Mám nad nimi nulový prístup. Ja len riadim stratégiu.",
  },
  {
    question: "Stratím kontrolu nad svojimi peniazmi?",
    answer:
      "Práve naopak, získate dokonalý prehľad. V aplikácii UFO vidíte v reálnom čase celý svoj majetok: ako klesá hypotéka, rastú fondy, koľko vám zostáva v nehnuteľnostiach. Na jeden klik viete, o koľko eur ste celkovo bohatší. Vaše peniaze zostávajú flexibilné a stratégiu vieme kedykoľvek prispôsobiť.",
  },
  {
    question: "Čo sa stane s mojím majetkom, ak sa mi niečo stane?",
    answer:
      "V rámci JS Wealth Map™ vám nastavíme presný postup, ako bezpečne previesť majetok na vašich blízkych. Od základného právneho procesu až po zverenecké fondy, ktoré využívajú najbohatší. Váš majetok bude chránený a vaša rodina zabezpečená.",
  },
  {
    question: "Prečo sú vaše poplatky tak nízke? Nie je v tom háčik?",
    answer:
      "Nie je. Banky si berú 1,5 - 2 % ročne, pretože predávajú vlastné drahé produkty a platia pobočky, reklamy a tisícky zamestnancov. Ja fungujem v režime otvorenej architektúry. Vyberám najlepšie fondy z celého sveta a nemám zbytočné náklady. Zarábam až vtedy, keď váš majetok rastie. To je férovosť, nie háčik.",
  },
];

type FaqLoremSectionProps = {
  heading?: ReactNode;
  subheading?: ReactNode;
  showCta?: boolean;
};

const FaqLoremSection = ({
  heading = (
    <>
      Lorem ipsum dolor sit amet <span className="text-primary font-bold">consectetur adipiscing</span>
    </>
  ),
  subheading,
  showCta = true,
}: FaqLoremSectionProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-cream section-padding relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="section-container relative z-10">
        <AnimatedSection>
          <div className="mx-auto mb-10 max-w-5xl text-center md:mb-12">
            <p className="eyebrow">FAQ</p>
            <h2 className="headline-serif">{heading}</h2>
            {subheading ? <p className="sub-headline mt-4">{subheading}</p> : null}
          </div>
        </AnimatedSection>

        <div className="mx-auto grid max-w-4xl gap-4 md:gap-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <AnimatedSection key={faq.question} delay={index * 0.04}>
                <div className="rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                    className={`group w-full text-left rounded-xl border border-primary/15 px-5 py-3.5 md:px-6 md:py-4 pr-12 font-sans text-base md:text-lg font-semibold leading-snug relative transition-colors duration-200 ${
                      isOpen ? "bg-primary text-white" : "bg-white text-foreground hover:bg-primary hover:text-white"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <span
                      className={`absolute right-5 top-1/2 -translate-y-1/2 text-xl leading-none ${
                        isOpen ? "text-white" : "text-primary group-hover:text-white"
                      }`}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 px-1 md:px-2 font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              </AnimatedSection>
            );
          })}
        </div>

        {showCta ? (
          <AnimatedSection>
            <div className="mt-10 text-center">
              <button type="button" className="btn-primary text-lg">
                Lorem ipsum
              </button>
            </div>
          </AnimatedSection>
        ) : null}
      </div>
    </section>
  );
};

export default FaqLoremSection;
