import Cal, { getCalApi } from "@calcom/embed-react";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";

function readBookerLayout(): "month_view" | "column_view" {
  if (typeof window === "undefined") return "column_view";
  return window.matchMedia("(min-width: 768px)").matches ? "month_view" : "column_view";
}

/** month_view + narrow slot strip is fragile on mobile Safari; column_view is more reliable under ~768px. */
function useBookerLayout(): "month_view" | "column_view" {
  const [layout, setLayout] = useState<"month_view" | "column_view">(readBookerLayout);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setLayout(mq.matches ? "month_view" : "column_view");
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  return layout;
}

const BookingSection = () => {
  const bookerLayout = useBookerLayout();

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "konzultacia" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: {
          light: { "cal-brand": "#296A53" },
          dark: { "cal-brand": "#296A53" },
        },
        hideEventTypeDetails: false,
        layout: bookerLayout,
      });
    })();
  }, [bookerLayout]);

  return (
    <section id="booking" className="section-white section-padding">
      <div className="section-container">
        <div className="relative z-10 mx-auto mb-12 max-w-5xl text-center md:mb-16">
          <h2 className="headline-serif">
            Pripravený na <span className="italic text-primary">úvodný hovor?</span>
          </h2>
          <p className="sub-headline">
            Vyber si termín ktorý ti sedí.{" "}
            <strong>Hovor je bezplatný, trvá 30–45 minút,</strong> a prebieha online cez Google Meet.
          </p>
          <div className="relative z-10 mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm font-sans text-muted-foreground md:mt-6">
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

        <div className="cal-inline-embed w-full">
          <Cal
            key={bookerLayout}
            namespace="konzultacia"
            calLink="js.mentor/konzultacia"
            className="w-full"
            config={{
              layout: bookerLayout,
              ...(bookerLayout === "month_view"
                ? { useSlotsViewOnSmallScreen: "true" as const }
                : {}),
              iframeAttrs: {
                title: "Rezervácia — úvodný hovor",
                style: "width:100%;border:0",
              },
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
