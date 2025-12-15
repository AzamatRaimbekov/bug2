import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-indigo-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">Финансовый Навигатор</span>
            <p className="mt-2 text-sm text-slate-500 max-w-sm">
              Ваш надежный партнер в мире финансов и налогов.
            </p>
            <div className="mt-4 text-sm text-slate-600 space-y-1">
                <p>г. Бишкек, Исанова/Фрунзе (Фрунзе 402а), 4 этаж</p>
                <p>Домофон кнопка - 7</p>
                <a href="https://2gis.kg/bishkek/geo/70000001094383229" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 inline-flex items-center gap-1">
                    Мы на карте (2GIS)
                </a>
            </div>
            <p className="mt-4 text-xs text-slate-400">Основано в 2024 году</p>
          </div>
          
          <div className="flex gap-6">
             <Link href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">
                Instagram
             </Link>
              <Link href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">
                Telegram
             </Link>
             <Link href="#" className="text-slate-500 hover:text-indigo-600 transition-colors">
                WhatsApp
             </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-slate-400">
          &copy; {new Date().getFullYear()} Финансовый Навигатор. Все права защищены.
        </div>
      </div>
    </footer>
  );
}
