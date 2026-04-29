import { Check, Mail, Phone } from "lucide-react";
import { FormEvent, useState } from "react";
import type { ReactNode } from "react";
import ivanBookingImage from "@/assets/images/jsinvestor-biznis-portret-ivan-interier-svetlo.jpg";

const MAKE_WEBHOOK_URL = import.meta.env.VITE_MAKE_WEBHOOK_URL;

type BookingSectionProps = {
  heading?: ReactNode;
  subheading?: ReactNode;
  bullets?: string[];
  variant?: "fullGreen" | "cardOnLight";
};

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
    <path
      fill="currentColor"
      d="M20.52 3.48A11.9 11.9 0 0 0 12.05 0C5.45 0 .1 5.34.1 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.28-1.64a11.9 11.9 0 0 0 5.76 1.47h.01c6.6 0 11.95-5.34 11.95-11.92a11.86 11.86 0 0 0-3.48-8.43Zm-8.47 18.33h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.73.97 1-3.63-.24-.37a9.87 9.87 0 0 1-1.52-5.26c0-5.46 4.45-9.9 9.91-9.9 2.65 0 5.13 1.03 6.99 2.89a9.83 9.83 0 0 1 2.91 7c0 5.46-4.45 9.9-9.9 9.9Zm5.43-7.42c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.95 1.15-.17.2-.35.22-.64.07-.3-.15-1.27-.47-2.41-1.5-.89-.8-1.49-1.79-1.66-2.09-.17-.3-.02-.45.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.49s1.08 2.89 1.23 3.09c.15.2 2.12 3.24 5.14 4.55.72.31 1.28.49 1.72.63.73.23 1.4.2 1.93.12.59-.09 1.75-.72 1.99-1.41.25-.7.25-1.29.17-1.42-.07-.12-.27-.2-.57-.35Z"
    />
  </svg>
);

const BookingSection = ({
  heading = (
    <>
      <span className="text-[#d4dfdb] font-bold">Pripravený na</span> <span className="text-cream">úvodný hovor?</span>
    </>
  ),
  subheading = (
    <>
      Vyber si termín ktorý ti sedí. <strong className="text-cream">Hovor je bezplatný, trvá 30–45 minút,</strong> a prebieha
      online cez Google Meet.
    </>
  ),
  bullets = ["Bezplatný úvodný hovor", "Online 30 minút", "Bez záväzku a predaja"],
  variant = "fullGreen",
}: BookingSectionProps) => {
  const isCardOnLight = variant === "cardOnLight";
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error" | "webhook_gone" | "network_error" | "config_error"
  >("idle");

  const selectClassName =
    "w-full appearance-none rounded-xl border border-[#2f5f4f]/35 bg-white px-4 py-3 pr-12 font-sans text-lg text-foreground shadow-[inset_0_1px_0_rgba(255,255,255,0.75)] outline-none transition hover:border-[#2f5f4f]/55 focus:border-primary focus:ring-2 focus:ring-primary/20";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("idle");

    if (!MAKE_WEBHOOK_URL) {
      setSubmitStatus("config_error");
      return;
    }

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

  const formContent = (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="goal" className="mb-2 block font-serif text-xl font-bold text-[#2f5f4f]">
          Aký je tvoj cieľ?
        </label>
        <div className="relative">
          <select id="goal" name="goal" required defaultValue="Chcem pravidelnú rentu" className={selectClassName}>
            <option>Chcem pravidelnú rentu</option>
            <option>Chcem budovať majetok, následne čerpať rentu</option>
            <option>Chcem si vytvoriť rezervy</option>
            <option>Mám iný cieľ</option>
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#2f5f4f]/85">
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
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#2f5f4f]/85">
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
          <select id="priority" name="priority" required defaultValue="Chcem začať investovať" className={selectClassName}>
            <option>Chcem začať investovať</option>
            <option>Už investujem, ale chcem vedieť, či správne</option>
            <option>Mám peniaze v banke a neviem, čo s nimi</option>
            <option>Chcem si vytvoriť rentu / pasívny príjem</option>
            <option>Chcem skontrolovať poplatky a existujúce investície</option>
            <option>Chcem riešiť investičnú nehnuteľnosť</option>
            <option>Iné</option>
          </select>
          <span aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-[#2f5f4f]/85">
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
          <p className="mt-4 font-sans text-sm md:text-base text-primary">Ďakujem, formulár bol úspešne odoslaný. Ozvem sa ti do 48 hodín.</p>
        ) : null}
        {submitStatus === "webhook_gone" ? (
          <p className="mt-4 font-sans text-sm md:text-base text-red-600">
            Formulár sa nepodarilo odoslať, pretože webhook už nie je aktívny (410 Gone). Prosím aktualizuj Make webhook URL.
          </p>
        ) : null}
        {submitStatus === "network_error" ? (
          <p className="mt-4 font-sans text-sm md:text-base text-red-600">
            Formulár sa nepodarilo odoslať kvôli sieťovej/CORS chybe. Skús to prosím znovu alebo ma kontaktuj na WhatsAppe.
          </p>
        ) : null}
        {submitStatus === "error" ? (
          <p className="mt-4 font-sans text-sm md:text-base text-red-600">
            Odoslanie sa nepodarilo. Skús to prosím znovu alebo ma kontaktuj na WhatsAppe.
          </p>
        ) : null}
        {submitStatus === "config_error" ? (
          <p className="mt-4 font-sans text-sm md:text-base text-red-600">
            Formulár nie je nakonfigurovaný. Chýba Vercel premenná VITE_MAKE_WEBHOOK_URL.
          </p>
        ) : null}
      </div>
    </form>
  );

  return (
    <section
      id="formular"
      className={`${isCardOnLight ? "section-white" : "bg-footer-bg"} section-padding relative overflow-hidden scroll-mt-24`}
    >
      <div className={`absolute inset-0 bg-dot-grid ${isCardOnLight ? "opacity-15" : "opacity-20"}`} />
      <div className="section-container relative z-10">
        <div
          className={`relative z-10 mx-auto mb-12 w-full max-w-6xl md:mb-16 ${
            isCardOnLight
              ? "rounded-2xl bg-footer-bg p-6 md:p-8 lg:p-10 shadow-[0_16px_36px_-22px_rgba(0,0,0,0.35)]"
              : "text-center"
          }`}
        >
          <div className={isCardOnLight ? "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10" : ""}>
            <div className={isCardOnLight ? "flex flex-col justify-center" : "text-center"}>
              {isCardOnLight ? (
                <div className="mb-6 w-full overflow-hidden rounded-xl bg-white/10 shadow-[0_10px_24px_-16px_rgba(0,0,0,0.4)]">
                  <img src={ivanBookingImage} alt="Ivan Jašík" className="h-auto w-full object-contain" loading="lazy" />
                </div>
              ) : null}

              <h2 className={`headline-serif ${isCardOnLight ? "!text-[1.8rem] md:!text-[2.1rem] lg:!text-[2.35rem]" : ""}`}>{heading}</h2>
              <p className={`sub-headline !text-cream/85 ${isCardOnLight ? "!mt-4 max-w-xl" : ""}`}>{subheading}</p>

              <div className={`${isCardOnLight ? "mt-7 flex items-center gap-3 text-cream/85" : "hidden"}`}>
                <span className="font-sans text-base md:text-lg">Kontaktujte ma:</span>
                <a
                  href="https://wa.me/421902519328"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Kontaktovať cez WhatsApp"
                  className="inline-flex text-cream transition-colors hover:text-white/80"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                </a>
                <a
                  href="tel:+421902519328"
                  aria-label="Zavolať na telefón"
                  className="inline-flex text-cream transition-colors hover:text-white/80"
                >
                  <Phone className="h-5 w-5" />
                </a>
                <a
                  href="mailto:info@jsinvestor.com"
                  aria-label="Poslať email"
                  className="inline-flex text-cream transition-colors hover:text-white/80"
                >
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div
              className={`${
                isCardOnLight
                  ? "rounded-2xl border border-white/20 bg-[#e9e3dd] p-3.5 md:p-4"
                  : "mx-auto mt-10 max-w-5xl rounded-2xl border border-white/20 bg-[#f2ede9] p-4 md:p-6"
              }`}
            >
              {formContent}
            </div>
          </div>
        </div>

        {!isCardOnLight ? (
          <div className="mt-8 text-center">
          <div className="inline-flex items-center gap-3 text-cream/85">
            <span className="font-sans text-base md:text-lg">Kontaktujte ma:</span>
            <a
              href="https://wa.me/421902519328"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kontaktovať cez WhatsApp"
              className="inline-flex text-cream transition-colors hover:text-white/80"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </a>
            <a
              href="tel:+421902519328"
              aria-label="Zavolať na telefón"
              className="inline-flex text-cream transition-colors hover:text-white/80"
            >
              <Phone className="h-5 w-5" />
            </a>
            <a
              href="mailto:info@jsinvestor.com"
              aria-label="Poslať email"
              className="inline-flex text-cream transition-colors hover:text-white/80"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default BookingSection;
