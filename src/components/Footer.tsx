import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-surface text-foreground py-16 px-6 md:px-12 border-t border-foreground/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="relative h-12 w-48 mb-2">
            <img 
              src="/logo-black.png" 
              alt="ProSperi" 
              className="h-full w-auto object-contain dark:hidden"
            />
            <img 
              src="/logo-gold.png" 
              alt="ProSperi" 
              className="h-full w-auto object-contain hidden dark:block"
            />
          </Link>
          <p className="text-muted font-light max-w-md">Production partner for architects and interior designers.</p>
        </div>
        <div className="flex gap-6 text-sm font-medium tracking-wider uppercase flex-wrap">
          <a href="#" className="hover:text-accent transition-colors">Instagram</a>
          <a href="#" className="hover:text-accent transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-accent transition-colors">Project Workflow (PDF)</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between text-muted text-sm font-light gap-4">
        <p>© {new Date().getFullYear()} ProSperi. All rights reserved.</p>
        <p>Design → Engineering → Production → Installation</p>
      </div>
    </footer>
  );
}
