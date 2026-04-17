"use client";

import { motion } from "framer-motion";
import { Scissors, User, UserCheck, Zap } from "lucide-react";

const services = [
  {
    title: "Potongan Eksekutif",
    description: "Potongan rambut presisi diikuti dengan penataan detail dan cukur leher handuk panas.",
    price: "Rp150k",
    icon: <Scissors className="w-6 h-6" />,
  },
  {
    title: "Seni Jenggot",
    description: "Pembentukan jenggot ahli, perapihan garis, dan pengkondisian dengan minyak premium.",
    price: "Rp100k",
    icon: <User className="w-6 h-6" />,
  },
  {
    title: "Cukur Klasik",
    description: "Cukur pisau lipat dengan perawatan handuk panas multi-langkah dan balm pendingin.",
    price: "Rp120k",
    icon: <UserCheck className="w-6 h-6" />,
  },
  {
    title: "Layanan Lengkap",
    description: "Kombinasi potongan rambut khas dan perawatan jenggot untuk pengalaman terbaik.",
    price: "Rp250k",
    icon: <Zap className="w-6 h-6" />,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Keahlian Kami
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6"
          >
            Layanan Pilihan
          </motion.h3>
          <div className="w-24 h-[1px] bg-zinc-800 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 border border-zinc-900 bg-zinc-900/50 hover:bg-zinc-900 transition-all hover:-translate-y-2"
            >
              <div className="w-12 h-12 bg-zinc-800 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif font-bold mb-3">{service.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6 font-light">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-2xl font-serif font-bold text-primary">{service.price}</span>
                <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold group-hover:text-primary transition-colors">
                  45 Menit
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
