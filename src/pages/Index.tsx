import HomeDesignHeaderSection from "@/components/sections/HomeDesignHeaderSection";
import StatsBarSection from "@/components/sections/StatsBarSection";
import VysledkySection from "@/components/sections/VysledkySection";
import ProblemSectionTemplate from "@/components/templates/sections/ProblemSectionTemplate";
import WealthMapPilieresSection from "@/components/sections/WealthMapPilieresSection";
import MapaVpraxiSection from "@/components/sections/MapaVpraxiSection";
import NaslednyPostupSection from "@/components/sections/NaslednyPostupSection";
import PredPoSection from "@/components/sections/PredPoSection";
import PreKohoSection from "@/components/sections/PreKohoSection";
import RecenzieKlientovSection from "@/components/sections/RecenzieKlientovSection";
import PoplatkyPorovnanieSection from "@/components/sections/PoplatkyPorovnanieSection";
import PodmienkyPorovnanieSection from "@/components/sections/PodmienkyPorovnanieSection";
import RozdielPoplatkovSection from "@/components/sections/RozdielPoplatkovSection";
import KtoStojiZaJsInvestorSection from "@/components/sections/KtoStojiZaJsInvestorSection";
import FaqLoremSection from "@/components/sections/FaqLoremSection";
import BookingSection from "@/components/sections/BookingSection";
import PageWrapper from "@/components/layout/PageWrapper";
import { Clock3, Percent, PiggyBank, Wallet } from "lucide-react";

const Index = () => (
  <PageWrapper>
    <HomeDesignHeaderSection />
    <StatsBarSection />
    <VysledkySection
      title={
        <>
          <span className="text-primary italic">Skutočné výsledky</span> našich klientov
        </>
      }
      subtitle={<>Ukážka dlhodobého zhodnotenia majetku v rámci našich riadených ETF portfólií.</>}
      ctaLabel="Chcem budovať podobné portfólio"
    />
    <ProblemSectionTemplate
      heading={<>Poznáte to?</>}
      items={[
        {
          icon: <PiggyBank className="h-5 w-5 -translate-x-0.5 text-accent" />,
          title: <>Na účte vám leží 30 000 €. Každý rok z nich zmizne 1 200 €.</>,
          body: <>Nie preto, že ste urobili niečo zle. Ale preto, že ste s nimi neurobili nič.</>,
        },
        {
          icon: <Percent className="h-5 w-5 -translate-x-0.5 text-accent" />,
          title: <>Bankár vám povedal, že sa o vás postará.</>,
          body: (
            <>
              Zabudol dodať, že vám za to účtuje 2% ročne. Za 30 rokov je to často viac ako 30 % majetku. Vo
              výsledku až desiatky tisíc eur.
            </>
          ),
        },
        {
          icon: <Clock3 className="h-5 w-5 -translate-x-0.5 text-accent" />,
          title: <>Po večeroch Googlite ETF a dividendové akcie. Ráno máte meeting.</>,
          body: <>Nemáte čas byť investorom na plný úväzok. Cez víkend chcete byť s rodinou.</>,
        },
        {
          icon: <Wallet className="h-5 w-5 -translate-x-0.5 text-accent" />,
          title: <>Máte ETF, hypotéku, možno aj investičný byt.</>,
          body: (
            <>
              Ale neviete, či má zmysel dokúpiť druhý byt, navýšiť ETF, alebo čakať. Rozhodujete sa podľa pocitu, nie
              podľa dát.
            </>
          ),
        },
      ]}
      closingText={
        <>
          Presne pre toto existuje JS Wealth Map™. Jeden plán. Jasný smer.
          <br />
          <strong>Všetko na jednom mieste.</strong>
        </>
      }
      ctaLabel="Získať JS Wealth Map™"
    />
    <WealthMapPilieresSection />
    <MapaVpraxiSection />
    <NaslednyPostupSection />
    <PredPoSection />
    <RecenzieKlientovSection
      heading={<>Čo hovoria klienti, ktorí sa už rozhodli.</>}
      subheading={
        <>
          Reálne skúsenosti ľudí, ktorí našli svojho sprievodcu budovaním majetku a získali pocit absolútneho
          bezpečia v každej trhovej situácii.
        </>
      }
      ctaLabel="Získať JS Wealth Map™"
    />
    <PreKohoSection />
    <PoplatkyPorovnanieSection />
    <PodmienkyPorovnanieSection />
    <RozdielPoplatkovSection />
    <KtoStojiZaJsInvestorSection />
    <FaqLoremSection
      heading={<>Najčastejšie otázky</>}
      subheading={<>Odpovede na to, čo nás klienti pýtajú najčastejšie.</>}
      showCta={false}
    />
    <BookingSection
      heading={
        <span className="text-cream">
          Zbavte sa chaosu z peňazí. Začnite konať už dnes.
        </span>
      }
      subheading={<>Získajte JS Wealth Map™. Presný plán, ktorý vám ukáže, kde ste, kam idete a čo urobiť ďalej.</>}
      bullets={[]}
      variant="cardOnLight"
    />
  </PageWrapper>
);

export default Index;
