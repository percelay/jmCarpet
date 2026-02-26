import {
  Building2,
  Stethoscope,
  Grid2X2,
  School,
  UtensilsCrossed,
  Layers,
} from "lucide-react";

type ServiceCard = {
  title: string;
  description: string;
  icon: React.ElementType;
  colSpan: string;
  featured: boolean;
};

const services: ServiceCard[] = [
  {
    title: "Property Management & Tenant Improvements",
    description:
      "Full-service flooring for multi-unit properties and commercial tenant buildouts. Coordination, logistics, and execution at scale.",
    icon: Building2,
    colSpan: "col-span-1 md:col-span-2",
    featured: true,
  },
  {
    title: "Medical Seamless Floors & Safety Flooring",
    description:
      "OSHA-compliant, seamless, and antimicrobial flooring for healthcare environments and clinical spaces.",
    icon: Stethoscope,
    colSpan: "col-span-1",
    featured: false,
  },
  {
    title: "Modular Carpet Tile & LVT",
    description:
      "Luxury Vinyl Plank and modular carpet tile solutions for high-performance modern office environments.",
    icon: Grid2X2,
    colSpan: "col-span-1",
    featured: false,
  },
  {
    title: "Schools, Education & Worship Facilities",
    description:
      "Durable, safe, and budget-conscious flooring for educational institutions, universities, and religious facilities.",
    icon: School,
    colSpan: "col-span-1 md:col-span-2",
    featured: false,
  },
  {
    title: "Hospitality & High-Traffic Retail",
    description:
      "Premium flooring engineered for the aesthetic demands and daily foot traffic of hotels, restaurants, and retail stores.",
    icon: UtensilsCrossed,
    colSpan: "col-span-1",
    featured: false,
  },
  {
    title: "Self-Leveling Concrete & Subfloor Prep",
    description:
      "Professional subfloor preparation including self-leveling compounds, moisture mitigation, and surface repair before any installation.",
    icon: Layers,
    colSpan: "col-span-1 md:col-span-2",
    featured: false,
  },
];

export default function CommercialServices() {
  return (
    <section className="bg-primary py-24">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
            Commercial Services
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight max-w-lg">
            Built for the Scale of
            <br />
            Commercial Work.
          </h2>
          <p className="text-white/40 text-sm leading-relaxed max-w-xs">
            From small tenant improvements to large institutional contracts—on
            scope, on schedule, on quality.
          </p>
        </div>
      </div>

      {/* Bento Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className={`
                  ${service.colSpan}
                  ${
                    service.featured
                      ? "bg-accent"
                      : "bg-white/5 border border-white/10 hover:bg-white/10"
                  }
                  p-8 rounded-sm transition-all duration-200
                `}
              >
                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-sm flex items-center justify-center mb-6 ${
                    service.featured ? "bg-primary/15" : "bg-white/10"
                  }`}
                >
                  <Icon
                    size={19}
                    className={service.featured ? "text-primary" : "text-accent"}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`font-black text-xl leading-tight tracking-tight mb-3 ${
                    service.featured ? "text-primary" : "text-white"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-sm leading-relaxed ${
                    service.featured ? "text-primary/65" : "text-white/45"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
