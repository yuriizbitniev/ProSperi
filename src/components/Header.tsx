import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-background/80 border-b border-black/5 dark:border-white/5 transition-colors">
      <div className="font-bold text-2xl tracking-widest text-foreground">
        ProSperi
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-foreground/80">
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
