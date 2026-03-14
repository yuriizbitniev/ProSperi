import { useTranslations } from "next-intl";
import { ThemeToggle } from "./ThemeToggle";
import { LangToggle } from "./LangToggle";

export function Header() {
  const t = useTranslations("Navigation");
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 backdrop-blur-md bg-background/80 border-b border-black/5 dark:border-white/5 transition-colors">
      <div className="font-bold text-2xl tracking-widest text-foreground">
        ProSperi
      </div>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-wider text-foreground/80">
        <a href="#projects" className="hover:text-accent transition-colors">{t("projects")}</a>
        <a href="#about" className="hover:text-accent transition-colors">{t("about")}</a>
        <a href="#process" className="hover:text-accent transition-colors">{t("process")}</a>
        <a href="#contact" className="hover:text-accent transition-colors">{t("contact")}</a>
      </nav>
      <div className="flex items-center gap-4">
        <LangToggle />
        <ThemeToggle />
      </div>
    </header>
  );
}
