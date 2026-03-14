/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

const mockProjects = [
  { id: 1, img: "/images/villa-barcelona.png", title: "Villa Barcelona", href: "/projects/villa-barcelona" },
  { id: 2, img: "/images/kyiv-apartment.png", title: "Kyiv Apartment", href: "/projects/kyiv-apartment" },
  { id: 3, img: "/images/odesa-residence.png", title: "Odesa Residence", href: "/projects/odesa-residence" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockProjects.map((p) => (
            <Link key={p.id} href={p.href} className="group cursor-pointer block">
              <div className="relative aspect-[4/5] overflow-hidden bg-background">
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-xl font-light tracking-wide group-hover:text-accent transition-colors">{p.title}</h3>
            </Link>
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <button className="px-8 py-4 border border-foreground/20 hover:border-accent hover:text-accent transition-colors uppercase tracking-widest text-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}
