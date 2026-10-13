'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 border-b ${
        isScrolled
          ? 'bg-[#F5F3EC]/95 backdrop-blur-md border-[#DCDCD2]'
          : 'bg-[#F5F3EC] border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Roxelence Wordmark */}
        <a
          href="#top"
          className="group flex items-center gap-2 text-ink font-sans font-bold text-xl tracking-tight focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
        >
          <span>Roxelence</span>
          <span className="w-1.5 h-1.5 rounded-full bg-lime-accent inline-block group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-sans text-sm font-medium text-ink-muted" aria-label="Main Navigation">
          <a href="#work" className="hover:text-ink transition-colors">
            Work
          </a>
          <a href="#services" className="hover:text-ink transition-colors">
            Services
          </a>
          <a href="#process" className="hover:text-ink transition-colors">
            Process
          </a>
          <a href="#about" className="hover:text-ink transition-colors">
            Approach
          </a>
          <a href="#contact" className="hover:text-ink transition-colors">
            Contact
          </a>
        </nav>

        {/* Inquiry CTA & Mobile Hamburger */}
        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-ink text-[#F5F3EC] text-xs font-mono font-medium tracking-wide uppercase hover:bg-black transition-colors rounded-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </a>

          {/* Accessible Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-menu"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden p-2 text-ink border border-border-neutral rounded-sm hover:bg-[#ECEAE2] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Accessible Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden bg-[#F5F3EC] border-b border-border-neutral px-6 py-6 flex flex-col gap-4 font-sans text-base font-medium text-ink animate-fadeIn"
        >
          <a
            href="#work"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-border-neutral/60 hover:text-olive transition-colors"
          >
            Work
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-border-neutral/60 hover:text-olive transition-colors"
          >
            Services
          </a>
          <a
            href="#process"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-border-neutral/60 hover:text-olive transition-colors"
          >
            Process
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 border-b border-border-neutral/60 hover:text-olive transition-colors"
          >
            Approach
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="py-2 hover:text-olive transition-colors"
          >
            Contact
          </a>

          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 w-full py-3 bg-ink text-[#F5F3EC] font-mono text-xs uppercase tracking-wider rounded-sm"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
