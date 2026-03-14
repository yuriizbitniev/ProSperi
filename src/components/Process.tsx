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
  const lang = "en" as const;

  const activeStepData = processSteps.find((s) => s.id === activeStep) || processSteps[0];

  return (
    <section id="process" className="py-24 px-6 md:px-12 max-w-screen-2xl mx-auto relative overflow-hidden">
      <h2 className={`text-4xl md:text-5xl font-light tracking-wide mb-16 text-center ${inter.className}`}>
        Our Process
      </h2>

      {/* ======================= */}
      {/*  MOBILE & TABLET LAYOUT */}
      {/* ======================= */}
      <div className="flex xl:hidden flex-col gap-0 w-full mb-12">
        {processSteps.map((step) => {
          const isActive = activeStep === step.id;
          
          return (
            <div
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`
                group cursor-pointer flex flex-col
                border-l-2 py-5 pl-5 md:pl-8 
                transition-all duration-300 ease-out
                ${isActive 
                  ? "border-[#8C7851]" 
                  : "border-foreground/10 hover:border-[#8C7851]/50"
                }
              `}
            >
              <div 
                className={`flex items-center gap-4 transition-all duration-500 origin-left 
                  ${isActive ? "scale-100 opacity-100" : "scale-90 opacity-40"}
                `}
              >
                <span 
                  className={`
                    text-2xl font-semibold transition-colors duration-300
                    ${playfair.className}
                    ${isActive ? "text-[#8C7851]" : "text-foreground group-hover:text-[#8C7851]/70"}
                  `}
                >
                  {step.number}
                </span>
                <h3 
                  className={`
                    text-xl font-medium transition-colors duration-300
                    ${inter.className}
                    ${isActive ? "text-foreground" : "text-foreground group-hover:text-foreground/80"}
                  `}
                >
                  {step.title[lang]}
                </h3>
              </div>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="mt-4 text-base text-foreground/75 leading-relaxed max-w-[90%] md:max-w-2xl">
                      {step.description[lang]}
                    </p>

                    <div className="mt-6 relative w-full aspect-[4/3] md:aspect-video rounded-md overflow-hidden bg-muted/30 shadow-md border border-foreground/10">
                      <Image
                        src={step.imageUrl}
                        alt={step.title[lang]}
                        fill
                        className="object-cover"
                        sizes="(max-width: 1280px) 100vw, 0vw"
                        priority={step.id === 1}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>

      {/* ============================== */}
      {/*  DESKTOP TIMELINE FULL HD ONLY */}
      {/* ============================== */}
      <div className="hidden xl:flex flex-col items-center w-full min-h-[850px]">
        {/* Horizontal Navigation Timeline */}
        <div className="w-full flex justify-center gap-6 2xl:gap-10 mb-16 px-4">
          {processSteps.map((step) => {
            const isActive = activeStep === step.id;
            
            return (
              <div
                key={`desktop-${step.id}`}
                onClick={() => setActiveStep(step.id)}
                className={`
                  group cursor-pointer flex flex-col items-center justify-end
                  transition-all duration-500 origin-bottom
                  w-[140px]
                  ${isActive ? "scale-100 opacity-100" : "scale-75 opacity-40 hover:opacity-70 hover:scale-90"}
                `}
              >
                <span 
                  className={`
                    text-3xl font-semibold mb-3 transition-colors duration-300
                    ${playfair.className}
                    ${isActive ? "text-[#8C7851]" : "text-foreground"}
                  `}
                >
                  {step.number}
                </span>
                
                <h3 
                  className={`
                    text-base 2xl:text-lg text-center font-medium leading-tight
                    ${inter.className}
                  `}
                >
                  {step.title[lang]}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Centralized Image & Description Viewer */}
        <div className="w-full max-w-6xl mx-auto flex flex-col items-center mt-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepData.id}
              initial={{ opacity: 0, y: 30, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(2px)" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col w-full items-center"
            >
              <p className={`text-xl md:text-2xl text-[#8C7851] font-light max-w-3xl text-center leading-relaxed mb-10 ${inter.className}`}>
                {activeStepData.description[lang]}
              </p>
              
              <div className="relative w-full aspect-[21/9] rounded-xl overflow-hidden bg-muted/20 shadow-2xl border border-foreground/5 transition-all duration-500">
                <Image
                  src={activeStepData.imageUrl}
                  alt={activeStepData.title[lang]}
                  fill
                  className="object-cover shadow-inner hover:scale-105 transition-transform duration-[20s] ease-linear"
                  sizes="(min-width: 1280px) 72vw, 0vw"
                  priority={activeStepData.id === 1}
                />
                
                {/* Subtle bottom gradient to make the image blend slightly */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50 pointer-events-none" />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* CTA Button (Shared) */}
      <div className="mt-16 xl:mt-20 flex justify-center w-full">
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
          <div className="absolute inset-0 bg-[#8C7851] transform scale-y-0 origin-bottom group-hover:scale-y-100 transition-transform duration-500 ease-in-out" />
        </button>
      </div>
      
    </section>
  );
}
