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
                <span className="text-xs uppercase tracking-widest text-zinc-950 font-bold mt-2">Years Exp.</span>
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
              A Legacy of Craftsmanship <br />
              <span className="italic font-light text-zinc-500 text-3xl md:text-5xl">Since 1998</span>
            </h2>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
              At MANSCAPED, we believe that grooming is more than just a routine—it's a ritual. 
              Founded on the principles of traditional barbering, we've created a sanctuary 
              where the modern gentleman can escape the noise and rediscover the art of the cut.
            </p>
            <p className="text-lg text-zinc-400 font-light leading-relaxed max-w-xl">
              Our master barbers are artisans, trained in the storied traditions of London 
              and Rome, yet intimately familiar with the cutting-edge trends of today. 
              We don't just cut hair; we sculpt confidence.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-4">
              <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">Master Barbers</h4>
                <p className="text-zinc-500 text-sm">Every chair is manned by a seasoned professional with a minimum of 10 years experience.</p>
              </div>
              <div>
                <h4 className="text-sm uppercase tracking-widest font-bold text-primary mb-2">Premium Products</h4>
                <p className="text-zinc-500 text-sm">We exclusively use artisan-crafted pomades and small-batch shaving creams.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
