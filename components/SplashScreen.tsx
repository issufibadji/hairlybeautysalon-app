
import React from 'react';

const SplashScreen: React.FC = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-center bg-black animate-pulse">
      <h1 className="text-6xl text-white logo-font mb-2">Hairly</h1>
      <p className="text-gray-400 tracking-[0.2em] text-xs font-semibold">BEAUTY & SALON</p>
    </div>
  );
};

export default SplashScreen;
