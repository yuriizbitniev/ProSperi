export function Process() {
  const steps = [
    "Design Review", "Technical Estimate", "Agreement",
    "Site Measurement", "Working Drawings", "Engineering",
    "Production", "Quality Control", "Logistics", "Installation"
  ];
  
  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-16 text-center">Our Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="border-t border-foreground/10 pt-6">
            <span className="text-accent font-medium mb-2 block text-sm tracking-widest">
              {(i + 1).toString().padStart(2, '0')}
            </span>
            <p className="font-light text-lg">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
