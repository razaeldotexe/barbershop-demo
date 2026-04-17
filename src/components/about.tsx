"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-zinc-900 overflow-hidden px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative z-10 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&q=80"
                alt="Barber at work"
                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 hover:scale-110 hover:brightness-100"
              />
            </div>
            {/* Decorative Gold Frame */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-primary/20 z-0 pointer-events-none" />
            <div className="absolute top-1/2 -right-12 -translate-y-1/2 hidden lg:block">
              <div className="bg-primary px-8 py-10 flex flex-col items-center justify-center">
                <span className="text-5xl font-serif font-bold text-zinc-950">25+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-950 font-bold mt-2">Thn Pengalaman</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-8"
          >
            <div className="w-12 h-[2px] bg-primary" />
            <h2 className="text-4xl md:text-6xl font-serif font-bold leading-tight">
              Warisan Keahlian <br />
              <span className="italic font-light text-zinc-500 text-3xl md:text-5xl">Sejak 1998</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
              Di MANSCAPED, kami percaya bahwa perawatan pria lebih dari sekadar rutinitas—ini adalah sebuah ritual. 
              Didirikan di atas prinsip-prinsip barbering tradisional, kami menciptakan tempat 
              di mana pria modern dapat melarikan diri dari kebisingan dan menemukan kembali seni memotong rambut.
            </p>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
              Barber ahli kami adalah seniman yang terlatih dalam tradisi lama, namun sangat memahami tren 
              terkini saat ini. Kami tidak hanya memotong rambut; kami membentuk kepercayaan diri.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">Master Barber</h4>
                <p className="text-zinc-500 text-sm">Setiap kursi diisi oleh profesional berpengalaman dengan minimal 10 tahun jam terbang.</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">Produk Premium</h4>
                <p className="text-zinc-500 text-sm">Kami secara eksklusif menggunakan pomade buatan tangan dan krim cukur batch kecil.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
