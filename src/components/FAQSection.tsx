"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Как начать сотрудничество?",
    answer:
      "Оставьте заявку на сайте или свяжитесь с нами в мессенджерах. Мы проведем первичную бесплатную консультацию, определим ваши потребности и предложим оптимальный тариф или индивидуальные условия.",
  },
  {
    question: "Работаете ли вы с нерезидентами?",
    answer:
      "Да, мы специализируемся на регистрации компаний для нерезидентов, открытии счетов и полном бухгалтерском сопровождении бизнеса в Кыргызстане.",
  },
  {
    question: "Что входит в ежемесячное обслуживание?",
    answer:
      "В стандартный пакет входит ведение бухгалтерского и налогового учета, расчет зарплаты, сдача отчетности, консультации по текущим вопросам. Список услуг можно расширить под ваши задачи.",
  },
  {
    question: "Какую ответственность вы несете?",
    answer:
      "Мы несем полную матеральную ответственность за ошибки в учете и отчетности, совершенные по нашей вине. Это закреплено в договоре.",
  },
    {
    question: "Как происходит обмен документами?",
    answer:
      "Мы работаем через ЭДО (электронный документооборот), а также используем защищенные облачные хранилища. Оригиналы можно передавать курьером или почтой по необходимости.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-3xl font-bold leading-10 tracking-tight text-slate-900 mb-10 text-center">
          Часто задаваемые вопросы
        </h2>
        <dl className="mt-10 space-y-6 divide-y divide-slate-200">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="pt-6"
            >
              <dt>
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex w-full items-start justify-between text-left text-slate-900 hover:text-indigo-600 transition-colors"
                >
                  <span className="text-base font-semibold leading-7">{faq.question}</span>
                  <span className="ml-6 flex h-7 items-center">
                    {openIndex === index ? (
                      <Minus className="h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Plus className="h-6 w-6" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </dt>
              <motion.dd
                initial={false}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden pr-12"
              >
                <p className="mt-2 text-base leading-7 text-slate-600 pb-4">{faq.answer}</p>
              </motion.dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}
