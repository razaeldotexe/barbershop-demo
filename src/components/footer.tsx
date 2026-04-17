import Link from "next/link";
import { Scissors, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & About */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2 group">
              <Scissors className="w-8 h-8 text-primary group-hover:rotate-12 transition-transform" />
              <span className="text-2xl font-serif font-bold tracking-tighter">MANSCAPED</span>
            </Link>
            <p className="text-zinc-500 font-light max-w-md leading-relaxed">
              We provide the modern gentleman with a legacy of traditional grooming. 
              Our sanctuary is built on craftsmanship, mastery, and the art of the cut. 
              Elevate your style with London&apos;s finest.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400">
                <Phone className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-zinc-900 flex items-center justify-center text-zinc-400">
                <Mail className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-100">Quick Links</h4>
            <div className="flex flex-col gap-4">
              <Link href="#services" className="text-zinc-500 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">Services</Link>
              <Link href="#about" className="text-zinc-500 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">About Us</Link>
              <Link href="#reviews" className="text-zinc-500 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">Testimonials</Link>
              <Link href="#contact" className="text-zinc-500 hover:text-primary transition-colors text-sm uppercase tracking-widest font-medium">Booking</Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-100">Newsletter</h4>
            <p className="text-zinc-600 text-xs font-light leading-relaxed">
              Join the club for exclusive style tips and early access to bookings.
            </p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-zinc-900 border border-zinc-800 px-4 py-3 text-xs focus:outline-none focus:border-primary w-full text-zinc-400"
              />
              <button className="bg-primary text-zinc-950 px-4 py-3 flex items-center justify-center hover:bg-accent transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-10 border-t border-zinc-900 flex flex-col md:row items-center justify-between gap-6 text-center md:text-left">
          <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-bold">
            © 2026 MANSCAPED Barbershop. All Rights Reserved. Crafted for the Modern Gentleman.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-bold hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] uppercase tracking-[0.2em] text-zinc-700 font-bold hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
