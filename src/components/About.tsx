import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("About");
  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center">
      <h2 className="text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-12 text-accent">
        {t("title")}
      </h2>
      <p className="text-2xl md:text-4xl max-w-5xl leading-tight md:leading-normal text-balance font-light text-foreground/90">
        {t("text")}
      </p>
    </section>
  );
}
