'use client';

import React, { useState } from 'react';
import { Mail, ArrowUpRight, Copy, Check } from 'lucide-react';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    scope: 'Website or Brand Portal',
    timeline: 'Within 1-2 months',
    details: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('contact@roxelence.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Project Inquiry: ${formData.scope} — from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Roxelence team,\n\nMy name is ${formData.name} (${formData.email}).\n\nProject Scope: ${formData.scope}\nEstimated Timeline: ${formData.timeline}\n\nProject Details:\n${formData.details}\n\nLooking forward to hearing from you.`
    );

    // Open user's default email client with populated fields
    window.location.href = `mailto:contact@roxelence.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-bg-ink text-[#F5F3EC] w-full">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Direct Invitation */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <span className="font-mono text-xs text-lime-accent uppercase tracking-wider block mb-3">
              05 // Get in Touch
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-white font-normal tracking-tight leading-[1.05] mb-6">
              Tell us about <br />
              <span className="italic font-light text-slate-400">what you are building.</span>
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              Whether you need to launch a new digital flagship, overhaul an existing product, or explore custom software development, we respond within one business day.
            </p>
          </div>

          <div className="space-y-4 pt-4 border-t border-white/10 font-mono text-xs">
            <div>
              <span className="text-slate-500 uppercase block mb-1">Direct Studio Inbox</span>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:contact@roxelence.com"
                  className="text-white hover:text-lime-accent text-sm font-semibold transition-colors"
                >
                  contact@roxelence.com
                </a>
                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-sm bg-white/10 hover:bg-white/20 text-slate-300 transition-colors"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-lime-accent" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            <div>
              <span className="text-slate-500 uppercase block mb-1">Location & Working Hours</span>
              <span className="text-slate-300 block">
                India (IST) // Monday through Friday, 09:30–18:30
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Functional Inquiry Form */}
        <div className="lg:col-span-7 bg-[#21231E] border border-border-dark p-8 sm:p-10 rounded-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="inquiry-name" className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Your Name *
                </label>
                <input
                  id="inquiry-name"
                  type="text"
                  required
                  placeholder="e.g. Priyanshu Mehta"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#191A17] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-accent rounded-sm placeholder:text-slate-600"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-email" className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Work Email *
                </label>
                <input
                  id="inquiry-email"
                  type="email"
                  required
                  placeholder="e.g. priyanshu@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#191A17] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-accent rounded-sm placeholder:text-slate-600"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="inquiry-scope" className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Project Category
                </label>
                <select
                  id="inquiry-scope"
                  value={formData.scope}
                  onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                  className="w-full bg-[#191A17] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-accent rounded-sm"
                >
                  <option value="Website or Brand Portal">Website or Brand Portal</option>
                  <option value="Ecommerce Storefront">Ecommerce Storefront</option>
                  <option value="Custom Web App or SaaS">Custom Web App or SaaS</option>
                  <option value="Product Redesign & Optimization">Product Redesign & Optimization</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="inquiry-timeline" className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                  Target Timeline
                </label>
                <select
                  id="inquiry-timeline"
                  value={formData.timeline}
                  onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                  className="w-full bg-[#191A17] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-accent rounded-sm"
                >
                  <option value="Immediate (within 3-4 weeks)">Immediate (within 3-4 weeks)</option>
                  <option value="Within 1-2 months">Within 1-2 months</option>
                  <option value="Planning for next quarter">Planning for next quarter</option>
                </select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="inquiry-details" className="font-mono text-xs text-slate-400 uppercase tracking-wider block">
                Project Overview & Requirements *
              </label>
              <textarea
                id="inquiry-details"
                required
                rows={4}
                placeholder="Describe your product, current constraints, references, or specific deliverables..."
                value={formData.details}
                onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                className="w-full bg-[#191A17] border border-white/15 px-4 py-3 text-sm text-white focus:outline-none focus:border-lime-accent rounded-sm placeholder:text-slate-600"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-lime-accent text-ink font-mono text-xs font-bold uppercase tracking-wider rounded-sm hover:bg-white transition-colors"
              >
                <span>Send Project Inquiry</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <p className="font-mono text-[11px] text-slate-400 mt-3">
                Submitting will draft an email to contact@roxelence.com with your project specifications.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
