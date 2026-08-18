import React from 'react';
import { TESTIMONIALS } from '../../data/clinicData';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold mb-3">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Patient Stories & Ratings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
            Loved By Over 5,000+ Patients
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Real feedback from verified patients who received treatments at Smile Dental Care & Polyclinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#FAFCFD] rounded-3xl p-6 sm:p-7 border border-slate-200/80 hover:border-[#20B4D0]/50 hover:shadow-xl transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">{t.date}</span>
                </div>

                <p className="text-slate-700 text-sm leading-relaxed italic">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-xs"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="text-sm font-bold text-slate-800">{t.name}</h4>
                    {t.verified && (
                      <CheckCircle className="w-3.5 h-3.5 text-[#20B4D0]" title="Verified Patient" />
                    )}
                  </div>
                  <p className="text-[11px] text-[#0E7490] font-medium">{t.treatment}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
