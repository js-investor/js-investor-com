import { Check } from "lucide-react";
import { FormEvent, useState } from "react";

const MAKE_WEBHOOK_URL =
  import.meta.env.VITE_MAKE_WEBHOOK_URL ||
  "https://hook.eu2.make.com/4vi45uc6iyf33zllkgpihikt7z7cmwaq";

const BookingSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "webhook_gone" | "network_error"
  >("idle");

  const selectClassName =
    "w-full appearance-none rounded-xl border border-[#2f5f4f]/35 bg-white px-4 py-3 pr-12 font-sans text-lg text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] outline-none transition hover:border-[#2f5f4f]/55 focus:border-primary focus:ring-2 focus:ring-primary/20";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("source", "konzultacia-form");
    formData.append("submittedAt", new Date().toISOString());
    const payload = new URLSearchParams();
    for (const [key, value] of formData.entries()) {
      payload.append(key, String(value));
    }
    const abortController = new AbortController();
    const timeout = window.setTimeout(() => abortController.abort(), 12000);

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        body: payload,
        signal: abortController.signal,
      });
      window.clearTimeout(timeout);

      if (response.status === 410) {
        setSubmitStatus("webhook_gone");
        return;
      }
      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      setSubmitStatus("success");
      form.reset();
    } catch {
      window.clearTimeout(timeout);
      setSubmitStatus("network_error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="bg-footer-bg section-padding relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-dot-grid opacity-20" />
      <div className="section-container relative z-10">
        <div className="relative z-10 mx-auto mb-12 max-w-5xl text-center md:mb-16">
          <h2 className="headline-serif">
            <span className="text-[#d4dfdb] font-bold">Pripravený na</span>{" "}
            <span className="text-cream">úvodný hovor?</span>
          </h2>
          <p className="sub-headline !text-cream/85">
            Vyber si termín ktorý ti sedí.{" "}
            <strong className="text-cream">Hovor je bezplatný, trvá 30–45 minút,</strong> a prebieha online cez Google Meet.
          </p>
          <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-sans text-cream/80 md:mt-6">
            {["Bezplatný úvodný hovor", "Online 30 minút", "Bez záväzku a predaja"].map(
              (item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-primary" />
                  {item}
                </span>
              )
            )}
          </div>
        </div>

        <div className="mx-auto max-w-5xl rounded-2xl border border-white/20 bg-[#f2ede9] p-4 md:p-6">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="goal" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                Aký je tvoj cieľ?
              </label>
              <div className="relative">
                <select
                  id="goal"
                  name="goal"
                  required
                  defaultValue="Chcem pravidelnú rentu"
                  className={selectClassName}
                >
                  <option>Chcem pravidelnú rentu</option>
                  <option>Chcem budovať majetok, následne čerpať rentu</option>
                  <option>Chcem si vytvoriť rezervy</option>
                  <option>Mám iný cieľ</option>
                </select>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#2f5f4f]/85"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path d="M5.25 7.75a.75.75 0 0 1 1.06 0L10 11.44l3.69-3.69a.75.75 0 1 1 1.06 1.06l-4.22 4.22a.75.75 0 0 1-1.06 0L5.25 8.81a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="experience" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                Aké máš skúsenosti?
              </label>
              <div className="relative">
                <select
                  id="experience"
                  name="experience"
                  required
                  defaultValue="Som nováčik. Chcem sa naučiť investovať."
                  className={selectClassName}
                >
                  <option>Som nováčik. Chcem sa naučiť investovať.</option>
                  <option>Viem o tom veľa, ale ešte som nezačal.</option>
                  <option>Som skúsený. Mám len pár otázok</option>
                </select>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#2f5f4f]/85"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path d="M5.25 7.75a.75.75 0 0 1 1.06 0L10 11.44l3.69-3.69a.75.75 0 1 1 1.06 1.06l-4.22 4.22a.75.75 0 0 1-1.06 0L5.25 8.81a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="priority" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                Čo chceš aktuálne najviac vyriešiť?
              </label>
              <div className="relative">
                <select
                  id="priority"
                  name="priority"
                  required
                  defaultValue="Chcem začať investovať"
                  className={selectClassName}
                >
                  <option>Chcem začať investovať</option>
                  <option>Už investujem, ale chcem vedieť, či správne</option>
                  <option>Mám peniaze v banke a neviem, čo s nimi</option>
                  <option>Chcem si vytvoriť rentu / pasívny príjem</option>
                  <option>Chcem skontrolovať poplatky a existujúce investície</option>
                  <option>Chcem riešiť investičnú nehnuteľnosť</option>
                  <option>Iné</option>
                </select>
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#2f5f4f]/85"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                    <path d="M5.25 7.75a.75.75 0 0 1 1.06 0L10 11.44l3.69-3.69a.75.75 0 1 1 1.06 1.06l-4.22 4.22a.75.75 0 0 1-1.06 0L5.25 8.81a.75.75 0 0 1 0-1.06Z" />
                  </svg>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label htmlFor="firstName" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                  Meno
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Meno"
                  className="w-full rounded-md border border-black/20 bg-white px-4 py-3 font-sans text-lg text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                  Priezvisko
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Priezvisko"
                  className="w-full rounded-md border border-black/20 bg-white px-4 py-3 font-sans text-lg text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full rounded-md border border-black/20 bg-white px-4 py-3 font-sans text-lg text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <div>
                <label htmlFor="phone" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
                  Telefón
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Telefón"
                  className="w-full rounded-md border border-black/20 bg-white px-4 py-3 font-sans text-lg text-foreground outline-none transition placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div className="pt-2 text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary min-w-[240px] text-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Odosielam..." : "Odoslať formulár"}
              </button>
              {submitStatus === "success" ? (
                <p className="mt-4 font-sans text-sm md:text-base text-primary">
                  Ďakujem, formulár bol úspešne odoslaný. Ozvem sa ti do 48 hodín.
                </p>
              ) : null}
              {submitStatus === "webhook_gone" ? (
                <p className="mt-4 font-sans text-sm md:text-base text-red-600">
                  Formulár sa nepodarilo odoslať, pretože webhook už nie je aktívny (410 Gone).
                  Prosím aktualizuj Make webhook URL.
                </p>
              ) : null}
              {submitStatus === "network_error" ? (
                <p className="mt-4 font-sans text-sm md:text-base text-red-600">
                  Formulár sa nepodarilo odoslať kvôli sieťovej/CORS chybe. Skús to prosím znovu
                  alebo ma kontaktuj na WhatsAppe.
                </p>
              ) : null}
              {submitStatus === "error" ? (
                <p className="mt-4 font-sans text-sm md:text-base text-red-600">
                  Odoslanie sa nepodarilo. Skús to prosím znovu alebo ma kontaktuj na WhatsAppe.
                </p>
              ) : null}
            </div>
          </form>

        </div>

        <div className="mt-10 text-center">
          <a
            href="https://wa.me/421902519328"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-[#d4dfdb]/70 bg-transparent px-8 py-3.5 font-sans text-base font-semibold text-cream transition-colors hover:bg-white/10"
          >
            Alebo ma kontaktuj na WhatsAppe
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
