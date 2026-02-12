
import React, { useState } from 'react';

interface AuthScreenProps {
  onLogin: () => void;
}

const AuthScreen: React.FC<AuthScreenProps> = ({ onLogin }) => {
  const [activeTab, setActiveTab] = useState<'signin' | 'signup'>('signin');

  return (
    <div className="flex-1 bg-[#121212] flex flex-col pt-20 px-8">
      <div className="flex flex-col items-center mb-16">
        <h1 className="text-5xl text-white logo-font mb-2">Hairly</h1>
      </div>

      <div className="flex w-full border-b border-gray-800 mb-8">
        <button 
          onClick={() => setActiveTab('signin')}
          className={`flex-1 pb-4 text-sm font-semibold transition-all ${activeTab === 'signin' ? 'text-white border-b-2 border-white' : 'text-gray-500'}`}
        >
          SIGN IN
        </button>
        <button 
          onClick={() => setActiveTab('signup')}
          className={`flex-1 pb-4 text-sm font-semibold transition-all ${activeTab === 'signup' ? 'text-white border-b-2 border-white' : 'text-gray-500'}`}
        >
          SIGN UP
        </button>
      </div>

      <div className="space-y-4">
        <div className="relative">
          <input 
            type="email" 
            placeholder="Email Address"
            className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
          />
        </div>
        <div className="relative">
          <input 
            type="password" 
            placeholder="Password"
            className="w-full bg-[#1e1e1e] border border-gray-700 rounded-lg py-4 px-4 text-white placeholder-gray-500 focus:outline-none focus:border-gray-500"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-gray-400 py-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="rounded bg-gray-800 border-gray-700 text-white" />
            <span>Remember me</span>
          </label>
          <button className="hover:text-white transition-colors underline">Forgot Password?</button>
        </div>

        <button 
          onClick={onLogin}
          className="w-full bg-white text-black font-bold py-4 rounded-full mt-8 hover:bg-gray-200 transition-colors"
        >
          SIGN IN
        </button>
      </div>

      <div className="mt-auto pb-12 text-center text-xs">
        <span className="text-gray-500">Don't have an account? </span>
        <button className="text-white font-bold hover:underline" onClick={() => setActiveTab('signup')}>SIGNUP</button>
      </div>
    </div>
  );
};

export default AuthScreen;
