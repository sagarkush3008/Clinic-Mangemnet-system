import React, { useState, useEffect } from 'react';
import { ToothLogo } from '../common/ToothLogo';
import { CLINIC_INFO } from '../../data/clinicData';
import {
  Phone,
  Calendar,
  Search,
  Menu,
  X,
  ShieldCheck,
  Clock,
  MessageSquare,
  Sparkles,
  Users,
  Award,
  Image as ImageIcon,
  Star,
  HelpCircle,
  Stethoscope,
  ChevronRight,
  ArrowRight,
  BookOpen,
} from 'lucide-react';

interface NavbarProps {
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
  onOpenManageBooking: () => void;
  onOpenAdmin: () => void;
  activeSection?: string;
  onNavigateSection: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBooking,
  onOpenManageBooking,
  onOpenAdmin,
  activeSection = 'hero',
  onNavigateSection,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Primary 5 Navigation Links exactly as requested in screenshot
  const primaryNavLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Smile Journal', id: 'smile-journal' },
    { label: 'Contact', id: 'contact' },
  ];

  // All remaining sections to be housed in the 3-line menu drawer
  const drawerSections = [
    {
      label: 'Why Choose Us (Model of Care)',
      id: 'why-choose-us',
      desc: 'The 5 interconnected pillars of dental clinical excellence',
      icon: Award,
      badge: 'Pillars',
    },
    {
      label: 'Dentists & Specialists',
      id: 'doctors',
      desc: 'MDS Prosthodontists, Orthodontists & Surgeons',
      icon: Users,
      badge: '15+ Yrs Exp',
    },
    {
      label: 'Smile Journal & Patient Journey',
      id: 'smile-journal',
      desc: 'Step-by-step patient experience and clinical roadmaps',
      icon: BookOpen,
      badge: '4-Step Care',
    },
    {
      label: 'Patient Reviews & Ratings',
      id: 'testimonials',
      desc: '4.9★ Google and verified patient treatment testimonials',
      icon: Star,
      badge: '4.9/5 Rating',
    },
    {
      label: 'Clinic & Technology Gallery',
      id: 'gallery',
      desc: 'Explore 3D CBCT, sterilizations, and modern operatory suites',
      icon: ImageIcon,
      badge: 'Tour',
    },
    {
      label: 'Frequently Asked Questions (FAQ)',
      id: 'faq',
      desc: 'Painless anesthesia, pricing estimates, and insurance FAQs',
      icon: HelpCircle,
      badge: 'Help',
    },
  ];

  const handleNavClick = (id: string) => {
    onNavigateSection(id);
    setMenuDrawerOpen(false);
  };

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100/70 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => onNavigateSection('hero')}
            className="text-left focus:outline-none cursor-pointer"
            aria-label="Smile Dental Care Home"
          >
            <ToothLogo size="md" />
          </button>

          {/* =========================================================================
              PRIMARY DESKTOP NAVIGATION LINKS (Matches User's Reference Screenshot)
              Light outlined capsule with 3D tactile hover pill effects
             ========================================================================= */}
          <nav className="hidden md:flex items-center gap-0.5 p-1 bg-slate-50/70 border border-slate-200/80 rounded-full">
            {primaryNavLinks.map((link) => {
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-xs lg:text-sm px-3.5 py-1.5 rounded-full text-slate-600 font-medium transition-all duration-150 cursor-pointer select-none hover:bg-white hover:text-[#0E7490] hover:shadow-xs active:bg-slate-100"
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs & 3-Line Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Book Appointment CTA Button */}
            <button
              id="nav-book-appointment-btn"
              onClick={() => onOpenBooking()}
              className="px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white text-xs sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 shadow-sm shadow-[#20B4D0]/30 transition transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Book Appointment</span>
            </button>

            {/* =========================================================================
                THE 3-LINE (HAMBURGER) MENU TRIGGER (Desktop & Mobile)
                Contains all remaining pages & features cleanly categorized
               ========================================================================= */}
            <button
              id="main-nav-three-line-menu-btn"
              onClick={() => setMenuDrawerOpen(true)}
              className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200/80 text-slate-700 hover:text-[#20B4D0] transition flex items-center gap-1.5 cursor-pointer"
              aria-label="Open Full Navigation Menu"
              title="Explore all pages, manage bookings, and admin portal"
            >
              <Menu className="w-5 h-5" />
              <span className="text-xs font-bold text-slate-700 hidden xl:inline">Menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          THE 3-LINE MENU DRAWER (Contains all remaining sections & quick actions)
         ========================================================================= */}
      {menuDrawerOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200 flex justify-end">
          {/* Backdrop Click Close */}
          <div
            className="absolute inset-0 cursor-pointer"
            onClick={() => setMenuDrawerOpen(false)}
          />

          {/* Slide-out Drawer Panel */}
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300 z-10 border-l border-slate-100">
            {/* Drawer Header */}
            <div className="p-5 sm:p-6 border-b border-slate-100 bg-[#FAFCFD] flex items-center justify-between">
              <ToothLogo size="sm" />
              <button
                onClick={() => setMenuDrawerOpen(false)}
                className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer Scrollable Content */}
            <div className="p-5 sm:p-6 space-y-6 overflow-y-auto flex-1">
              {/* All Remaining Clinic Sections & Specialized Features */}
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Explore Clinic Sections & Features
                </span>
                <div className="space-y-2">
                  {drawerSections.map((sec) => {
                    const Icon = sec.icon;
                    const isSecActive = activeSection === sec.id;

                    return (
                      <button
                        key={sec.id}
                        onClick={() => handleNavClick(sec.id)}
                        className={`w-full text-left p-3 rounded-2xl border transition-all flex items-start gap-3 group cursor-pointer ${
                          isSecActive
                            ? 'bg-[#F0FBFD] border-[#20B4D0] shadow-2xs'
                            : 'bg-[#FAFCFD] border-slate-200/70 hover:border-[#20B4D0]/50 hover:bg-white'
                        }`}
                      >
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                            isSecActive
                              ? 'bg-[#20B4D0] text-white shadow-xs'
                              : 'bg-white text-slate-600 border border-slate-200 group-hover:text-[#20B4D0] group-hover:border-[#20B4D0]'
                          }`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-1">
                            <h4
                              className={`text-xs sm:text-sm font-bold truncate ${
                                isSecActive ? 'text-[#1598B2]' : 'text-slate-800 group-hover:text-[#20B4D0]'
                              }`}
                            >
                              {sec.label}
                            </h4>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-500 shrink-0">
                              {sec.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {sec.desc}
                          </p>
                        </div>

                        <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-[#20B4D0] group-hover:translate-x-0.5 transition-all mt-1" />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Patient Tools & Support */}
              <div className="pt-2 border-t border-slate-100">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2.5">
                  Patient Services & Management
                </span>
                <div className="space-y-1.5">
                  <button
                    onClick={() => {
                      setMenuDrawerOpen(false);
                      onOpenManageBooking();
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-[#F0FBFD] hover:text-[#1598B2] rounded-xl flex items-center justify-between transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <Search className="w-4 h-4 text-[#20B4D0]" />
                      Manage / Reschedule My Booking
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>

                  <button
                    onClick={() => {
                      setMenuDrawerOpen(false);
                      onOpenAdmin();
                    }}
                    className="w-full text-left px-3.5 py-2.5 text-xs font-semibold text-slate-700 hover:bg-[#F0FBFD] hover:text-[#1598B2] rounded-xl flex items-center justify-between transition cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-[#20B4D0]" />
                      Clinic Staff & Admin Portal
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                </div>
              </div>
            </div>

            {/* Drawer Footer Actions */}
            <div className="p-5 sm:p-6 bg-slate-50 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMenuDrawerOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-xl bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md shadow-[#20B4D0]/25 transition cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Online</span>
              </button>

              <div className="grid grid-cols-2 gap-2">
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="py-2.5 px-3 rounded-xl bg-white border border-slate-200 text-slate-700 hover:text-[#20B4D0] font-semibold text-xs flex items-center justify-center gap-1.5 transition text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#20B4D0]" />
                  <span>Call Us</span>
                </a>

                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}?text=Namaste%20Smile%20Dental%20Care,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 font-semibold text-xs flex items-center justify-center gap-1.5 transition text-center"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
