import React from 'react';
import { DOCTORS } from '../../data/clinicData';
import { Award, Calendar, CheckCircle2, Stethoscope, Sparkles } from 'lucide-react';

interface DoctorsProps {
  onOpenBooking: (serviceId?: string, doctorId?: string) => void;
}

export const Doctors: React.FC<DoctorsProps> = ({ onOpenBooking }) => {
  return (
    <section id="doctors" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-[#20B4D0]" />
            <span>MDS Specialist Dentists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
            Meet Our Senior Clinical Faculty
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Our team consists of Master of Dental Surgery (MDS) doctors with international training, committed to gentle, personalized patient care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {DOCTORS.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-[#FAFCFD] rounded-3xl overflow-hidden border border-slate-200/80 hover:border-[#20B4D0]/60 hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-72 overflow-hidden bg-slate-200">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-lg font-bold font-heading">{doctor.name}</h3>
                  <p className="text-xs text-cyan-200 font-medium">{doctor.role}</p>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <Award className="w-3.5 h-3.5 text-[#20B4D0]" />
                    <span>{doctor.experience}</span>
                    <span className="text-slate-300">•</span>
                    <span>{doctor.nmcNo}</span>
                  </div>

                  <p className="text-xs font-semibold text-[#0E7490]">{doctor.specialization}</p>
                  <p className="text-xs text-slate-600 leading-relaxed pt-1">{doctor.bio}</p>

                  <div className="pt-2">
                    <span className="text-[11px] font-semibold text-slate-400 block mb-1">Available Days:</span>
                    <div className="flex flex-wrap gap-1">
                      {doctor.daysAvailable.map((day, i) => (
                        <span key={i} className="text-[10px] font-bold px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                          {day}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    onClick={() => onOpenBooking(undefined, doctor.id)}
                    className="w-full py-2.5 rounded-full bg-[#E4F8FC] hover:bg-[#20B4D0] text-[#0E7490] hover:text-white font-bold text-xs transition flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book with {doctor.name.split(' ')[1]}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
