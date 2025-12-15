"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceItem {
  title: string;
  items: string[];
}

interface ServiceCardProps {
  service: ServiceItem;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative rounded-2xl border border-indigo-100 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-500/10"
    >
      <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 opacity-0 transition-opacity group-hover:opacity-100" />
      
      <h3 className="mb-4 text-xl font-semibold text-slate-900 group-hover:text-indigo-600 transition-colors">
        {service.title}
      </h3>
      
      <ul className="space-y-2">
        {service.items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
