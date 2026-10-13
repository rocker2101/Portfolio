'use client';

import React from 'react';

const SERVICES_DATA = [
  {
    idx: '01 / WEB DESIGN',
    title: 'Websites & Digital Experiences',
    desc: 'Clean, responsive marketing websites and digital flagships that communicate value with clarity and guide visitors to take action.',
  },
  {
    idx: '02 / COMMERCE',
    title: 'Ecommerce Architecture',
    desc: 'Custom online stores built for high Average Order Value (AOV), rapid catalog filtering, and zero-friction checkout.',
  },
  {
    idx: '03 / SOFTWARE',
    title: 'Custom Web Applications & SaaS',
    desc: 'Fast, accessible software products, founder MVPs, operational dashboards, and reliable API integrations.',
  },
  {
    idx: '04 / OPTIMIZATION',
    title: 'Performance & Motion Engineering',
    desc: 'Core Web Vitals profiling, sub-second interaction speed, and hardware-accelerated momentum scrolling.',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 sm:px-14 max-w-[1560px] mx-auto border-b border-white/[0.08]">
      <span className="font-mono text-xs font-semibold text-[#d4f455] uppercase tracking-widest block mb-4">
        02 // SERVICES
      </span>
      <h2 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight uppercase mb-4">
        WHAT WE BUILD
      </h2>
      <p className="text-base sm:text-lg text-[#9fa29a] max-w-2xl leading-relaxed mb-16">
        We help founders and growing businesses design and build software that scales cleanly and converts reliably.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {SERVICES_DATA.map((srv, i) => (
          <div
            key={i}
            className="bg-[#101211] border border-white/10 p-10 rounded hover:-translate-y-1.5 hover:border-[#d4f455]/40 transition-all duration-300"
          >
            <span className="font-mono text-xs text-[#d4f455] uppercase tracking-wider block mb-6">
              {srv.idx}
            </span>
            <h3 className="text-xl font-bold text-white mb-3">
              {srv.title}
            </h3>
            <p className="text-sm text-[#9fa29a] leading-relaxed">
              {srv.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
