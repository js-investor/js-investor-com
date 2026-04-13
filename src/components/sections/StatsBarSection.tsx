const stats = [
  { value: "8+", label: "rokov skúseností" },
  { value: "531+", label: "klientov" },
  { value: "3M+ €", label: "v správe portfólií" },
  { value: "115k+", label: "sledovateľov na Instagrame" },
];

const StatsBarSection = () => (
  <section className="bg-[#29614A] text-cream min-h-[230px]">
    <div className="max-w-[1400px] mx-auto h-full px-5 md:px-10 lg:px-16 py-14 md:py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 h-full">
        {stats.map((item, index) => (
          <div
            key={item.value}
            className={`flex flex-col justify-center items-center text-center px-4 md:px-8 ${
              index > 0 ? "md:border-l md:border-cream/30" : ""
            }`}
          >
            <p className="[font-family:var(--font-serif)] text-4xl md:text-5xl lg:text-6xl font-bold text-cream leading-none">
              {item.value}
            </p>
            <p className="font-sans text-base md:text-lg text-cream/70 mt-2 whitespace-nowrap">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsBarSection;
