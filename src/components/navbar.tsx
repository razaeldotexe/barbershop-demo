"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Layanan", href: "#services" },
  { name: "Tentang", href: "#about" },
  { name: "Ulasan", href: "#reviews" },
  { name: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
        isScrolled ? "bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800 py-3" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Image 
            src="/icon_transparent.png" 
            alt="MANSCAPED Icon" 
            width={32} 
            height={32} 
            className="w-8 h-8 group-hover:rotate-12 transition-transform"
          />
          <span className="text-2xl font-serif font-bold tracking-tighter">MANSCAPED</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors uppercase tracking-widest"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary hover:bg-accent text-zinc-950 px-6 py-2 rounded-none font-bold uppercase tracking-widest transition-colors text-sm"
          >
            Pesan Sekarang
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-zinc-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-zinc-900 border-b border-zinc-800 p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-zinc-400 hover:text-primary transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-primary text-zinc-950 px-6 py-3 text-center font-bold uppercase tracking-widest"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Buat Janji Temu
          </Link>
        </div>
      )}
    </nav>
  );
}
