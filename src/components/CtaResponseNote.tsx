import { Clock3 } from "lucide-react";
import { cn } from "@/lib/utils";

type CtaResponseNoteProps = {
  /** Pod booking formulárom: na celú šírku, text doľava. */
  layout?: "default" | "formFooter";
};

const CtaResponseNote = ({ layout = "default" }: CtaResponseNoteProps) => (
  <p
    className={cn(
      "mt-3 grid grid-cols-[auto,minmax(0,1fr)] items-start gap-x-2 text-left font-sans text-sm leading-relaxed text-muted-foreground",
      layout === "formFooter" ? "w-full" : "mx-auto w-fit max-w-[19rem] md:max-w-[21rem]",
    )}
  >
    <Clock3 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
    <span>Kontaktujem ťa do 48 hodín a dohodneme si bezplatný hovor.</span>
  </p>
);

export default CtaResponseNote;
