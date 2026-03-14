export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 md:px-12 pt-20 border-b border-foreground/5">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-surface/40 via-transparent to-transparent dark:from-background/60" />
      <div className="absolute inset-0 z-[0] bg-background/30 dark:bg-background/60 backdrop-blur-[2px]" />
      <div className="absolute inset-0 z-[-1] overflow-hidden bg-[url('https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80')] bg-cover bg-center brightness-[0.7] dark:brightness-[0.4]" />
      
      <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-12 w-full animate-in fade-in slide-in-from-bottom-8 duration-1000">
        <h1 className="text-5xl md:text-8xl font-black tracking-tighter text-white drop-shadow-xl w-full select-none">
          ProSperi
        </h1>
        <p className="text-2xl md:text-5xl font-light text-white/95 tracking-wide text-balance leading-snug drop-shadow-lg">
          Production partner for architects and interior designers
        </p>
        <p className="text-lg md:text-2xl text-white/80 max-w-3xl text-balance font-light hidden md:block mt-4">
          Custom furniture implementation
        </p>
        <p className="text-sm md:text-lg text-white/60 tracking-[0.15em] uppercase font-light mt-2">
          Design → Engineering → Production → Installation
        </p>
        <a 
          href="#projects"
          className="mt-8 px-10 py-5 bg-accent text-white font-bold hover:bg-accent/90 focus:ring-4 focus:ring-accent/30 transition-all uppercase tracking-widest text-sm rounded-none tracking-[0.2em] shadow-lg"
        >
          View Projects
        </a>
      </div>
    </section>
  );
}
