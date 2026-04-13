import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";

const testimonials = [
  {
    quote: "Začal som pracovať v zahraničí a nevedel som čo s prvými úsporami. Ivan mi za dva týždne postavil plán, podľa ktorého investujem dodnes.",
    name: "MuDr. Martin Vanečko",
    role: "Doktor pôsobiaci vo Švajčiarsku",
  },
  {
    quote: "Ivan je skutočný profesionál. Spolupracujeme už 4 roky. Nemusím riešiť financie — viem, že sú v dobrých rukách.",
    name: "Šimon Latkoczy",
    role: "Slovenský hokejový reprezentant",
  },
  {
    quote: "Ako podnikateľ potrebujem niekoho, kto rozumie biznisovým peniazom. Ivan presne vie, ako z firemného zisku spraviť osobný majetok.",
    name: "Ladislav Papik",
    role: "Konateľ PAPIK ENTERPRISE s.r.o.",
  },
];

const TestimonialSection = () => (
  <section className="section-cream section-padding">
    <div className="section-container">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Reálne skúsenosti"
          headline="Čo hovoria ľudia, s ktorými spolupracujem"
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((t, i) => (
          <AnimatedSection key={t.name} delay={i * 0.1}>
            <div className="card-premium bg-background h-full flex flex-col">
              <span className="font-serif text-5xl text-primary/20 leading-none mb-2">
                "
              </span>
              <p className="font-serif italic text-lg md:text-xl text-foreground leading-relaxed mb-8 flex-1">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="font-sans font-semibold text-primary text-sm">
                    {t.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-sans font-semibold text-sm text-foreground">
                    {t.name}
                  </p>
                  <p className="font-sans text-xs text-muted-foreground">
                    {t.role}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialSection;
