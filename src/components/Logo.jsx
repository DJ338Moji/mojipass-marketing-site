import React from 'react';

export default function Logo({ className = "h-12 md:h-14", showText = true, textColor = "text-[#4FA4FC]" }) {
  return (
    <div className={`flex items-center gap-2 md:gap-3 ${className}`}>
      <img src="/mojipass-logo.png" alt="Mojipass Logo" className="h-full w-auto object-contain" />

      {showText && (
        <span className={`font-black tracking-tight uppercase text-[1.6em] md:text-[2.2em] leading-none ${textColor}`}>
          MOJIPASS<sup className="text-[0.4em] ml-0.5 font-bold text-slate-400">®</sup>
        </span>
      )}
    </div>
  );
}
