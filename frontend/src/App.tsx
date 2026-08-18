import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/home/Hero';
import { About } from './components/home/About';
import { SmileCarePillars } from './components/home/SmileCarePillars';
import { Services } from './components/home/Services';
import { Doctors } from './components/home/Doctors';
import { SmileJournal } from './components/home/SmileJournal';
import { Testimonials } from './components/home/Testimonials';
import { Gallery } from './components/home/Gallery';
import { Faq } from './components/home/Faq';
import { Contact } from './components/home/Contact';
import { Footer } from './components/layout/Footer';
import { BookingModal } from './components/booking/BookingModal';
import { ManageBookingModal } from './components/booking/ManageBookingModal';
import { AdminPortal } from './components/admin/AdminPortal';

export function App() {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [manageBookingModalOpen, setManageBookingModalOpen] = useState(false);
  const [adminPortalOpen, setAdminPortalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>();
  const [selectedDoctorId, setSelectedDoctorId] = useState<string | undefined>();

  const handleOpenBooking = (serviceId?: string, doctorId?: string) => {
    setSelectedServiceId(serviceId);
    setSelectedDoctorId(doctorId);
    setBookingModalOpen(true);
  };

  const handleNavigateSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const elem = document.getElementById(sectionId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAFDFE] text-[#292929] font-sans selection:bg-[#20B4D0]/20 selection:text-[#1598B2]">
      {/* Top Navbar */}
      <Navbar
        onOpenBooking={() => handleOpenBooking()}
        onOpenManageBooking={() => setManageBookingModalOpen(true)}
        onOpenAdmin={() => setAdminPortalOpen(true)}
        activeSection={activeSection}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onOpenManageBooking={() => setManageBookingModalOpen(true)}
          onNavigateSection={handleNavigateSection}
        />

        <About onOpenBooking={() => handleOpenBooking()} />

        <SmileCarePillars
          onOpenBooking={() => handleOpenBooking()}
          onNavigateSection={handleNavigateSection}
        />

        <Services onOpenBooking={handleOpenBooking} />

        <Doctors onOpenBooking={handleOpenBooking} />

        <SmileJournal onOpenBooking={() => handleOpenBooking()} />

        <Testimonials />

        <Gallery />

        <Faq />

        <Contact onOpenBooking={() => handleOpenBooking()} />
      </main>

      {/* Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenBooking={() => handleOpenBooking()}
        onOpenAdmin={() => setAdminPortalOpen(true)}
      />

      {/* Modals */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialServiceId={selectedServiceId}
        initialDoctorId={selectedDoctorId}
      />

      <ManageBookingModal
        isOpen={manageBookingModalOpen}
        onClose={() => setManageBookingModalOpen(false)}
      />

      <AdminPortal
        isOpen={adminPortalOpen}
        onClose={() => setAdminPortalOpen(false)}
      />
    </div>
  );
}

export default App;
