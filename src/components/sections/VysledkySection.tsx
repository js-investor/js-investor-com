import AnimatedSection from "@/components/AnimatedSection";
import { LineChart } from "lucide-react";

const stories = [
  {
    name: "Samuel",
    role: "Štátny zamestnanec",
    meta: "Investuje pravidelne | 3 roky",
    amount: "18 427 €",
    percent: "(+50,02 %)",
    trend: [8, 10, 11, 9, 13, 14, 15, 16, 15, 17, 18, 18.5],
  },
  {
    name: "Lukáš",
    role: "živnostník",
    meta: "Investuje pravidelne | 2 roky",
    amount: "1 905 €",
    percent: "(+35,96 %)",
    trend: [7, 8.5, 9.2, 7.9, 10, 8.6, 11.4, 12, 10.1, 12.8, 13.4, 14.1],
  },
  {
    name: "Braňo",
    role: "zamestnanie",
    meta: "Investuje pravidelne | 7 mesiacov",
    amount: "1 248 €",
    percent: "(+13,57 %)",
    trend: [6, 6.1, 6.2, 6.4, 6.3, 6.5, 6.6, 6.7, 6.9, 7, 7.2, 7.25],
  },
  {
    name: "Andrej",
    role: "podnikateľ",
    meta: "Investícia: 50 000 € | 2 roky",
    amount: "20 743 €",
    percent: "(+43,27 %)",
    trend: [10, 11, 12, 13, 11.5, 14, 15.5, 13.8, 16.2, 16.9, 18, 19.1],
  },
  {
    name: "Kristián",
    role: "zamestnanie",
    meta: "Investuje mesačne 300 € | 4 roky",
    amount: "8 870 €",
    percent: "(+41,26 %)",
    trend: [7.2, 7.8, 8.3, 8.7, 9.1, 8.1, 9.6, 10.8, 11.7, 12.6, 11.3, 13.1],
  },
  {
    name: "Peter",
    role: "podnikateľ",
    meta: "Za 3 roky postupne vložil 119 000 €",
    amount: "59 898 €",
    percent: "(+51,15 %)",
    trend: [8.1, 9.3, 10.4, 11.2, 12.4, 13.8, 12.2, 14.1, 15.4, 16.7, 15.5, 17.8],
  },
];

const getSparklinePath = (values: number[], width = 320, height = 56) => {
  if (values.length < 2) return "";
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  return values
    .map((value, index) => {
      const x = (index / (values.length - 1)) * width;
      const y = height - ((value - min) / range) * height;
      return `${index === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
};

const VysledkySection = () => (
  <section className="relative overflow-hidden py-20 md:py-24 lg:py-28" style={{ backgroundColor: "#fff9f5" }}>
    <div className="mx-auto w-full max-w-[1140px] px-5 md:px-8 lg:px-10">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center mb-12 md:mb-14 lg:mb-16">
          <h2 className="[font-family:var(--font-serif)] text-[2.1rem] md:text-5xl font-bold leading-tight text-[#1a1a1a]">
            <span className="italic text-[#296A52]">Skutočné výsledky</span> našich klientov
          </h2>
          <p className="mt-5 font-sans text-base md:text-lg leading-relaxed text-[#666]">
            Ukážka <strong className="text-[#1a1a1a]">dlhodobého zhodnotenia majetku</strong> v rámci našich riadených ETF portfólií.
          </p>
        </div>
      </AnimatedSection>

      <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-2 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible">
        {stories.map((story, i) => (
          <AnimatedSection key={story.name} delay={i * 0.06}>
            <article className="min-w-[288px] sm:min-w-[340px] snap-start md:min-w-0 h-full rounded-2xl border border-[#e7e2da] bg-white p-5 md:p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)]">
              <div className="flex items-start gap-3.5">
                <div className="h-9 w-9 shrink-0 rounded-xl bg-[#296A52] flex items-center justify-center">
                  <LineChart className="w-4 h-4 text-white" strokeWidth={2.25} />
                </div>
                <div>
                  <p className="[font-family:var(--font-serif)] text-2xl leading-none font-bold text-[#1a1a1a]">
                    {story.name}
                  </p>
                  <p className="mt-1.5 font-sans text-[15px] leading-snug text-[#666]">
                    {story.role}
                  </p>
                </div>
              </div>

              <p className="mt-5 font-sans text-[15px] text-[#666]">
                {story.meta}
              </p>

              <p className="mt-4 [font-family:var(--font-serif)] text-[2rem] md:text-[2.1rem] font-bold leading-tight text-[#1a1a1a]">
                <span className="text-[#296A52]">Zisk:</span> {story.amount} <span className="text-[0.9em]">{story.percent}</span>
              </p>

              <div className="mt-5 rounded-xl border border-[#ece7df] bg-[#f7f4ef] p-3">
                <svg
                  viewBox="0 0 320 64"
                  className="w-full h-16"
                  role="img"
                  aria-label={`Trend výnosu klienta ${story.name}`}
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id={`fill-${story.name}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#296A52" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#296A52" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d={`${getSparklinePath(story.trend, 320, 52)} L 320 64 L 0 64 Z`}
                    fill={`url(#fill-${story.name})`}
                  />
                  <path
                    d={getSparklinePath(story.trend, 320, 52)}
                    fill="none"
                    stroke="#296A52"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </article>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default VysledkySection;
