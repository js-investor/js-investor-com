import zlozenyUrokTable from "@/assets/images/js-tabulka-porovnanie-zlozeny-urok.png";

const scrollToBooking = () => {
  document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
};

const KonzultaciaZlozenyUrokSection = () => (
  <section className="section-white section-padding">
    <div className="section-container">
      <div className="mx-auto w-full max-w-[1080px] text-center">
        <h2 className="headline-serif mb-6 md:mb-8">
          Koľko ťa môže <span className="text-primary italic">stáť čakanie?</span>
        </h2>
        <img
          src={zlozenyUrokTable}
          alt="Porovnanie zloženého úroku"
          className="w-full md:w-[60%] mx-auto h-auto rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] ring-1 ring-black/5"
          loading="lazy"
          decoding="async"
        />
        <p className="mt-8 md:mt-10 font-sans text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Tabuľka je modelový príklad, ktorý ukazuje, <strong className="text-foreground">prečo sa pri investovaní neoplatí čakať.</strong>
          Príklad je rátaný na 10% ročnom výnose.
        </p>
        <div className="mt-8">
          <button type="button" onClick={scrollToBooking} className="btn-primary text-lg">
            Chcem začať teraz
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default KonzultaciaZlozenyUrokSection;
