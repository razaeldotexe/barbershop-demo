"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat grayscale"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center mb-8"
        >
          <div className="w-16 h-[1px] bg-primary mb-6" />
          <h2 className="text-primary tracking-[0.3em] uppercase text-sm font-bold mb-4">
            Berdiri Sejak 1998
          </h2>
          <h1 className="text-5xl md:text-8xl font-serif font-bold tracking-tight mb-8 leading-[1.1]">
            Tingkatkan Gaya Anda <br />
            <span className="italic text-zinc-400">Dengan Sempurna.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Rasakan puncak perawatan tradisional. Barber ahli kami memadukan teknik abadi 
            dengan kecanggihan modern untuk pria yang menuntut kesempurnaan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Link
              href="#contact"
              className="bg-primary hover:bg-accent text-zinc-950 px-10 py-4 rounded-none font-bold uppercase tracking-widest transition-all hover:scale-105 active:scale-95 text-sm"
            >
              Buat Janji Temu
            </Link>
            <Link
              href="#services"
              className="border border-zinc-800 hover:border-primary text-zinc-50 px-10 py-4 rounded-none font-bold uppercase tracking-widest transition-all text-sm"
            >
              Lihat Layanan
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-[1px] h-12 bg-zinc-800" />
      </div>
    </section>
  );
}
