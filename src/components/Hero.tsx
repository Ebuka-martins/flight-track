import React from 'react';
import { Plane, Globe, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-800 text-white">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-pulse">
          <Plane className="w-8 h-8 text-white opacity-20" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Globe className="w-6 h-6 text-white opacity-20" />
        </div>
        <div className="absolute bottom-20 left-1/3 animate-pulse">
          <Clock className="w-7 h-7 text-white opacity-20" />
        </div>
      </div>

      <div className="relative container mx-auto px-4 py-16">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Plane className="w-16 h-16 text-white animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">
            Real-Time Flight Tracking
          </h1>
          
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Stay connected with live flight updates, detailed tracking information, 
            and interactive maps for flights worldwide.
          </p>
          
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Live Updates</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              <span>Global Coverage</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span>Real-Time Data</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;