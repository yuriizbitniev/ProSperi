"use client";

import { useState } from "react";
import Image from "next/image";
import { Playfair_Display, Inter } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const playfair = Playfair_Display({ subsets: ["latin", "cyrillic"] });
const inter = Inter({ subsets: ["latin", "cyrillic"] });

const processSteps = [
  {
    id: 1,
    number: "01",
    title: { en: "Design Review", ru: "Рассмотрение дизайна" },
    description: {
      en: "Initial discussion and detailed review of the design requirements, aesthetic preferences, and project scope.",
      ru: "Первичное обсуждение и детальный обзор требований к дизайну, эстетических предпочтений и объема проекта."
    },
    imageUrl: "/images/process/placeholder-1.jpg"
  },
  {
    id: 2,
    number: "02",
    title: { en: "Technical Estimate", ru: "Техническая оценка" },
    description: {
      en: "Comprehensive technical calculation and precise budgeting based on the approved design.",
      ru: "Комплексный технический расчет и точное бюджетирование на основе утвержденного дизайна."
    },
    imageUrl: "/images/process/placeholder-2.jpg"
  },
  {
    id: 3,
    number: "03",
    title: { en: "Agreement", ru: "Договор" },
    description: {
      en: "Finalizing the legal agreements, timelines, and mutual commitments.",
      ru: "Окончательное согласование юридических соглашений, сроков и взаимных обязательств."
    },
    imageUrl: "/images/process/placeholder-3.jpg"
  },
  {
    id: 4,
    number: "04",
    title: { en: "Site Measurement", ru: "Замер помещения" },
    description: {
      en: "Accurate on-site measurements by our specialists to ensure perfect furniture fit.",
      ru: "Точные замеры на объекте нашими специалистами для обеспечения идеальной посадки мебели."
    },
    imageUrl: "/images/process/placeholder-4.jpg"
  },
  {
    id: 5,
    number: "05",
    title: { en: "Working Drawings", ru: "Рабочие чертежи" },
    description: {
      en: "Development of detailed technical drawings and construction documentation.",
      ru: "Разработка детальных технических чертежей и конструкторской документации."
    },
    imageUrl: "/images/process/placeholder-5.jpg"
  },
  {
    id: 6,
    number: "06",
    title: { en: "Engineering", ru: "Проектирование" },
    description: {
      en: "Engineering solutions and material selection for structural integrity.",
      ru: "Инженерные решения и выбор материалов для обеспечения структурной целостности."
    },
    imageUrl: "/images/process/placeholder-6.jpg"
  },
  {
    id: 7,
    number: "07",
    title: { en: "Production", ru: "Производство" },
    description: {
      en: "High-precision manufacturing process utilizing premium materials and expert craftsmanship.",
      ru: "Высокоточный производственный процесс с использованием премиальных материалов."
    },
    imageUrl: "/images/process/placeholder-7.jpg"
  },
  {
    id: 8,
    number: "08",
    title: { en: "Quality Control", ru: "Контроль качества" },
    description: {
      en: "Rigorous quality inspections at every stage to ensure the highest standards.",
      ru: "Строгий контроль качества на каждом этапе для обеспечения высочайших стандартов."
    },
    imageUrl: "/images/process/placeholder-8.jpg"
  },
  {
    id: 9,
    number: "09",
    title: { en: "Logistics", ru: "Логистика" },
    description: {
      en: "Careful packaging and coordinated delivery to the project site.",
      ru: "Бережная упаковка и скоординированная доставка на объект."
    },
    imageUrl: "/images/process/placeholder-9.jpg"
  },
  {
    id: 10,
    number: "10",
    title: { en: "Installation", ru: "Монтаж" },
    description: {
      en: "Professional assembly and final installation by our experienced team.",
      ru: "Профессиональная сборка и финальный монтаж нашей опытной командой."
    },
    imageUrl: "/images/process/placeholder-10.jpg"
  }
];

export function Process() {
  const [activeStep, setActiveStep] = useState(1);
  const lang = "en" as const; // Defaulting to English. Extracted type safety.

  const activeStepData = processSteps.find((s) => s.id === activeStep) || processSteps[0];

  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <h2 className={`text-3xl md:text-5xl font-light tracking-wide mb-16 text-center ${inter.className}`}>
        Our Process
      </h2>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">
        
        {/* Left Column: Steps List */}
        <div className="lg:w-1/3 flex overflow-x-auto lg:flex-col lg:overflow-visible pb-6 lg:pb-0 gap-6 lg:gap-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {processSteps.map((step) => {
            const isActive = activeStep === step.id;
            
            return (
              <div
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className={`
                  group cursor-pointer flex-shrink-0 lg:flex-shrink 
                  lg:w-full min-w-[240px] lg:min-w-0
                  border-l-2 lg:py-6 pl-4 lg:pl-8 
                  transition-all duration-300 ease-out
                  ${isActive 
                    ? "border-[#8C7851]" 
                    : "border-transparent lg:border-foreground/10 hover:border-[#8C7851]/50"
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <span 
                    className={`
                      text-xl lg:text-3xl font-semibold transition-colors duration-300
                      ${playfair.className}
                      ${isActive ? "text-[#8C7851]" : "text-[#1A1A1A]/40 dark:text-gray-500 group-hover:text-[#8C7851]/70"}
                    `}
                  >
                    {step.number}
                  </span>
                  <h3 
                    className={`
                      text-lg lg:text-xl font-medium transition-colors duration-300
                      ${inter.className}
                      ${isActive ? "text-foreground" : "text-[#1A1A1A]/50 dark:text-gray-400 group-hover:text-foreground/80"}
                    `}
                  >
                    {step.title[lang]}
                  </h3>
                </div>

                {/* Animated Description under active step */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden hidden lg:block"
                    >
                      <p className="mt-4 text-sm text-foreground/70 leading-relaxed max-w-[90%]">
                        {step.description[lang]}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Right Column: High-Quality Image Viewer */}
        <div className="lg:w-2/3 flex flex-col gap-6">
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-[700px] rounded-sm overflow-hidden bg-muted/30 shadow-2xl flex items-center justify-center border border-foreground/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStepData.id}
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{ opacity: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* 
                  Uses localized Next.js `<Image />` component. 
                  If images are not yet added to /public/images/process/, standard alt text or fallback container will show.
                */}
                <Image
                  src={activeStepData.imageUrl}
                  alt={activeStepData.title[lang]}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority={activeStepData.id === 1}
                />
                
                {/* Elegant dark overlay gradient for maximum text visibility on mobile layout */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent lg:hidden" />
              </motion.div>
            </AnimatePresence>
            
            {/* Fallback pattern for when images are missing in local dev (acts as skeleton) */}
            <div className="absolute inset-0 -z-10 flex items-center justify-center">
              <div className="text-center opacity-30">
                <span className={`text-6xl ${playfair.className} block mb-2`}>{activeStepData.number}</span>
                <span className={`text-sm tracking-widest uppercase ${inter.className}`}>Image Placeholder</span>
              </div>
            </div>
            
            {/* Mobile Description overlay (visible only on small screens over image) */}
            <div className="absolute bottom-6 left-6 right-6 lg:hidden z-10 text-white drop-shadow-md border-l-2 border-[#8C7851] pl-4">
              <h4 className={`text-lg font-medium mb-1 ${inter.className}`}>{activeStepData.title[lang]}</h4>
              <p className="text-sm font-light leading-relaxed text-white/90">
                {activeStepData.description[lang]}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* CTA Button */}
      <div className="mt-20 lg:mt-32 flex justify-center">
        <button 
          className={`
            group relative px-8 py-4 overflow-hidden rounded-sm
            border border-[#8C7851] text-[#8C7851] font-medium tracking-wide
            hover:text-white transition-colors duration-500
            ${inter.className}
          `}
        >
          <span className="relative z-10 flex items-center gap-3">
            Download Full PDF Presentation
            <svg 
              className="w-5 h-5 transform group-hover:-translate-y-1 transition-transform duration-300" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </span>
          {/* Hover background effect */}
          <div className="absolute inset-0 bg-[#8C7851] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
        </button>
      </div>
      
    </section>
  );
}
