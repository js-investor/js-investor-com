import { Check, PlayCircle } from "lucide-react";
import { useState } from "react";
import ivanBielaKosela from "@/assets/images/jsinvestor-casual-biznis-muz-biela-kosela.jpg";

const firstVideos = [
  {
    title: "Video 1: Pitva – Mimoriadna splátka hypotéky vs. Investícia",
    body: "Máte voľné peniaze a chcete ich poslať banke, aby ste sa skôr zbavili dlhu? Ukážem vám na reálnych číslach a profesionálnej kalkulačke, prečo to môže byť zásadná chyba. Naučíte sa, ako vďaka správnemu investovaniu dokážete tú istú hypotéku splatiť napríklad aj o 8 rokov skôr.",
  },
  {
    title: "Video 2: Investičný byt – Ako ho nastaviť, aby reálne zarábal?",
    body: "Každý hovorí, že nehnuteľnosti sú istota. Zoberieme si reálny inzerát a započítame všetky skryté poplatky a rastúce náklady. Ukážem vám tvrdú pravdu o očistenej návratnosti, ale hlavne presný postup, ako to urobiť správne – od výberu vhodného bytu až po ideálne nastavenie financovania tak, aby to malo zmysel.",
  },
  {
    title: "Video 3: Moja stratégia pre rok 2026 (Keby som dnes začínal)",
    body: "Koniec teórie a všeobecných poučiek. Zhrnul som 8 rokov svojich skúseností na trhu a ukážem vám, ako nad investovaním uvažujem dnes. Keby som dnes v roku 2026 začínal úplne od nuly, krok po kroku vám vysvetlím, akú stratégiu a systém by som zvolil, aby som majetok bezpečne zhodnocoval a chránil.",
  },
];

const faqItems = [
  {
    question:
      "1. Som úplný začiatočník a investovaniu nerozumiem. Nebude to na mňa príliš zložité?",
    answer:
      "Vôbec nie. Túto komunitu som vytvoril presne preto, aby som zložité finančné témy preložil do ľudskej reči. Nepotrebujete ekonomickú školu. Všetko ukazujem polopate, na reálnych číslach a graficky tak, aby to pochopil každý, kto chce mať v peniazoch konečne poriadok.",
  },
  {
    question:
      "2. Ako presne funguje tých 15 dní zadarmo? Nezabudnem na to a nestiahne mi to peniaze?",
    answer:
      "Je to maximálne transparentné. Pri registrácii cez Herohero síce zadáte kartu, ale prvých 15 dní neplatíte ani cent. Okamžite sa vám odomkne celý obsah. Ak si do dvoch týždňov poviete, že vám to nedáva hodnotu, jedným klikom členstvo zrušíte a nič neplatíte. Ak zostanete, bude vás to stáť 5 € mesačne. Zrušiť to môžete kedykoľvek, nie ste viazaní žiadnou zmluvou.",
  },
  {
    question:
      "3. Keď už investujem (cez brokera, banku alebo finančného poradcu), je pre mňa komunita vhodná?",
    answer:
      "Absolútne áno. Komunita nie je len pre úplných nováčikov, ale aj pre ľudí, ktorí už svoj majetok aktívne budujú. Zistíte v nej, či investujete naozaj správne a efektívne. Získate nezávislý pohľad z praxe, naučíte sa pozerať na svoje peniaze viac komplexne a pôjdeme oveľa viac do hĺbky. Budete si tak vedieť overiť, či vaša aktuálna stratégia skutočne pracuje pre vás.",
  },
];

const HeroHero = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
  <main className="bg-[#FFF9F5]">
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-30 pointer-events-none" />
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="headline-serif mb-6">
            Komunita, ktorá ťa bez zbytočných kecov{" "}
            <span className="italic text-primary">naučí budovať majetok.</span>
          </h1>
          <p className="sub-headline">
            Naučíte sa efektívne pracovať so svojimi peniazmi. Budeme hodnotiť konkrétne produkty a
            stratégie, detailne preberieme investovanie do akcií, ETF a nehnuteľností. Komunita, vďaka
            ktorej budeš bohatší.
          </p>
          <div className="mt-8">
            <a
              href="https://herohero.co/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-lg inline-flex"
            >
              Vyskúšať na 15 dní ZADARMO
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="section-white section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-5xl min-h-[65vh] grid grid-cols-1 lg:grid-cols-[minmax(0,38%)_minmax(0,62%)] gap-8 md:gap-10 items-center">
          <div className="lg:sticky lg:top-24">
            <div className="relative mx-auto w-full max-w-[380px]">
              <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-xl" />
              <img
                src={ivanBielaKosela}
                alt="Ivan v bielej košeli"
                className="relative block w-full h-auto rounded-3xl object-contain ring-1 ring-black/10"
                loading="lazy"
              />
            </div>
          </div>
          <div className="space-y-5 font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
            <p>
              Volám sa Ivan. Možno ma poznáte z internetu, kde ma sleduje viac ako 100 000 ľudí.
              Založil som vlastnú investičnú kanceláriu, investovaniu sa venujem 8 rokov a dnes
              spravujem klientom milióny eur. Všetko robím regulovane pod Národnou Bankou Slovenska
            </p>
            <p>
              Po týchto rokoch praxe som sa rozhodol vytvoriť komunitu, kde budem pravidelne pridávať
              hodnotný obsah. Prečo? Pretože som zistil, že na trhu je chaos. Ľudia nemajú v peniazoch
              poriadok. Často veria len pekným marketingovým rečiam a chýbajú im hlbšie informácie o
              tom, ako financie naozaj fungujú.
            </p>
            <p>
              Chcem vám ukázať, ako sa na svet peňazí pozerám ja. V komunite pôjdeme viac do hĺbky.
              Budeme preberať konkrétne prípady, reálne produkty a stratégie. Rovno vám napríklad
              ukážem, akú stratégiu a rozloženie som zvolil pri svojich vlastných investíciách v
              hodnote cca 80 000 €.
            </p>
            <p className="font-semibold text-foreground">
              Verím, že toto bude jedna z mála komunít, vďaka ktorej budete reálne bohatší.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section className="section-cream section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-dot-grid opacity-20 pointer-events-none" />
      <div className="section-container relative z-10">
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-12">
          <h2 className="headline-serif">
            Toto sú prvé <span className="italic text-primary">3 videá,</span>
            <br className="hidden md:block" /> ktoré v komunite nájdete:
          </h2>
        </div>

        <div className="mx-auto max-w-5xl grid grid-cols-1 gap-5 md:gap-6">
          {firstVideos.map((video) => (
            <article
              key={video.title}
              className="rounded-2xl border border-primary/15 bg-white/95 p-5 md:p-6 shadow-[0_10px_24px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="h-9 w-9 md:h-10 md:w-10 rounded-xl bg-primary text-white flex items-center justify-center shrink-0">
                  <PlayCircle className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <h3 className="[font-family:var(--font-serif)] text-xl md:text-2xl font-extrabold text-foreground leading-snug">
                    {video.title}
                  </h3>
                  <p className="mt-3 font-sans text-sm md:text-base text-muted-foreground leading-relaxed">
                    {video.body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-white section-padding">
      <div className="section-container">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="headline-serif">Časté otázky</h2>
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {faqItems.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={faq.question} className="rounded-xl">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(index)}
                    className={`w-full text-left rounded-xl border border-primary/15 px-5 py-3.5 md:px-6 md:py-4 pr-12 font-sans text-base md:text-lg font-semibold leading-snug relative transition-colors duration-200 ${
                      isOpen
                        ? "bg-primary text-white"
                        : "bg-white text-foreground hover:bg-primary hover:text-white"
                    }`}
                    aria-expanded={isOpen}
                  >
                    {faq.question}
                    <span
                      className={`absolute right-5 top-1/2 -translate-y-1/2 text-xl leading-none ${
                        isOpen ? "text-white" : "text-primary"
                      }`}
                    >
                      {isOpen ? "-" : "+"}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 px-1 md:px-2 font-sans text-sm md:text-base leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  ) : null}
                </div>
              );
            })}
          </div>

          <div className="mt-8 md:mt-10 text-center">
            <a
              href="https://herohero.co/"
              target="_blank"
              rel="noreferrer"
              className="btn-primary text-lg inline-flex items-center gap-2"
            >
              <Check className="h-4 w-4" />
              Vyskúšať na 15 dní ZADARMO
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
};

export default HeroHero;
