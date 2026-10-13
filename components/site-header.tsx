'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 sm:px-14 py-6 bg-[#070807]/90 backdrop-blur-xl border-b border-white/[0.06]">
      {/* Brand Wordmark */}
      <a href="#hero" className="font-sans text-lg sm:text-xl font-extrabold tracking-widest text-white uppercase">
        INVEINS
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-10 font-sans text-sm font-medium text-[#9fa29a]">
        <a href="#work" className="text-white relative pb-1 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-[#d4f455] after:rounded-sm">
          Work
        </a>
        <a href="#tech" className="hover:text-white transition-colors">
          Stack
        </a>
        <a href="#services" className="hover:text-white transition-colors">
          Services
        </a>
        <a href="#process" className="hover:text-white transition-colors">
          Process
        </a>
        <a href="#about" className="hover:text-white transition-colors">
          About
        </a>
        <a href="#contact" className="hover:text-white transition-colors">
          Contact
        </a>
      </nav>

      {/* Right Action */}
      <div className="hidden md:flex items-center gap-6">
        <div className="w-[1px] h-6 bg-white/20" />
        <a
          href="#contact"
          className="inline-flex items-center gap-2 font-sans text-xs font-medium text-white border border-white/30 px-5 py-2 rounded-sm hover:border-[#d4f455] hover:text-[#d4f455] hover:bg-[#d4f455]/[0.04] transition-all"
        >
          <span>Start a project</span>
          <span>→</span>
        </a>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-gray-300 hover:text-white p-2"
        aria-label="Toggle Navigation"
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-[72px] left-0 right-0 bg-[#070807] border-b border-white/10 p-6 flex flex-col gap-4 font-sans text-base text-gray-300">
          <a href="#work" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Work</a>
          <a href="#tech" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Stack</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Services</a>
          <a href="#process" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Process</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">About</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="hover:text-white">Contact</a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 text-center text-sm font-bold bg-[#d4f455] text-black py-2.5 rounded"
          >
            Start a project →
          </a>
        </div>
      )}
    </header>
  );
}
