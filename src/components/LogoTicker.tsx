"use client";

import { motion } from "framer-motion";

const partners = [
  "1С:Бухгалтерия",
  "Salyk.kg",
  "M-Bank",
  "Optima Bank",
  "KICB",
  "DemirBank",
  "Bitrix24",
  "Мой Склад",
  "Кабинет Налогоплательщика",
];

export default function LogoTicker() {
  return (
    <section className="py-10 bg-slate-50 border-y border-slate-200 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8 mb-6">
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest">
            Работаем со всеми современными сервисами и банками
        </p>
      </div>
      <div className="flex">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-50%" }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-16 pr-16"
          style={{ width: "max-content" }}
        >
          {[...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="text-2xl font-bold text-slate-300 whitespace-nowrap hover:text-indigo-400 transition-colors cursor-default"
            >
              {partner}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
