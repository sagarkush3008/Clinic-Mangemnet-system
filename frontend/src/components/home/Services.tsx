import React, { useState } from 'react';
import { CLINIC_SERVICES, ServiceItem } from '../../data/clinicData';
import { Sparkles, Calendar, Clock, CheckCircle2, ArrowRight } from 'lucide-react';

interface ServicesProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Treatments' },
    { id: 'preventive', label: 'Preventive & Cleaning' },
    { id: 'cosmetic', label: 'Cosmetic & Whitening' },
    { id: 'orthodontics', label: 'Braces & Aligners' },
    { id: 'restorative', label: 'Root Canal & Fillings' },
    { id: 'surgical', label: 'Implants & Surgery' },
  ];

  const filteredServices = selectedCategory === 'all'
    ? CLINIC_SERVICES
    : CLINIC_SERVICES.filter(s => s.category === selectedCategory);

  return (
    <section id="services" className="py-16 md:py-24 bg-[#FAFCFD] border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#20B4D0]" />
            <span>Comprehensive Dental Treatments</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
            Specialized Care For Every Smile
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            From routine ultrasonic scaling to high-precision Swiss implants and clear aligners, we offer full-spectrum dental health solutions.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#20B4D0] text-white shadow-sm shadow-[#20B4D0]/25'
                  : 'bg-white border border-slate-200/80 text-slate-600 hover:border-cyan-300 hover:text-[#0E7490]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/70 hover:border-[#20B4D0]/50 hover:shadow-xl hover:shadow-cyan-900/5 transition-all duration-300 flex flex-col group"
            >
              {/* Image Container */}
              <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {service.popular && (
                  <span className="absolute top-3 right-3 bg-[#20B4D0] text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-md">
                    Most Popular
                  </span>
                )}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-slate-800 flex items-center gap-1.5 shadow-xs">
                  <Clock className="w-3.5 h-3.5 text-[#20B4D0]" />
                  <span>{service.duration}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-800 group-hover:text-[#20B4D0] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-2 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-1.5 mt-4 pt-3 border-t border-slate-100">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#20B4D0] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price & Book Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400 font-semibold block uppercase">Est. Fee</span>
                    <span className="text-xs sm:text-sm font-bold text-slate-800">{service.priceRange}</span>
                  </div>

                  <button
                    onClick={() => onOpenBooking(service.id)}
                    className="px-4 py-2 rounded-full bg-[#E4F8FC] hover:bg-[#20B4D0] text-[#0E7490] hover:text-white text-xs font-bold transition flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
