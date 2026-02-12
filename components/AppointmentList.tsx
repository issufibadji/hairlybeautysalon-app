
import React from 'react';
import { Appointment } from '../types';

interface AppointmentListProps {
  appointments: Appointment[];
  onBack: () => void;
}

const AppointmentList: React.FC<AppointmentListProps> = ({ appointments, onBack }) => {
  return (
    <div className="flex-1 bg-[#121212] flex flex-col overflow-y-auto">
      {/* Header */}
      <div className="flex items-center justify-between px-6 pt-12 pb-10">
        <button onClick={onBack} className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-full hover:bg-white/10 transition-colors">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <h2 className="text-lg font-bold text-white tracking-widest uppercase">My Visits</h2>
        <div className="w-10"></div>
      </div>

      <div className="px-6 flex-1 space-y-6 pb-20">
        {appointments.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full opacity-30 text-center pt-20">
            <svg className="w-20 h-20 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            <p className="text-sm font-bold uppercase tracking-widest">No appointments yet</p>
          </div>
        ) : (
          appointments.map(app => (
            <div key={app.id} className="bg-[#1a1a1a] rounded-3xl overflow-hidden border border-white/5 hover:border-white/20 transition-all group">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h4 className="text-lg font-black text-white mb-1 uppercase tracking-tight">{app.service}</h4>
                    <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{app.specialist}</p>
                  </div>
                  <div className="px-3 py-1 bg-white text-black text-[9px] font-black rounded-full tracking-tighter uppercase">
                    {app.status}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 border-t border-white/5 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Date</p>
                      <p className="text-xs text-white font-bold">{app.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[9px] text-gray-500 font-bold uppercase tracking-widest">Time</p>
                      <p className="text-xs text-white font-bold">{app.time}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/5 p-4 flex justify-between items-center group-hover:bg-white/10 transition-colors">
                 <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Booking ID: #{app.id}</span>
                 <button className="text-[10px] text-white font-black underline hover:text-gray-300">DETAILS</button>
              </div>
            </div>
          ))
        )}
      </div>
      
      {appointments.length > 0 && (
        <div className="mt-auto p-6">
           <button 
             onClick={onBack}
             className="w-full bg-white text-black py-4 rounded-full font-black text-xs tracking-widest hover:bg-gray-200 transition-all"
           >
             SCHEDULE MORE
           </button>
        </div>
      )}
    </div>
  );
};

export default AppointmentList;
