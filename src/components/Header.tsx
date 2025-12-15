"use client";

import { motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-indigo-100 bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Финансовый Навигатор
            </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Услуги
          </Link>
          <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            О нас
          </Link>
          <Link href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors">
            Контакты
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-indigo-700 shadow-md shadow-indigo-500/20"
          >
            Связаться
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-slate-600 hover:text-indigo-600"
          onClick={toggleMenu}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
        <motion.div
            initial={false}
            animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            className="overflow-hidden bg-white border-b border-indigo-100 md:hidden"
        >
          <nav className="flex flex-col space-y-4 p-4">
              <Link href="#services" className="text-sm font-medium text-slate-600 hover:text-indigo-600" onClick={toggleMenu}>
                Услуги
              </Link>
              <Link href="#about" className="text-sm font-medium text-slate-600 hover:text-indigo-600" onClick={toggleMenu}>
                О нас
              </Link>
              <Link href="#contact" className="text-sm font-medium text-slate-600 hover:text-indigo-600" onClick={toggleMenu}>
                Контакты
              </Link>
          </nav>
        </motion.div>
    </header>
  );
}
