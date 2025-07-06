import React from 'react';
import { Plane, Cloud, Globe } from 'lucide-react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      <div className="relative">
        {/* Outer rotating circle */}
        <div className="w-32 h-32 border-4 border-blue-100 rounded-full animate-spin">
          <div className="absolute top-0 left-0 w-full h-full border-4 border-transparent border-t-blue-500 rounded-full animate-spin"></div>
        </div>
        
        {/* Inner airplane */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="animate-pulse">
            <Plane className="w-8 h-8 text-blue-600" />
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute -top-8 -right-8 animate-bounce">
          <Cloud className="w-6 h-6 text-gray-400" />
        </div>
        <div className="absolute -bottom-8 -left-8 animate-bounce delay-150">
          <Globe className="w-6 h-6 text-gray-400" />
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Tracking Flight...
        </h3>
        <p className="text-gray-600 max-w-md">
          We're fetching the latest flight information and real-time updates for you.
        </p>
        
        <div className="mt-4 flex justify-center gap-1">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-75"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-150"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;