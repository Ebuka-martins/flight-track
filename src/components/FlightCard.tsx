import React from 'react';
import { Plane, Clock, MapPin, Users, Gauge, Activity } from 'lucide-react';

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

interface FlightCardProps {
  flight: FlightInfo;
}

const FlightCard: React.FC<FlightCardProps> = ({ flight }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'En Route':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'Departed':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Landed':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'Delayed':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default:
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-white/20 rounded-full">
              <Plane className="h-6 w-6" />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{flight.flightNumber}</h2>
              <p className="text-blue-100">{flight.airline}</p>
            </div>
          </div>
          
          <div className={`px-4 py-2 rounded-full border ${getStatusColor(flight.status)} bg-white`}>
            <span className="font-medium">{flight.status}</span>
          </div>
        </div>
      </div>

      {/* Flight Route */}
      <div className="p-6 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{flight.departure.airport}</div>
            <div className="text-gray-600">{flight.departure.city}</div>
            <div className="text-sm text-gray-500 mt-1">
              {flight.departure.time} • Gate {flight.departure.gate}
            </div>
          </div>
          
          <div className="flex-1 mx-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200"></div>
              </div>
              <div className="relative flex justify-center">
                <div className="bg-white px-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    <span className="text-sm">{flight.aircraft}</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Progress Bar */}
            <div className="mt-4">
              <div className="flex justify-between text-xs text-gray-500 mb-1">
                <span>Progress</span>
                <span>{Math.round(flight.progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${flight.progress}%` }}
                ></div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-800">{flight.arrival.airport}</div>
            <div className="text-gray-600">{flight.arrival.city}</div>
            <div className="text-sm text-gray-500 mt-1">
              {flight.arrival.time} • Gate {flight.arrival.gate}
            </div>
          </div>
        </div>
      </div>

      {/* Flight Details */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-blue-100 rounded-full">
            <Gauge className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Speed</div>
            <div className="text-lg font-semibold">{flight.speed} mph</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-green-100 rounded-full">
            <Activity className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Altitude</div>
            <div className="text-lg font-semibold">{flight.altitude.toLocaleString()} ft</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-purple-100 rounded-full">
            <MapPin className="h-5 w-5 text-purple-600" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Distance</div>
            <div className="text-lg font-semibold">{flight.distance.total} mi</div>
          </div>
        </div>
        
        <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
          <div className="p-2 bg-orange-100 rounded-full">
            <Clock className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <div className="text-sm text-gray-600">Remaining</div>
            <div className="text-lg font-semibold">{Math.round(flight.distance.remaining)} mi</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;