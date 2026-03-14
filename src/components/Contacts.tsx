export function Contacts() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8">Contact Us</h2>
          <p className="text-lg font-light text-foreground/80 mb-8 max-w-sm">
            Available for projects across the European Union
          </p>
          <div className="flex flex-col gap-4">
            <a href="mailto:hello@prosperi.com" className="text-xl font-light hover:text-accent transition-colors">
              hello@prosperi.com
            </a>
            <a href="#" className="text-xl font-light hover:text-accent transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-accent">
            Locations
          </h3>
          <ul className="flex flex-col gap-4 text-xl font-light">
            <li>Barcelona, Spain</li>
            <li>Bulgaria</li>
            <li>Kyiv, Ukraine</li>
            <li>Odesa, Ukraine</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
