import React from 'react';
import { PRINCIPLES } from '@/data/content';

export default function WhyRoxelence() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-b border-border-neutral">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs text-olive uppercase tracking-wider block mb-3">
            04 // Operating Principles
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-normal tracking-tight">
            Why partner with <br />
            <span className="italic font-light text-ink-muted">our studio.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
          We operate as a compact, capable design and engineering team. Here are the core commitments that guide how we build.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {PRINCIPLES.map((principle) => (
          <div
            key={principle.number}
            className="border border-border-neutral p-8 rounded-sm bg-[#F5F3EC] space-y-4"
          >
            <span className="font-mono text-xs text-olive font-semibold tracking-wider block">
              PRINCIPLE {principle.number}
            </span>
            <h3 className="font-serif text-2xl text-ink font-normal">
              {principle.title}
            </h3>
            <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
              {principle.explanation}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
