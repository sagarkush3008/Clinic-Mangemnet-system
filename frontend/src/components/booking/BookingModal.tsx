import React, { useState } from 'react';
import { CLINIC_SERVICES, DOCTORS, CLINIC_INFO } from '../../data/clinicData';
import { X, Calendar, Clock, User, Phone, Mail, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export interface BookingRecord {
  id: string;
  patientName: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  doctorId: string;
  doctorName: string;
  date: string;
  timeSlot: string;
  notes?: string;
  status: 'Confirmed' | 'Completed' | 'Cancelled';
  createdAt: string;
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialServiceId?: string;
  initialDoctorId?: string;
  onBookingCreated?: (booking: BookingRecord) => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialServiceId,
  initialDoctorId,
  onBookingCreated,
}) => {
  const [serviceId, setServiceId] = useState<string>(initialServiceId || CLINIC_SERVICES[0].id);
  const [doctorId, setDoctorId] = useState<string>(initialDoctorId || DOCTORS[0].id);
  const [date, setDate] = useState<string>(() => {
    const today = new Date();
    today.setDate(today.getDate() + 1);
    return today.toISOString().split('T')[0];
  });
  const [timeSlot, setTimeSlot] = useState<string>('10:00 AM');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [notes, setNotes] = useState<string>('');
  const [submittedBooking, setSubmittedBooking] = useState<BookingRecord | null>(null);

  if (!isOpen) return null;

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM', '06:00 PM'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !date || !timeSlot) return;

    const selectedService = CLINIC_SERVICES.find(s => s.id === serviceId);
    const selectedDoctor = DOCTORS.find(d => d.id === doctorId);

    const newBooking: BookingRecord = {
      id: `SDC-${Math.floor(100000 + Math.random() * 900000)}`,
      patientName: name,
      phone,
      email,
      serviceId,
      serviceName: selectedService ? selectedService.title : 'General Consultation',
      doctorId,
      doctorName: selectedDoctor ? selectedDoctor.name : 'Senior Duty Doctor',
      date,
      timeSlot,
      notes,
      status: 'Confirmed',
      createdAt: new Date().toISOString()
    };

    // Save to localStorage for instant lookup & persistence
    const existing = JSON.parse(localStorage.getItem('smile_dental_bookings') || '[]');
    localStorage.setItem('smile_dental_bookings', JSON.stringify([newBooking, ...existing]));

    setSubmittedBooking(newBooking);
    if (onBookingCreated) {
      onBookingCreated(newBooking);
    }
  };

  const handleReset = () => {
    setSubmittedBooking(null);
    setName('');
    setPhone('');
    setEmail('');
    setNotes('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F0FBFD] to-[#FAFCFD] border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#1598B2] uppercase tracking-wider block">
              Instant Online Scheduling
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold font-heading text-slate-800">
              Book Dental Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {submittedBooking ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E1F6FB] text-[#20B4D0] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-xl font-bold font-heading text-slate-800">Appointment Confirmed!</h4>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  We look forward to welcoming you at our Durbar Marg clinic.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-left space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-bold text-[#0E7490]">{submittedBooking.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Patient:</span>
                  <span className="font-semibold text-slate-800">{submittedBooking.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Treatment:</span>
                  <span className="font-semibold text-slate-800">{submittedBooking.serviceName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Doctor:</span>
                  <span className="font-semibold text-slate-800">{submittedBooking.doctorName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Date & Time:</span>
                  <span className="font-bold text-slate-800">{submittedBooking.date} at {submittedBooking.timeSlot}</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400">
                You can manage or reschedule anytime using your reference ID: <strong className="text-slate-600">{submittedBooking.id}</strong>
              </p>

              <button
                onClick={handleReset}
                className="w-full py-3 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-sm shadow-md transition cursor-pointer"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Select Treatment */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Treatment / Service *</label>
                <select
                  value={serviceId}
                  onChange={(e) => setServiceId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#20B4D0] bg-white"
                >
                  {CLINIC_SERVICES.map((s) => (
                    <option key={s.id} value={s.id}>
                      {s.title} ({s.priceRange})
                    </option>
                  ))}
                </select>
              </div>

              {/* Select Doctor */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Select Doctor Specialist</label>
                <select
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#20B4D0] bg-white"
                >
                  {DOCTORS.map((d) => (
                    <option key={d.id} value={d.id}>
                      {d.name} - {d.role.split('&')[0]}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date and Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    value={date}
                    min={new Date().toISOString().split('T')[0]}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#20B4D0]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Time Slot *</label>
                  <select
                    value={timeSlot}
                    onChange={(e) => setTimeSlot(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm font-medium focus:outline-none focus:border-[#20B4D0] bg-white"
                  >
                    {timeSlots.map((ts) => (
                      <option key={ts} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Patient Details */}
              <div className="pt-2 border-t border-slate-100 space-y-3">
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Patient Contact Info
                </span>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Patient Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suman Shakya"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9841XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Email (Optional)</label>
                    <input
                      type="email"
                      placeholder="suman@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Tooth Symptoms / Notes</label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe pain, previous dental treatment, or preferences..."
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs focus:outline-none focus:border-[#20B4D0]"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#20B4D0]/30 transition flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
