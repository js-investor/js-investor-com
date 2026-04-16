import AnimatedSection from "@/components/AnimatedSection";

const items: { title: string; body: string }[] = [
  {
    title: "Rezerva a stabilita",
    body: "Ako nastaviť finančnú rezervu a pevný základ pred investovaním.",
  },
  {
    title: "Cashflow a efektivita",
    body: "Kde vám zbytočne odtekajú peniaze a čo sa dá zlepšiť.",
  },
  {
    title: "Akciové portfólio",
    body: "Ako nastaviť portfólio podľa cieľov, horizontu a miery rizika.",
  },
  {
    title: "Audit existujúcich investícií",
    body: "Či vaše súčasné riešenia dávajú zmysel alebo majú priestor na zlepšenie.",
  },
  {
    title: "Investičné nehnuteľnosti",
    body: "Či vo vašom prípade dávajú zmysel a ako ich vyhodnotiť racionálne.",
  },
  {
    title: "Renta z majetku",
    body: "Ako raz čerpať majetok cez portfólio, dividendy alebo nehnuteľnosti.",
  },
];

const FazySection = () => (
  <section
    className="section-padding relative overflow-hidden"
    style={{ backgroundColor: "#F0ECE6" }}
  >
    <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2 className="headline-serif">Čo všetko spolu vyriešime</h2>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {items.map((item, i) => (
          <AnimatedSection key={item.title} delay={i * 0.05}>
            <div className="h-full p-6 md:p-7 rounded-2xl bg-[#29614A] border border-[#2f7056]/70 shadow-[0_12px_28px_rgba(41,97,74,0.2)]">
              <p className="[font-family:var(--font-serif)] font-bold text-lg md:text-xl text-cream mb-3 leading-snug">
                {item.title}
              </p>
              <p className="font-sans text-sm md:text-base text-cream/80 leading-relaxed">
                {item.body}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default FazySection;
