import AnimatedSection from "@/components/AnimatedSection";
import { CheckCircle2, XCircle } from "lucide-react";

const forYouItems = [
  "Zarábate od 1 500 € mesačne. Svoje prebytky chcete začať systematicky zhodnocovať.",
  "Chcete delegovať zodpovednosť na experta, získať kľudný spánok a nehrať sa po večeroch na amatérskeho tradera.",
  "Hľadáte dlhodobého partnera, na ktorého sa môžete obrátiť pri každej dôležitej finančnej či životnej zmene.",
  "Vážite si svoj čas viac, než aby ste ho strácali hľadaním a analýzou tých \"správnych\" fondov.",
];

const notForYouItems = [
  "Hľadáte skratky a rýchle zbohatnutie. Ak očakávate garantované tipy, krypto-signály a zisky cez noc.",
  "Chcete investovaniu obetovať svoj voľný čas. Ak vás reálne baví tráviť víkendy študovaním grafov a čítaním finančných správ.",
  "Beriete investovanie ako hru „pokus - omyl“. Nemáte záujem o dlhodobú stratégiu a chcete len náhodne nakupovať fondy či akcie bez jasnej stratégie a cieľa.",
  "Aktuálne nemáte voľný cashflow a ešte len riešite základnú stabilizáciu príjmu a zatiaľ si nedokážete tvoriť pravidelné rezervy.",
];

const PreKohoSection = () => (
  <section id="pre-koho" className="section-white section-padding relative overflow-hidden scroll-mt-24">
    <div className="absolute inset-0 bg-dot-grid opacity-20" />
    <div className="section-container relative z-10">
      <AnimatedSection>
        <div className="mx-auto max-w-4xl text-center mb-10 md:mb-12">
          <h2 className="headline-serif">
            JS Wealth Map™ <span className="text-primary italic font-bold">nie je pre každého.</span>
          </h2>
          <p className="sub-headline">
            Spolupracujeme s ľuďmi, pre ktorých je čas tá najdrahšia komodita a ich majetok si zaslúži
            profesionálneho sprievodcu.
          </p>
        </div>
      </AnimatedSection>

      <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 items-stretch">
        <AnimatedSection>
          <article className="h-full rounded-2xl border border-primary/12 bg-[#f7f4ef] p-6 md:p-7">
            <h3 className="font-serif text-3xl font-extrabold text-primary mb-5">
              Stratégia <span className="text-foreground/80 text-[1.7rem]">JE PRE VÁS, ak:</span>
            </h3>
            <div className="space-y-4">
              {forYouItems.map((item) => (
                <p key={item} className="flex items-start gap-2.5 font-sans text-sm md:text-base leading-relaxed text-foreground/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </article>
        </AnimatedSection>

        <AnimatedSection delay={0.08}>
          <article className="h-full rounded-2xl border border-primary/12 bg-[#f7f4ef] p-6 md:p-7">
            <h3 className="font-serif text-3xl font-extrabold text-[#B64A4A] mb-5">
              Stratégia <span className="text-foreground/80 text-[1.7rem]">NIE JE PRE VÁS, ak:</span>
            </h3>
            <div className="space-y-4">
              {notForYouItems.map((item) => (
                <p key={item} className="flex items-start gap-2.5 font-sans text-sm md:text-base leading-relaxed text-foreground/85">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#B64A4A]" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </article>
        </AnimatedSection>
      </div>

      <AnimatedSection>
        <div className="mx-auto mt-10 max-w-4xl text-center">
          <p className="font-sans text-base md:text-lg text-muted-foreground">
            Napríklad ako klient <strong className="text-foreground">Matej Slovík</strong> (Profesionálny grafický
            dizajnér):
          </p>
          <p className="mt-4 [font-family:var(--font-serif)] text-2xl md:text-3xl italic text-foreground leading-relaxed">
            „S Ivanom investujem preto, lebo viem, že moje peniaze sú v bezpečí. A viem, že mu môžem kedykoľvek
            zavolať."
          </p>
          <div className="mt-8">
            <a href="#booking" className="btn-primary text-lg">
              Získať JS Wealth Map™
            </a>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default PreKohoSection;
