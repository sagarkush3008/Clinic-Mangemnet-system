import React from 'react';
import { CLINIC_INFO } from '../../data/clinicData';
import { Calendar, MessageSquare, Phone, ShieldCheck, Sparkles, Star, Award, HeartHandshake, CheckCircle2, Clock, Search } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  onOpenManageBooking?: () => void;
  onNavigateSection?: (sectionId: string) => void;
  onLearnMore?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onOpenManageBooking, onNavigateSection, onLearnMore }) => {
  return (
    <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-[#F0FBFD] via-[#FAFCFD] to-white pt-8 pb-16 md:pt-12 md:pb-24 border-b border-slate-100">
      {/* Subtle organic cyan background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#20B4D0]/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#1598B2]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Faint tooth decorative motif in background */}
      <div className="absolute right-6 top-16 opacity-5 pointer-events-none hidden lg:block -z-10">
        <svg width="340" height="340" viewBox="0 0 100 100" fill="none">
          <path
            d="M50 14C32 14 18 26 18 42C18 55 24 67 30 76C35 84 39 92 45 92C48 92 48 83 50 83C52 83 52 92 55 92C61 92 65 84 70 76C76 67 82 55 82 42C82 26 68 14 50 14Z"
            stroke="#20B4D0"
            strokeWidth="5"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#20B4D0]" />
              <span>Premier Multi-Specialty Dental Clinic in Nepal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-extrabold font-heading text-[#292929] leading-[1.15] tracking-tight">
              Everything Begins <br className="hidden sm:inline" />
              With a <span className="text-[#20B4D0] underline decoration-[#20B4D0]/30 underline-offset-8">Confident Smile.</span>
            </h1>

            {/* Value Proposition Description */}
            <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl">
              Experience comfortable, fear-free dentistry powered by 3D digital diagnostics, gentle Swiss implants, painless root canals, and cosmetic smile makeovers.
            </p>

            {/* Key Trust Checkmarks */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20B4D0] shrink-0" />
                <span>Zero Pain Guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20B4D0] shrink-0" />
                <span>100% Sterile Protocol</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20B4D0] shrink-0" />
                <span>Transparent Pricing</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <button
                id="hero-book-btn"
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-semibold text-sm sm:text-base flex items-center gap-2.5 shadow-lg shadow-[#20B4D0]/25 transition transform active:scale-95 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book Appointment Online</span>
              </button>

              <a
                href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Namaste%20Smile%20Dental%20Care,%20I%20would%20like%20to%20consult%20about%20a%20dental%20appointment.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-white hover:bg-emerald-50 text-slate-800 hover:text-emerald-700 font-semibold text-sm border border-slate-200 hover:border-emerald-300 flex items-center gap-2 transition"
              >
                <MessageSquare className="w-4 h-4 text-emerald-500" />
                <span>WhatsApp Clinic</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone}`}
                className="px-4 py-3.5 rounded-full text-slate-600 hover:text-[#20B4D0] text-sm font-medium flex items-center gap-1.5 transition"
              >
                <Phone className="w-4 h-4 text-slate-400" />
                <span>{CLINIC_INFO.phone}</span>
              </a>
            </div>

            {/* Micro Social Proof */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
                  alt="Patient"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
                  alt="Patient"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
                  alt="Patient"
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              </div>
              <div className="text-xs">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                  <span className="font-bold text-slate-800 ml-1">4.97 / 5</span>
                </div>
                <span className="text-slate-500 font-medium">Over 5,000+ happy smiles crafted in Nepal</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual & Doctor Trust Card */}
          <div className="lg:col-span-5 relative">
            {/* Main Visual Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Organic Cyan Background Shape */}
              <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-tr from-[#20B4D0] to-[#1598B2] rounded-[32px] sm:rounded-[40px] opacity-15 rotate-2" />

              {/* Main Clinic/Doctor Image */}
              <div className="relative rounded-[28px] sm:rounded-[36px] overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=900&auto=format&fit=crop"
                  alt="Smile Dental Care Polyclinic Clinic & Facilities"
                  className="w-full h-80 sm:h-[420px] object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/70 via-transparent to-transparent" />
                
                {/* Image Overlay Badge */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="bg-[#292929]/80 backdrop-blur-md p-3.5 rounded-2xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-bold font-heading text-white">Advanced Dental Lounge</p>
                        <p className="text-[11px] text-cyan-200">Durbar Marg, Kathmandu</p>
                      </div>
                      <span className="text-[10px] font-semibold bg-[#20B4D0] px-2.5 py-1 rounded-full text-white">
                        Open Today
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Trust Badge 1: Painless Tech */}
              <div className="absolute -top-4 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-3 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F0FBFD] flex items-center justify-center text-[#20B4D0]">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">Gentle & Painless</p>
                  <p className="text-[10px] text-slate-500">Computerized anesthesia</p>
                </div>
              </div>

              {/* Floating Trust Badge 2: 12+ Years */}
              <div className="absolute -bottom-4 -right-2 sm:-right-4 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-600">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800">14+ Years Clinic</p>
                  <p className="text-[10px] text-slate-500">Specialist team</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
