'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

interface Project {
  id: string;
  category: string;
  title: string;
  description: string;
  liveUrl: string;
  deviceImage: string;
  thumbImage: string;
  thumbAccent: string;
  challenge: string;
  services: string[];
  techStack: { name: string; icon: string }[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'inveins',
    category: 'E-COMMERCE WEBSITE',
    title: 'Inveins',
    description:
      'A modern clothing brand with a focus on minimal design and quality essentials. We built their e-commerce website to showcase their collection and create a smooth shopping experience.',
    liveUrl: 'https://inveins.in',
    deviceImage: '/projects/inveins-device.png',
    thumbImage: '/projects/inveins-thumb.png',
    thumbAccent: '#8aa848',
    challenge:
      'The brand needed a clean, fast and visually appealing online store that could represent their style and make it easy for customers to browse and shop across devices.',
    services: [
      'Web Design & Development',
      'E-commerce integration',
      'UI/UX implementation',
    ],
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'Shopify', icon: 'shopify' },
    ],
  },
  {
    id: 'mpgisports',
    category: 'SPORTS FESTIVAL WEBSITE',
    title: 'MPGI Sport',
    description:
      'The official sports portal for the MPGI APEX Championship. We built this digital platform to showcase the collegiate sporting sanctuary, manage event schedules, and celebrate the spirit of athletic excellence across 9 institutions.',
    liveUrl: 'https://mpgisports.in',
    deviceImage: '/projects/mpgisports-device.png',
    thumbImage: '/projects/mpgisports-thumb.png',
    thumbAccent: '#758a36',
    challenge:
      'The event needed a robust, high-energy digital hub that could handle registration, show live scores, and celebrate historic victories for over 2,500 student athletes.',
    services: [
      'Web Design & Development',
      'Live Scoring & Schedules',
      'Event Registration System',
    ],
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'Custom Backend', icon: 'backend' },
    ],
  },
  {
    id: 'ai-interview',
    category: 'AI-POWERED SAAS PLATFORM',
    title: 'AI Interview',
    description:
      'An AI-powered interview preparation platform. We built their web experience to help users practice technical, behavioral, and coding interviews with AI, get instant feedback, track their progress, and land their dream jobs.',
    liveUrl: 'https://ai-interview-platform-dusky.vercel.app/',
    deviceImage: '/projects/ai-interview-device.png',
    thumbImage: '/projects/ai-interview-thumb.png',
    thumbAccent: '#14b8a6',
    challenge:
      'The platform needed a secure, highly interactive, and fast interface that could simulate real-time video, audio, and text-based mock interviews with instant AI feedback.',
    services: [
      'Web Design & Development',
      'UI/UX Implementation',
      'AI Feedback Integration',
    ],
    techStack: [
      { name: 'Next.js', icon: 'nextjs' },
      { name: 'Tailwind CSS', icon: 'tailwind' },
      { name: 'PostgreSQL', icon: 'postgresql' },
      { name: 'OpenAI API or FastAPI', icon: 'openai' },
    ],
  },
];

export default function SelectedWork() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = PROJECTS_DATA[currentIndex];
  const total = PROJECTS_DATA.length;

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  return (
    <section id="work" className="w-full bg-[#070807] py-20 px-6 sm:px-12 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Bar: Badge + Navigation */}
        <div className="flex items-center justify-between pb-8 border-b border-white/[0.08] mb-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold text-[#9fa29a] uppercase tracking-[0.14em]">
            <span className="w-2 h-2 rounded-full bg-[#d4f455] shadow-[0_0_10px_#d4f455]" />
            <span>FEATURED WORK</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-mono text-sm text-[#9fa29a] tracking-wider">
              0{currentIndex + 1} / 0{total}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevProject}
                className="w-9 h-9 rounded border border-white/15 flex items-center justify-center text-gray-200 hover:border-[#d4f455] hover:text-[#d4f455] hover:bg-[#d4f455]/[0.06] transition-all"
                aria-label="Previous project"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextProject}
                className="w-9 h-9 rounded border border-white/15 flex items-center justify-center text-gray-200 hover:border-[#d4f455] hover:text-[#d4f455] hover:bg-[#d4f455]/[0.06] transition-all"
                aria-label="Next project"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="w-16 h-0.5 bg-white/10 rounded overflow-hidden">
              <div
                className="h-full bg-[#d4f455] transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / total) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Copy Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-mono text-xs font-semibold text-[#8a8e85] uppercase tracking-widest mb-4">
              {current.category}
            </span>

            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.02] mb-6">
              {current.title}
            </h2>

            <p className="text-base sm:text-lg text-[#9fa29a] leading-relaxed max-w-lg mb-8">
              {current.description}
            </p>

            <a
              href={current.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base font-semibold text-white border-b-2 border-[#d4f455] pb-1 hover:text-[#d4f455] hover:translate-x-1 transition-all group"
            >
              <span>View project</span>
              <ArrowUpRight className="w-4 h-4 text-[#d4f455] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Right Device Mockup Column */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full rounded-xl overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-1">
              <img
                src={current.deviceImage}
                alt={`${current.title} Laptop & Mobile Mockup`}
                className="w-full h-auto object-cover block"
              />
            </div>
          </div>
        </div>

        {/* Bottom Specifications Bar */}
        <div className="border-t border-white/[0.08] pt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 items-start relative">
          {/* Col 1: Thumbnail */}
          <div
            onClick={nextProject}
            className="lg:col-span-3 relative cursor-pointer group"
            title="Click to view next project"
          >
            <div
              className="absolute top-3 -left-3 w-full h-full rounded-md opacity-85 transition-transform group-hover:translate-x-1"
              style={{ backgroundColor: current.thumbAccent }}
            />
            <div className="relative rounded-md overflow-hidden bg-[#0f1110] border border-white/10 group-hover:border-[#d4f455] transition-all">
              <img
                src={current.thumbImage}
                alt={`${current.title} Preview Thumbnail`}
                className="w-full h-24 object-cover block"
              />
            </div>
          </div>

          {/* Col 2: The Challenge */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 lg:pl-6 lg:border-l lg:border-white/[0.07]">
            <span className="font-mono text-[11px] font-bold text-[#8a8e85] uppercase tracking-wider">
              THE CHALLENGE
            </span>
            <p className="text-xs sm:text-sm text-[#a1a59d] leading-relaxed">
              {current.challenge}
            </p>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 lg:pl-6 lg:border-l lg:border-white/[0.07]">
            <span className="font-mono text-[11px] font-bold text-[#8a8e85] uppercase tracking-wider">
              SERVICES
            </span>
            <ul className="space-y-2">
              {current.services.map((srv, i) => (
                <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-300">
                  <span className="w-3 h-0.5 bg-[#d4f455] inline-block shrink-0" />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Tech Stack */}
          <div className="lg:col-span-3 flex flex-col gap-2.5 lg:pl-6 lg:border-l lg:border-white/[0.07] relative">
            <span className="font-mono text-[11px] font-bold text-[#8a8e85] uppercase tracking-wider">
              TECH STACK
            </span>
            <div className="space-y-2">
              {current.techStack.map((tech, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-slate-200 font-medium">
                  <span className="w-4 h-4 flex items-center justify-center text-slate-400">
                    •
                  </span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>

            {/* Sparkle Icon Decor */}
            <div className="absolute right-0 bottom-2 text-slate-600 opacity-60">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
