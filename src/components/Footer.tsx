import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <div className="font-bold text-2xl tracking-widest mb-4">ProSperi</div>
          <p className="text-background/70 font-light max-w-md">{t("description")}</p>
        </div>
        <div className="flex gap-6 text-sm font-medium tracking-wider uppercase flex-wrap">
          <a href="#" className="hover:text-accent transition-colors">{t("links.instagram")}</a>
          <a href="#" className="hover:text-accent transition-colors">{t("links.linkedin")}</a>
          <a href="#" className="hover:text-accent transition-colors">{t("links.pdf")}</a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-background/20 flex flex-col md:flex-row items-center justify-between text-background/50 text-sm font-light gap-4">
        <p>{t("copyright", { year: new Date().getFullYear() })}</p>
        <p>{t("tagline")}</p>
      </div>
    </footer>
  );
}
