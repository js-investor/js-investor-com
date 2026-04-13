import AnimatedSection from "@/components/AnimatedSection";
import { Play, Check } from "lucide-react";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const bullets = [
  "Ako vyzerá diagnostická sekcia — kde presne vidíš stav svojich financií dnes",
  "Ako staviam plán na mieru — podľa tvojho príjmu, cieľov a horizontu",
  "Ako rátame kroky — koľko investovať, kedy, do čoho",
  "Ako cielime k rente — finálny výstupný plán",
];

const VideoSection = () => (
  <section className="section-cream section-padding">
    <div className="section-container">
      <AnimatedSection>
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Čo presne dostaneš</p>
          <h2 className="headline-serif">Takto vyzerá tvoj osobný finančný plán.</h2>
          <p className="sub-headline">
            Pripravil som krátke video, kde ti ukazujem reálny vzor JS Wealth Map.
            Uvidíš presne čo dostaneš po spolupráci — diagnostiku, plán, konkrétne
            kroky. Bez floskúl, bez teórie.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* Video placeholder */}
        <div className="relative rounded-[20px] overflow-hidden bg-foreground/90 aspect-video max-w-4xl mx-auto mb-12 md:mb-16 cursor-pointer group">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
              <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
            </div>
          </div>
          <div className="absolute bottom-6 left-6">
            <p className="font-sans text-sm text-primary-foreground/70">
              JS Wealth Map — ukážka plánu
            </p>
          </div>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 lg:gap-16 max-w-4xl mx-auto">
        <AnimatedSection>
          <p className="font-sans font-bold text-lg text-foreground mb-5">
            Vo videu ti ukazujem:
          </p>
          <div className="space-y-4">
            {bullets.map((b) => (
              <div key={b} className="flex gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  {b}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="lg:pt-2">
            <p className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-3">
              Chceš vidieť ako by vyzerala tvoja vlastná mapa?
            </p>
            <p className="font-sans text-muted-foreground mb-6">
              Začneme jedným hovorom.
            </p>
            <button onClick={scrollToBooking} className="btn-primary">
              Rezervovať úvodný hovor
            </button>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default VideoSection;
