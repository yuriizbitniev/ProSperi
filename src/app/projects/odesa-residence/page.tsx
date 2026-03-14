"use client";

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Link from "next/link";
import { Lightbox } from "@/components/Lightbox";

const galleryImages = [
  { src: "/images/odesa-residence/1.jpg", alt: "Odesa Residence — Living Room" },
  { src: "/images/odesa-residence/2.jpg", alt: "Odesa Residence — Kitchen" },
  { src: "/images/odesa-residence/3.jpg", alt: "Odesa Residence — Master Bedroom" },
  { src: "/images/odesa-residence/4.jpg", alt: "Odesa Residence — Bathroom" },
  { src: "/images/odesa-residence/5.jpg", alt: "Odesa Residence — Dining Area" },
  { src: "/images/odesa-residence/6.jpg", alt: "Odesa Residence — Terrace" },
  { src: "/images/odesa-residence/7.jpg", alt: "Odesa Residence — Exterior" },
];

const projectDetails = {
  title: "Odesa Residence",
  location: "Odesa, Ukraine",
  year: "2023",
  scope: "Full interior — custom kitchen, wall panels, built-in furniture, outdoor lounge",
  description:
    "A private seaside residence in Odesa featuring a light, coastal-inspired interior. Custom furniture was crafted using premium natural materials — light oak, natural stone, and linen textiles — to complement the panoramic Black Sea views. The project included a full kitchen installation, built-in shelving, and an outdoor terrace lounge area.",
};

export default function OdesaResidencePage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <main className="min-h-screen pt-24 pb-20 px-6 md:px-12">
        {/* Back link */}
        <div className="max-w-7xl mx-auto mb-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider uppercase text-foreground/60 hover:text-accent transition-colors"
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
              <p className="text-lg md:text-xl text-foreground/60 font-light">
                {projectDetails.location} — {projectDetails.year}
              </p>
            </div>
            <p className="text-sm tracking-[0.15em] uppercase text-accent font-medium whitespace-nowrap">
              {projectDetails.scope}
            </p>
          </div>
          <p className="mt-8 text-lg md:text-xl text-foreground/70 font-light max-w-4xl leading-relaxed">
            {projectDetails.description}
          </p>
        </header>

        {/* Gallery grid */}
        <section className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className={`group cursor-pointer overflow-hidden bg-black/5 dark:bg-white/5 ${
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
            className="inline-flex items-center gap-3 px-10 py-5 border border-foreground/20 hover:border-accent hover:text-accent transition-all uppercase tracking-widest text-sm font-medium"
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
