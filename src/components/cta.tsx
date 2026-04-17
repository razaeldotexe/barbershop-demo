"use client";

import { motion } from "framer-motion";
import { Calendar, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-zinc-950 px-6 relative overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.05),transparent)] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="border border-zinc-900 bg-zinc-900/30 p-12 md:p-20 flex flex-col items-center gap-10"
        >
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
              Ready to Claim Your <br />
              <span className="text-primary italic">Signature Look?</span>
            </h2>
            <p className="text-zinc-500 font-light max-w-lg mx-auto leading-relaxed">
              Booking your chair is only a click away. Our master barbers are ready to deliver 
              the best grooming experience of your life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center w-full justify-center">
            <button className="w-full sm:w-auto bg-primary hover:bg-accent text-zinc-950 px-12 py-5 font-bold uppercase tracking-widest transition-all">
              Book Appointment
            </button>
            <a 
              href="tel:+1234567890" 
              className="flex items-center gap-3 text-zinc-100 hover:text-primary transition-colors font-bold uppercase tracking-widest text-sm"
            >
              <Phone className="w-5 h-5" />
              Call (123) 456-7890
            </a>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mt-4 pt-12 border-t border-zinc-800/50">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-1">Mon - Fri</span>
              <span className="text-zinc-400 font-serif">9:00 - 20:00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-1">Saturday</span>
              <span className="text-zinc-400 font-serif">10:00 - 18:00</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-1">Sunday</span>
              <span className="text-zinc-400 font-serif font-bold text-primary italic">Closed</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-1">Location</span>
              <span className="text-zinc-400 font-serif">Mayfair, London</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
