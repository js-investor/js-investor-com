import AnimatedSection from "@/components/AnimatedSection";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

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
            {" "}<strong>Uvidíš presne čo dostaneš po spolupráci.</strong> Diagnostiku, plán, konkrétne kroky.
            Bez floskúl, bez teórie.
          </p>
        </div>
      </AnimatedSection>

      <AnimatedSection>
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

      <AnimatedSection>
        <div className="text-center max-w-2xl mx-auto">
          <p className="[font-family:var(--font-serif)] text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground mb-6 md:mb-8">
            Chceš vedieť, ako <span className="italic text-primary">vyzeral tvoj plán</span>
          </p>
          <button type="button" onClick={scrollToBooking} className="btn-primary text-lg">
            Rezervovať úvodný hovor
          </button>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default VideoSection;
