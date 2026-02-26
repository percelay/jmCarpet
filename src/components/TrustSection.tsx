import { Shield, Star, Clock } from "lucide-react";

export default function TrustSection() {
  return (
    <section className="bg-bg py-32 px-6 overflow-hidden relative">
      {/* Large decorative number — background layer */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-black leading-none text-surface"
          style={{ fontSize: "clamp(12rem, 35vw, 28rem)" }}
        >
          30
        </span>
      </div>

      {/* Content — foreground layer */}
      <div className="relative max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
            Trusted Since 1994
          </span>
          <div className="w-8 h-px bg-accent" />
        </div>

        {/* Big Stat */}
        <div className="mb-4">
          <span className="text-primary font-black leading-none block"
            style={{ fontSize: "clamp(5rem, 18vw, 12rem)" }}
          >
            30+
          </span>
          <span className="text-text-main font-black text-3xl md:text-5xl tracking-tight uppercase leading-tight block">
            Years of Experience
          </span>
        </div>

        {/* Accent divider */}
        <div className="w-16 h-1 bg-accent mx-auto my-10" />

        {/* Solo Quote */}
        <blockquote className="text-text-main/65 text-xl md:text-2xl leading-relaxed font-medium max-w-2xl mx-auto">
          &ldquo;Emergency Water Damage Experts. Residential or
          Commercial&mdash;we have it all covered.&rdquo;
        </blockquote>

        {/* Trust Markers */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {[
            { Icon: Shield, label: "Licensed & Insured" },
            { Icon: Star, label: "5-Star Rated" },
            { Icon: Clock, label: "24/7 Emergency Service" },
          ].map(({ Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-text-main/45"
            >
              <Icon size={15} className="text-accent shrink-0" />
              <span className="text-sm font-semibold">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
