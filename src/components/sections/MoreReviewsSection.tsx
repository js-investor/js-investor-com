import recenzia1 from "@/assets/images/recenzia-1.png";
import recenzia2 from "@/assets/images/recenzia-2.png";
import recenzia3 from "@/assets/images/recenzia-3.png";
import recenzia4 from "@/assets/images/recenzia-4.png";
import recenzia5 from "@/assets/images/recenzia-5.png";

/** Na šírku (landscape): 1–3 · Na výšku (portrait): 4–5 */
const landscapeSrc = [
  { src: recenzia1, alt: "Recenzia klienta — screenshot 1" },
  { src: recenzia2, alt: "Recenzia klienta — screenshot 2" },
  { src: recenzia3, alt: "Recenzia klienta — screenshot 3" },
] as const;

const portraitSrc = [
  { src: recenzia4, alt: "Recenzia klienta — screenshot 4" },
  { src: recenzia5, alt: "Recenzia klienta — screenshot 5" },
] as const;

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const MoreReviewsSection = () => (
  <section
    className="relative overflow-hidden py-24 md:py-16 lg:py-20"
    style={{ backgroundColor: "#F7F3EE" }}
  >
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <div className="mx-auto max-w-5xl text-center">
        <h2 className="headline-serif">
          <span className="text-primary font-bold">Ďalšie skúsenosti ľudí</span>, ktorí so mnou spolupracujú
        </h2>
      </div>

      <div className="mx-auto mt-10 max-w-6xl">
        <div className="flex flex-col gap-6 md:gap-8">
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {landscapeSrc.map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="max-h-[230px] sm:max-h-[250px] md:max-h-[270px] w-auto max-w-[min(100%,320px)] rounded-lg object-contain object-top ring-1 ring-black/10"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-5">
            {portraitSrc.map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="max-h-[360px] sm:max-h-[400px] md:max-h-[440px] w-auto max-w-[min(100%,300px)] rounded-lg object-contain object-top ring-1 ring-black/10"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-12 text-center">
        <button type="button" onClick={scrollToBooking} className="btn-primary text-lg">
          Rezervovať úvodný hovor
        </button>
      </div>
    </div>
  </section>
);

export default MoreReviewsSection;
