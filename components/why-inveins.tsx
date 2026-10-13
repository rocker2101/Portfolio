'use client';

import React from 'react';

const PRINCIPLES_DATA = [
  {
    number: '01',
    title: 'Design for Utility & Speed',
    explanation: 'We don’t add visual decorations for the sake of trends. Every animation, layout hierarchy, and typographic weight exists to serve customer conversion and business goals.',
  },
  {
    number: '02',
    title: 'Production-Grade Engineering',
    explanation: 'Clean codebases without technical debt. Strongly typed TypeScript, zero runtime clutter, hardware-accelerated rendering, and modular architecture.',
  },
  {
    number: '03',
    title: 'Founder-Direct Partnership',
    explanation: 'You work directly with the senior engineers and designers building your product. No account managers, telephone games, or bureaucracy.',
  },
  {
    number: '04',
    title: 'Built to Scale Long-Term',
    explanation: 'Products engineered to withstand high concurrency spikes, real-time telemetry, and effortless future expansion from day one.',
  },
];

export default function WhyInveins() {
  return (
    <section id="about" className="py-24 px-6 sm:px-14 max-w-[1560px] mx-auto border-b border-white/[0.08]">
      <span className="font-mono text-xs font-semibold text-[#d4f455] uppercase tracking-widest block mb-4">
        03 // STUDIO PRINCIPLES
      </span>
      <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase mb-4">
        WHY PARTNER WITH US
      </h2>
      <p className="text-base sm:text-lg text-[#9fa29a] max-w-2xl leading-relaxed mb-16">
        We operate as a compact, capable design and engineering team. Here are the core commitments that guide how we build.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRINCIPLES_DATA.map((principle) => (
          <div
            key={principle.number}
            className="bg-[#101211] border border-white/10 p-10 rounded hover:-translate-y-1.5 hover:border-[#d4f455]/40 transition-all duration-300 space-y-4"
          >
            <span className="font-mono text-xs text-[#d4f455] font-semibold tracking-wider block">
              PRINCIPLE {principle.number}
            </span>
            <h3 className="text-2xl font-bold text-white">
              {principle.title}
            </h3>
            <p className="text-sm text-[#9fa29a] leading-relaxed">
              {principle.explanation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
