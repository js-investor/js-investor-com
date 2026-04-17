import AnimatedSection from "@/components/AnimatedSection";
import brandPattern from "@/assets/logo/js-brand-pattern.svg";
import {
  Building2,
  ChartNoAxesCombined,
  HandCoins,
  PiggyBank,
  SearchCheck,
  Wallet,
  type LucideIcon,
} from "lucide-react";

const items: { title: string; body: string; icon: LucideIcon }[] = [
  {
    title: "Rezerva a stabilita",
    body: "Ako nastaviť finančnú rezervu a pevný základ pred investovaním.",
    icon: PiggyBank,
  },
  {
    title: "Cashflow a efektivita",
    body: "Kde vám zbytočne odtekajú peniaze a čo sa dá zlepšiť.",
    icon: Wallet,
  },
  {
    title: "Akciové portfólio",
    body: "Ako nastaviť portfólio podľa cieľov, horizontu a miery rizika.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Audit existujúcich investícií",
    body: "Či vaše súčasné riešenia dávajú zmysel alebo majú priestor na zlepšenie.",
    icon: SearchCheck,
  },
  {
    title: "Investičné nehnuteľnosti",
    body: "Či vo vašom prípade dávajú zmysel a ako ich vyhodnotiť racionálne.",
    icon: Building2,
  },
  {
    title: "Renta z majetku",
    body: "Ako raz čerpať majetok cez portfólio, dividendy alebo nehnuteľnosti.",
    icon: HandCoins,
  },
];

const FazySection = () => (
  <section
    className="section-padding relative overflow-hidden"
    style={{ backgroundColor: "#F2EEE7" }}
  >
    <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-14">
          <h2 className="headline-serif">
            Čo všetko <span className="italic text-primary">spolu vyriešime</span>
          </h2>
        </div>
      </AnimatedSection>

      <div className="relative mx-auto max-w-6xl md:pl-0">
        <div className="pointer-events-none absolute left-[10px] top-3 hidden h-[calc(100%-1.5rem)] w-[2px] bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:hidden" />
        <div className="pointer-events-none absolute left-1/2 top-4 hidden h-[calc(100%-2rem)] w-px -translate-x-1/2 bg-gradient-to-b from-primary/10 via-primary/45 to-primary/10 md:block" />
        <div className="grid grid-cols-1 gap-5 md:gap-7">
          {items.map((item, i) => {
            const Icon = item.icon;
            const isRight = i % 2 === 1;
            return (
              <AnimatedSection key={item.title} delay={i * 0.05}>
                <div className={`md:flex ${isRight ? "md:justify-end" : "md:justify-start"}`}>
                  <div className="group relative w-full md:pl-0 md:w-[calc(50%-2rem)]">
                    <div className="relative overflow-hidden rounded-[1rem] md:rounded-[1.1rem] border border-primary/20 bg-white/95 p-4 sm:p-5 md:p-6 shadow-[0_8px_22px_rgba(22,48,38,0.1)] backdrop-blur-[2px] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_12px_26px_rgba(22,48,38,0.14)]">
                      <div className="mb-3.5 md:mb-4 flex items-center gap-3">
                        <div
                          className="inline-flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-lg md:rounded-xl text-white shadow-sm bg-center bg-cover"
                          style={{ backgroundImage: `url(${brandPattern})` }}
                        >
                          <Icon className="h-4 w-4 md:h-[18px] md:w-[18px] -translate-x-0.5" strokeWidth={2.25} />
                        </div>
                      </div>
                      <p className="[font-family:var(--font-serif)] font-bold text-[1.1rem] md:text-xl text-foreground mb-2 leading-snug">
                        {item.title}
                      </p>
                      <p className="font-sans text-[0.95rem] md:text-base text-muted-foreground leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </div>
  </section>
);

export default FazySection;
