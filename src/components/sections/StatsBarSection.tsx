const stats = [
  { value: "8+", label: "rokov skúseností" },
  { value: "531+", label: "klientov" },
  { value: "3M+ €", label: "v správe portfólií" },
  { value: "115k+", label: "sledovateľov na Instagrame" },
];

const StatsBarSection = () => (
  <section className="bg-[#29614A] text-cream min-h-[230px]">
    <div className="max-w-[1400px] mx-auto h-full px-5 md:px-10 lg:px-16 py-14 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 h-full gap-4 md:gap-0">
        {stats.map((item, index) => (
          <div
            key={item.value}
            className={`rounded-xl md:rounded-none flex flex-col justify-center items-center text-center px-4 py-3 md:px-8 md:py-0 ${
              index > 0 ? "md:border-l md:border-cream/30" : ""
            }`}
          >
            <p className="[font-family:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-extrabold text-cream leading-none">
              {item.value}
            </p>
            <p className="font-sans text-sm md:text-lg text-cream/70 mt-2 leading-snug">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBarSection;
