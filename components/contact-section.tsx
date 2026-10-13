'use client';

import React, { useState } from 'react';

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-14 max-w-[1560px] mx-auto border-b border-white/[0.08]">
      <span className="font-mono text-xs font-semibold text-[#d4f455] uppercase tracking-widest block mb-4">
        04 // INQUIRY
      </span>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Information */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <h2 className="text-5xl sm:text-7xl font-extrabold text-white tracking-tight leading-[1.02] uppercase mb-8">
            LET&apos;S BUILD<br />
            SOMETHING THAT<br />
            WORKS.
          </h2>

          <p className="text-base sm:text-lg text-[#9fa29a] leading-relaxed max-w-lg mb-12">
            Have an upcoming project or need a flagship digital redesign? Send us an inquiry or reach out directly.
          </p>

          <div className="space-y-3 font-mono text-xs text-[#60645c]">
            <p>
              EMAIL:{' '}
              <a href="mailto:contact@inveins.in" className="text-[#d4f455] font-semibold hover:underline">
                contact@inveins.in
              </a>
            </p>
            <p>LOCATION: New Delhi, India // Global Delivery</p>
            <p>HOURS: Mon — Sat [09:30 - 18:30 IST]</p>
          </div>
        </div>

        {/* Right Form */}
        <div className="lg:col-span-6 w-full bg-[#101211] border border-white/10 p-8 sm:p-12 rounded">
          {submitted ? (
            <div className="py-12 text-center">
              <span className="w-12 h-12 rounded-full bg-[#d4f455]/20 text-[#d4f455] flex items-center justify-center mx-auto mb-4 text-xl">
                ✓
              </span>
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
              <p className="text-sm text-[#9fa29a]">
                Thank you for reaching out. We will review your project brief and get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block font-mono text-xs text-[#60645c] uppercase tracking-wider mb-2">
                  YOUR NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  className="w-full bg-[#070807] border border-white/10 text-white px-4 py-3.5 rounded text-sm outline-none focus:border-[#d4f455] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#60645c] uppercase tracking-wider mb-2">
                  WORK EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. rahul@company.com"
                  className="w-full bg-[#070807] border border-white/10 text-white px-4 py-3.5 rounded text-sm outline-none focus:border-[#d4f455] transition-colors"
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-[#60645c] uppercase tracking-wider mb-2">
                  PROJECT SCOPE
                </label>
                <select className="w-full bg-[#070807] border border-white/10 text-white px-4 py-3.5 rounded text-sm outline-none focus:border-[#d4f455] transition-colors">
                  <option>Websites &amp; Digital Experiences</option>
                  <option>E-Commerce Flagship Storefront</option>
                  <option>Custom SaaS &amp; Software Platform</option>
                  <option>Full Digital Product Redesign</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-xs text-[#60645c] uppercase tracking-wider mb-2">
                  PROJECT DETAILS
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your goals, timeline, and reference sites..."
                  className="w-full bg-[#070807] border border-white/10 text-white px-4 py-3.5 rounded text-sm outline-none focus:border-[#d4f455] transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#d4f455] text-[#070807] font-sans font-bold text-sm py-4 rounded hover:bg-[#e2ff6a] transition-all shadow-[0_4px_20px_rgba(212,244,85,0.25)]"
              >
                Send Project Inquiry →
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
