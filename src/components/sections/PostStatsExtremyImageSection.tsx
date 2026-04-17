import extremyPortrait from "@/assets/images/ivan-jasik-najdrahsie-investovanie-je-bez-strategie.jpeg";
import { motion } from "framer-motion";

const PostStatsExtremyImageSection = () => (
  <section className="relative px-5 md:px-10 lg:px-16 py-14 md:py-20" style={{ backgroundColor: "#F7F3EE" }}>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto flex justify-center"
    >
      <div className="relative w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[390px]">
        <div className="absolute -inset-3 rounded-3xl bg-black/8 blur-xl" />
        <img
          src={extremyPortrait}
          alt="Najdrahšie investovanie je bez stratégie"
          className="relative block w-full h-auto object-contain rounded-3xl ring-1 ring-black/20"
        />
      </div>
    </motion.div>
  </section>
);

export default PostStatsExtremyImageSection;
