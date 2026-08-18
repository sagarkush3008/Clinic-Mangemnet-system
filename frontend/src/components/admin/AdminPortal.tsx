import React, { useState, useEffect } from 'react';
import { BookingRecord } from '../booking/BookingModal';
import { X, ShieldCheck, CheckCircle2, Clock, Trash2, Calendar, Phone, Search } from 'lucide-react';

interface AdminPortalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({ isOpen, onClose }) => {
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (isOpen) {
      const records: BookingRecord[] = JSON.parse(localStorage.getItem('smile_dental_bookings') || '[]');
      setBookings(records);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const updateStatus = (id: string, status: 'Confirmed' | 'Completed' | 'Cancelled') => {
    const updated = bookings.map(b => b.id === id ? { ...b, status } : b);
    setBookings(updated);
    localStorage.setItem('smile_dental_bookings', JSON.stringify(updated));
  };

  const deleteBooking = (id: string) => {
    const updated = bookings.filter(b => b.id !== id);
    setBookings(updated);
    localStorage.setItem('smile_dental_bookings', JSON.stringify(updated));
  };

  const filtered = bookings.filter(b => 
    b.patientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.phone.includes(searchTerm) ||
    b.serviceName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-8 animate-in zoom-in-95 duration-200 flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 to-slate-800 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#20B4D0] flex items-center justify-center text-white">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-[10px] font-bold text-cyan-300 uppercase tracking-wider block">
                Internal Clinic Dashboard
              </span>
              <h3 className="text-lg font-bold font-heading">
                Staff Appointment Manager
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar */}
        <div className="p-4 bg-slate-50 border-b border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search patient, phone, ref ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3.5 py-2 rounded-xl border border-slate-200 bg-white text-xs focus:outline-none focus:border-[#20B4D0]"
            />
          </div>
          <div className="text-xs text-slate-500 font-medium">
            Total Bookings: <strong className="text-slate-800">{bookings.length}</strong>
          </div>
        </div>

        {/* Table / List */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1">
          {filtered.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm">
              No appointments found in the database.
            </div>
          ) : (
            <div className="space-y-3">
              {filtered.map((b) => (
                <div
                  key={b.id}
                  className="p-4 rounded-2xl border border-slate-200/80 bg-[#FAFCFD] hover:border-slate-300 transition flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
                >
                  <div className="space-y-1 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-[#0E7490]">{b.id}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        b.status === 'Confirmed' ? 'bg-emerald-100 text-emerald-700' :
                        b.status === 'Completed' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
                      }`}>
                        {b.status}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-slate-800">{b.patientName} ({b.phone})</h4>
                    <p className="text-xs text-slate-600">
                      <strong>{b.serviceName}</strong> • {b.doctorName}
                    </p>
                    <p className="text-xs text-slate-500 flex items-center gap-2">
                      <span>{b.date} at {b.timeSlot}</span>
                      {b.notes && <span className="italic text-slate-400">"{b.notes}"</span>}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    {b.status === 'Confirmed' && (
                      <button
                        onClick={() => updateStatus(b.id, 'Completed')}
                        className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-700 text-xs font-bold transition cursor-pointer"
                      >
                        Mark Done
                      </button>
                    )}
                    {b.status !== 'Cancelled' && (
                      <button
                        onClick={() => updateStatus(b.id, 'Cancelled')}
                        className="px-3 py-1.5 rounded-lg bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-bold transition cursor-pointer"
                      >
                        Cancel
                      </button>
                    )}
                    <button
                      onClick={() => deleteBooking(b.id)}
                      className="p-1.5 rounded-lg hover:bg-red-50 text-slate-400 hover:text-red-500 transition cursor-pointer"
                      title="Delete record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
