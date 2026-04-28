import HeroSectionTemplate from "@/components/templates/HeroSectionTemplate";

const HomeDesignHeaderSection = () => {
  return (
    <HeroSectionTemplate
      headerItems={[
        { label: "Prečo to nefunguje", href: "#problem" },
        { label: "Ako to riešime", href: "#riesenie" },
        { label: "Pre koho", href: "#pre-koho" },
        { label: "Recenzie", href: "#recenzie" },
        { label: "FAQ", href: "#faq" },
      ]}
      headerCtaLabel="Získať JS Wealth Map™"
      headerCtaHref="#booking"
      title={
        <>
          Investovanie potrebuje plán, aby váš majetok <span className="text-primary font-bold">zodpovedal vášmu príjmu.</span>
        </>
      }
      subtitle={
        <>
          Získajte JS Wealth Map™. Jasný plán, ktorý vám ukáže, kde ste dnes, kam smerujete a čo má zmysel urobiť
          ďalej.
        </>
      }
      heroCtaLabel="Získať JS Wealth Map™"
      heroCtaHref="#booking"
      heroSecondaryLinkLabel="Ako to funguje →"
      heroSecondaryLinkHref="#riesenie"
      badges={["Strategické investovanie", "Minimálne poplatky", "Skutočný odborník po pravej ruke"]}
      videoSrc="https://player.vimeo.com/video/1145809910"
      videoTitle="JS Wealth Map video"
    />
  );
};

export default HomeDesignHeaderSection;
