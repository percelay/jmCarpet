import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Hardwood & Restoration",
    body: "Expert installation of exotic species, dust-free sanding, custom staining, and repairs. We bring your floors back to life.",
    image: "/images/res-hardwood.jpg",
    alt: "Hardwood floor installation and restoration",
    fallbackGradient:
      "linear-gradient(135deg, #5C3D1A 0%, #8B5E2A 40%, #A0754A 100%)",
    tag: "Residential",
  },
  {
    title: "Luxury Carpeting & Rugs",
    body: "Featuring broadloom carpeting, custom runners, 100% wool luxury prints, and pet-resistant fibers for the modern family.",
    image: "/images/res-carpet.jpg",
    alt: "Luxury carpet and rug installation",
    fallbackGradient:
      "linear-gradient(135deg, #4A3B32 0%, #6B5548 40%, #7D6358 100%)",
    tag: "Residential",
  },
  {
    title: "Tile & Water Resistance",
    body: "Porcelain tile, stone backsplashes, and water-resistant flooring solutions perfect for kitchens, baths, and basements.",
    image: "/images/res-tile.jpg",
    alt: "Tile and water-resistant flooring installation",
    fallbackGradient:
      "linear-gradient(135deg, #3A4A52 0%, #56737E 40%, #6B8A95 100%)",
    tag: "Residential",
  },
];

export default function ResidentialServices() {
  return (
    <section className="bg-bg">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-24 pb-16">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
            Residential Services
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight max-w-xl">
          Transforming Homes,
          <br />
          <span className="text-primary">One Floor at a Time.</span>
        </h2>
      </div>

      {/* Alternating Feature Cards */}
      <div className="border-t border-text-main/10">
        {services.map((service, index) => (
          <article
            key={service.title}
            className="grid grid-cols-1 lg:grid-cols-2 border-b border-text-main/10"
          >
            {/* Image Block */}
            <div
              className={`relative min-h-[380px] lg:min-h-[520px] overflow-hidden ${
                index % 2 !== 0 ? "lg:order-last" : ""
              }`}
            >
              {/* Gradient fallback */}
              <div
                className="absolute inset-0"
                style={{ background: service.fallbackGradient }}
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/10" />
              {/* Image — add corresponding files to /public/images/ */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                className="object-cover"
              />
              {/* Index label */}
              <div className="absolute top-6 left-6">
                <span className="text-white/30 font-black text-[5rem] leading-none select-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
            </div>

            {/* Text Block */}
            <div
              className={`flex flex-col justify-center px-8 md:px-14 xl:px-20 py-16 bg-bg ${
                index % 2 !== 0 ? "lg:order-first" : ""
              }`}
            >
              <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase mb-5 block">
                {service.tag}
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-text-main leading-tight tracking-tight mb-5">
                {service.title}
              </h3>
              <p className="text-text-main/55 text-base md:text-lg leading-relaxed max-w-md">
                {service.body}
              </p>
              <div className="mt-10">
                <a
                  href="tel:9734421182"
                  className="inline-flex items-center gap-2 text-primary font-black text-sm uppercase tracking-widest border-b-2 border-primary pb-1 hover:border-accent hover:text-accent transition-colors duration-200"
                >
                  Get a Quote
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
