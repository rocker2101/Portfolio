'use client';

import React, { useState } from 'react';
import { ArrowUp } from 'lucide-react';

interface TechItem {
  id: string;
  name: string;
  isStacked?: boolean;
  line1?: string;
  line2?: string;
  summary: string;
  icon: React.ReactNode;
}

const TECH_ITEMS: TechItem[] = [
  {
    id: 'nodejs',
    name: 'Node.js',
    summary: 'Node.js: High-concurrency event-driven V8 engine for enterprise backend services and real-time APIs.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <path d="M16 3L27.5 9.6V22.8L16 29.4L4.5 22.8V9.6L16 3Z" fill="#339933"/>
        <path d="M16 6.5L24.5 11.4V21.1L16 25.9L7.5 21.1V11.4L16 6.5Z" fill="#121316"/>
        <path d="M16 9.5L22 13V19.5L16 23L10 19.5V13L16 9.5Z" fill="#339933" opacity="0.3"/>
        <path d="M16 11.8L20 14.1V18.7L16 21L12 18.7V14.1L16 11.8Z" fill="#339933"/>
      </svg>
    ),
  },
  {
    id: 'express',
    name: 'Express',
    summary: 'Express: Fast, unopinionated, minimalist web framework for building resilient REST microservices.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <text x="2" y="22" fontFamily="'Inter', -apple-system, sans-serif" fontWeight="700" fontSize="20" fill="#E5E7EB" letterSpacing="-1.5">ex</text>
      </svg>
    ),
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    summary: 'TypeScript: Strongly typed superset of JavaScript providing rock-solid type safety across full-stack applications.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <rect width="32" height="32" rx="5" fill="#3178C6"/>
        <path d="M14.2 11.5H8.5V13.8H10.5V22H12.6V13.8H14.2V11.5Z" fill="white"/>
        <path d="M16.2 19.8C17 20.6 18.2 21.1 19.5 21.1C20.8 21.1 21.6 20.5 21.6 19.7C21.6 18.3 16.8 18.3 16.8 14.7C16.8 12.7 18.4 11.3 20.5 11.3C21.9 11.3 23 11.8 23.8 12.7L22.6 14.3C22 13.6 21.3 13.3 20.5 13.3C19.6 13.3 18.9 13.8 18.9 14.5C18.9 15.9 23.7 15.9 23.7 19.5C23.7 21.6 22 23 19.5 23C17.7 23 16.3 22.2 15.1 21L16.2 19.8Z" fill="white"/>
      </svg>
    ),
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    summary: 'MongoDB: Document-oriented distributed NoSQL database powering scalable data pipelines and fast schemas.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <path d="M16 2.5C16 2.5 10 9 10 17C10 22.2 13.5 26.5 16 28.5C18.5 26.5 22 22.2 22 17C22 9 16 2.5 16 2.5Z" fill="#13AA52"/>
        <path d="M16 2.5V28.5C15.5 28 10 23.5 10 17C10 9 16 2.5 16 2.5Z" fill="#00ED64"/>
        <path d="M16 14V28C16.6 27.5 17.2 25.5 17.2 21.5C17.2 17 16 14 16 14Z" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    id: 'mysql',
    name: 'MySQL',
    summary: 'MySQL: High-performance relational database management system for ACID-compliant transactional data.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <path d="M6 19C9 13.5 14.5 11 21 11.5C24.5 11.8 27.5 13.2 29 15C26.5 15.5 24 14.8 22 15.5C19.5 16.5 17.5 18.5 15.5 20.5C13 22.8 9.5 23 6 19Z" fill="#00758F"/>
        <path d="M18.5 11C21 8.2 25.5 8.5 28 11C26 12.5 23.5 13 21.5 12.8C20 12.2 19 11.8 18.5 11Z" fill="#F29111"/>
        <circle cx="24" cy="11" r="0.9" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    isStacked: true,
    line1: 'Tailwind',
    line2: 'CSS',
    summary: 'Tailwind CSS: Utility-first CSS framework enabling ultra-fast, zero-bloat bespoke UI architectures.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <path d="M9 13C10.5 11.5 12.5 10.75 15 10.75C18.75 10.75 20.25 13 21.75 13C23.25 13 24.5 12.25 25.5 11.5C24 13 22 13.75 19.5 13.75C15.75 13.75 14.25 11.5 12.75 11.5C11.25 11.5 10 12.25 9 13ZM4.5 19C6 17.5 8 16.75 10.5 16.75C14.25 16.75 15.75 19 17.25 19C18.75 19 20 18.25 21 17.5C19.5 19 17.5 19.75 15 19.75C11.25 19.75 9.75 17.5 8.25 17.5C6.75 17.5 5.5 18.25 4.5 19Z" fill="#38BDF8"/>
      </svg>
    ),
  },
  {
    id: 'git',
    name: 'Git',
    summary: 'Git: Distributed version control system ensuring flawless CI/CD deployment pipelines and team workflows.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <g transform="translate(16 16) rotate(45) translate(-11 -11)">
          <rect width="22" height="22" rx="4" fill="#F05032"/>
          <circle cx="6" cy="11" r="2.2" fill="white"/>
          <circle cx="16" cy="6" r="2.2" fill="white"/>
          <circle cx="16" cy="16" r="2.2" fill="white"/>
          <line x1="6" y1="11" x2="16" y2="16" stroke="white" strokeWidth="1.8"/>
          <line x1="16" y1="6" x2="16" y2="16" stroke="white" strokeWidth="1.8"/>
        </g>
      </svg>
    ),
  },
  {
    id: 'react',
    name: 'React',
    summary: 'React 18: Component-driven frontend library powering responsive UI states, concurrent rendering, and fast DOM updates.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <ellipse cx="16" cy="16" rx="11" ry="4.2" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(60 16 16)" stroke="#61DAFB" strokeWidth="1.5"/>
        <ellipse cx="16" cy="16" rx="11" ry="4.2" transform="rotate(120 16 16)" stroke="#61DAFB" strokeWidth="1.5"/>
        <circle cx="16" cy="16" r="2.2" fill="#61DAFB"/>
      </svg>
    ),
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    summary: 'Next.js 14: React framework for production with Server Components, hybrid rendering, and edge optimization.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <circle cx="16" cy="16" r="14" fill="#000000" stroke="rgba(255,255,255,0.25)" strokeWidth="1"/>
        <path d="M11 10.5V21.5H13.2V14.8L19.8 22H21.5V10.5H19.3V17.2L12.7 10.5H11Z" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    summary: 'PostgreSQL: Advanced open-source object-relational database system known for reliability, robustness, and speed.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <path d="M16 4C10.5 4 7 8 7 14C7 20 10.5 25 16 27C21.5 25 25 20 25 14C25 8 21.5 4 16 4Z" fill="#336791"/>
        <path d="M16 9C13 9 11 11 11 14C11 17 13 19 16 19C19 19 21 17 21 14C21 11 19 9 16 9Z" fill="#FFFFFF" opacity="0.3"/>
        <circle cx="13" cy="13" r="1.5" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    id: 'docker',
    name: 'Docker',
    summary: 'Docker: Enterprise containerization platform guaranteeing identical runtime environments from dev to cloud.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <rect x="7" y="11" width="3.2" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="11.5" y="11" width="3.2" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="16" y="11" width="3.2" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="11.5" y="7" width="3.2" height="3" rx="0.5" fill="#2496ED"/>
        <rect x="16" y="7" width="3.2" height="3" rx="0.5" fill="#2496ED"/>
        <path d="M4.5 15.5C4.5 21 8 24.5 16 24.5C24.5 24.5 27.5 20 28.5 17C26 17 25 18 23 16.5C21 16 20 15 18 15H4.5V15.5Z" fill="#2496ED"/>
        <circle cx="24.5" cy="19.5" r="0.9" fill="#FFFFFF"/>
      </svg>
    ),
  },
  {
    id: 'python',
    name: 'Python',
    summary: 'Python: Versatile engineering language powering backend scrapers, AI workflows, and data orchestration.',
    icon: (
      <svg viewBox="0 0 32 32" className="w-5 h-5" fill="none">
        <path d="M15.5 4.5C11 4.5 11 6.5 11 6.5V9H16V10H9C7 10 5 11.5 5 15.5C5 19.5 7 20 7 20H9V17.5C9 15 11.5 15 11.5 15H16.5C19 15 21 13 21 10.5V6.5C21 4.5 17.5 4.5 15.5 4.5Z" fill="#3776AB"/>
        <circle cx="13" cy="7" r="1" fill="white"/>
        <path d="M16.5 27.5C21 27.5 21 25.5 21 25.5V23H16V22H23C25 22 27 20.5 27 16.5C27 12.5 25 12 25 12H23V14.5C23 17 20.5 17 20.5 17H15.5C13 17 11 19 11 21.5V25.5C11 27.5 14.5 27.5 16.5 27.5Z" fill="#FFD43B"/>
        <circle cx="19" cy="25" r="1" fill="#111827"/>
      </svg>
    ),
  },
];

export default function TechStackSlider() {
  const defaultSubtitle = 'Hover over elements to see description summaries.';
  const [subtitle, setSubtitle] = useState(defaultSubtitle);
  const [isHovered, setIsHovered] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="tech" className="relative w-full bg-[#070807] py-24 overflow-hidden text-center">
      {/* Badge */}
      <span className="font-mono text-xs font-bold text-[#c084fc] uppercase tracking-[0.16em] mb-3 inline-block">
        SYSTEM STACK
      </span>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-3">
        Core Technologies
      </h2>

      {/* Subtitle / Interactive Summary */}
      <p
        className={`text-base sm:text-lg mb-14 min-h-[1.6em] px-6 max-w-3xl mx-auto transition-colors duration-200 ${
          isHovered ? 'text-white font-medium' : 'text-gray-400 font-normal'
        }`}
      >
        {subtitle}
      </p>

      {/* Marquee Carousel with Fade Masks */}
      <div
        className="relative w-full overflow-hidden"
        style={{
          maskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)',
        }}
      >
        <div className="flex w-max gap-6 py-4 animate-marquee hover:[animation-play-state:paused]">
          {/* Double map for seamless infinite loop */}
          {[...TECH_ITEMS, ...TECH_ITEMS].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onMouseEnter={() => {
                setSubtitle(item.summary);
                setIsHovered(true);
              }}
              onMouseLeave={() => {
                setSubtitle(defaultSubtitle);
                setIsHovered(false);
              }}
              className="inline-flex items-center gap-3.5 bg-[#121316] border border-white/[0.09] px-7 py-3 rounded-full font-sans text-sm font-semibold text-gray-100 whitespace-nowrap cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-[#c084fc]/50 hover:bg-[#17181c] hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.65),0_0_22px_rgba(192,132,252,0.14)]"
            >
              <span className="w-5.5 h-5.5 flex items-center justify-center shrink-0">
                {item.icon}
              </span>
              {item.isStacked ? (
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[13px] font-semibold">{item.line1}</span>
                  <span className="text-[13px] font-semibold">{item.line2}</span>
                </div>
              ) : (
                <span className="text-[15px] font-semibold">{item.name}</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Back to Top Button from screenshot */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-8 right-10 w-11 h-11 bg-[#121316] border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:border-white/30 hover:bg-[#1a1c20] hover:-translate-y-0.5 transition-all duration-200 z-10"
        title="Scroll to top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4.5 h-4.5" />
      </button>
    </section>
  );
}
