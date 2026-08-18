import React from 'react';
import { ToothLogo } from '../common/ToothLogo';
import { CLINIC_INFO } from '../../data/clinicData';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

interface FooterProps {
  onNavigateSection: (id: string) => void;
  onOpenBooking: () => void;
  onOpenAdmin: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigateSection, onOpenBooking, onOpenAdmin }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1A252C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-4 space-y-4">
            <ToothLogo size="md" variant="light" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pt-2">
              Premier multi-specialty dental clinic and diagnostic polyclinic in Durbar Marg, Kathmandu. Committed to gentle, precision, and fear-free dental healthcare.
            </p>
            <div className="pt-2 text-xs text-cyan-300 font-semibold">
              {CLINIC_INFO.hours}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onNavigateSection('hero')} className="hover:text-[#20B4D0] transition">Home</button></li>
              <li><button onClick={() => onNavigateSection('about')} className="hover:text-[#20B4D0] transition">About Our Clinic</button></li>
              <li><button onClick={() => onNavigateSection('services')} className="hover:text-[#20B4D0] transition">Dental Services</button></li>
              <li><button onClick={() => onNavigateSection('doctors')} className="hover:text-[#20B4D0] transition">Specialist Doctors</button></li>
              <li><button onClick={() => onNavigateSection('smile-journal')} className="hover:text-[#20B4D0] transition">Smile Journal</button></li>
              <li><button onClick={() => onNavigateSection('testimonials')} className="hover:text-[#20B4D0] transition">Patient Reviews</button></li>
              <li><button onClick={() => onNavigateSection('faq')} className="hover:text-[#20B4D0] transition">FAQs</button></li>
            </ul>
          </div>

          {/* Col 3: Key Treatments */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              Popular Treatments
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><button onClick={() => onOpenBooking()} className="hover:text-[#20B4D0] transition">Dental Implants & Crowns</button></li>
              <li><button onClick={() => onOpenBooking()} className="hover:text-[#20B4D0] transition">Painless Rotary Root Canal</button></li>
              <li><button onClick={() => onOpenBooking()} className="hover:text-[#20B4D0] transition">Invisalign Clear Aligners</button></li>
              <li><button onClick={() => onOpenBooking()} className="hover:text-[#20B4D0] transition">Laser Teeth Whitening</button></li>
              <li><button onClick={() => onOpenBooking()} className="hover:text-[#20B4D0] transition">Ultrasonic Teeth Cleaning</button></li>
              <li><button onClick={() => onOpenBooking()} className="hover:text-[#20B4D0] transition">Wisdom Tooth Extraction</button></li>
            </ul>
          </div>

          {/* Col 4: Contact & Action */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white font-heading uppercase tracking-wider">
              Get In Touch
            </h4>
            <p className="text-xs text-slate-400">{CLINIC_INFO.phone}</p>
            <p className="text-xs text-slate-400">{CLINIC_INFO.email}</p>
            <button
              onClick={onOpenBooking}
              className="mt-3 px-4 py-2 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white text-xs font-bold transition w-full cursor-pointer"
            >
              Book Appointment
            </button>
            <button
              onClick={onOpenAdmin}
              className="text-[11px] text-slate-500 hover:text-slate-300 block pt-2 transition cursor-pointer"
            >
              Clinic Staff Portal
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {CLINIC_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Kathmandu, Nepal</span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
