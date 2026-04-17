import AnimatedSection from "@/components/AnimatedSection";
import { Check } from "lucide-react";

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
  <section id="co-dostanes" className="section-cream section-padding relative overflow-hidden scroll-mt-24">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="text-center max-w-5xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow">Čo presne dostaneš</p>
          <h2 className="headline-serif">
            Takto vyzerá <span className="italic text-primary">tvoj osobný finančný plán.</span>
          </h2>
          <p className="sub-headline">
            Pripravil som krátke video, kde ti ukazujem reálny vzor JS Wealth Map.
            {" "}Uvidíš presne čo dostaneš po spolupráci. Diagnostiku, plán, konkrétne kroky.
            Bez floskúl, bez teórie.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
        {/* Vimeo embed */}
        <div className="relative max-w-4xl mx-auto mb-12 md:mb-16">
          <div className="relative rounded-[20px] overflow-hidden aspect-video ring-1 ring-primary/20 bg-black">
            <iframe
              src="https://player.vimeo.com/video/1183644074?autoplay=0&title=0&portrait=0&byline=0"
              title="Vimeo video"
              allow="autoplay; fullscreen; picture-in-picture"
              className="block w-full h-full align-top"
            />
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
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                  {b.startsWith("Ako vyzerá diagnostická sekcia") && (
                    <>
                      <strong>Ako vyzerá diagnostická sekcia</strong> — kde presne vidíš
                      stav svojich financií dnes
                    </>
                  )}
                  {b.startsWith("Ako staviam plán na mieru") && (
                    <>
                      <strong>Ako staviam plán na mieru</strong> — podľa tvojho príjmu,
                      cieľov a horizontu
                    </>
                  )}
                  {b.startsWith("Ako rátame kroky") && (
                    <>
                      <strong>Ako rátame kroky</strong> — koľko investovať, kedy, do čoho
                    </>
                  )}
                  {b.startsWith("Ako cielime k rente") && (
                    <>
                      <strong>Ako cielime k rente</strong> — finálny výstupný plán
                    </>
                  )}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="lg:pt-2">
            <p className="[font-family:var(--font-serif)] text-xl md:text-2xl font-bold text-foreground mb-3">
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
