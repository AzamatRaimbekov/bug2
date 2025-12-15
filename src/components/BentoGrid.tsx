"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Headphones, PiggyBank, FileCheck } from "lucide-react";

const features = [
  {
    title: "Безопасность данных",
    description: "Шифрование данных и резервное копирование. Ваша база 1С всегда под защитой.",
    icon: ShieldCheck,
    className: "md:col-span-2 bg-indigo-600 text-white",
    iconClassName: "text-indigo-200"
  },
  {
    title: "Оперативность",
    description: "На связи 24/7 в мессенджерах. Решаем вопросы за 15 минут.",
    icon: Zap,
    className: "md:col-span-1 bg-white border border-slate-100",
    iconClassName: "text-amber-500"
  },
  {
    title: "Доступ из любой точки",
    description: "Облачная бухгалтерия. Контролируйте бизнес с телефона.",
    icon: Globe,
    className: "md:col-span-1 bg-white border border-slate-100",
    iconClassName: "text-blue-500"
  },
  {
    title: "Экономия до 40%",
    description: "Аутсорсинг дешевле штатного бухгалтера. Нет отпускных и больничных.",
    icon: PiggyBank,
    className: "md:col-span-2 bg-slate-900 text-white",
    iconClassName: "text-emerald-400"
  },
    {
    title: "Личный эксперт",
    description: "За вами закреплен персональный бухгалтер, который знает специфику вашего бизнеса.",
    icon: Headphones,
    className: "md:col-span-1 bg-white border border-slate-100",
    iconClassName: "text-purple-500"
  },
    {
    title: "100% гарантия",
    description: "Материальная ответственность за ошибки в учете прописана в договоре.",
    icon: FileCheck,
    className: "md:col-span-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100",
    iconClassName: "text-indigo-600"
  },
];

export default function BentoGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Больше, чем просто бухгалтерия
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Мы создаем условия, в которых ваш бизнес может расти быстрее.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`rounded-3xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 ${feature.className}`}
            >
              <div className={`p-3 w-fit rounded-2xl bg-white/10 ${feature.className.includes("text-white") ? "bg-white/20" : "bg-slate-100"}`}>
                <feature.icon className={`w-8 h-8 ${feature.iconClassName}`} />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${feature.className.includes("text-white") ? "text-white" : "text-slate-900"}`}>
                    {feature.title}
                </h3>
                <p className={`text-sm leading-relaxed ${feature.className.includes("text-white") ? "text-slate-200" : "text-slate-500"}`}>
                    {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
