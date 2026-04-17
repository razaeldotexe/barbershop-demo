"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Sterling",
    role: "Architect",
    content: "The attention to detail here is unparalleled. It's not just a haircut, it's an experience of absolute refinement and classic masculinity.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
  },
  {
    name: "Benjamin Hayes",
    role: "Senior Partner",
    content: "Founding my look at MANSCAPED changed everything. Their master barbers have an intuitive sense of style that perfectly matches my professional life.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
  },
  {
    name: "Julian Vane",
    role: "Artist",
    content: "Finally, a place that understands the nuance of a proper beard sculpture. The straight razor finish is something every man should experience at least once.",
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
            Client Voices
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-bold"
          >
            The Gentleman&apos;s Verdict
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
