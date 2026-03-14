/* eslint-disable @next/next/no-img-element */
const mockProjects = [
  { id: 1, img: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80", title: "Villa Barcelona" },
  { id: 2, img: "https://images.unsplash.com/photo-1600607687644-aac4c15cecb1?auto=format&fit=crop&q=80", title: "Kyiv Apartment" },
  { id: 3, img: "https://images.unsplash.com/photo-1600585154526-990dced4e56d?auto=format&fit=crop&q=80", title: "Odesa Residence" },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {mockProjects.map((p) => (
            <div key={p.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-black/10">
                <img 
                  src={p.img} 
                  alt={p.title}
                  className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-6 text-xl font-light tracking-wide group-hover:text-accent transition-colors">{p.title}</h3>
            </div>
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
