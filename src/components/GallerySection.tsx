import Image from "next/image";

// Photos used in services (excluded to prevent overlap):
//   woods.jpg  → Hardwood & Restoration
//   Screenshot 2026-03-03 at 5.05.06 PM.png → Luxury Carpeting
//   gal2.jpg   → Tile & Water Resistance
const galleryPhotos = [
  {
    src: "/images/gal1.jpg",
    alt: "Completed flooring project by JM Carpet Express Inc",
  },
  {
    src: "/images/gal3.jpg",
    alt: "Flooring installation detail by JM Carpet Express Inc",
  },
  {
    src: "/images/staining.jpg",
    alt: "Floor staining project by JM Carpet Express Inc",
  },
  {
    src: "/images/lvt.jpg",
    alt: "Luxury vinyl flooring by JM Carpet Express Inc",
  },
  {
    src: "/images/lvt2.jpg",
    alt: "Patterned vinyl floor by JM Carpet Express Inc",
  },
];

export default function GallerySection() {
  return (
    <section className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-text-main/50 font-semibold text-sm mb-8">
          Some pictures from past projects
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryPhotos.map((photo) => (
            <a
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noreferrer"
              className="block relative aspect-square overflow-hidden rounded-sm border border-text-main/10 group"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
