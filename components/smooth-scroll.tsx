'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Intercept internal anchor link clicks to guarantee smooth scrolling with offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.startsWith('#')) {
        const element = document.querySelector(href);
        if (element) {
          e.preventDefault();
          lenis.scrollTo(href, { offset: -80, duration: 1.2 });
          window.history.pushState(null, '', href);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // If visited directly with a hash like /#tech, smoothly glide to it after mount
    if (window.location.hash) {
      const hash = window.location.hash;
      const timer = setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) {
          lenis.scrollTo(hash, { offset: -80, duration: 1.2 });
        }
      }, 150);
      return () => {
        clearTimeout(timer);
        cancelAnimationFrame(rafId);
        document.removeEventListener('click', handleAnchorClick);
        lenis.destroy();
      };
    }

    return () => {
      cancelAnimationFrame(rafId);
      document.removeEventListener('click', handleAnchorClick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
