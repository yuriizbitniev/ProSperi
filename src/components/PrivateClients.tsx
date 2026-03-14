import { useTranslations } from "next-intl";

export function PrivateClients() {
  const t = useTranslations("PrivateClients");
  
  return (
    <section className="py-24 px-6 md:px-12 max-w-4xl mx-auto text-center">
      <h2 className="text-sm md:text-base font-medium tracking-[0.3em] uppercase mb-8 text-accent">
        {t("title")}
      </h2>
      <p className="text-xl md:text-3xl font-light text-balance leading-relaxed">
        {t("text")}
      </p>
    </section>
  );
}
