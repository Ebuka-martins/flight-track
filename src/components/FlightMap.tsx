import React from 'react';
import { MapPin, Plane, Navigation } from 'lucide-react';

interface FlightInfo {
  flightNumber: string;
  airline: string;
  departure: {
    airport: string;
    city: string;
    time: string;
    gate: string;
  };
  arrival: {
    airport: string;
    city: string;
    time: string;
    gate: string;
  };
  status: string;
  aircraft: string;
  progress: number;
  currentLocation: {
    lat: number;
    lng: number;
  };
  altitude: number;
  speed: number;
  distance: {
    total: number;
    remaining: number;
  };
}

interface FlightMapProps {
  flight: FlightInfo;
}

const FlightMap: React.FC<FlightMapProps> = ({ flight }) => {
  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-white/20 rounded-full">
            <Navigation className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-xl font-bold">Flight Path</h3>
            <p className="text-indigo-100">Real-time location tracking</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Mock Map Container */}
        <div className="relative h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl overflow-hidden border border-gray-200">
          {/* Map Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 grid-rows-6 h-full">
              {Array.from({ length: 48 }).map((_, i) => (
                <div key={i} className="border border-gray-300"></div>
              ))}
            </div>
          </div>

          {/* Flight Path */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {/* Departure Airport */}
              <div className="absolute top-1/2 left-8 transform -translate-y-1/2">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-600 rounded-full animate-pulse"></div>
                  <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                    <span className="text-sm font-medium">{flight.departure.airport}</span>
                  </div>
                </div>
              </div>

              {/* Arrival Airport */}
              <div className="absolute top-1/2 right-8 transform -translate-y-1/2">
                <div className="flex items-center gap-2">
                  <div className="bg-white px-3 py-1 rounded-full shadow-md border">
                    <span className="text-sm font-medium">{flight.arrival.airport}</span>
                  </div>
                  <div className="w-4 h-4 bg-green-600 rounded-full animate-pulse"></div>
                </div>
              </div>

              {/* Flight Path Line */}
              <div className="absolute top-1/2 left-8 right-8 transform -translate-y-1/2">
                <div className="relative">
                  <div className="w-full h-0.5 bg-gray-300"></div>
                  <div 
                    className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-1000"
                    style={{ width: `${flight.progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Current Flight Position */}
              <div 
                className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 transition-all duration-1000"
                style={{ left: `${Math.max(10, Math.min(90, 10 + (flight.progress * 0.8)))}%` }}
              >
                <div className="relative">
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg border-2 border-purple-500 flex items-center justify-center animate-pulse">
                    <Plane className="h-4 w-4 text-purple-600" />
                  </div>
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="bg-white px-3 py-1 rounded-lg shadow-md border">
                      <div className="text-xs font-medium text-gray-800">{flight.flightNumber}</div>
                      <div className="text-xs text-gray-600">{flight.speed} mph</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live Update Indicator */}
              <div className="absolute top-4 right-4">
                <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-md border">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-medium text-gray-700">Live</span>
                </div>
              </div>

              {/* Coordinates Display */}
              <div className="absolute bottom-4 left-4">
                <div className="bg-white px-3 py-2 rounded-lg shadow-md border">
                  <div className="text-xs text-gray-600">Current Position</div>
                  <div className="text-sm font-medium">
                    {flight.currentLocation.lat.toFixed(4)}°, {flight.currentLocation.lng.toFixed(4)}°
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map Legend */}
        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
            <span className="text-gray-600">Departure</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
            <span className="text-gray-600">Arrival</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
            <span className="text-gray-600">Current Position</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
            <span className="text-gray-600">Flight Path</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightMap;