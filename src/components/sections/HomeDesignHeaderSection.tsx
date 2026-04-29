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
      headerCtaHref="#formular"
      title={
        <>
          Finančný plán, pri ktorom <span className="text-primary font-bold">sú vaše peniaze v bezpečí.</span>
        </>
      }
      subtitle={
        <>
          JS Wealth Map™ je váš osobný finančný plán na mieru. Ukáže vám presne, kde vaše peniaze sú, kam smerujú a
          čo s nimi urobiť, aby <strong>váš majetok konečne zodpovedal vášmu príjmu.</strong>
        </>
      }
      heroCtaLabel="Získajte svoju JS Wealth Map"
      heroCtaHref="#formular"
      heroSecondaryLinkLabel="Ako to funguje →"
      heroSecondaryLinkHref="#riesenie"
      badges={["Bez záväzkov", "Odpoviem do 48 hodín", "Pod dohľadom NBS"]}
      videoSrc="https://player.vimeo.com/video/1145809910"
      videoTitle="JS Wealth Map video"
    />
  );
};

export default HomeDesignHeaderSection;
