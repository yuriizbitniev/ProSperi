import { useTranslations } from "next-intl";

export function Contacts() {
  const t = useTranslations("Contacts");
  
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl md:text-5xl font-light tracking-wide mb-8">{t("title")}</h2>
          <p className="text-lg font-light text-foreground/80 mb-8 max-w-sm">
            {t("euAvailability")}
          </p>
          <div className="flex flex-col gap-4">
            <a href={`mailto:${t("email")}`} className="text-xl font-light hover:text-accent transition-colors">
              {t("email")}
            </a>
            <a href="#" className="text-xl font-light hover:text-accent transition-colors">
              {t("whatsapp")}
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-medium tracking-[0.2em] uppercase mb-6 text-accent">
            {t("location")}
          </h3>
          <ul className="flex flex-col gap-4 text-xl font-light">
            <li>{t("locations.barcelona")}</li>
            <li>{t("locations.bulgaria")}</li>
            <li>{t("locations.kyiv")}</li>
            <li>{t("locations.odesa")}</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
