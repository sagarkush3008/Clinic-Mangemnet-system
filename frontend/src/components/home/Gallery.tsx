import React from 'react';
import { Image as ImageIcon, Sparkles } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = [
    {
      title: "Advanced Operatory Suite",
      category: "Clinic Lounge",
      url: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "3D Digital Intraoral Diagnostics",
      category: "High-Tech",
      url: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Class-B Sterilization Zone",
      category: "Sterile Lab",
      url: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Patient Consultation Lounge",
      category: "Waiting Lounge",
      url: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAFCFD] border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold mb-3">
            <ImageIcon className="w-3.5 h-3.5 text-[#20B4D0]" />
            <span>Clinic & Technology Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
            A Glimpse Inside Our Clinic
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Immaculately clean, soothing ambiance engineered to provide a restful and comforting dental experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <div
              key={i}
              className="group relative rounded-3xl overflow-hidden shadow-md bg-slate-100 h-64 border border-slate-200/80"
            >
              <img
                src={img.url}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#292929]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-5 text-white">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-200">
                  {img.category}
                </span>
                <h4 className="text-sm font-bold font-heading">{img.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
