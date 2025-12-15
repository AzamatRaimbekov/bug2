"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Scene from "@/components/Scene";
import ServiceCard from "@/components/ServiceCard";
import SmoothScroll from "@/components/SmoothScroll";
import ParallaxSection from "@/components/ParallaxSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import ScrollToTop from "@/components/ScrollToTop";
import JsonLd from "@/components/JsonLd";
import LogoTicker from "@/components/LogoTicker";
import BentoGrid from "@/components/BentoGrid";
import Testimonials from "@/components/Testimonials";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const services = [
    {
      title: "Бухгалтерское обслуживание (помесячное)",
      items: [
        "Полное ведение бухгалтерского учета",
        "Формирование первичных документов",
        "Учёт доходов и расходов",
        "Расчёт налогов и взносов",
        "Подготовка и сдача налоговой, статистической и соцотчётности",
        "Ведение кассовых операций",
        "Кадровый учёт (по необходимости)",
        "Подготовка финансовой отчётности (ОПиУ, Баланс, ДДС)"
      ]
    },
    {
      title: "Налоговое сопровождение",
      items: [
        "Расчёт налогов",
        "Подготовка и подача деклараций",
        "Налоговое планирование и оптимизация",
        "Сопровождение налоговых проверок",
        "Представление интересов клиентов в налоговых органах",
        "Проведение сверок, устранение начислений и штрафов"
      ]
    },
    {
      title: "Консультационные услуги",
      items: [
        "Консультации по бухгалтерскому учёту",
        "Налоговые консультации",
        "Консультации директоров и собственников по финансовой грамотности",
        "Консультации по учёту, отчётности и требованиям маркетплейсов"
      ]
    },
    {
      title: "Аудиторские и проверочные услуги",
      items: [
        "Внутренний аудит",
        "Проверка бухгалтерии за прошлые периоды",
        "Финансовый анализ и выявление ошибок",
        "Подготовка рекомендаций и планов улучшения"
      ]
    },
    {
      title: "Обучение и сопровождение",
      items: [
        "Обучение бухгалтеров",
        "Обучение директоров и ИП (как читать отчётность, что контролировать)",
        "Обучение сдаче налогов и работе с электронными системами",
        "Настройка внутренних процессов учета"
      ]
    },
    {
      title: "Восстановление бухгалтерии",
      items: [
        "Полное восстановление учета за любой период",
        "Формирование всех отчётов, документов и регистров",
        "Исправление ошибок и приведение к требованиям законодательства"
      ]
    },
    {
      title: "Постановка учета «с нуля»",
      items: [
        "Создание учётной политики",
        "Настройка 1С / облачного учёта",
        "Создание регистров, схем документооборота",
        "Формирование базовых финансовых процессов компании"
      ]
    },
    {
      title: "Дополнительные профессиональные услуги",
      items: [
        "Подготовка договоров, актов, счетов и накладных",
        "Финансовый анализ бизнеса (ОПиУ, Баланс, ДДС)",
        "Подготовка отчетности и пакетов документов для банков",
        "Сопровождение проверок (налоговая, соцфонд, занятость)",
        "Сопровождение юридических вопросов, связанных с учётом"
      ]
    },
    {
      title: "Регистрация компаний из РФ для работы на маркетплейсах",
      items: [
        "Регистрация ОсОО / ИП для нерезидентов",
        "Открытие расчётного счёта",
        "Постановка на учёт в налоговых органах",
        "Подключение к электронным сервисам",
        "Настройка бухгалтерии под специфику маркетплейсов",
        "Консультации по структуре бизнеса и налоговой оптимизации",
        "Полное бухгалтерское обслуживание после регистрации"
      ]
    },
    {
      title: "Встреча, сопровождение и консультация под ключ",
      items: [
        "Встреча клиента в Кыргызстане",
        "Сопровождение в банках, налоговой и госорганах",
        "Подготовка всех документов",
        "Пошаговое консультирование по запуску бизнеса",
        "Сопровождение регистрации компании, открытие счета",
        "Настройка бухгалтерии и процессов",
        "Передача готового бизнеса под ключ"
      ]
    }
  ];

  return (
    <SmoothScroll>
      <JsonLd />
      <div className="min-h-screen bg-white text-slate-900 selection:bg-indigo-500/20">
        <Header />
        
        {/* Hero Section */}
        <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-4 md:px-0 pt-20">
          <Scene />
          
          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
              <div className="max-w-4xl">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                        <h1 className="text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl lg:text-8xl leading-[1.1]">
                            Финансы <br />
                            <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-700 bg-clip-text text-transparent">
                                под контролем
                            </span>
                        </h1>
                  </motion.div>

                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-8 text-lg text-slate-600 sm:text-2xl max-w-2xl font-light"
                  >
                      Профессиональное бухгалтерское сопровождение, налоговая оптимизация и юридическая поддержка. Мы берем рутину на себя.
                  </motion.p>

                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-10 flex gap-4"
                  >
                      <a href="#contact" className="group rounded-full bg-slate-900 px-8 py-4 text-lg font-medium text-white transition-all hover:bg-slate-800 hover:scale-105 shadow-xl shadow-slate-900/20">
                          Начать работу
                          <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </a>
                  </motion.div>
              </div>
          </div>
          
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </section>

        {/* Logo Ticker */}
        <LogoTicker />

        {/* Bento Grid Features */}
        <BentoGrid />

        {/* Stats Section with Parallax */}
        <ParallaxSection speed={0.05} className="relative z-10 bg-white">
             <StatsSection />
        </ParallaxSection>

        {/* Services Section */}
        <section id="services" className="relative py-32 bg-slate-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-20">
                  <span className="text-indigo-600 font-semibold tracking-wider text-sm uppercase">Что мы умеем</span>
                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">Наши Услуги</h2>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {services.map((service, index) => (
                      <ServiceCard key={index} service={service} index={index} />
                  ))}
              </div>
              
              <div className="mt-16 text-center">
                  <a href="#contact" className="text-indigo-600 hover:text-indigo-700 font-medium inline-flex items-center gap-2 transition-colors">
                      Посмотреть полный список услуг <ArrowRight className="w-4 h-4" />
                  </a>
              </div>
          </div>
        </section>

        {/* Process Section */}
        <ProcessSection />

        {/* Testimonials */}
        <Testimonials />

        {/* Trust/About Short */}
        <ParallaxSection speed={0.1} className="py-24 bg-white border-y border-slate-100">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-6">Почему выбирают нас</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <div className="flex-none rounded-full bg-indigo-50 p-1">
                                    <div className="rounded-full bg-indigo-100 p-2">
                                        <CheckCircle2 className="h-6 w-6 text-indigo-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Прозрачность</h3>
                                    <p className="mt-1 text-slate-500">Никаких скрытых платежей. Вы всегда знаете, за что платите.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex-none rounded-full bg-purple-50 p-1">
                                    <div className="rounded-full bg-purple-100 p-2">
                                        <CheckCircle2 className="h-6 w-6 text-purple-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Экспертность</h3>
                                    <p className="mt-1 text-slate-500">Команда профессионалов с опытом работы более 10 лет.</p>
                                </div>
                            </div>
                             <div className="flex gap-4">
                                <div className="flex-none rounded-full bg-blue-50 p-1">
                                    <div className="rounded-full bg-blue-100 p-2">
                                        <CheckCircle2 className="h-6 w-6 text-blue-600" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-900">Гарантии</h3>
                                    <p className="mt-1 text-slate-500">Материальная ответственность за ошибки в учете.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-indigo-200 to-purple-200 rounded-3xl blur-2xl opacity-50" />
                        <div className="relative rounded-2xl bg-white border border-slate-100 p-8 shadow-xl">
                            <p className="text-xl italic text-slate-600">
                                "Наша миссия — дать предпринимателям свободу от бумажной волокиты, чтобы они могли создавать великие продукты."
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-slate-200" /> {/* Placeholder for avatar */}
                                <div>
                                    <div className="font-semibold text-slate-900">Азамат А.</div>
                                    <div className="text-sm text-slate-500">Основатель Финансовый Навигатор</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxSection>

        {/* FAQ Section */}
        <FAQSection />

        {/* CTA Section */}
        <section id="contact" className="relative overflow-hidden py-32">
            <div className="absolute inset-0 bg-indigo-600" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.2)_100%)]" />
            
            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className="text-3xl font-bold text-white sm:text-5xl">Готовы навести порядок?</h2>
                        <p className="mt-6 text-xl text-indigo-100 max-w-xl">
                            Заполните форму, и мы свяжемся с вами для бесплатной консультации. Или напишите нам напрямую в мессенджеры.
                        </p>
                        <div className="mt-10 flex flex-wrap gap-4">
                            <a href="https://t.me/your_telegram" target="_blank" rel="noopener noreferrer" className="shadow-xl group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-indigo-600 transition-all hover:bg-gray-100 hover:scale-105">
                                Telegram
                                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </a>
                            <a href="mailto:contact@finpro.com" className="shadow-xl rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-white/20 hover:border-white/50 backdrop-blur-sm">
                                Email
                            </a>
                        </div>
                        
                        <div className="mt-10 border-t border-indigo-500/30 pt-8 text-indigo-100">
                            <h3 className="text-xl font-semibold text-white">Наш офис</h3>
                            <p className="mt-2">г. Бишкек, Исанова/Фрунзе (Фрунзе 402а), 4 этаж</p>
                            <p>Домофон кнопка - 7</p>
                            <div className="mt-4">
                                <a href="https://2gis.kg/bishkek/geo/70000001094383229" target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 hover:text-indigo-200">
                                    Показать на карте (2GIS)
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                         initial={{ opacity: 0, x: 30 }}
                         whileInView={{ opacity: 1, x: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <ContactForm />
                    </motion.div>
                </div>
            </div>
        </section>

        <Footer />
        <ScrollToTop />
      </div>
    </SmoothScroll>
  );
}
