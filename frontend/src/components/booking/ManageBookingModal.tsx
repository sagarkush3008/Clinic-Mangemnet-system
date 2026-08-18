import React, { useState } from 'react';
import { BookingRecord } from './BookingModal';
import { X, Search, Calendar, Clock, User, Phone, CheckCircle2, AlertCircle, Trash2 } from 'lucide-react';

interface ManageBookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ManageBookingModal: React.FC<ManageBookingModalProps> = ({ isOpen, onClose }) => {
  const [searchRef, setSearchRef] = useState('');
  const [searchPhone, setSearchPhone] = useState('');
  const [foundBooking, setFoundBooking] = useState<BookingRecord | null>(null);
  const [searched, setSearched] = useState(false);
  const [actionMessage, setActionMessage] = useState('');

  if (!isOpen) return null;

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActionMessage('');
    setSearched(true);

    const records: BookingRecord[] = JSON.parse(localStorage.getItem('smile_dental_bookings') || '[]');
    const match = records.find(r => 
      (searchRef && r.id.toLowerCase() === searchRef.trim().toLowerCase()) ||
      (searchPhone && r.phone.replace(/[^0-9]/g, '').includes(searchPhone.trim().replace(/[^0-9]/g, '')))
    );

    setFoundBooking(match || null);
  };

  const handleCancel = () => {
    if (!foundBooking) return;
    const records: BookingRecord[] = JSON.parse(localStorage.getItem('smile_dental_bookings') || '[]');
    const updated = records.map(r => r.id === foundBooking.id ? { ...r, status: 'Cancelled' as const } : r);
    localStorage.setItem('smile_dental_bookings', JSON.stringify(updated));
    setFoundBooking({ ...foundBooking, status: 'Cancelled' });
    setActionMessage('Appointment has been successfully cancelled.');
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden animate-in zoom-in-95 duration-200">
        <div className="p-5 sm:p-6 bg-gradient-to-r from-[#F0FBFD] to-[#FAFCFD] border-b border-slate-100 flex items-center justify-between">
          <div>
            <span className="text-[10px] font-bold text-[#1598B2] uppercase tracking-wider block">
              Patient Portal
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold font-heading text-slate-800">
              Manage Booking
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6 space-y-5">
          <form onSubmit={handleSearch} className="space-y-3">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Booking Reference ID (e.g. SDC-123456)</label>
              <input
                type="text"
                placeholder="SDC-XXXXXX"
                value={searchRef}
                onChange={(e) => setSearchRef(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
              />
            </div>

            <div className="text-center text-xs text-slate-400 font-semibold">— OR —</div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Registered Phone Number</label>
              <input
                type="tel"
                placeholder="9841XXXXXX"
                value={searchPhone}
                onChange={(e) => setSearchPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#20B4D0]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-[#20B4D0] hover:bg-[#1598B2] text-white font-bold text-xs sm:text-sm transition flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <Search className="w-4 h-4" />
              <span>Find My Appointment</span>
            </button>
          </form>

          {actionMessage && (
            <div className="p-3 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 text-xs text-center font-medium">
              {actionMessage}
            </div>
          )}

          {searched && (
            <div className="pt-3 border-t border-slate-100">
              {foundBooking ? (
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#0E7490]">{foundBooking.id}</span>
                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${
                      foundBooking.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {foundBooking.status}
                    </span>
                  </div>

                  <div className="space-y-1.5 text-xs text-slate-600">
                    <p><strong className="text-slate-700">Patient:</strong> {foundBooking.patientName}</p>
                    <p><strong className="text-slate-700">Treatment:</strong> {foundBooking.serviceName}</p>
                    <p><strong className="text-slate-700">Doctor:</strong> {foundBooking.doctorName}</p>
                    <p><strong className="text-slate-700">Schedule:</strong> {foundBooking.date} at {foundBooking.timeSlot}</p>
                  </div>

                  {foundBooking.status === 'Confirmed' && (
                    <div className="pt-2 border-t border-slate-200/60">
                      <button
                        onClick={handleCancel}
                        className="w-full py-2 rounded-lg bg-red-50 hover:bg-red-100 text-red-600 text-xs font-bold transition flex items-center justify-center gap-1.5 cursor-pointer"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Cancel This Appointment</span>
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-4 text-xs text-slate-500">
                  <AlertCircle className="w-8 h-8 text-slate-300 mx-auto mb-1.5" />
                  <span>No matching booking found. Please check your reference ID or phone number.</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
