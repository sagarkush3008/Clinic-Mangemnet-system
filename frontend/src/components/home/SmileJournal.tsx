import React from 'react';
import { BookOpen, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface SmileJournalProps {
  onOpenBooking: () => void;
}

export const SmileJournal: React.FC<SmileJournalProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      step: "01",
      title: "Digital Consultation & 3D Scanning",
      desc: "Detailed photographic and optical scan of your mouth with zero messy impression paste.",
      detail: "3D treatment simulation within 15 minutes."
    },
    {
      step: "02",
      title: "Transparent Customized Treatment Plan",
      desc: "Review your options, exact timeline, and all-inclusive fee breakdown with our MDS specialist.",
      detail: "Zero hidden costs or sudden add-ons."
    },
    {
      step: "03",
      title: "Painless Precision Treatment",
      desc: "Relax in our ergonomic memory-foam dental chair with computerized anesthesia and calm music.",
      detail: "Microscope & laser-assisted clinical care."
    },
    {
      step: "04",
      title: "Post-Care & Lifetime Smile Maintenance",
      desc: "Periodic preventive follow-ups, warranty cards for implants/crowns, and 24/7 doctor chat support.",
      detail: "Guaranteed peace of mind and radiant smile."
    }
  ];

  return (
    <section id="smile-journal" className="py-16 md:py-24 bg-[#F8FCFD] border-t border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5 text-[#20B4D0]" />
            <span>Smile Journal & Patient Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
            How Your Smile Transformation Unfolds
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            A step-by-step roadmap to make your dental visits smooth, predictable, and stress-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-6 border border-slate-200/80 hover:border-[#20B4D0] hover:shadow-xl transition-all relative flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#E1F6FB] text-[#0E7490] font-black text-lg flex items-center justify-center mb-4">
                  {item.step}
                </div>
                <h3 className="text-base font-bold text-slate-800 font-heading mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#0E7490]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20B4D0] shrink-0" />
                <span>{item.detail}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={onOpenBooking}
            className="px-7 py-3.5 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-sm shadow-md shadow-[#20B4D0]/25 transition cursor-pointer"
          >
            Start Your Smile Journey Today
          </button>
        </div>
      </div>
    </section>
  );
};
