'use client';

import React from 'react';

export default function HeroSection() {
  return (
    <div className="min-h-screen flex flex-col justify-center px-6 sm:px-14 pt-32 pb-12 max-w-[1560px] mx-auto relative" id="hero">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Copy & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start z-10">
          <span className="font-mono text-xs font-semibold text-[#d4f455] uppercase tracking-[0.14em] mb-7">
            DIGITAL PRODUCTS STUDIO / INDIA
          </span>

          <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-extrabold text-white tracking-tight leading-[1.02] mb-8">
            We build digital<br />
            experiences that<br />
            work<span className="text-[#d4f455]">.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#9fa29a] leading-relaxed max-w-xl mb-10">
            Roxelence helps startups and growing businesses design and develop websites, ecommerce experiences and custom software that are fast, reliable and built for the long run.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 bg-[#d4f455] text-[#070807] font-sans font-bold text-sm px-8 py-3.5 rounded hover:bg-[#e2ff6a] hover:-translate-y-0.5 transition-all shadow-[0_4px_20px_rgba(212,244,85,0.25)]"
            >
              <span>Start a project</span>
              <span>→</span>
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2 font-sans font-semibold text-sm text-white hover:text-[#d4f455] transition-colors"
            >
              <span>Explore our work</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Right Column: Visual Product Collage */}
        <div className="lg:col-span-6 relative h-[560px] hidden sm:block perspective-[1000px]">
          {/* Vertical Technical Meta */}
          <div className="absolute top-0 right-0 text-right font-mono text-[9px] text-white/35 leading-tight tracking-widest z-10">
            <strong>DESIGN</strong><br />+<br /><strong>ENGINEERING</strong><br />=<br /><strong>BETTER DIGITAL EXPERIENCES</strong>
          </div>

          {/* SVG Wireframe */}
          <svg className="absolute w-full h-full top-0 left-0 pointer-events-none opacity-40 z-0" viewBox="0 0 600 500" fill="none">
            <path d="M50 350 L280 180 L520 220 L300 420 Z" stroke="rgba(212, 244, 85, 0.25)" strokeWidth="1.2" strokeDasharray="3 3"/>
            <path d="M280 180 L280 50 L520 90 L520 220" stroke="rgba(212, 244, 85, 0.2)" strokeWidth="1.2"/>
            <path d="M50 350 L50 220 L280 50" stroke="rgba(212, 244, 85, 0.2)" strokeWidth="1.2"/>
            <line x1="50" y1="280" x2="280" y2="120" stroke="rgba(212, 244, 85, 0.15)" strokeWidth="1"/>
            <line x1="150" y1="390" x2="380" y2="200" stroke="rgba(212, 244, 85, 0.15)" strokeWidth="1"/>
          </svg>

          {/* Accent Lime Cubes */}
          <div className="absolute bottom-[90px] left-[15px] w-4 h-4 bg-[#d4f455] border border-white/40 shadow-[0_0_12px_#d4f455] z-10" />
          <div className="absolute top-[35px] right-[130px] w-3 h-3 bg-[#d4f455] border border-white/40 shadow-[0_0_12px_#d4f455] z-10" />

          {/* Layer 1: Code Window (main.tsx) */}
          <div className="absolute top-[25px] left-[5%] w-[290px] bg-[#0c0d0c] border border-white/10 rounded-lg p-3.5 shadow-2xl font-mono text-[11px] z-1 hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/10 text-white/50 text-[10px]">
              <span className="w-2 h-2 rounded-full bg-[#ff5f56]" />
              <span className="w-2 h-2 rounded-full bg-[#ffbd2e]" />
              <span className="ml-1 text-white/70">main.tsx</span>
            </div>
            <div className="text-white/80 space-y-1">
              <div><span className="text-white/30 mr-2">1</span><span className="text-[#c084fc]">export default function</span> <span className="text-[#60a5fa]">Home</span>() &#123;</div>
              <div><span className="text-white/30 mr-2">2</span>  <span className="text-[#c084fc]">return</span> (</div>
              <div><span className="text-white/30 mr-2">3</span>    &lt;<span className="text-[#f472b6]">main</span> <span className="text-[#d4f455]">className</span>=<span className="text-[#34d399]">&quot;min-h-screen&quot;</span>&gt;</div>
              <div><span className="text-white/30 mr-2">4</span>      &lt;<span className="text-[#60a5fa]">Hero</span> /&gt;</div>
              <div><span className="text-white/30 mr-2">5</span>      &lt;<span className="text-[#60a5fa]">FeaturedWork</span> /&gt;</div>
              <div><span className="text-white/30 mr-2">6</span>    &lt;/<span className="text-[#f472b6]">main</span>&gt;</div>
              <div><span className="text-white/30 mr-2">7</span>  );</div>
              <div><span className="text-white/30 mr-2">8</span>&#125;</div>
            </div>
          </div>

          {/* Layer 2: Inveins Storefront Card */}
          <div className="absolute top-[65px] right-[2%] w-[270px] bg-[#f5f3ec] text-[#070807] rounded-lg p-4 shadow-2xl z-2 flex justify-between hover:-translate-y-1 transition-transform">
            <div className="flex-1 pr-2">
              <div className="flex justify-between font-mono text-[9px] text-[#71717a] font-bold mb-2">
                <span>inveins</span>
                <span>Shop</span>
              </div>
              <div className="text-sm font-extrabold leading-tight mb-3">
                Timeless<br />Styles for<br />Modern You
              </div>
              <a href="https://inveins.in" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-[10px] font-bold bg-[#070807] text-white px-2 py-1 rounded">
                <span>Shop Now →</span>
              </a>
            </div>
            <div className="w-[75px] h-[95px] bg-[#e4e2db] rounded overflow-hidden">
              <img src="/projects/inveins-thumb.png" alt="Inveins thumbnail" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Layer 3: CrawlForge Dark SaaS Dashboard Card */}
          <div className="absolute bottom-[35px] left-[15%] w-[310px] bg-[#0e100f] border border-white/10 rounded-lg p-3.5 shadow-2xl z-3 hover:-translate-y-1 transition-transform">
            <div className="flex justify-between items-center text-[10px] pb-2 border-b border-white/10 text-white/50 mb-2">
              <span className="font-bold text-white flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#d4f455]" />
                CrawlForge
              </span>
              <span>Lead Generation</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <div>
                <span className="text-[9px] text-white/40 block">Total Leads</span>
                <span className="text-xs font-bold text-white">2,48,000</span>
              </div>
              <div className="text-right">
                <span className="text-[9px] text-white/40 block">Success Rate</span>
                <span className="text-xs font-bold text-[#d4f455]">98.7%</span>
              </div>
            </div>
            <div className="w-full h-6 flex items-center justify-center">
              <svg className="w-full h-full" viewBox="0 0 100 24" fill="none">
                <path d="M0 20 L20 16 L40 22 L60 8 L80 12 L100 4" stroke="#d4f455" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
          </div>

          {/* Layer 4: CrawlForge Mobile Frame */}
          <div className="absolute bottom-[20px] right-[8%] w-[130px] bg-[#0d0f0e] border-2 border-[#242926] rounded-2xl p-2.5 shadow-2xl z-4 hover:-translate-y-1 transition-transform font-sans">
            <div className="flex justify-between text-[8px] font-mono text-white font-bold mb-1">
              <span>CrawlForge</span>
              <span>=</span>
            </div>
            <p className="text-[8px] text-white/60 mb-2 leading-tight">
              Smarter lead generation for modern teams.
            </p>
            <div className="w-full h-8 bg-[#141715] rounded border border-white/5 flex items-center justify-center">
              <svg width="85%" height="18" viewBox="0 0 80 20" fill="none">
                <path d="M0 16 L20 12 L40 18 L60 6 L80 2" stroke="#d4f455" strokeWidth="1.8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="flex items-center gap-4 mt-8 font-mono text-xs text-[#60645c] tracking-wider">
        <span className="text-[#d4f455] font-bold text-sm">01</span>
        <span className="text-white/20">|</span>
        <span className="flex items-center gap-1.5 uppercase text-[#9fa29a]">
          <span>SCROLL TO EXPLORE</span>
          <span>↓</span>
        </span>
      </div>
    </div>
  );
}
