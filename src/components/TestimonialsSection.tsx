import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Murray Robertson",
    quote:
      "I've been in the construction business for more than 30 years, rarely do you find a contractor so organized where they tell you when they're gonna show up, do the job perfectly, clean up after themselves, and then review the job to see that you're completely satisfied.",
  },
  {
    name: "Christine Whelan Bott",
    quote:
      "I would like to wish JM Carpet Express all the best in their new location, you have done well in every location!! Awesome work and great owners!",
  },
  {
    name: "Daniel Price",
    quote:
      "JM Carpet Express handled our vinyl and carpet replacement quickly and professionally. Communication was clear, the crew was punctual, and the finished result looked excellent.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-bg py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-px bg-accent" />
          <span className="text-accent font-semibold text-xs tracking-[0.18em] uppercase">
            Customer Testimonials
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black text-text-main leading-tight tracking-tight mb-6">
          What Customers Say About JM Carpet Express
        </h2>

        <p className="text-text-main/50 text-sm font-semibold mb-12">
          In business for over 30 years — serving homeowners and contractors across New Jersey.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="bg-white border border-text-main/10 rounded-xl p-7"
            >
              <div className="flex items-center gap-3 mb-5">
                <Quote size={18} className="text-accent shrink-0" />
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star
                      key={star}
                      size={14}
                      className="text-accent"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </div>
              <p className="text-text-main/70 leading-relaxed text-sm mb-6">
                {item.quote}
              </p>
              <p className="text-text-main font-black text-sm">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
