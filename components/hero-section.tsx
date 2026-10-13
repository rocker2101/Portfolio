import React from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="pt-16 pb-24 md:pt-24 md:pb-32 px-6 max-w-6xl mx-auto border-b border-border-neutral">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
        {/* Left Column: Editorial Headline & Copy */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#ECEAE2] border border-border-neutral font-mono text-xs text-ink-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-lime-accent" />
            <span className="tracking-wide uppercase">Independent Design & Software Studio</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.2rem] text-ink font-normal tracking-tight leading-[1.02] mb-8">
            Better websites. <br />
            <span className="italic font-light text-ink-muted">More useful software.</span>
          </h1>

          <p className="text-ink-muted text-lg sm:text-xl font-normal leading-relaxed max-w-xl mb-10">
            Roxelence is a design-conscious engineering studio. We partner with founders and operating businesses to create clear digital experiences, high-conversion ecommerce flagships, and reliable custom software.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-ink text-[#F5F3EC] font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-black transition-transform hover:-translate-y-0.5"
            >
              <span>Discuss a project</span>
              <ArrowUpRight className="w-4 h-4 text-lime-accent" />
            </a>

            <a
              href="#work"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-transparent border border-border-neutral text-ink font-mono text-xs uppercase tracking-wider font-semibold rounded-sm hover:bg-[#ECEAE2] hover:border-ink/40 transition-colors"
            >
              <span>Explore our work</span>
              <ArrowDown className="w-3.5 h-3.5 text-ink-muted" />
            </a>
          </div>
        </div>

        {/* Right Column: Architectural Wireframe Picture Frame */}
        <div className="lg:col-span-5 w-full">
          <div className="border border-border-neutral bg-[#121310] rounded-sm overflow-hidden shadow-lg">
            {/* Top Technical Metadata Bar */}
            <div className="flex items-center justify-between px-4 py-2.5 bg-black/80 border-b border-white/10 font-mono text-[11px] text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-lime-accent" />
                <span>FIG 01 // STRUCTURAL GRID</span>
              </span>
              <span className="text-lime-accent uppercase text-[10px]">CRAFTSMANSHIP</span>
            </div>

            {/* Architectural Wireframe Image */}
            <div className="relative aspect-square w-full bg-black flex items-center justify-center overflow-hidden">
              <Image
                src="/hero-wireframe.png"
                alt="Roxelence Architectural Structural Framework Wireframe"
                fill
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 450px"
              />
            </div>

            {/* Bottom Caption & Studio Specs */}
            <div className="p-4 bg-[#191A17] border-t border-white/10 flex items-center justify-between font-mono text-xs text-slate-400">
              <span>DESIGN & ENGINEERING</span>
              <span className="text-slate-200">INTENTIONAL CODE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
