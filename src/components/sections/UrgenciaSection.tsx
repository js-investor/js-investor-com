import AnimatedSection from "@/components/AnimatedSection";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const UrgenciaSection = () => (
  <section id="urgencia" className="section-cream section-padding relative overflow-hidden scroll-mt-24">
    <div className="section-container">
      <AnimatedSection>
        <div
          className="mx-auto max-w-5xl rounded-[28px] border border-[#c9c2bc] px-5 py-8 md:px-10 md:py-12"
          style={{
            background:
              "linear-gradient(135deg, #efedeb 0%, #d8d6d2 28%, #f6f4f1 52%, #d2cfca 74%, #ece9e6 100%)",
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="headline-serif">
              Každý mesiac čakania <span className="text-primary italic font-bold">vás stojí reálne peniaze</span>
            </h2>
            <p className="sub-headline mt-6">
              <strong>Prijímam maximálne 2 nových klientov týždenne</strong>, pretože kvalitný a osobný prístup sa
              nedá škálovať na desiatky ľudí. Ak <strong>odložíte rozhodnutie, odkladáte aj rast</strong> vášho
              majetku.
            </p>
          </div>

          <div className="my-8 h-px w-full bg-[#c9c2bc]" />

          <div className="mx-auto max-w-4xl">
            <h3 className="[font-family:var(--font-serif)] text-center text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Čo strácate každý mesiac odkladu?
            </h3>
            <ul className="mt-6 space-y-3 font-sans text-base leading-relaxed text-foreground/90 md:mt-8 md:text-[1.125rem]">
              <li>→ Každý rok, ktorý čakáte, je rok, kedy <strong>inflácia pracuje proti vám.</strong></li>
              <li>→ Skryté poplatky vás za 20 - 30 rokov <strong>okradnú až o tretinu majetku</strong></li>
              <li>→ Stratené <strong>príležitosti sa vám nevrátia</strong></li>
            </ul>
          </div>

          <div className="my-8 h-px w-full bg-[#c9c2bc]" />

          <div className="mx-auto max-w-4xl text-center">
            <h3 className="[font-family:var(--font-serif)] text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Prečo začať práve teraz?
            </h3>
            <p className="mt-5 font-sans text-base leading-relaxed text-foreground/90 md:text-[1.125rem]">
              Kto čaká na "perfektný moment", <strong>príde o konkrétne výhody, ktoré sú tu dnes.</strong>
            </p>

            <p className="mt-6 text-left font-sans text-base leading-relaxed text-foreground/90 md:text-[1.125rem]">
              Reálny príklad:
              <br />
              Klientka začala pred 5 rokmi s 10 000 €. Dnes má <strong>dva investičné byty a 120 000 € v investíciách.</strong>
              <br />
              Iný klient nechal milión u bežnej poradkyne. <strong>Zarobil iba 3 % namiesto 17 %</strong>, pretože fondy
              boli zbytočne poistené voči mene.
            </p>

            <p className="mt-6 font-sans text-lg font-semibold leading-relaxed text-foreground md:text-[1.25rem]">
              Ešte nikto nezbohatol tým, že držal peniaze na účte a čakal.
            </p>

            <button type="button" onClick={scrollToBooking} className="btn-primary mt-8 text-lg">
              Získajte svoju JS Wealth Map
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default UrgenciaSection;
