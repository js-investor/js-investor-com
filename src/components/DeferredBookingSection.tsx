import { lazy, Suspense, useEffect, useRef, useState } from "react";

const BookingSection = lazy(() => import("@/components/sections/BookingSection"));

const Fallback = ({ label }: { label: string }) => (
  <section
    id="booking"
    className="section-white section-padding scroll-mt-20"
    aria-busy="true"
    aria-label={label}
  >
    <div className="section-container flex min-h-[min(70vh,560px)] flex-col items-center justify-center gap-6">
      <div
        className="h-10 w-10 rounded-full border-2 border-primary/25 border-t-primary animate-spin"
        aria-hidden
      />
      <p className="max-w-sm text-center text-sm text-muted-foreground">{label}</p>
    </div>
  </section>
);

/**
 * Cal.com embed je ťažký — načítame ho až keď je používateľ blízko sekcie (alebo ide na #booking).
 * Zrýchli prvý render a zníži počet preload / konzolových hlásení z Cal skriptu pri úvodnom načítaní.
 */
const DeferredBookingSection = () => {
  const [load, setLoad] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (load) return;
    if (typeof window !== "undefined" && window.location.hash === "#booking") {
      setLoad(true);
      return;
    }
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) setLoad(true);
      },
      { root: null, rootMargin: "600px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [load]);

  useEffect(() => {
    const onHash = () => {
      if (window.location.hash === "#booking") setLoad(true);
    };
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  useEffect(() => {
    if (load) return;
    const t = window.setTimeout(() => setLoad(true), 12000);
    return () => window.clearTimeout(t);
  }, [load]);

  return (
    <div ref={rootRef} className="w-full">
      {load ? (
        <Suspense
          fallback={
            <Fallback label="Načítavam kalendár rezervácií…" />
          }
        >
          <BookingSection />
        </Suspense>
      ) : (
        <Fallback label="Kalendár sa načíta, keď sa priblížiš k tejto sekcii (alebo klikneš na Rezervovať)." />
      )}
    </div>
  );
};

export default DeferredBookingSection;
