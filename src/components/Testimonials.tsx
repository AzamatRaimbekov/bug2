"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Помогли восстановить учет за 2 года перед проверкой. Все прошло гладко, штрафов удалось избежать. Огромное спасибо Азамату и команде!",
    author: "Тимур К.",
    role: "Гендиректор ОсОО 'СтройСити'",
    rating: 5,
  },
  {
    text: "Открывали ИП через Финансовый Навигатор. Все документы подготовили сами, мне нужно было только подписать. Очень удобно для тех, кто ценит время.",
    author: "Алина М.",
    role: "Индивидуальный предприниматель",
    rating: 5,
  },
  {
    text: "Работаем на аутсорсе уже год. Никаких проблем с налоговой, все отчеты сдаются вовремя. Нравится, что всегда можно позвонить и спросить совет.",
    author: "Сергей Д.",
    role: "Основатель IT-стартапа",
    rating: 5,
  },
  {
    text: "Грамотная оптимизация налогов. Сэкономили нам около 300 000 сомов за прошлый год абсолютно законными методами. Рекомендую!",
    author: "Бакыт Э.",
    role: "Владелец торговой сети",
    rating: 5,
  },
  {
    text: "Перешли к ним от штатного бухгалтера. Выходит дешевле, а качество работы выше. Нет проблем с отпусками и больничными.",
    author: "Елена В.",
    role: "Директор салона красоты",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-slate-50 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Что говорят клиенты
        </h2>
      </div>

      <div className="flex overflow-hidden">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 50,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-4"
          style={{ width: "max-content" }}
        >
          {[...testimonials, ...testimonials, ...testimonials].map((review, index) => (
            <div
              key={index}
              className="w-[400px] flex-none rounded-2xl bg-white p-8 shadow-lg shadow-indigo-100/50 border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-indigo-100 mb-2" />
                <p className="text-slate-600 leading-relaxed mb-6">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-4 border-t border-slate-100 pt-6">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm">
                    {review.author[0]}
                </div>
                <div>
                  <div className="font-semibold text-slate-900">{review.author}</div>
                  <div className="text-xs text-slate-500">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
