import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-16">
      {/* ── Left: Content ─────────────────────────────────────── */}
      <div className="bg-primary flex flex-col justify-center px-8 md:px-14 xl:px-20 py-20 lg:py-0">
        <div className="max-w-xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
              30+ Years of Experience
            </span>
          </div>

          {/* H1 */}
          <h1 className="text-5xl md:text-6xl xl:text-[4.25rem] font-black text-white leading-[1.05] tracking-tight mb-6">
            Stylish, Durable Flooring{" "}
            <span className="text-accent">for Every Budget.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-md">
            From luxury residential makeovers to large-scale commercial
            contracts. Put over 30 years of experience to work in your home or
            facility.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:9734421182"
              className="inline-flex items-center justify-center gap-2 bg-accent text-text-main px-8 py-4 rounded-sm font-black text-sm tracking-widest uppercase transition-all duration-200 hover:bg-accent/80"
            >
              Start Your Project
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:9734421182"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-8 py-4 rounded-sm font-semibold text-sm transition-all duration-200 hover:border-white/50 hover:bg-white/5"
            >
              973-442-1182
            </a>
          </div>

          {/* Trust Stats */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
            {[
              { stat: "30+", label: "Years Serving NJ" },
              { stat: "100%", label: "Licensed & Insured" },
              { stat: "24/7", label: "Emergency Service" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-accent font-black text-2xl">
                  {item.stat}
                </div>
                <div className="text-white/40 text-xs font-semibold mt-1 leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Right: Image ───────────────────────────────────────── */}
      <div className="relative min-h-[55vh] lg:min-h-0 overflow-hidden">
        {/* Gradient fallback — visible until image loads or if no image is present */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #5C3D1A 0%, #8B5E2A 35%, #A0754A 60%, #6B4A22 100%)",
          }}
        />
        {/* Wood-plank texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 60px,
              rgba(0,0,0,0.6) 60px,
              rgba(0,0,0,0.6) 62px
            ), repeating-linear-gradient(
              180deg,
              transparent,
              transparent 200px,
              rgba(0,0,0,0.2) 200px,
              rgba(0,0,0,0.2) 201px
            )`,
          }}
        />

        {/* Hero image — add file to: /public/images/hero-hardwood.jpg */}
        <Image
          src="/images/hero-hardwood.jpg"
          alt="Luxury hardwood flooring installation"
          fill
          className="object-cover"
          priority
        />

        {/* Caption chip */}
        <div className="absolute bottom-6 left-6">
          <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-4 py-3 rounded-sm border border-white/10">
            <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
            <span className="text-white text-xs font-semibold tracking-wide">
              Premium Hardwood Installation · NJ
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
