import React, { useState } from 'react';
import { CLINIC_INFO } from '../../data/clinicData';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  onOpenBooking: () => void;
}

export const Contact: React.FC<ContactProps> = ({ onOpenBooking }) => {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#FAFCFD] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E4F8FC] border border-[#20B4D0]/30 text-[#1598B2] text-xs font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-[#20B4D0]" />
            <span>Visit Us In Kathmandu</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-[#292929] leading-tight">
            Get In Touch With Our Team
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            We are conveniently located at Durbar Marg, Kathmandu. Walk-ins and phone inquiries are always welcome.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md space-y-6">
              <h3 className="text-lg font-bold font-heading text-slate-800">
                Clinic Location & Hours
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1F6FB] text-[#0E7490] flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Address</span>
                    <span>{CLINIC_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1F6FB] text-[#0E7490] flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Phone & Emergency</span>
                    <a href={`tel:${CLINIC_INFO.phone}`} className="hover:text-[#20B4D0]">{CLINIC_INFO.phone}</a>
                    <span className="block text-emerald-600 font-semibold mt-0.5">Emergency: {CLINIC_INFO.emergency}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1F6FB] text-[#0E7490] flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Opening Hours</span>
                    <span>{CLINIC_INFO.hours}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-[#E1F6FB] text-[#0E7490] flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 block">Email Inquiry</span>
                    <a href={`mailto:${CLINIC_INFO.email}`} className="hover:text-[#20B4D0]">{CLINIC_INFO.email}</a>
                  </div>
                </div>
              </div>

              <div className="pt-2 flex gap-3">
                <a
                  href={`https://wa.me/${CLINIC_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <button
                  onClick={onOpenBooking}
                  className="flex-1 py-2.5 px-4 rounded-xl bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs flex items-center justify-center gap-2 transition cursor-pointer"
                >
                  <span>Book Online</span>
                </button>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-md">
            <h3 className="text-lg font-bold font-heading text-slate-800 mb-2">
              Send Us a Message
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Have a clinical question or dental inquiry? Our medical coordinators will get back to you within 2 hours.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#E1F6FB] border border-cyan-200 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-[#20B4D0] mx-auto" />
                <h4 className="text-base font-bold text-[#0E7490]">Inquiry Sent Successfully!</h4>
                <p className="text-xs text-slate-600">
                  Thank you, {formData.name}. Our clinic desk will contact you at {formData.phone} shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setFormData({ name: '', phone: '', email: '', message: '' }); }}
                  className="mt-2 text-xs font-bold text-[#0E7490] underline cursor-pointer"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Adhikari"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9841XXXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Message / Symptoms</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your tooth condition, pain, or cosmetic inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs sm:text-sm shadow-md transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Dental Inquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
