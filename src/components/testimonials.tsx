"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bambang Soetedjo",
    role: "Arsitek",
    content: "Perhatian terhadap detail di sini tidak tertandingi. Ini bukan sekadar potong rambut, ini adalah pengalaman maskulinitas klasik yang sangat berkelas.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Rian Hidayat",
    role: "Pengusaha",
    content: "Menemukan gaya saya di MANSCAPED mengubah segalanya. Barber ahli mereka memiliki intuisi gaya yang sangat cocok dengan kehidupan profesional saya.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Aditya Pratama",
    role: "Seniman",
    content: "Akhirnya, tempat yang memahami nuansa pembentukan jenggot yang tepat. Hasil akhir pisau lipatnya adalah sesuatu yang harus dirasakan setiap pria.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
  },
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-24 bg-zinc-950 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-primary uppercase tracking-[0.3em] text-sm font-bold mb-4"
          >
            Suara Pelanggan
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            Penilaian Sang Pria
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 bg-zinc-900/40 border border-zinc-900/50 flex flex-col gap-8 relative hover:bg-zinc-900/60 transition-colors"
            >
              <Quote className="w-12 h-12 text-primary/20 absolute top-8 right-8" />
              <p className="text-zinc-400 font-light italic leading-relaxed text-lg relative z-10">
                &quot;{testimonial.content}&quot;
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover grayscale border-2 border-primary/20"
                />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-zinc-100">{testimonial.name}</span>
                  <span className="text-xs uppercase tracking-[0.2em] text-zinc-600 font-bold">{testimonial.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
