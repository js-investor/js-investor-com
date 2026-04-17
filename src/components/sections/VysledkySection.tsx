import AnimatedSection from "@/components/AnimatedSection";
import { LineChart } from "lucide-react";
import brandPattern from "@/assets/logo/js-brand-pattern.svg";
import { useState } from "react";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const stories = [
  {
    name: "Samuel",
    role: "Štátny zamestnanec",
    meta: "Investuje pravidelne | 3 roky",
    amount: "18 427 €",
    percent: "(+50,02 %)",
    returnPct: 50.02,
    trend: [8, 10, 11, 9, 13, 14, 15, 16, 15, 17, 18, 18.5],
  },
  {
    name: "Lukáš",
    role: "živnostník",
    meta: "Investuje pravidelne | 2 roky",
    amount: "1 905 €",
    percent: "(+35,96 %)",
    returnPct: 35.96,
    trend: [7, 8.5, 9.2, 7.9, 10, 8.6, 11.4, 12, 10.1, 12.8, 13.4, 14.1],
  },
  {
    name: "Braňo",
    role: "zamestnanie",
    meta: "Investuje pravidelne | 7 mesiacov",
    amount: "1 248 €",
    percent: "(+13,57 %)",
    returnPct: 13.57,
    trend: [6, 6.1, 6.2, 6.4, 6.3, 6.5, 6.6, 6.7, 6.9, 7, 7.2, 7.25],
  },
  {
    name: "Andrej",
    role: "podnikateľ",
    meta: "Investícia: 50 000 € | 2 roky",
    amount: "20 743 €",
    percent: "(+43,27 %)",
    returnPct: 43.27,
    trend: [10, 11, 12, 13, 11.5, 14, 15.5, 13.8, 16.2, 16.9, 18, 19.1],
  },
  {
    name: "Kristián",
    role: "zamestnanie",
    meta: "Investuje mesačne 300 € | 4 roky",
    amount: "8 870 €",
    percent: "(+41,26 %)",
    returnPct: 41.26,
    trend: [7.2, 7.8, 8.3, 8.7, 9.1, 8.1, 9.6, 10.8, 11.7, 12.6, 11.3, 13.1],
  },
  {
    name: "Peter",
    role: "podnikateľ",
    meta: "Za 3 roky postupne vložil 119 000 €",
    amount: "59 898 €",
    percent: "(+51,15 %)",
    returnPct: 51.15,
    trend: [8.1, 9.3, 10.4, 11.2, 12.4, 13.8, 12.2, 14.1, 15.4, 16.7, 15.5, 17.8],
  },
];

const maxReturnPct = Math.max(...stories.map((story) => story.returnPct));
const minReturnPct = -8;

const getScaledReturns = (values: number[], targetReturnPct: number) => {
  if (values.length < 2 || values[0] === 0) return values.map(() => 0);
  const base = values[0];
  const rawReturns = values.map((value) => (value - base) / base);
  const rawEndReturn = rawReturns[rawReturns.length - 1];
  if (rawEndReturn === 0) return rawReturns.map(() => 0);
  const scale = (targetReturnPct / 100) / rawEndReturn;
  return rawReturns.map((rawReturn) => rawReturn * scale);
};

const getSparklinePath = (
  scaledReturns: number[],
  width = 320,
  height = 52,
  topPadding = 0,
  maxPct = 55,
  minPct = -8,
) => {
  if (scaledReturns.length < 2) return "";
  const minReturn = minPct / 100;
  const maxReturn = maxPct / 100;
  const range = maxReturn - minReturn || 1;
  const drawableHeight = Math.max(height - topPadding, 1);
  return scaledReturns
    .map((scaledReturn, index) => {
      const x = (index / (scaledReturns.length - 1)) * width;
      const clampedReturn = Math.min(Math.max(scaledReturn, minReturn), maxReturn);
      const y = height - ((clampedReturn - minReturn) / range) * drawableHeight;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
};

const renderMeta = (meta: string) => {
  const parts = meta.split("|").map((part) => part.trim());
  if (parts.length < 2) return meta;
  const left = parts.slice(0, -1).join(" | ");
  const duration = parts[parts.length - 1];
  return (
    <>
      {left} | <strong className="font-bold text-[#1a1a1a]">{duration}</strong>
    </>
  );
};

const VysledkySection = () => {
  const [mobileSlide, setMobileSlide] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchStartY, setTouchStartY] = useState<number | null>(null);
  const [touchCurrentX, setTouchCurrentX] = useState<number | null>(null);
  const [touchCurrentY, setTouchCurrentY] = useState<number | null>(null);

  const goToSlide = (index: number) => {
    setMobileSlide(Math.max(0, Math.min(index, stories.length - 1)));
  };

  const onTouchEnd = () => {
    if (
      touchStartX === null ||
      touchStartY === null ||
      touchCurrentX === null ||
      touchCurrentY === null
    ) {
      setTouchStartX(null);
      setTouchStartY(null);
      setTouchCurrentX(null);
      setTouchCurrentY(null);
      return;
    }

    const deltaX = touchStartX - touchCurrentX;
    const deltaY = Math.abs(touchStartY - touchCurrentY);
    const swipeThreshold = 36;

    // Swipe posun riešime iba vtedy, keď je horizontálny pohyb dominantný.
    if (Math.abs(deltaX) > deltaY && Math.abs(deltaX) > swipeThreshold) {
      if (deltaX > 0) goToSlide(mobileSlide + 1);
      if (deltaX < 0) goToSlide(mobileSlide - 1);
    }

    setTouchStartX(null);
    setTouchStartY(null);
    setTouchCurrentX(null);
    setTouchCurrentY(null);
  };

  return (
    <section
      id="vysledky"
      className="relative overflow-hidden py-20 md:py-24 lg:py-28 scroll-mt-24"
      style={{ backgroundColor: "#fff9f5" }}
    >
      <div className="mx-auto w-full max-w-[1140px] px-5 md:px-8 lg:px-10">
      <AnimatedSection>
        <div className="mx-auto max-w-3xl text-center mb-14 md:mb-16 lg:mb-[4.5rem]">
          <h2 className="[font-family:var(--font-serif)] text-[1.875rem] sm:text-[2.125rem] md:text-[2.5rem] font-bold leading-[1.15] tracking-tight text-[#1a1a1a]">
            Toto sú <span className="italic text-[#296A52]">výsledky ľudí,</span> ktorým som
            postavil plán.
          </h2>
          <p className="mt-5 md:mt-6 font-sans text-base md:text-[1.125rem] leading-relaxed text-[#666]">
            <strong className="text-[#1a1a1a]">Nikto z nich nemal všetko vyriešené.</strong> Každý prišiel s vlastnou situáciou. Chaos, banka,
            žiadny plán. Spolu sme to rozmotali.
          </p>
        </div>
      </AnimatedSection>

      <div className="md:hidden">
        <div
          className="overflow-hidden"
          onTouchStart={(e) => {
            setTouchStartX(e.touches[0].clientX);
            setTouchStartY(e.touches[0].clientY);
            setTouchCurrentX(e.touches[0].clientX);
            setTouchCurrentY(e.touches[0].clientY);
          }}
          onTouchMove={(e) => {
            setTouchCurrentX(e.touches[0].clientX);
            setTouchCurrentY(e.touches[0].clientY);
          }}
          onTouchEnd={onTouchEnd}
          onTouchCancel={() => {
            setTouchStartX(null);
            setTouchStartY(null);
            setTouchCurrentX(null);
            setTouchCurrentY(null);
          }}
        >
          <div
            className="flex transition-transform duration-300 ease-out"
            style={{ transform: `translateX(-${mobileSlide * 100}%)` }}
          >
            {stories.map((story, i) => (
              <div key={story.name} className="w-full shrink-0 px-1.5">
                <article className="flex flex-col h-full rounded-[14px] border border-[#e7e2da] bg-white px-4 py-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
                  <div className="flex items-start gap-3.5">
                    <div
                      className="h-10 w-10 shrink-0 rounded-[10px] flex items-center justify-center shadow-sm bg-center bg-cover"
                      style={{ backgroundImage: `url(${brandPattern})` }}
                    >
                      <LineChart
                        className="w-[18px] h-[18px] text-white -translate-x-0.5"
                        strokeWidth={2.25}
                        aria-hidden
                      />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <p className="[font-family:var(--font-serif)] text-[1.625rem] font-bold leading-none text-[#296A52]">
                        {story.name}
                      </p>
                      <p className="mt-2 font-sans text-[0.8125rem] leading-snug text-[#666]">
                        {story.role}
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-center font-sans text-sm leading-relaxed text-[#1a1a1a]/75">
                    {renderMeta(story.meta)}
                  </p>

                  <div className="mt-5 text-center">
                    <p className="font-sans leading-tight">
                      <span className="text-[0.9375rem] font-bold text-[#296A52]">Zisk:</span>{" "}
                      <span className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight tabular-nums">
                        {story.amount}
                      </span>
                    </p>
                    <p className="mt-1 font-sans text-[0.8125rem] font-normal text-[#666] tabular-nums leading-snug">
                      {story.percent}
                    </p>
                  </div>

                  <div className="mt-6 overflow-hidden rounded-[10px] border border-[#e8e3db] bg-[#f3efe8] pt-1.5">
                    <svg
                      viewBox="0 0 320 72"
                      className="block w-full h-[4.25rem]"
                      role="img"
                      aria-label={`Trend výnosu klienta ${story.name}`}
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient id={`vysledky-fill-mobile-${i}`} x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#296A52" stopOpacity="0.18" />
                          <stop offset="100%" stopColor="#296A52" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d={`${getSparklinePath(
                          getScaledReturns(story.trend, story.returnPct),
                          320,
                          56,
                          12,
                          maxReturnPct,
                          minReturnPct,
                        )} L 320 72 L 0 72 Z`}
                        fill={`url(#vysledky-fill-mobile-${i})`}
                      />
                      <path
                        d={getSparklinePath(
                          getScaledReturns(story.trend, story.returnPct),
                          320,
                          56,
                          12,
                          maxReturnPct,
                          minReturnPct,
                        )}
                        fill="none"
                        stroke="#296A52"
                        strokeWidth="2.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {stories.map((story, index) => (
            <button
              key={`dot-${story.name}`}
              type="button"
              onClick={() => goToSlide(index)}
              aria-label={`Prejsť na kartu ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-200 ${
                index === mobileSlide ? "w-6 bg-primary" : "w-2.5 bg-primary/25"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
        {stories.map((story, i) => (
          <AnimatedSection key={story.name} delay={i * 0.06}>
            <article className="flex flex-col h-full rounded-[14px] border border-[#e7e2da] bg-white px-4 py-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
              <div className="flex items-start gap-3.5">
                <div
                  className="h-10 w-10 shrink-0 rounded-[10px] flex items-center justify-center shadow-sm bg-center bg-cover"
                  style={{ backgroundImage: `url(${brandPattern})` }}
                >
                  <LineChart
                    className="w-[18px] h-[18px] text-white -translate-x-0.5"
                    strokeWidth={2.25}
                    aria-hidden
                  />
                </div>
                <div className="min-w-0 pt-0.5">
                  <p className="[font-family:var(--font-serif)] text-[1.625rem] sm:text-[1.75rem] md:text-[1.875rem] font-bold leading-none text-[#296A52]">
                    {story.name}
                  </p>
                  <p className="mt-2 font-sans text-[0.8125rem] md:text-sm leading-snug text-[#666]">
                    {story.role}
                  </p>
                </div>
              </div>

              <p className="mt-6 text-center font-sans text-sm md:text-base leading-relaxed text-[#1a1a1a]/75">
                {renderMeta(story.meta)}
              </p>

              <div className="mt-5 text-center">
                <p className="font-sans leading-tight">
                  <span className="text-[0.9375rem] md:text-base font-bold text-[#296A52]">Zisk:</span>{" "}
                  <span className="text-2xl font-extrabold text-[#1a1a1a] tracking-tight tabular-nums">
                    {story.amount}
                  </span>
                </p>
                <p className="mt-1 font-sans text-[0.8125rem] md:text-sm font-normal text-[#666] tabular-nums leading-snug">
                  {story.percent}
                </p>
              </div>

              <div className="mt-6 overflow-hidden rounded-[10px] border border-[#e8e3db] bg-[#f3efe8] pt-1.5">
                <svg
                  viewBox="0 0 320 72"
                  className="block w-full h-[4.25rem] md:h-[4.75rem]"
                  role="img"
                  aria-label={`Trend výnosu klienta ${story.name}`}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`vysledky-fill-${i}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#296A52" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#296A52" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${getSparklinePath(
                      getScaledReturns(story.trend, story.returnPct),
                      320,
                      56,
                      12,
                      maxReturnPct,
                      minReturnPct,
                    )} L 320 72 L 0 72 Z`}
                    fill={`url(#vysledky-fill-${i})`}
                  />
                  <path
                    d={getSparklinePath(
                      getScaledReturns(story.trend, story.returnPct),
                      320,
                      56,
                      12,
                      maxReturnPct,
                      minReturnPct,
                    )}
                    fill="none"
                    stroke="#296A52"
                    strokeWidth="2.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>

      <AnimatedSection>
        <div className="mx-auto mt-10 md:mt-12 max-w-5xl">
          <p className="text-center font-sans text-xs md:text-sm leading-relaxed text-[#666]">
            Uvedené výsledky sú individuálne prípady klientov z obdobia 2021-2024, ktoré bolo
            charakteristické silným rastom globálnych akciových trhov. Nie sú reprezentatívnou
            vzorkou všetkých klientov a nezaručujú podobné výsledky v budúcnosti. Minulá výkonnosť
            nie je zárukou budúcich výnosov. Každý klient mal individuálny plán postavený na jeho
            rizikovom profile, horizonte a cieľoch.
          </p>
          <div className="mt-7 md:mt-8 text-center">
            <button type="button" onClick={scrollToBooking} className="btn-primary text-lg">
              Rezervovať úvodný hovor
            </button>
          </div>
        </div>
      </AnimatedSection>
    </div>
    </section>
  );
};

export default VysledkySection;
