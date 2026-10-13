import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES } from '@/data/content';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 max-w-6xl mx-auto border-b border-border-neutral">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="font-mono text-xs text-olive uppercase tracking-wider block mb-3">
            02 // Services
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl text-ink font-normal tracking-tight">
            Capabilities centered on <br />
            <span className="italic font-light text-ink-muted">business requirements.</span>
          </h2>
        </div>
        <p className="text-ink-muted text-sm sm:text-base max-w-md leading-relaxed">
          We help founders build new digital products or fix existing systems that have become slow, complicated, or difficult to maintain.
        </p>
      </div>

      {/* Services List with Non-Repetitive Editorial Layout */}
      <div className="divide-y divide-border-neutral border-y border-border-neutral">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className="py-10 md:py-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-start group hover:bg-[#ECEAE2]/40 transition-colors px-4 -mx-4 rounded-sm"
          >
            {/* Index & Title */}
            <div className="md:col-span-5 flex items-start gap-4">
              <span className="font-mono text-xs text-olive font-semibold pt-1">
                {service.number}
              </span>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-ink font-normal tracking-tight mb-2">
                  {service.title}
                </h3>
                <a
                  href="#contact"
                  className="editorial-link font-mono text-xs uppercase text-ink-muted group-hover:text-ink mt-3"
                >
                  <span>Inquire about this</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Description & Concrete Scope */}
            <div className="md:col-span-7 space-y-4">
              <p className="text-ink-muted text-base leading-relaxed">
                {service.summary}
              </p>

              <div className="pt-2">
                <span className="font-mono text-[11px] text-ink-faint uppercase tracking-wider block mb-2">
                  What this includes:
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-ink">
                  {service.scope.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-olive/70 inline-block" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
