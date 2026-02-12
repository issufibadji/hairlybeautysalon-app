
import React, { useState } from 'react';
import { SERVICES, SPECIALISTS, TIME_SLOTS } from '../constants';
import { Specialist, Service, Appointment } from '../types';

interface BookingScreenProps {
  specialist: Specialist | null;
  onBack: () => void;
  onBook: (appointment: Appointment) => void;
}

const BookingScreen: React.FC<BookingScreenProps> = ({ specialist, onBack, onBook }) => {
  const [selectedService, setSelectedService] = useState<Service>(SERVICES[0]);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist>(specialist || SPECIALISTS[0]);
  const [selectedDate, setSelectedDate] = useState(15);
  const [selectedTime, setSelectedTime] = useState(TIME_SLOTS[0]);

  const dates = [
    { day: 'MON', num: 12 },
    { day: 'TUE', num: 13 },
    { day: 'WED', num: 14 },
    { day: 'THU', num: 15 },
    { day: 'FRI', num: 16 },
    { day: 'SAT', num: 17 },
  ];

  const handleBooking = () => {
    const newAppointment: Appointment = {
      id: Math.random().toString(36).substr(2, 9),
      date: `May ${selectedDate}, 2024`,
      time: selectedTime,
      specialist: selectedSpecialist.name,
      service: selectedService.name,
      price: 24.50,
      status: 'confirmed'
    };
    onBook(newAppointment);
  };

  return (
    <div className="flex-1 bg-[#121212] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-6">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2 className="text-lg font-bold text-white tracking-widest uppercase">Booking</h2>
        <div className="w-10"></div>
      </div>

      {/* Specialist Selection (if not pre-selected or to change) */}
      <div className="px-6 mb-8">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Choose Specialist</h3>
        <div className="flex gap-4 overflow-x-auto no-scrollbar py-2">
          {SPECIALISTS.map(s => (
            <div 
              key={s.id}
              onClick={() => setSelectedSpecialist(s)}
              className={`flex-shrink-0 flex items-center gap-3 p-2 rounded-full border transition-all cursor-pointer ${selectedSpecialist.id === s.id ? 'bg-white border-white' : 'bg-[#1a1a1a] border-white/10'}`}
            >
              <img src={s.image} className="w-10 h-10 rounded-full object-cover" alt={s.name} />
              <span className={`text-[10px] font-bold pr-4 whitespace-nowrap ${selectedSpecialist.id === s.id ? 'text-black' : 'text-white'}`}>{s.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Service Selection */}
      <div className="px-6 mb-8">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Select Service</h3>
        <div className="grid grid-cols-2 gap-3">
          {SERVICES.slice(0, 4).map(s => (
            <div 
              key={s.id}
              onClick={() => setSelectedService(s)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col gap-2 ${selectedService.id === s.id ? 'bg-white border-white text-black' : 'bg-[#1a1a1a] border-white/10 text-white'}`}
            >
              <span className="text-xs font-bold uppercase tracking-tighter">{s.name}</span>
              <span className={`text-[10px] font-medium opacity-60 ${selectedService.id === s.id ? 'text-black' : 'text-gray-400'}`}>30-45 mins</span>
            </div>
          ))}
        </div>
      </div>

      {/* Date Selection */}
      <div className="px-6 mb-8">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Available Dates</h3>
        <div className="flex justify-between gap-2">
          {dates.map(d => (
            <button
              key={d.num}
              onClick={() => setSelectedDate(d.num)}
              className={`flex-1 flex flex-col items-center py-4 rounded-2xl transition-all ${selectedDate === d.num ? 'bg-white text-black' : 'bg-[#1a1a1a] text-gray-500'}`}
            >
              <span className="text-[9px] font-bold mb-1">{d.day}</span>
              <span className="text-sm font-black">{d.num}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Time Selection */}
      <div className="px-6 mb-24">
        <h3 className="text-[10px] font-bold text-gray-500 tracking-widest uppercase mb-4">Available Time</h3>
        <div className="grid grid-cols-3 gap-3">
          {TIME_SLOTS.map(t => (
            <button
              key={t}
              onClick={() => setSelectedTime(t)}
              className={`py-3 rounded-xl text-[10px] font-bold border transition-all ${selectedTime === t ? 'bg-white border-white text-black shadow-xl shadow-white/10' : 'bg-transparent border-white/10 text-gray-400 hover:border-white/40'}`}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Footer CTA */}
      <div className="mt-auto p-6 bg-black/80 backdrop-blur-lg sticky bottom-0 border-t border-white/5">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Total Price</span>
            <span className="text-xl font-black text-white">$24.50</span>
          </div>
          <button 
            onClick={handleBooking}
            className="bg-white text-black px-10 py-4 rounded-full font-black text-xs tracking-widest hover:scale-105 active:scale-95 transition-all"
          >
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingScreen;
