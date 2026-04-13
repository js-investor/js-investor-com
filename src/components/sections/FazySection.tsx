import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import brandPattern from "@/assets/logo/js-brand-pattern.svg";
import { Shield, TrendingUp, KeyRound, Sun, Check } from "lucide-react";
import { ReactNode } from "react";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const phases: { num: string; icon: ReactNode; title: string; subtitle: string; body: string }[] = [
  {
    num: "01",
    icon: <Shield className="w-7 h-7 text-white -translate-x-0.5" strokeWidth={1.7} />,
    title: "Finančný základ",
    subtitle: "Tvorba rezerv a stabilizácia cashflow",
    body: "Skôr než začneme investovať, potrebujeme pevný základ. Spolu postavíme železnú rezervu, skontrolujeme tvoje výdavky, a zistíme koľko reálne mesačne vieš alokovať do investícií bez toho aby si si znížil kvalitu života.",
  },
  {
    num: "02",
    icon: <TrendingUp className="w-7 h-7 text-white -translate-x-0.5" strokeWidth={1.7} />,
    title: "Budovanie majetku",
    subtitle: "Akciové ETF portfólio",
    body: "Hlavný motor rastu tvojho kapitálu. Globálne diverzifikované ETF portfólio postavené na osvedčených indexoch. Bez zbytočných poplatkov, bez timingu trhu, bez emócií.",
  },
  {
    num: "03",
    icon: <KeyRound className="w-7 h-7 text-white -translate-x-0.5" strokeWidth={1.7} />,
    title: "Diverzifikácia do tehiel",
    subtitle: "Investičné nehnuteľnosti",
    body: "Keď tvoje aktívne portfólio dosiahne určitú úroveň, začneme riešiť prvú investičnú nehnuteľnosť. Dostaneš ROI kalkuláciu, stresové scenáre, model financovania. Len ak dáva matematický zmysel.",
  },
  {
    num: "04",
    icon: <Sun className="w-7 h-7 text-white -translate-x-0.5" strokeWidth={1.7} />,
    title: "Renta a sloboda",
    subtitle: "Príjem zo samotného majetku",
    body: "Cieľová fáza ku ktorej ťa vediem od prvého dňa. V správny moment tvoje aktíva prestavíme do rentového módu. Tvoj príjem začne generovať samotný majetok. To je skutočná finančná sloboda.",
  },
];

const FazySection = () => (
  <section className="section-white section-padding relative overflow-hidden">
    <div className="absolute top-[30%] left-0 w-[400px] h-[400px] rounded-full bg-forest-glow/3 blur-[100px] pointer-events-none" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Komplexná cesta"
          headline={
            <>
              Od prvých úspor <span className="italic text-primary">po doživotnú rentu</span>
            </>
          }
          subHeadline={
            <>
              S klientmi prechádzame štyri hlavné fázy budovania majetku. Každá má
              svoje pravidlá, svoje nástroje, svoje priority.{" "}
              <strong>Moja úloha je byť sprievodca na celej tvojej ceste.</strong>
            </>
          }
        />
      </AnimatedSection>

      {/* Desktop: horizontal timeline */}
      <div className="hidden md:block relative">
        {/* Connection line centered through icons */}
        <div className="absolute top-[28px] left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-primary/15 via-primary/35 to-primary/15" />
        <div className="grid grid-cols-4 gap-6">
          {phases.map((p, i) => (
            <AnimatedSection key={p.num} delay={i * 0.12}>
              <div className="text-center relative pt-0">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-6 relative z-10 bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${brandPattern})` }}
                >
                  {p.icon}
                </div>
                <p className="[font-family:var(--font-serif)] text-5xl font-bold futuristic-num mb-2 leading-none">
                  {p.num}
                </p>
                <p className="[font-family:var(--font-serif)] font-bold text-xl text-foreground mb-4">
                  {p.title}
                </p>
                <p className="font-sans text-sm text-primary font-semibold mb-3">
                  {p.subtitle}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {p.num === "01" && (
                    <>
                      Skôr než začneme investovať, <strong>potrebujeme pevný základ.</strong>{" "}
                      Spolu postavíme železnú rezervu, skontrolujeme tvoje výdavky, a
                      zistíme koľko reálne mesačne vieš alokovať do investícií bez toho
                      aby si si znížil kvalitu života.
                    </>
                  )}
                  {p.num === "02" && (
                    <>
                      Hlavný motor rastu tvojho kapitálu. Globálne diverzifikované ETF
                      portfólio postavené na osvedčených indexoch.{" "}
                      <strong>Bez zbytočných poplatkov, bez timingu trhu, bez emócií.</strong>
                    </>
                  )}
                  {p.num === "03" && (
                    <>
                      Keď tvoje aktívne portfólio dosiahne určitú úroveň,{" "}
                      <strong>začneme riešiť prvú investičnú nehnuteľnosť.</strong>{" "}
                      Dostaneš ROI kalkuláciu, stresové scenáre, model financovania. Len{" "}
                      <strong>ak dáva matematický zmysel.</strong>
                    </>
                  )}
                  {p.num === "04" && (
                    <>
                      Cieľová fáza ku ktorej ťa vediem od prvého dňa.{" "}
                      <strong>V správny moment tvoje aktíva prestavíme do rentového módu.</strong>{" "}
                      Tvoj príjem začne generovať samotný majetok. To je skutočná
                      finančná sloboda.
                    </>
                  )}
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
                <p className="font-serif text-3xl font-semibold futuristic-num">
                  {p.num}
                </p>
                <div className="w-px flex-1 bg-gradient-to-b from-primary/30 to-primary/5 mt-2" />
              </div>
              <div className="pb-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-3 bg-center bg-no-repeat bg-contain"
                  style={{ backgroundImage: `url(${brandPattern})` }}
                >
                  {p.icon}
                </div>
                <p className="[font-family:var(--font-serif)] font-bold text-xl text-foreground mb-1">
                  {p.title}
                </p>
                <p className="font-sans text-sm text-primary font-semibold mb-2">
                  {p.subtitle}
                </p>
                <p className="font-sans text-sm text-muted-foreground leading-relaxed">
                  {p.num === "01" && (
                    <>
                      Skôr než začneme investovať, <strong>potrebujeme pevný základ.</strong>{" "}
                      Spolu postavíme železnú rezervu, skontrolujeme tvoje výdavky, a
                      zistíme koľko reálne mesačne vieš alokovať do investícií bez toho
                      aby si si znížil kvalitu života.
                    </>
                  )}
                  {p.num === "02" && (
                    <>
                      Hlavný motor rastu tvojho kapitálu. Globálne diverzifikované ETF
                      portfólio postavené na osvedčených indexoch.{" "}
                      <strong>Bez zbytočných poplatkov, bez timingu trhu, bez emócií.</strong>
                    </>
                  )}
                  {p.num === "03" && (
                    <>
                      Keď tvoje aktívne portfólio dosiahne určitú úroveň,{" "}
                      <strong>začneme riešiť prvú investičnú nehnuteľnosť.</strong>{" "}
                      Dostaneš ROI kalkuláciu, stresové scenáre, model financovania. Len{" "}
                      <strong>ak dáva matematický zmysel.</strong>
                    </>
                  )}
                  {p.num === "04" && (
                    <>
                      Cieľová fáza ku ktorej ťa vediem od prvého dňa.{" "}
                      <strong>V správny moment tvoje aktíva prestavíme do rentového módu.</strong>{" "}
                      Tvoj príjem začne generovať samotný majetok. To je skutočná
                      finančná sloboda.
                    </>
                  )}
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

export default FazySection;
