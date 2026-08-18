import React from 'react';
import { CLINIC_INFO } from '../../data/clinicData';
import { ShieldCheck, Award, Heart, Sparkles, CheckCircle2, UserCheck, Stethoscope } from 'lucide-react';

interface AboutProps {
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const pillars = [
    {
      title: "Painless Digital Dentistry",
      desc: "Computerized anesthetic injection systems, 3D intraoral optical scanning, and digital smile design simulations.",
      icon: Sparkles
    },
    {
      title: "Hospital-Grade Sterilization",
      desc: "German Class-B vacuum autoclaves, 7-step ultrasonic instrument disinfection, and single-use sealed cassettes.",
      icon: ShieldCheck
    },
    {
      title: "MDS Specialist Consultation",
      desc: "Every procedure is executed by certified Master of Dental Surgery (MDS) specialists and university faculty surgeons.",
      icon: UserCheck
    },
    {
      title: "Transparent & Ethical Care",
      desc: "Clear upfront fee structures, zero hidden costs, and detailed digital treatment plans before any procedure begins.",
      icon: Award
    }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Interactive Media & Credentials */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-50 bg-slate-100">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
                alt="Smile Dental Care Clinic Team"
                className="w-full h-96 sm:h-[460px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <div className="bg-[#292929]/85 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#20B4D0] flex items-center justify-center text-white shrink-0">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold font-heading text-white">Nepal Medical Council Recognized</p>
                      <p className="text-xs text-cyan-200">ISO 9001:2015 Certified Dental Practice</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Float badge */}
            <div className="absolute -top-4 -right-4 bg-white shadow-xl rounded-2xl p-4 border border-slate-100 flex items-center gap-3">
              <div className="text-center">
                <p className="text-2xl font-extrabold text-[#20B4D0]">14+</p>
                <p className="text-[10px] text-slate-500 font-semibold uppercase">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right: Content & Story */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold">
              <Heart className="w-3.5 h-3.5 text-[#20B4D0]" />
              <span>About Smile Dental Care & Polyclinic</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
              A Warm, Modern Dental Lounge <br className="hidden sm:inline" />
              Dedicated To Your Family's Comfort.
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Founded in the heart of Kathmandu at Durbar Marg, <span className="font-semibold text-slate-800">{CLINIC_INFO.name}</span> was designed to transform ordinary dental visits into a relaxed, soothing, and completely pain-free healthcare journey.
            </p>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We integrate high-definition 3D intraoral scanners, Japanese panoramic radiography, and Swiss implant systems so you get precise diagnosis and long-lasting aesthetic restorations.
            </p>

            {/* 4 Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="p-4 rounded-2xl bg-[#F8FCFD] border border-slate-100 hover:border-cyan-200 transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-white text-[#20B4D0] border border-slate-100 shadow-xs flex items-center justify-center mb-2.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm font-bold text-slate-800 mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-semibold text-sm shadow-md shadow-[#20B4D0]/25 transition cursor-pointer"
              >
                Schedule a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
