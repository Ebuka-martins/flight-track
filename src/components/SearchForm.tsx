import React, { useState } from 'react';
import { Search, Plane } from 'lucide-react';

interface SearchFormProps {
  onSearch: (query: string) => void;
  loading: boolean;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, loading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const exampleFlights = ['AA123', 'UA456', 'DL789'];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Plane className="h-5 w-5 text-gray-400" />
          </div>
          
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Enter flight number (e.g., AA123, UA456, DL789)"
            className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
            disabled={loading}
          />
          
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="absolute inset-y-0 right-0 pr-4 flex items-center"
          >
            <div className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-6 py-2 rounded-lg transition-all duration-200 flex items-center gap-2">
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <Search className="h-5 w-5" />
              )}
              <span className="font-medium">Track Flight</span>
            </div>
          </button>
        </div>
      </form>

      <div className="mt-6 pt-6 border-t border-gray-100">
        <p className="text-sm text-gray-600 mb-3">Try these example flights:</p>
        <div className="flex flex-wrap gap-2">
          {exampleFlights.map((flight) => (
            <button
              key={flight}
              onClick={() => setQuery(flight)}
              className="px-4 py-2 bg-gray-50 hover:bg-gray-100 text-gray-700 rounded-lg transition-all duration-200 text-sm font-medium border border-gray-200 hover:border-gray-300"
              disabled={loading}
            >
              {flight}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchForm;