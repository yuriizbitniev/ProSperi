import { useTranslations } from "next-intl";

export function Capabilities() {
  const t = useTranslations("Capabilities");
  const items = t.raw("items") as string[];

  return (
    <section className="py-24 px-6 md:px-12 bg-black/5 dark:bg-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 justify-between items-start">
        <h2 className="text-3xl md:text-5xl font-light tracking-wide md:w-1/3">{t("title")}</h2>
        <div className="md:w-2/3 flex flex-wrap gap-4">
          {items.map((item, i) => (
            <div key={i} className="px-6 py-3 border border-foreground/20 rounded-full text-lg font-light hover:border-accent hover:text-accent transition-colors cursor-default">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
