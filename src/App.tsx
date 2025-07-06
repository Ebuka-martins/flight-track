import React, { useState, useEffect } from 'react';
import { Search, Plane, Clock, MapPin, Users, Gauge, CloudRain } from 'lucide-react';
import SearchForm from './components/SearchForm';
import FlightCard from './components/FlightCard';
import FlightMap from './components/FlightMap';
import LoadingSpinner from './components/LoadingSpinner';
import Hero from './components/Hero';

interface FlightData {
  icao24: string;
  callsign: string;
  origin_country: string;
  longitude: number;
  latitude: number;
  altitude: number;
  velocity: number;
  true_track: number;
  time_position: number;
  last_contact: number;
  on_ground: boolean;
}

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

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [flightData, setFlightData] = useState<FlightInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [realTimeData, setRealTimeData] = useState<FlightData | null>(null);

  // Mock flight data for demonstration
  const generateMockFlightData = (flightNumber: string): FlightInfo => {
    const mockFlights = {
      'AA123': {
        flightNumber: 'AA123',
        airline: 'American Airlines',
        departure: {
          airport: 'JFK',
          city: 'New York',
          time: '14:30',
          gate: 'A12'
        },
        arrival: {
          airport: 'LAX',
          city: 'Los Angeles',
          time: '18:45',
          gate: 'B7'
        },
        status: 'En Route',
        aircraft: 'Boeing 737-800',
        progress: 65,
        currentLocation: { lat: 39.8283, lng: -98.5795 },
        altitude: 35000,
        speed: 580,
        distance: { total: 2475, remaining: 866 }
      },
      'UA456': {
        flightNumber: 'UA456',
        airline: 'United Airlines',
        departure: {
          airport: 'SFO',
          city: 'San Francisco',
          time: '09:15',
          gate: 'C3'
        },
        arrival: {
          airport: 'ORD',
          city: 'Chicago',
          time: '15:30',
          gate: 'D8'
        },
        status: 'Departed',
        aircraft: 'Airbus A320',
        progress: 25,
        currentLocation: { lat: 40.7128, lng: -112.0740 },
        altitude: 32000,
        speed: 520,
        distance: { total: 1846, remaining: 1385 }
      },
      'DL789': {
        flightNumber: 'DL789',
        airline: 'Delta Air Lines',
        departure: {
          airport: 'ATL',
          city: 'Atlanta',
          time: '11:20',
          gate: 'E5'
        },
        arrival: {
          airport: 'MIA',
          city: 'Miami',
          time: '13:45',
          gate: 'F2'
        },
        status: 'Landed',
        aircraft: 'Boeing 757-200',
        progress: 100,
        currentLocation: { lat: 25.7617, lng: -80.1918 },
        altitude: 0,
        speed: 0,
        distance: { total: 594, remaining: 0 }
      }
    };

    return mockFlights[flightNumber as keyof typeof mockFlights] || {
      flightNumber: flightNumber,
      airline: 'Unknown Airline',
      departure: {
        airport: 'Unknown',
        city: 'Unknown',
        time: 'Unknown',
        gate: 'Unknown'
      },
      arrival: {
        airport: 'Unknown',
        city: 'Unknown',
        time: 'Unknown',
        gate: 'Unknown'
      },
      status: 'Flight Not Found',
      aircraft: 'Unknown',
      progress: 0,
      currentLocation: { lat: 0, lng: 0 },
      altitude: 0,
      speed: 0,
      distance: { total: 0, remaining: 0 }
    };
  };

  const handleSearch = async (query: string) => {
    setLoading(true);
    setError(null);
    setSearchQuery(query);

    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockData = generateMockFlightData(query.toUpperCase());
      setFlightData(mockData);
      
      // Start real-time updates for active flights
      if (mockData.status === 'En Route' || mockData.status === 'Departed') {
        startRealTimeUpdates(mockData);
      }
    } catch (err) {
      setError('Failed to fetch flight data');
    } finally {
      setLoading(false);
    }
  };

  const startRealTimeUpdates = (initialData: FlightInfo) => {
    const interval = setInterval(() => {
      if (initialData.status === 'En Route' || initialData.status === 'Departed') {
        setFlightData(prevData => {
          if (!prevData) return null;
          
          const newProgress = Math.min(prevData.progress + Math.random() * 2, 100);
          const newSpeed = prevData.speed + (Math.random() - 0.5) * 20;
          const newAltitude = prevData.altitude + (Math.random() - 0.5) * 1000;
          
          return {
            ...prevData,
            progress: newProgress,
            speed: Math.max(newSpeed, 450),
            altitude: Math.max(newAltitude, 25000),
            distance: {
              ...prevData.distance,
              remaining: Math.max(prevData.distance.remaining - Math.random() * 10, 0)
            }
          };
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Hero />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Flight Tracker
            </h1>
            <p className="text-gray-600 text-lg">
              Track your flight in real-time with live updates
            </p>
          </div>

          <SearchForm onSearch={handleSearch} loading={loading} />

          {loading && (
            <div className="mt-12">
              <LoadingSpinner />
            </div>
          )}

          {error && (
            <div className="mt-8 p-4 bg-red-100 border border-red-300 rounded-lg text-red-700">
              {error}
            </div>
          )}

          {flightData && !loading && (
            <div className="mt-12 space-y-8">
              <FlightCard flight={flightData} />
              <FlightMap flight={flightData} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;