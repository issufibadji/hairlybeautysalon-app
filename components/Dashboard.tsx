
import React from 'react';
import { SERVICES, SPECIALISTS } from '../constants';
import { Specialist } from '../types';

interface DashboardProps {
  onNavigateBooking: (specialist?: Specialist) => void;
  onViewAppointments: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigateBooking, onViewAppointments }) => {
  return (
    <div className="flex-1 flex flex-col bg-black overflow-y-auto pb-24">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-6 sticky top-0 bg-black z-20">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
        </button>
        <div className="flex flex-col items-center">
            <h1 className="text-3xl text-white logo-font">Hairly</h1>
            <p className="text-[10px] text-gray-400 tracking-widest font-bold -mt-1">BEAUTY & SALON</p>
        </div>
        <button onClick={onViewAppointments} className="p-2 hover:bg-white/10 rounded-full transition-colors relative">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-black"></div>
        </button>
      </div>

      {/* Banner */}
      <div className="px-6 mb-8">
        <div className="relative rounded-2xl overflow-hidden h-48 group cursor-pointer" onClick={() => onNavigateBooking()}>
          <img 
            src="https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?auto=format&fit=crop&w=800" 
            className="w-full h-full object-cover brightness-50 group-hover:scale-105 transition-transform duration-700" 
            alt="Offer Banner"
          />
          <div className="absolute inset-0 flex flex-col justify-center px-6">
            <h2 className="text-3xl font-bold text-white leading-tight mb-4">
              Look Awesome & <br/> save some
            </h2>
            <div className="bg-white text-black text-[10px] font-black px-4 py-2 rounded-lg self-start tracking-tighter uppercase">
              GET UP TO 50% OFF
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
            <div className="w-2 h-2 rounded-full bg-white opacity-100"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-30"></div>
            <div className="w-2 h-2 rounded-full bg-white opacity-30"></div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="px-6 mb-10">
        <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase mb-6">Service Categories</h3>
        <div className="grid grid-cols-4 gap-4">
          {SERVICES.slice(0, 7).map(service => (
            <div key={service.id} className="flex flex-col items-center group cursor-pointer" onClick={() => onNavigateBooking()}>
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden mb-2 shadow-xl ring-1 ring-white/10 group-hover:ring-white/50 transition-all">
                <img src={service.image} className="w-full h-full object-cover" alt={service.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
              </div>
              <span className="text-[10px] font-bold text-gray-400 group-hover:text-white uppercase transition-colors">{service.name}</span>
            </div>
          ))}
          <div className="flex flex-col items-center cursor-pointer group">
            <div className="w-full aspect-square rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-center group-hover:bg-[#2a2a2a] transition-all">
              <svg className="w-6 h-6 text-gray-500 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
            </div>
            <span className="text-[10px] font-bold text-gray-500 group-hover:text-white uppercase mt-2">More</span>
          </div>
        </div>
      </div>

      {/* Hair Specialist Section */}
      <div className="px-6">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-sm font-bold text-gray-400 tracking-widest uppercase">Top Specialists</h3>
          <button className="text-gray-500 text-xs font-bold hover:text-white transition-colors">VIEW ALL</button>
        </div>
        
        <div className="flex gap-8 overflow-x-auto pb-6 no-scrollbar snap-x">
          {SPECIALISTS.map(specialist => (
            <div 
              key={specialist.id} 
              className="flex-shrink-0 flex flex-col items-center snap-center cursor-pointer group"
              onClick={() => onNavigateBooking(specialist)}
            >
              <div className="relative w-28 h-28 mb-4">
                <div className="absolute inset-0 bg-white/10 rounded-full scale-110 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                <img 
                  src={specialist.image} 
                  className="w-full h-full object-cover rounded-full border-2 border-transparent group-hover:border-white transition-all shadow-2xl relative z-10" 
                  alt={specialist.name} 
                />
                <div className="absolute -bottom-2 right-0 bg-white text-black text-[10px] font-bold px-2 py-0.5 rounded-full z-20 shadow-lg">
                  ★ {specialist.rating}
                </div>
              </div>
              <h4 className="text-white text-xs font-bold tracking-tight mb-1 uppercase group-hover:underline">{specialist.name}</h4>
              <p className="text-[10px] text-gray-500 font-medium">Expert Stylist</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
