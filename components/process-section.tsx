'use client';

import React from 'react';

const PROCESS_STEPS = [
  {
    phase: 'PHASE 01',
    title: 'Understand',
    desc: 'Clarifying your core problem, audience psychology, technical constraints, and desired outcome.',
  },
  {
    phase: 'PHASE 02',
    title: 'Plan & Architecture',
    desc: 'Structuring information hierarchy, design tokens, component systems, and development milestones.',
  },
  {
    phase: 'PHASE 03',
    title: 'Design & Build',
    desc: 'Translating visual direction into production-ready, accessible, hardware-accelerated code.',
  },
  {
    phase: 'PHASE 04',
    title: 'Launch & Scale',
    desc: 'Cross-device validation, speed audits, domain connection, and handover documentation.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 sm:px-14 max-w-[1560px] mx-auto border-b border-white/[0.08]">
      <span className="font-mono text-xs font-semibold text-[#d4f455] uppercase tracking-widest block mb-4">
        03 // PROCESS
      </span>
      <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase mb-4">
        HOW WE OPERATE
      </h2>
      <p className="text-base sm:text-lg text-[#9fa29a] max-w-2xl leading-relaxed mb-16">
        Transparent milestone execution with rapid delivery cycles and direct engineer collaboration.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {PROCESS_STEPS.map((step, i) => (
          <div
            key={i}
            className="bg-[#101211] border border-white/10 p-10 rounded hover:-translate-y-1.5 hover:border-[#d4f455]/40 transition-all duration-300"
          >
            <span className="font-mono text-xs text-[#d4f455] uppercase tracking-wider block mb-6">
              {step.phase}
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              {step.title}
            </h3>
            <p className="text-sm text-[#9fa29a] leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
