"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileText, Settings, Rocket } from "lucide-react";

const steps = [
  {
    name: "Консультация",
    description: "Обсуждаем ваши задачи, анализируем текущее состояние дел и предлагаем решение.",
    icon: MessageSquare,
  },
  {
    name: "Договор",
    description: "Фиксируем условия сотрудничества, цены и гарантии в официальном договоре.",
    icon: FileText,
  },
  {
    name: "Настройка",
    description: "Получаем доступы, настраиваем базы, проводим аудит или постановку учета.",
    icon: Settings,
  },
  {
    name: "Работа",
    description: "Вы занимаетесь бизнесом, а мы берем на себя всю бухгалтерию и налоги.",
    icon: Rocket,
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
         {/* Background elements */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl -z-10" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Процесс</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Как мы работаем
          </h2>
          <p className="mt-6 text-lg leading-8 text-slate-600">
            Простой и прозрачный алгорим старта. Всего 4 шага до порядка в финансах.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div 
                key={step.name} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-50 ring-1 ring-indigo-100 transition-transform hover:scale-110 duration-300">
                  <step.icon className="h-8 w-8 text-indigo-600" aria-hidden="true" />
                </div>
                <dt className="text-xl font-semibold leading-7 text-slate-900">
                  {index + 1}. {step.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-slate-500">
                  <p className="flex-auto">{step.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
