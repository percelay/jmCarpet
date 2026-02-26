import Link from "next/link";
import { Phone, Mail, AlertTriangle, MapPin } from "lucide-react";

const residentialLinks = [
  { label: "Hardwood & Restoration", href: "#" },
  { label: "Luxury Carpeting & Rugs", href: "#" },
  { label: "Tile & Water Resistance", href: "#" },
  { label: "Custom Runners", href: "#" },
  { label: "Subfloor Repair", href: "#" },
];

const commercialLinks = [
  { label: "Property Management", href: "#" },
  { label: "Medical Flooring", href: "#" },
  { label: "Modular Carpet Tile & LVT", href: "#" },
  { label: "Schools & Education", href: "#" },
  { label: "Hospitality & Retail", href: "#" },
  { label: "Self-Leveling Concrete", href: "#" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-text-main text-white">
      {/* ── CTA Banner ──────────────────────────────────────────── */}
      <div className="border-b border-white/10 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px bg-accent" />
              <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
                Get Started
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black leading-tight tracking-tight max-w-sm">
              Your Project Planning Starts with a Call.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <a
              href="tel:9734421182"
              className="inline-flex items-center justify-center gap-2 bg-accent text-text-main px-8 py-4 rounded-sm font-black text-sm uppercase tracking-widest transition-all duration-200 hover:bg-accent/80"
            >
              <Phone size={15} />
              973-442-1182
            </a>
            <a
              href="mailto:info@premierflooring.com"
              className="inline-flex items-center justify-center gap-2 border border-white/15 text-white px-8 py-4 rounded-sm font-semibold text-sm transition-all duration-200 hover:border-white/40 hover:bg-white/5"
            >
              <Mail size={15} />
              Email Us
            </a>
          </div>
        </div>
      </div>

      {/* ── Mega Footer Grid ────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Col 1 — Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center shrink-0">
                <span className="text-white font-black text-[11px]">PFS</span>
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <span className="text-white font-black text-[15px] tracking-tight">
                  Premier
                  <span className="text-accent">Flooring</span>
                </span>
                <span className="text-white/30 font-semibold text-[9px] tracking-[0.15em] uppercase">
                  Specialists
                </span>
              </div>
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-6">
              30+ years of expert flooring installation for residential and
              commercial clients across New Jersey.
            </p>
            <div className="flex items-start gap-2">
              <MapPin size={13} className="text-accent shrink-0 mt-0.5" />
              <span className="text-white/35 text-sm">New Jersey, USA</span>
            </div>
          </div>

          {/* Col 2 — Residential */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.15em] mb-6">
              Residential
            </h3>
            <ul className="space-y-3.5">
              {residentialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/35 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Commercial */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.15em] mb-6">
              Commercial
            </h3>
            <ul className="space-y-3.5">
              {commercialLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-white/35 text-sm hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact & Emergency */}
          <div>
            <h3 className="text-white font-black text-xs uppercase tracking-[0.15em] mb-6">
              Contact
            </h3>

            <div className="space-y-4 mb-8">
              <a
                href="tel:9734421182"
                className="flex items-center gap-3 text-white/50 text-sm hover:text-accent transition-colors duration-200"
              >
                <Phone size={13} className="text-accent shrink-0" />
                973-442-1182
              </a>
              <a
                href="mailto:info@premierflooring.com"
                className="flex items-center gap-3 text-white/50 text-sm hover:text-accent transition-colors duration-200"
              >
                <Mail size={13} className="text-accent shrink-0" />
                info@premierflooring.com
              </a>
            </div>

            {/* Emergency Banner */}
            <div className="flex items-start gap-3 bg-accent/8 border border-accent/20 p-4 rounded-sm">
              <AlertTriangle size={15} className="text-accent shrink-0 mt-0.5" />
              <div>
                <div className="text-accent font-black text-[10px] uppercase tracking-[0.15em] mb-1.5">
                  Emergency Service
                </div>
                <div className="text-white/40 text-xs leading-relaxed">
                  Emergency Water Damage Service Available 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom Bar ─────────────────────────────────────────── */}
      <div className="border-t border-white/8 py-6">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">
            © {year} Premier Flooring Specialists. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Licensed &amp; Insured · NJ Contractor
          </p>
        </div>
      </div>
    </footer>
  );
}
