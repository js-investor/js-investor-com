const FooterSection = () => (
  <footer className="bg-footer-bg py-16 px-5 md:px-10 relative overflow-hidden">
    {/* Subtle grid overlay */}
    <div className="absolute inset-0 opacity-[0.03]" style={{
      backgroundImage: 'linear-gradient(hsl(152 60% 45% / 0.5) 1px, transparent 1px), linear-gradient(90deg, hsl(152 60% 45% / 0.5) 1px, transparent 1px)',
      backgroundSize: '60px 60px'
    }} />

    {/* Top glow line */}
    <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

    <div className="max-w-[1200px] mx-auto relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
        {/* Left */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-primary inline-block animate-glow-pulse" />
            <span className="font-sans text-sm font-semibold tracking-[0.2em] uppercase text-cream">
              JS Investor
            </span>
          </div>
          <p className="font-serif italic text-sm text-cream/60">
            Sprievodca budovaním majetku pre ambicióznych ľudí.
          </p>
        </div>

        {/* Center */}
        <div>
          <p className="font-sans font-semibold text-cream mb-3">Kontakt</p>
          <div className="space-y-1 font-sans text-sm text-cream/70">
            <p>+421 902 519 328</p>
            <p>info@ivanjasik.sk</p>
            <p>Veľká okružná 17, 010 01 Žilina</p>
          </div>
        </div>

        {/* Right */}
        <div>
          <p className="font-sans font-semibold text-cream mb-3">Firemné údaje</p>
          <div className="space-y-1 font-sans text-sm text-cream/70">
            <p>Jashik s.r.o.</p>
            <p>Registrácia NBS: 282999</p>
            <p>IČO: 54253969</p>
          </div>
        </div>
      </div>

      <div className="border-t border-cream/10 pt-6">
        <p className="font-sans text-xs text-cream/40 text-center">
          © 2026 Jashik s.r.o. Všetky práva vyhradené.
        </p>
      </div>
    </div>
  </footer>
);

export default FooterSection;
