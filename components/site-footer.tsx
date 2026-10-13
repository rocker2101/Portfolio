import React from 'react';

export default function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#121310] text-[#F5F3EC] py-16 px-6 border-t border-white/10 font-sans">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#top" className="text-xl font-bold tracking-tight text-white inline-block">
              Roxelence<span className="text-lime-accent">.</span>
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              An independent digital design and software development studio. We build clear, considered websites, ecommerce storefronts, and functional web applications.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3 font-mono text-xs">
            <span className="text-slate-500 uppercase tracking-wider block mb-2">Navigation</span>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#work" className="hover:text-white transition-colors">01 / Selected Work</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">02 / Services</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">03 / The Process</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">04 / Studio Approach</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">05 / Project Inquiry</a></li>
            </ul>
          </div>

          {/* Core Services */}
          <div className="md:col-span-4 space-y-3 font-mono text-xs">
            <span className="text-slate-500 uppercase tracking-wider block mb-2">Core Services</span>
            <ul className="space-y-2 text-slate-300">
              <li>Websites & Digital Experiences</li>
              <li>Ecommerce Storefront Architecture</li>
              <li>Custom Web Applications & SaaS</li>
              <li>Product Interfaces & API Integrations</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-slate-500">
          <div>
            © {currentYear} Roxelence. All rights reserved.
          </div>
          <div>
            Built with intention in India // Serving ambitious businesses globally
          </div>
        </div>
      </div>
    </footer>
  );
}
