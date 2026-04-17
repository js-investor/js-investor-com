import { motion } from "framer-motion";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const PostStatsExtremySection = () => (
  <section className="relative overflow-hidden" style={{ backgroundColor: "#F0ECE6" }}>
    <div className="absolute inset-0 bg-dot-grid opacity-40" />
    <div className="absolute top-20 right-[20%] w-[400px] h-[400px] rounded-full bg-primary/5 blur-[100px] pointer-events-none" />
    <div className="absolute bottom-0 left-[10%] w-[300px] h-[300px] rounded-full bg-forest-glow/5 blur-[80px] pointer-events-none" />

    <div className="relative z-10 px-5 md:px-10 lg:px-16 py-20 md:py-24 max-w-[1180px] mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="mx-auto max-w-[760px] text-center"
      >
        <h2 className="headline-serif mb-6 md:mb-8">
          Stretávam sa s <span className="italic text-primary">dvoma extrémami.</span>
        </h2>
        <p className="text-lg md:text-xl font-sans text-muted-foreground leading-relaxed mb-8">
          Ľudia buď neinvestujú vôbec a prichádzajú o peniaze cez infláciu, alebo investujú, ale
          neefektívne — bez stratégie a so zbytočnými poplatkami, ktoré ich každý rok brzdia.
        </p>
        <button type="button" onClick={scrollToBooking} className="btn-primary text-lg">
          Rezervovať úvodný hovor
        </button>
      </motion.div>
    </div>
  </section>
);

export default PostStatsExtremySection;
