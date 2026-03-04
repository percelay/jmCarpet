import Image from "next/image";
import { ArrowRight, BadgePercent } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-24 pb-14 bg-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-accent" />
            <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
              30+ Years of Trusted Flooring Work
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-black text-text-main leading-[1.05] tracking-tight mb-6">
            JM Carpet Express
            <span className="text-primary block mt-2">Floors Done Right.</span>
          </h1>

          <p className="text-text-main/70 text-lg leading-relaxed mb-8 max-w-xl">
            Residential and commercial carpet, hardwood, vinyl, tile, and more.
            Organized crews, quality installation, and clean job sites from
            start to finish.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-5">
            <a
              href="#request-quote"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-sm font-black text-sm tracking-widest uppercase transition-all duration-200 hover:bg-primary/85"
            >
              Request a Quote
              <ArrowRight size={16} />
            </a>
            <a
              href="tel:9734421182"
              className="inline-flex items-center justify-center gap-2 border border-text-main/15 text-text-main px-8 py-4 rounded-sm font-semibold text-sm transition-all duration-200 hover:border-primary hover:text-primary"
            >
              973-442-1182
            </a>
          </div>

          <div className="inline-flex items-start gap-2.5 bg-surface/70 border border-accent/35 px-4 py-3 rounded-sm">
            <BadgePercent size={16} className="text-accent shrink-0 mt-0.5" />
            <p className="text-sm text-text-main/80 leading-relaxed">
              Free area rug with qualifying vinyl installation.
            </p>
          </div>

          <div className="mt-10 pt-7 border-t border-text-main/10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { stat: "30+", label: "Years in Business" },
              { stat: "100%", label: "Jobsite Cleanup" },
              { stat: "5-Star", label: "Customer Reviews" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-primary font-black text-xl">{item.stat}</div>
                <div className="text-text-main/55 text-xs font-semibold mt-1 leading-snug">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="relative w-full max-w-2xl mx-auto aspect-square rounded-2xl overflow-hidden border-4 border-white shadow-[0_20px_65px_rgba(15,76,92,0.25)]">
            <Image
              src="/images/staining.jpg"
              alt="Floor staining project by JM Carpet Express Inc"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4">
              <div className="inline-flex items-center gap-3 bg-black/55 backdrop-blur-sm px-4 py-3 rounded-sm border border-white/20">
                <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
                <span className="text-white text-xs font-semibold tracking-wide">
                  Staining and refinishing specialists
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
