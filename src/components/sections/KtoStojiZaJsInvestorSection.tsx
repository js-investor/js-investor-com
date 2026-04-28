import AnimatedSection from "@/components/AnimatedSection";
import ivanPortrait from "@/assets/images/jsinvestor-ivan-obleku-cita-dokumenty-financie.jpg";

const facts = [
  "531+ klientov",
  "3M€+ v ETF portfóliách",
  "5.4M€+ v investičných nehnuteľnostiach",
  "115 000+ sledovateľov na Instagrame",
];

const KtoStojiZaJsInvestorSection = () => (
  <section className="bg-footer-bg section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-[45fr_55fr] lg:gap-10">
        <AnimatedSection>
          <div className="h-full">
            <div className="overflow-hidden rounded-2xl shadow-[0_16px_40px_-24px_rgba(0,0,0,0.45)]">
              <img
                src={ivanPortrait}
                alt="Ivan Jasik portrét"
                className="h-[470px] w-full object-cover object-top md:h-[560px] lg:h-[610px]"
              />
            </div>
            <div className="mt-4 w-full text-center">
              <p className="[font-family:var(--font-serif)] text-2xl font-bold text-cream">Ivan Jašík</p>
              <p className="mt-1 font-sans text-base text-cream/85">Váš sprievodca budovaním majetku</p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.06}>
          <div className="flex h-full flex-col justify-center p-2 md:p-3">
            <p className="font-sans text-sm font-semibold uppercase tracking-[0.08em] text-cream/80">Kto stojí za JS Investor</p>

            <h2 className="mt-3 headline-serif text-cream">
              Nie som poisťovák, bankový ani bežný poradca.
            </h2>

            <p className="mt-4 font-sans text-base leading-relaxed text-cream/85 md:text-lg">
              Som správca majetku regulovaný NBS, ktorý posledných 8 rokov robí jednu vec: stavia ľuďom finančné
              stratégie, ktoré fungujú.
            </p>

            <ul className="mt-6 grid grid-cols-1 gap-2 text-cream sm:grid-cols-2">
              {facts.map((fact) => (
                <li
                  key={fact}
                  className="flex min-h-[58px] items-center justify-center rounded-lg border border-white/20 bg-white/10 px-3 py-2 text-center font-sans text-sm font-semibold md:text-base"
                >
                  {fact}
                </li>
              ))}
            </ul>

            <p className="mt-6 font-sans text-base leading-relaxed text-cream/85 md:text-lg">
              Pretože hovorím veci, ktoré vám bankár nepovie.
            </p>

            <p className="mt-4 font-sans text-base leading-relaxed text-cream/85 md:text-lg">
              Keď prepočítavate kúpu bytu, plánujete mimoriadny vklad, alebo sa na trhoch deje panika, môžete mi
              zavolať. Toto je moja práca. Byť váš sprievodca na nasledujúcich 20-30 rokov.
            </p>

            <a
              href="#booking"
              className="btn-primary mt-7 inline-flex self-start !w-auto !bg-[#d4dfdb] !text-primary text-lg hover:!bg-[#c5d4cf]"
            >
              Chcem spolupracovať s Ivanom
            </a>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default KtoStojiZaJsInvestorSection;
