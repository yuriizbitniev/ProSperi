import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-xl bg-surface/90 border-b border-foreground/5 transition-colors">
      <Link href="/" className="relative h-10 w-40">
        {/* Black Logo for Light Theme */}
        <img 
          src="/logo-black.png" 
          alt="ProSperi" 
          className="h-full w-auto object-contain dark:hidden"
        />
        {/* Gold Logo for Dark Theme */}
        <img 
          src="/logo-gold.png" 
          alt="ProSperi" 
          className="h-full w-auto object-contain hidden dark:block"
        />
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-foreground">
        <a href="#projects" className="hover:text-accent transition-colors">Projects</a>
        <a href="#about" className="hover:text-accent transition-colors">About</a>
        <a href="#process" className="hover:text-accent transition-colors">Process</a>
        <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
      </nav>
      <div className="flex items-center gap-4">
        <ThemeToggle />
      </div>
    </header>
  );
}
