'use client';

import React, { useState, useEffect } from 'react';

export default function SiteFooter() {
  const [timeStr, setTimeStr] = useState('00:00:00');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('en-GB', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="py-16 px-6 sm:px-14 bg-[#050605] border-t border-white/[0.08] font-mono text-xs text-[#60645c] flex flex-wrap justify-between items-center gap-6">
      <div>
        © {new Date().getFullYear()} INVEINS. DIGITAL PRODUCTS STUDIO.
      </div>
      <div>
        FEATURED: INVEINS.IN / MPGISPORTS.IN
      </div>
      <div>
        NEW DELHI // IST {timeStr}
      </div>
    </footer>
  );
}
