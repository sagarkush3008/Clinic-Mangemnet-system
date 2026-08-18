import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  Sparkles,
  HeartHandshake,
  Layers,
  ShieldCheck,
  ArrowRight,
  ChevronRight,
  CheckCircle2,
  Calendar,
  X,
  Info
} from 'lucide-react';

export interface CarePillar {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  extendedDesc: string;
  highlightBadge: string;
  keyPoints: string[];
  image: string;
  icon: React.ElementType;
  position: {
    // Angular degrees on orbit for desktop (0 is right, 90 is bottom, -90 is top)
    angle: number;
    // Responsive alignment classes for cards
    cardAlign: 'left' | 'right' | 'center';
  };
}

export const CARE_PILLARS: CarePillar[] = [
  {
    id: 'expert-care',
    number: '01',
    title: 'Expert Dental Care',
    shortDesc: 'Experienced dental professionals focused on precise and personalized treatment.',
    extendedDesc: 'Our clinical directors and prosthodontists bring over 14+ years of advanced surgical and cosmetic dental expertise, trained internationally to deliver gentle, reliable results.',
    highlightBadge: '14+ Yrs MDS Specialists',
    keyPoints: ['Master of Dental Surgery (MDS) Faculty', 'Over 5,000+ successful cases', 'Personalized treatment protocols'],
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=900&auto=format&fit=crop',
    icon: Award,
    position: {
      angle: -140, // Top Left
      cardAlign: 'right',
    },
  },
  {
    id: 'modern-tech',
    number: '02',
    title: 'Modern Technology',
    shortDesc: 'Advanced dental equipment and contemporary treatment techniques.',
    extendedDesc: 'From high-definition 3D intraoral digital scanners and rotary apex locators to German dental microscopes and low-radiation digital radiography for painless precision.',
    highlightBadge: '3D Digital & Laser Tech',
    keyPoints: ['High-precision 3D digital impressions', 'Computerized rotary endodontics', 'Class-B digital sterilization monitoring'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=900&auto=format&fit=crop',
    icon: Sparkles,
    position: {
      angle: -40, // Top Right
      cardAlign: 'left',
    },
  },
  {
    id: 'patient-first',
    number: '03',
    title: 'Patient-First Experience',
    shortDesc: 'Comfortable, respectful and personalized care at every visit.',
    extendedDesc: 'Designed to eliminate dental anxiety with computer-controlled gentle anesthesia, ergonomic memory-foam dental chairs, ambient acoustic therapy, and transparent guidance.',
    highlightBadge: 'Zero-Pain Guarantee',
    keyPoints: ['Gentle computerized local anesthesia', 'Ergonomic orthopedic dental chairs', 'Transparent procedural walkthroughs'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop',
    icon: HeartHandshake,
    position: {
      angle: 25, // Bottom Right
      cardAlign: 'left',
    },
  },
  {
    id: 'comprehensive-services',
    number: '04',
    title: 'Comprehensive Services',
    shortDesc: 'Multiple dental treatments and solutions available under one roof.',
    extendedDesc: 'Full-spectrum oral healthcare from routine ultrasonic scaling and Swiss dental implants to invisible aligners, aesthetic veneers, and painless wisdom extractions.',
    highlightBadge: 'All Treatments Under One Roof',
    keyPoints: ['Restorative, cosmetic & surgical care', 'Invisalign certified orthodontics', 'Same-day emergency dental relief'],
    image: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=900&auto=format&fit=crop',
    icon: Layers,
    position: {
      angle: 110, // Bottom Center / Right
      cardAlign: 'right',
    },
  },
  {
    id: 'trusted-care',
    number: '05',
    title: 'Trusted Care',
    shortDesc: 'A clean, welcoming and reliable environment built around patient confidence.',
    extendedDesc: 'Strict hospital-grade sterilization following international CDC/ADA protocols, transparent fee structures with zero hidden surprises, and trusted by families across Kathmandu.',
    highlightBadge: 'ISO & 100% Sterile Protocol',
    keyPoints: ['Sealed autoclave sterile cassettes', 'Clear upfront fee estimates', '4.97★ verified patient satisfaction'],
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=900&auto=format&fit=crop',
    icon: ShieldCheck,
    position: {
      angle: 180, // Middle Left
      cardAlign: 'right',
    },
  },
];

interface SmileCarePillarsProps {
  onOpenBooking: () => void;
  onNavigateSection?: (sectionId: string) => void;
}

export const SmileCarePillars: React.FC<SmileCarePillarsProps> = ({
  onOpenBooking,
  onNavigateSection,
}) => {
  const [activePillarIndex, setActivePillarIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [selectedDetailPillar, setSelectedDetailPillar] = useState<CarePillar | null>(null);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  const activePillar = CARE_PILLARS[activePillarIndex];

  // Optional gentle autoplay that pauses when user is interacting
  useEffect(() => {
    if (isHovered || selectedDetailPillar !== null) {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
      return;
    }

    autoplayTimerRef.current = setInterval(() => {
      setActivePillarIndex((prev) => (prev + 1) % CARE_PILLARS.length);
    }, 4500);

    return () => {
      if (autoplayTimerRef.current) clearInterval(autoplayTimerRef.current);
    };
  }, [isHovered, selectedDetailPillar]);

  const handlePillarClick = (pillar: CarePillar, idx: number) => {
    setActivePillarIndex(idx);
    setSelectedDetailPillar(pillar);
  };

  const handlePillarHover = (idx: number) => {
    setActivePillarIndex(idx);
    setIsHovered(true);
  };

  return (
    <section
      id="why-choose-us"
      className="relative py-16 sm:py-24 md:py-32 bg-[#FFFFFF] overflow-hidden border-b border-slate-100"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Subtle organic light cyan ambient background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-br from-[#F0FBFD]/80 via-[#E1F6FB]/30 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-[#20B4D0]/5 rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* =========================================================================
            1. SECTION HEADER (Exact Titles, Labels & Subtitles as Requested)
           ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F0FBFD] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-bold uppercase tracking-wider mb-3.5 shadow-2xs">
            <Sparkles className="w-3.5 h-3.5 text-[#20B4D0]" />
            <span>WHY SMILE DENTAL CARE</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-heading text-[#292929] leading-tight tracking-tight">
            The Smile Dental Care Difference
          </h2>

          {/* Supporting Text */}
          <p className="text-slate-600 text-sm sm:text-base md:text-lg mt-3.5 max-w-2xl mx-auto leading-relaxed">
            Explore the key pillars that make our dental care experience comfortable, modern and trustworthy.
          </p>

          {/* Small Text CTA Below */}
          <div className="mt-4">
            <button
              onClick={() => {
                if (onNavigateSection) {
                  onNavigateSection('services');
                } else {
                  onOpenBooking();
                }
              }}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#20B4D0] hover:text-[#1598B2] transition-colors cursor-pointer group"
            >
              <span>Explore Our Care</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* =========================================================================
            2. DESKTOP & TABLET: CIRCULAR ORBIT STORYTELLING LAYOUT (>= 1024px)
           ========================================================================= */}
        <div className="hidden lg:block relative min-h-[640px] max-w-6xl mx-auto">
          {/* SVG Orbit Ring and Connector Guides */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <svg
              className="w-[660px] h-[660px]"
              viewBox="0 0 660 660"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Outer Orbit Guide Track (Dotted) */}
              <circle
                cx="330"
                cy="330"
                r="285"
                stroke="#E2E8F0"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              {/* Glowing Inner Halo Track */}
              <circle
                cx="330"
                cy="330"
                r="285"
                stroke="#20B4D0"
                strokeWidth="1.5"
                strokeDasharray="4 8"
                strokeOpacity="0.35"
              />

              {/* Animated subtle active pulse node on the orbit ring for active pillar */}
              {CARE_PILLARS.map((p, idx) => {
                const rad = (p.position.angle * Math.PI) / 180;
                const nodeX = 330 + 285 * Math.cos(rad);
                const nodeY = 330 + 285 * Math.sin(rad);
                const isActive = activePillarIndex === idx;

                return (
                  <g key={p.id}>
                    {/* Node on orbit */}
                    <circle
                      cx={nodeX}
                      cy={nodeY}
                      r={isActive ? '6' : '3.5'}
                      fill={isActive ? '#20B4D0' : '#CBD5E1'}
                      className="transition-all duration-300"
                    />
                    {isActive && (
                      <circle
                        cx={nodeX}
                        cy={nodeY}
                        r="14"
                        stroke="#20B4D0"
                        strokeWidth="1.5"
                        strokeOpacity="0.4"
                        fill="#20B4D0"
                        fillOpacity="0.1"
                        className="animate-ping"
                        style={{ transformOrigin: `${nodeX}px ${nodeY}px` }}
                      />
                    )}
                  </g>
                );
              })}
            </svg>
          </div>

          {/* -----------------------------------------------------------------------
              A. LARGE CENTRAL CIRCULAR IMAGE & DYNAMIC HIGHLIGHT
             ----------------------------------------------------------------------- */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            {/* The Main Circular Visual Container */}
            <div className="relative group">
              {/* Subtle Cyan Outer Halo Glow & Shadow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#20B4D0]/20 to-[#1598B2]/10 rounded-full blur-xl transition-all duration-500 group-hover:scale-105" />

              {/* Circular Frame with Thick White Border */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[350px] md:h-[350px] rounded-full border-8 border-white shadow-2xl shadow-[#20B4D0]/15 overflow-hidden bg-slate-100 transition-transform duration-500 group-hover:scale-[1.02]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activePillar.image}
                      alt={activePillar.title}
                      className="w-full h-full object-cover select-none"
                      referrerPolicy="no-referrer"
                    />
                    {/* Vignette Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/75 via-[#292929]/15 to-transparent pointer-events-none" />

                    {/* Editorial Badge in Center Lower Part */}
                    <div className="absolute bottom-6 left-6 right-6 text-center text-white select-none">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0E7490] text-[11px] font-bold shadow-sm mb-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#20B4D0]" />
                        <span>{activePillar.highlightBadge}</span>
                      </div>
                      <h4 className="text-base font-extrabold font-heading text-white drop-shadow-sm">
                        {activePillar.title}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Mini Icon Floating Pill on Top of Image */}
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white px-3.5 py-1.5 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 z-30">
                <span className="w-2 h-2 rounded-full bg-[#20B4D0] animate-pulse" />
                <span className="text-[11px] font-bold text-slate-700">
                  Pillar {activePillar.number} of 05
                </span>
              </div>
            </div>

            {/* Quick Consultation Trigger below center visual */}
            <div className="mt-4">
              <button
                onClick={() => setSelectedDetailPillar(activePillar)}
                className="px-4 py-1.5 rounded-full bg-slate-50 hover:bg-[#F0FBFD] border border-slate-200/80 hover:border-[#20B4D0]/50 text-slate-700 hover:text-[#0E7490] text-xs font-bold transition flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <Info className="w-3.5 h-3.5 text-[#20B4D0]" />
                <span>Pillar Details & Protocols</span>
              </button>
            </div>
          </div>

          {/* -----------------------------------------------------------------------
              B. THE 5 ORBITING CARE PILLARS (Desktop Positioned Cards)
             ----------------------------------------------------------------------- */}
          <div className="relative w-full h-[640px] pointer-events-none">
            {CARE_PILLARS.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              const Icon = pillar.icon;

              // Specific manual CSS positioning for the 5 cards around the 640px circle
              let positionClasses = '';
              if (idx === 0) {
                // 01 Top Left
                positionClasses = 'top-4 left-0 w-80 text-left';
              } else if (idx === 1) {
                // 02 Top Right
                positionClasses = 'top-4 right-0 w-80 text-left';
              } else if (idx === 2) {
                // 03 Bottom Right
                positionClasses = 'bottom-16 right-0 w-80 text-left';
              } else if (idx === 3) {
                // 04 Bottom Center/Left
                positionClasses = 'bottom-4 left-1/4 -translate-x-12 w-80 text-left';
              } else if (idx === 4) {
                // 05 Middle Left
                positionClasses = 'top-1/2 -translate-y-1/2 left-0 w-72 text-left';
              }

              return (
                <div
                  key={pillar.id}
                  className={`absolute pointer-events-auto transition-all duration-300 ${positionClasses}`}
                >
                  <div
                    onClick={() => handlePillarClick(pillar, idx)}
                    onMouseEnter={() => handlePillarHover(idx)}
                    className={`p-5 rounded-3xl border transition-all duration-300 cursor-pointer backdrop-blur-xs group select-none ${
                      isActive
                        ? 'bg-[#F0FBFD] border-[#20B4D0] shadow-xl shadow-cyan-900/5 scale-[1.03] z-30'
                        : 'bg-white/90 border-slate-200/80 hover:border-[#20B4D0]/60 hover:bg-[#FAFCFD] hover:shadow-md opacity-85 hover:opacity-100 z-10'
                    }`}
                  >
                    <div className="flex items-start gap-3.5">
                      {/* Number Badge (Transforms to Cyan on Active/Hover) */}
                      <div
                        className={`w-10 h-10 rounded-2xl flex items-center justify-center text-xs font-black shrink-0 transition-all duration-300 ${
                          isActive
                            ? 'bg-[#20B4D0] text-white shadow-md shadow-[#20B4D0]/30 scale-105'
                            : 'bg-slate-100 text-slate-700 group-hover:bg-[#20B4D0] group-hover:text-white'
                        }`}
                      >
                        {pillar.number}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-1.5 mb-1">
                          <Icon
                            className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                              isActive ? 'text-[#20B4D0]' : 'text-slate-400 group-hover:text-[#20B4D0]'
                            }`}
                          />
                          <h3
                            className={`text-sm sm:text-base font-bold font-heading transition-colors truncate ${
                              isActive
                                ? 'text-[#0E7490]'
                                : 'text-slate-800 group-hover:text-[#0E7490]'
                            }`}
                          >
                            {pillar.title}
                          </h3>
                        </div>

                        <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                          {pillar.shortDesc}
                        </p>

                        {/* Know More CTA Button */}
                        <div className="mt-2.5 flex items-center gap-1 text-[11px] font-bold text-[#20B4D0] group-hover:text-[#1598B2] transition-colors">
                          <span>Know More</span>
                          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            3. MOBILE & COMPACT TABLET ADAPTIVE LAYOUT (< 1024px)
            Clean vertical cards with centered circular visual preview
           ========================================================================= */}
        <div className="block lg:hidden space-y-8">
          {/* Centered Circular Visual Card for Mobile */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <div className="absolute -inset-3 bg-[#20B4D0]/15 rounded-full blur-lg" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full border-6 border-white shadow-xl shadow-[#20B4D0]/15 overflow-hidden bg-slate-100">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activePillar.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35 }}
                    className="w-full h-full relative"
                  >
                    <img
                      src={activePillar.image}
                      alt={activePillar.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-center text-white">
                      <span className="text-[10px] font-bold bg-[#20B4D0] px-2.5 py-0.5 rounded-full text-white inline-block mb-1">
                        Pillar {activePillar.number}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold font-heading">
                        {activePillar.title}
                      </h4>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Quick indicator pills */}
            <div className="flex items-center gap-1.5 mt-4">
              {CARE_PILLARS.map((p, idx) => (
                <button
                  key={p.id}
                  onClick={() => setActivePillarIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${
                    activePillarIndex === idx
                      ? 'w-7 bg-[#20B4D0]'
                      : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                  aria-label={`Select Pillar ${p.number}`}
                />
              ))}
            </div>
          </div>

          {/* Interactive Mobile Pillar Cards Stack */}
          <div className="space-y-3">
            {CARE_PILLARS.map((pillar, idx) => {
              const isActive = activePillarIndex === idx;
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.id}
                  onClick={() => {
                    setActivePillarIndex(idx);
                  }}
                  className={`p-4 sm:p-5 rounded-2xl border transition-all duration-200 cursor-pointer ${
                    isActive
                      ? 'bg-[#F0FBFD] border-[#20B4D0] shadow-md ring-1 ring-[#20B4D0]/30'
                      : 'bg-white border-slate-200/80 hover:border-slate-300'
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3 min-w-0">
                      {/* Number Badge */}
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center text-xs font-black shrink-0 transition-colors ${
                          isActive
                            ? 'bg-[#20B4D0] text-white shadow-xs'
                            : 'bg-slate-100 text-slate-700'
                        }`}
                      >
                        {pillar.number}
                      </div>

                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#20B4D0]' : 'text-slate-400'}`} />
                          <h3 className={`text-sm font-bold truncate ${isActive ? 'text-[#0E7490]' : 'text-slate-800'}`}>
                            {pillar.title}
                          </h3>
                        </div>
                        <p className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                          {pillar.shortDesc}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePillarIndex(idx);
                        setSelectedDetailPillar(pillar);
                      }}
                      className="p-2 rounded-xl bg-white border border-slate-200 text-[#20B4D0] hover:bg-[#20B4D0] hover:text-white shrink-0 transition text-xs font-semibold"
                      aria-label="View Details"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Expanded detail if active on mobile */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mt-3.5 pt-3 border-t border-[#20B4D0]/20 text-xs text-slate-600 space-y-2"
                    >
                      <p className="leading-relaxed">{pillar.extendedDesc}</p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-[11px] font-bold text-[#0E7490]">{pillar.highlightBadge}</span>
                        <button
                          onClick={() => setSelectedDetailPillar(pillar)}
                          className="text-[11px] font-bold text-[#20B4D0] underline cursor-pointer"
                        >
                          Learn full clinical scope →
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Booking Banner in Section */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#F0FBFD] via-white to-[#F0FBFD] border border-[#20B4D0]/30 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold font-heading text-slate-800">
              Ready to experience patient-first dental care?
            </h4>
            <p className="text-xs sm:text-sm text-slate-500">
              Consult with our senior MDS surgeons and specialists at Durbar Marg, Kathmandu.
            </p>
          </div>

          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#20B4D0]/30 transition flex items-center gap-2 shrink-0 cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Appointment</span>
          </button>
        </div>
      </div>

      {/* =========================================================================
          4. PILLAR CLINICAL DETAIL MODAL (Triggered on "Know More →" / Click)
         ========================================================================= */}
      {selectedDetailPillar && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
            {/* Modal Image Header */}
            <div className="relative h-48 bg-slate-200 overflow-hidden">
              <img
                src={selectedDetailPillar.image}
                alt={selectedDetailPillar.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-[#292929]/30 to-transparent" />
              <button
                onClick={() => setSelectedDetailPillar(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 hover:bg-white text-slate-700 shadow-md transition cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-[#20B4D0] text-white inline-block mb-1">
                  Pillar {selectedDetailPillar.number}
                </span>
                <h3 className="text-xl font-extrabold font-heading">
                  {selectedDetailPillar.title}
                </h3>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5">
              <div>
                <span className="text-[11px] font-bold text-[#1598B2] uppercase tracking-wider block mb-1">
                  Clinical Commitment & Scope
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedDetailPillar.extendedDesc}
                </p>
              </div>

              {/* Key Standards */}
              <div className="p-4 rounded-2xl bg-[#F0FBFD] border border-cyan-200/60 space-y-2">
                <span className="text-xs font-bold text-slate-800 block">
                  Key Patient Standards:
                </span>
                <ul className="space-y-1.5">
                  {selectedDetailPillar.keyPoints.map((pt, i) => (
                    <li key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20B4D0] shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modal Actions */}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={() => {
                    setSelectedDetailPillar(null);
                    onOpenBooking();
                  }}
                  className="flex-1 py-3 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#20B4D0]/25 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Under This Standard</span>
                </button>

                <button
                  onClick={() => setSelectedDetailPillar(null)}
                  className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs sm:text-sm transition cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
