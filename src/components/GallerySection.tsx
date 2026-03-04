"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const isOpen = activeIndex !== null;

  function prev() {
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + galleryPhotos.length) % galleryPhotos.length
    );
  }

  function next() {
    setActiveIndex((i) =>
      i === null ? null : (i + 1) % galleryPhotos.length
    );
  }

  function close() {
    setActiveIndex(null);
  }

  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    }

    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <section className="bg-bg py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <p className="text-text-main/50 font-semibold text-sm mb-8">
          Some pictures from past projects
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {galleryPhotos.map((photo, index) => (
            <button
              key={photo.src}
              onClick={() => setActiveIndex(index)}
              className="relative aspect-square overflow-hidden rounded-sm border border-text-main/10 group cursor-pointer"
              aria-label={`Open photo ${index + 1}`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {isOpen && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
          onClick={close}
        >
          {/* Close */}
          <button
            onClick={close}
            aria-label="Close"
            className="absolute top-5 right-5 text-white/70 hover:text-white transition-colors duration-200 p-2 rounded-sm hover:bg-white/10"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous photo"
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 p-3 rounded-sm hover:bg-white/10"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl h-[80vh] mx-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryPhotos[activeIndex].src}
              alt={galleryPhotos[activeIndex].alt}
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next photo"
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors duration-200 p-3 rounded-sm hover:bg-white/10"
          >
            <ChevronRight size={32} />
          </button>

          {/* Counter */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/40 text-xs font-semibold tracking-widest">
            {activeIndex + 1} / {galleryPhotos.length}
          </div>
        </div>
      )}
    </section>
  );
}
