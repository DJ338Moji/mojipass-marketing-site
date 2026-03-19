import React from 'react';

export default function Logo({ className = "h-12", showText = true, textColor = "text-slate-800" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img src="/mojipass-logo.png" alt="Mojipass Icon" className="h-full w-auto object-contain drop-shadow-sm" />
      
      {showText && (
        <span className={`font-black tracking-tighter uppercase text-3xl leading-none ${textColor}`} style={{ fontFamily: "'Inter', sans-serif" }}>
          MOJIPASS<sup className="text-sm ml-0.5 font-bold text-slate-400">®</sup>
        </span>
      )}
    </div>
  );
}
