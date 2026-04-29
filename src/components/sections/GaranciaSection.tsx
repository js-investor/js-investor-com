import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2 } from "lucide-react";

const scrollToBooking = () => {
  document.getElementById("formular")?.scrollIntoView({ behavior: "smooth" });
};

const GaranciaSection = () => (
  <section id="garancia" className="section-cream section-padding relative overflow-hidden scroll-mt-24">
    <div className="section-container">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="headline-serif">
            <span className="text-primary italic font-bold">Naše záväzky voči vám.</span>
            <br />
            Žiadne marketingové reči a prázdne sľuby.
          </h2>
          <p className="mt-4 font-sans text-sm leading-relaxed text-muted-foreground md:text-base">
            Nie ste môj ďalší klient v zozname. Ste partner, ktorému garantujem férovú hru, matematickú presnosť a
            podporu v každej krízovej situácii.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        <div className="mx-auto mt-10 max-w-4xl space-y-8">
          <div>
            <h3 className="flex items-start gap-2.5 font-sans text-base font-bold text-foreground md:text-lg">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>GARANCIA 1: Férová spolupráca. Žiadny nátlak do predaja</span>
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/85 md:text-base">
              Po úvodnom, bezplatnom hovore vám poviem narovinu: buď vám viem pomôcť, alebo nie. Žiadny predajný
              nátlak, žiadne tlačenie do produktov, ktoré nedávajú zmysel. Ak zistím, že JS Wealth Map™ nie je pre vás,
              poviem vám to a ukončíme to bez pocitov a zbytočných otázok.
            </p>
          </div>

          <div className="h-px w-full bg-primary/20" />

          <div>
            <h3 className="flex items-start gap-2.5 font-sans text-base font-bold text-foreground md:text-lg">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>GARANCIA 2: Nikdy na to nebudete sám</span>
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/85 md:text-base">
              Keď príde krízový pokles, vaša zložka peňazí na trhoch, nebudete si lámať hlavu sami. Zavoláte mi a
              poviem vám presne, čo robiť. Garantujem vám partnera, ktorý zdvihne telefón a odpovie na každú dôležitú
              otázku. Nie predajcu, ktorý zmizne po podpise zmluvy.
            </p>
          </div>

          <div className="h-px w-full bg-primary/20" />

          <div>
            <h3 className="flex items-start gap-2.5 font-sans text-base font-bold text-foreground md:text-lg">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              <span>GARANCIA 3: Presná matematika, žiadne nezmysly</span>
            </h3>
            <p className="mt-2 font-sans text-sm leading-relaxed text-foreground/85 md:text-base">
              Vaša mapa bude postavená len na dátach. ROI kalkulačkách a stresových scenároch. Nie na pocitoch alebo
              trendoch. Dostanete presný plán, kde budete vedieť, kde ste dnes, kam idete a čo urobiť ďalej. Ak z mapy
              nebudete mať absolútnu jasnosť, prepracujem ju, až kým nebudete spokojný na 100 %.
            </p>
          </div>

          <div className="pt-4 text-center">
            <button type="button" onClick={scrollToBooking} className="btn-primary text-lg">
              Získajte svoju JS Wealth Map
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default GaranciaSection;
