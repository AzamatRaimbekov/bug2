"use client";

import { motion } from "framer-motion";
import { Users, TrendingUp, ShieldCheck, Award } from "lucide-react";

const stats = [
  {
    id: 1,
    name: "Довольных клиентов",
    value: "500+",
    icon: Users,
    color: "from-blue-400 to-cyan-300",
  },
  {
    id: 2,
    name: "Лет опыта",
    value: "10+",
    icon: Award,
    color: "from-purple-400 to-pink-300",
  },
  {
    id: 3,
    name: "Сэкономлено налогов",
    value: "100M+",
    icon: TrendingUp,
    color: "from-green-400 to-emerald-300",
  },
  {
    id: 4,
    name: "Успешных проверок",
    value: "100%",
    icon: ShieldCheck,
    color: "from-orange-400 to-yellow-300",
  },
];

export default function StatsSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.50),theme(colors.white))] opacity-50" />
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Нам доверяют лидеры рынка
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              Цифры говорят громче слов. Наша эффективность доказана реальными результатами.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-4 overflow-hidden rounded-2xl text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col bg-white p-8 shadow-lg shadow-indigo-100 rounded-2xl hover:shadow-xl hover:shadow-indigo-200 transition-all border border-slate-100"
              >
                 <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-indigo-50 mb-4">
                    <stat.icon className={`h-6 w-6 text-indigo-600`} />  
                 </div>
                <dt className="text-sm font-semibold leading-6 text-slate-600">{stat.name}</dt>
                <dd className="order-first text-3xl font-bold tracking-tight text-slate-900 mb-2">
                    {stat.value}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
