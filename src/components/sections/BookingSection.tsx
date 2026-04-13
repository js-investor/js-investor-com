import AnimatedSection from "@/components/AnimatedSection";
import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const BookingSection = () => {
  const [selectedDay, setSelectedDay] = useState(15);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  const daysInMonth = 30;
  const firstDayOffset = 2;
  const timeSlots = ["09:00", "10:30", "13:00", "14:30", "16:00"];
  const dayNames = ["Po", "Ut", "St", "Št", "Pi", "So", "Ne"];

  return (
    <section id="booking" className="section-white section-padding relative overflow-hidden">
      <div className="absolute top-0 right-[10%] w-[500px] h-[500px] rounded-full bg-forest-glow/3 blur-[120px] pointer-events-none" />
      <div className="section-container relative z-10">
        {/* Part A — Bridge */}
        <AnimatedSection>
          <div className="max-w-3xl mx-auto mb-16">
            <p className="eyebrow">Prečo teraz</p>
            <h2 className="headline-serif mb-6">
              Každý mesiac odkladu ťa stojí reálne peniaze.
            </h2>
            <div className="space-y-4 font-sans text-muted-foreground leading-relaxed">
              <p>
                Matematika je jednoduchá. Ak ti na bežnom účte leží 30 000 €,
                inflácia ti z nich tichu zožerie približne 100 € mesačne. Za rok
                1 200 €. Za 5 rokov 6 000 €. A to bez toho aby si urobil
                akúkoľvek chybu — stačí nerobiť nič.
              </p>
              <p>
                Rovnako to platí pre peniaze v drahých bankových fondoch, v
                nesprávnom ETF, v chaotickom mixe. Každý mesiac odkladu = reálna
                strata.
              </p>
              <p className="font-semibold text-foreground">
                Úvodný hovor trvá 30 minút a nič nestojí. Najhoršie rozhodnutie
                je žiadne rozhodnutie.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Divider with glow */}
        <div className="max-w-3xl mx-auto mb-16 relative">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
          <div className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-forest-glow/20 to-transparent blur-sm" />
        </div>

        {/* Part B — Booking */}
        <AnimatedSection>
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="eyebrow">Rezervácia</p>
            <h2 className="headline-serif">Pripravený na úvodný hovor?</h2>
            <p className="sub-headline">
              Vyber si termín ktorý ti sedí. Hovor je bezplatný, trvá 30 minút,
              a prebieha online cez Google Meet alebo Zoom.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="max-w-2xl mx-auto card-glass-cream">
            {/* Message */}
            <div className="mb-8">
              <label className="font-sans font-semibold text-sm text-foreground block mb-2">
                Prečo si sa rozhodol ozvať sa práve teraz?{" "}
                <span className="font-normal text-muted-foreground">(jedna veta stačí)</span>
              </label>
              <p className="font-serif italic text-xs text-muted-foreground mb-3">
                Príklad: Dostal som väčší bonus a neviem čo s ním · Manželka je
                tehotná, chcem mať istotu · Mám peniaze na účte už 2 roky a stále
                otáľam · Sledujem ťa na IG a teraz mám konečne čas
              </p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value.slice(0, 200))}
                rows={3}
                maxLength={200}
                className="w-full rounded-xl border border-primary/20 bg-background/80 backdrop-blur-sm px-4 py-3 font-sans text-sm text-foreground resize-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-all"
                placeholder="Napíš krátku správu..."
              />
              <p className="font-sans text-xs text-muted-foreground text-right mt-1">
                {message.length}/200
              </p>
            </div>

            {/* Calendar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <p className="font-sans font-semibold text-foreground">
                  Apríl 2026
                </p>
                <button className="p-1.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-all">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <div className="grid grid-cols-7 gap-1 mb-2">
                {dayNames.map((d) => (
                  <div
                    key={d}
                    className="text-center font-sans text-xs font-medium text-muted-foreground py-1"
                  >
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOffset }).map((_, i) => (
                  <div key={`e-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => i + 1).map(
                  (day) => {
                    const isWeekend = ((day + firstDayOffset - 1) % 7) >= 5;
                    const isPast = day < 13;
                    const disabled = isWeekend || isPast;
                    return (
                      <button
                        key={day}
                        onClick={() => !disabled && setSelectedDay(day)}
                        disabled={disabled}
                        className={`aspect-square rounded-lg font-sans text-sm flex items-center justify-center transition-all ${
                          selectedDay === day
                            ? "bg-primary text-primary-foreground font-semibold shadow-[0_0_15px_hsl(152_60%_45%/0.3)]"
                            : disabled
                            ? "text-muted-foreground/40 cursor-not-allowed"
                            : "text-foreground hover:bg-primary/10 cursor-pointer"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            {/* Time slots */}
            <div className="space-y-2">
              <p className="font-sans text-sm font-medium text-foreground mb-3">
                Dostupné časy — {selectedDay}. apríl
              </p>
              {timeSlots.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTime(t)}
                  className={`w-full py-3 rounded-xl font-sans text-sm font-medium border transition-all ${
                    selectedTime === t
                      ? "bg-primary text-primary-foreground border-primary shadow-[0_0_20px_hsl(152_60%_45%/0.25)]"
                      : "bg-background/60 backdrop-blur-sm text-foreground border-primary/20 hover:border-primary/40 hover:bg-primary/5 cursor-pointer"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            {selectedTime && (
              <button className="btn-primary w-full mt-6">
                Potvrdiť termín — {selectedDay}. apríl o {selectedTime}
              </button>
            )}
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-10 text-sm font-sans text-muted-foreground">
            {["Bezplatné", "Online", "30 minút", "Diskrétne", "Bez záväzku"].map(
              (t, i) => (
                <span key={t} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  {t}
                  {i < 4 && <span className="ml-3">·</span>}
                </span>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default BookingSection;
