"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { Lightbox } from "@/components/Lightbox";

const galleryImages = [
  { src: "/images/villa-barcelona/1.png", alt: "Villa Barcelona — Living Room" },
  { src: "/images/villa-barcelona/2.png", alt: "Villa Barcelona — Kitchen" },
  { src: "/images/villa-barcelona/3.png", alt: "Villa Barcelona — Master Bedroom" },
  { src: "/images/villa-barcelona/4.png", alt: "Villa Barcelona — Bathroom" },
  { src: "/images/villa-barcelona/5.png", alt: "Villa Barcelona — Dining Room" },
  { src: "/images/villa-barcelona/6.png", alt: "Villa Barcelona — Study" },
  { src: "/images/villa-barcelona/7.png", alt: "Villa Barcelona — Terrace" },
];

const projectDetails = {
  title: "Villa Barcelona",
  location: "Barcelona, Spain",
  year: "2024",
  scope: "Full interior — custom kitchens, wardrobes, wall panels, bathroom furniture",
  description:
    "A complete interior implementation for a private Mediterranean villa. Every piece of furniture was custom-designed and manufactured to seamlessly blend with the architectural vision — from the open-concept kitchen island to the floor-to-ceiling built-in wardrobes and bespoke bathroom vanities.",
};

export default function VillaBarcelonaPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-12">
        {/* Back link */}
        <div className="max-w-7xl mx-auto mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-muted hover:text-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Projects
          </Link>
        </div>

        {/* Project header */}
        <header className="max-w-7xl mx-auto mb-16 md:mb-20">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-4">
                {projectDetails.title}
              </h1>
              <p className="text-lg md:text-xl text-muted font-light">
                {projectDetails.location} — {projectDetails.year}
              </p>
            </div>
            <p className="text-sm tracking-[0.15em] uppercase text-accent font-medium whitespace-nowrap">
              {projectDetails.scope}
            </p>
          </div>
          <p className="mt-8 text-lg md:text-xl text-muted font-light max-w-4xl leading-relaxed">
            {projectDetails.description}
          </p>
        </header>

        {/* Gallery grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group cursor-pointer overflow-hidden bg-surface ${
                  index === 0 ? "md:col-span-2 aspect-[16/9]" : "aspect-[4/3]"
                }`}
                onClick={() => setLightboxIndex(index)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="max-w-7xl mx-auto mt-20 flex justify-center">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-3 px-10 py-5 border border-foreground/10 hover:border-accent hover:text-accent transition-all uppercase tracking-widest text-sm font-medium"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </main>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
