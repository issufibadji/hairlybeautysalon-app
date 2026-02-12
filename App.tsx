
import React, { useState, useEffect } from 'react';
import { Screen, Appointment, Specialist } from './types';
import SplashScreen from './components/SplashScreen';
import AuthScreen from './components/AuthScreen';
import Dashboard from './components/Dashboard';
import BookingScreen from './components/BookingScreen';
import AppointmentList from './components/AppointmentList';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.SPLASH);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedSpecialist, setSelectedSpecialist] = useState<Specialist | null>(null);

  useEffect(() => {
    if (currentScreen === Screen.SPLASH) {
      const timer = setTimeout(() => setCurrentScreen(Screen.AUTH), 2000);
      return () => clearTimeout(timer);
    }
  }, [currentScreen]);

  const handleBook = (appointment: Appointment) => {
    setAppointments(prev => [...prev, appointment]);
    setCurrentScreen(Screen.APPOINTMENTS);
  };

  const navigateToBooking = (specialist?: Specialist) => {
    if (specialist) setSelectedSpecialist(specialist);
    setCurrentScreen(Screen.BOOKING);
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.SPLASH:
        return <SplashScreen />;
      case Screen.AUTH:
        return <AuthScreen onLogin={() => setCurrentScreen(Screen.DASHBOARD)} />;
      case Screen.DASHBOARD:
        return (
          <Dashboard 
            onNavigateBooking={navigateToBooking} 
            onViewAppointments={() => setCurrentScreen(Screen.APPOINTMENTS)}
          />
        );
      case Screen.BOOKING:
        return (
          <BookingScreen 
            specialist={selectedSpecialist}
            onBack={() => setCurrentScreen(Screen.DASHBOARD)}
            onBook={handleBook}
          />
        );
      case Screen.APPOINTMENTS:
        return (
          <AppointmentList 
            appointments={appointments}
            onBack={() => setCurrentScreen(Screen.DASHBOARD)}
          />
        );
      default:
        return <SplashScreen />;
    }
  };

  return (
    <div className="max-w-md mx-auto h-screen relative bg-black overflow-hidden flex flex-col">
      {renderScreen()}
    </div>
  );
};

export default App;
