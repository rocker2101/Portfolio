import React from 'react';
import { PROCESS_STAGES } from '@/data/content';

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-b border-border-neutral">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs text-olive uppercase tracking-wider block mb-3">
            03 // The Process
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-normal tracking-tight">
            How we work. <br />
            <span className="italic font-light text-ink-muted">Deliberate and transparent.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
          No opaque handoffs or unpredictable timelines. We move in deliberate, weekly milestones so you are always clear on project status.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {PROCESS_STAGES.map((stage) => (
          <div
            key={stage.step}
            className="border border-border-neutral bg-[#ECEAE2] p-8 rounded-sm flex flex-col justify-between space-y-6"
          >
            <div>
              <span className="font-mono text-xs text-olive font-semibold tracking-wider block mb-4">
                STAGE {stage.step}
              </span>
              <h3 className="font-serif text-2xl text-ink font-normal mb-3">
                {stage.title}
              </h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                {stage.description}
              </p>
            </div>

            <div className="pt-4 border-t border-border-neutral/70">
              <span className="font-mono text-[10px] text-ink-faint uppercase block mb-1">
                Typical Deliverable
              </span>
              <span className="font-mono text-xs text-ink font-medium leading-snug block">
                {stage.deliverables}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
