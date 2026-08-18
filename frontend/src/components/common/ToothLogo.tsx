import React from 'react';

interface ToothLogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
}

export const ToothLogo: React.FC<ToothLogoProps> = ({ size = 'md', variant = 'dark' }) => {
  const iconDimensions = size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10';
  const titleSize = size === 'sm' ? 'text-base sm:text-lg' : size === 'lg' ? 'text-2xl sm:text-3xl' : 'text-lg sm:text-xl';
  const subSize = size === 'sm' ? 'text-[10px]' : size === 'lg' ? 'text-xs' : 'text-[11px]';

  return (
    <div className="flex items-center gap-2.5 sm:gap-3 group">
      {/* 3D Stylized Modern Cyan Tooth Badge */}
      <div className={`relative ${iconDimensions} rounded-2xl bg-gradient-to-tr from-[#1598B2] to-[#20B4D0] p-0.5 shadow-md shadow-[#20B4D0]/30 flex items-center justify-center transition-transform group-hover:scale-105 shrink-0`}>
        <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#E1F6FB]/70 to-transparent pointer-events-none" />
          <svg viewBox="0 0 32 32" className="w-5 h-5 fill-[#20B4D0]" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 3C11.5 3 8 6.5 8 11C8 14.5 9.5 17.5 11 20.5C12.5 23.5 13.5 28 15 28C16 28 16 25 16 25C16 25 16 28 17 28C18.5 28 19.5 23.5 21 20.5C22.5 17.5 24 14.5 24 11C24 6.5 20.5 3 16 3Z" />
            <path d="M11 11C11 13 13 15 16 15C19 15 21 13 21 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </div>
      </div>

      {/* Brand Typography */}
      <div className="leading-tight select-none">
        <div className={`font-extrabold tracking-tight font-heading ${titleSize} ${variant === 'light' ? 'text-white' : 'text-[#292929]'}`}>
          Smile Dental <span className="text-[#20B4D0]">Care</span>
        </div>
        <div className={`font-medium tracking-wide uppercase ${subSize} ${variant === 'light' ? 'text-cyan-200' : 'text-slate-500'}`}>
          & Polyclinic • Kathmandu
        </div>
      </div>
    </div>
  );
};
