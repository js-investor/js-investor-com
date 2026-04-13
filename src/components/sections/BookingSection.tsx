import Cal, { getCalApi } from "@calcom/embed-react";
import { Check } from "lucide-react";
import { useEffect } from "react";

const BookingSection = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "konzultacia" });
      cal("ui", {
        cssVarsPerTheme: {
          light: { "cal-brand": "#296A53" },
          dark: { "cal-brand": "#296A53" },
        },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section id="booking" className="section-white section-padding">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-[-72px]">
          <h2 className="headline-serif">Pripravený na úvodný hovor?</h2>
          <p className="sub-headline">
            Vyber si termín ktorý ti sedí. Hovor je bezplatný, trvá 30–45 minút,
            a prebieha online cez Google Meet alebo Zoom.
          </p>
        </div>

        <div className="w-full min-h-[820px]">
          <Cal
            namespace="konzultacia"
            calLink="js.mentor/konzultacia"
            style={{ width: "100%", height: "100%", overflow: "scroll", minHeight: "820px" }}
            config={{ layout: "month_view", useSlotsViewOnSmallScreen: "true" }}
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-[-48px] md:mt-[-72px] text-sm font-sans text-muted-foreground">
          {["Bezplatné", "Online", "30–45 minút", "Diskrétne", "Bez záväzku"].map(
            (item, index) => (
              <span key={item} className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-primary" />
                {item}
                {index < 4 && <span className="ml-2">·</span>}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
