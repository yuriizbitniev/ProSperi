export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="font-bold text-2xl tracking-widest mb-4">ProSperi</div>
          <p className="text-background/70 font-light max-w-md">Production partner for architects and interior designers.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium tracking-wider uppercase flex-wrap">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Project Workflow (PDF)</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between text-background/50 text-sm font-light gap-4">
        <p>© {new Date().getFullYear()} ProSperi. All rights reserved.</p>
        <p>Design → Engineering → Production → Installation</p>
      </div>
    </footer>
  );
}
