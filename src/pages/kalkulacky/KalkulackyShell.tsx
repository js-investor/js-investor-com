import PageWrapper from "@/components/layout/PageWrapper";
import SiteHeader from "@/components/layout/SiteHeader";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { KALKULACKY_IVAN_WHATSAPP_HREF } from "@/pages/kalkulacky/kalkulackyConfig";
import type { ReactNode } from "react";

type KalkulackyShellProps = {
  children: ReactNode;
};

const KalkulackyShell = ({ children }: KalkulackyShellProps) => (
  <PageWrapper>
    <SiteHeader
      items={[
        { label: "Hypotéka vs. investovanie", href: "/kalkulacky/hypo-smart" },
        { label: "Investície", href: "/kalkulacky/investicna" },
        { label: "Mzdy", href: "/kalkulacky/mzdova-kalkulacka" },
        { label: "Úvery (DTI & DSTI)", href: "/kalkulacky/uvery" },
        { label: "Renta", href: "/kalkulacky/rentova-kalkulacka" },
      ]}
      ctaLabel="Poradiť sa s Ivanom"
      ctaHref={KALKULACKY_IVAN_WHATSAPP_HREF}
      ctaIcon={<WhatsAppIcon className="h-[1.05rem] w-[1.05rem] shrink-0 md:h-[1.125rem] md:w-[1.125rem]" />}
    />
    <section className="section-white min-h-[50vh] pt-[6rem] md:pt-[7rem] pb-12 md:pb-16">{children}</section>
  </PageWrapper>
);

export default KalkulackyShell;
