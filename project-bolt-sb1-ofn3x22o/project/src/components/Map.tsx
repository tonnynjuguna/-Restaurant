import React from 'react';
import { MapPin } from 'lucide-react';
import { Restaurant, MapCenter } from '../types/restaurant';

interface MapProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onRestaurantSelect: (restaurant: Restaurant) => void;
  center: MapCenter;
}

export const Map: React.FC<MapProps> = ({
  restaurants,
  selectedRestaurant,
  onRestaurantSelect,
  center,
}) => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-lg h-full relative overflow-hidden">
      {/* Map Header */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="bg-white rounded-lg shadow-md p-4">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Restaurant Locations</h3>
          <p className="text-sm text-gray-600">
            Click on markers to view restaurant details
          </p>
        </div>
      </div>
      
      {/* Simulated Map Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 800 600">
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#e5e7eb" strokeWidth="1" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          
          {/* Simulated streets */}
          <path d="M 100 200 L 700 200" stroke="#d1d5db" strokeWidth="8" opacity="0.7" />
          <path d="M 100 350 L 700 350" stroke="#d1d5db" strokeWidth="8" opacity="0.7" />
          <path d="M 200 100 L 200 500" stroke="#d1d5db" strokeWidth="6" opacity="0.7" />
          <path d="M 400 100 L 400 500" stroke="#d1d5db" strokeWidth="6" opacity="0.7" />
          <path d="M 600 100 L 600 500" stroke="#d1d5db" strokeWidth="6" opacity="0.7" />
        </svg>
      </div>
      
      {/* Restaurant Markers */}
      {restaurants.map((restaurant, index) => {
        const x = 150 + (index % 3) * 200 + Math.random() * 100;
        const y = 150 + Math.floor(index / 3) * 150 + Math.random() * 80;
        const isSelected = selectedRestaurant?.id === restaurant.id;
        
        return (
          <div
            key={restaurant.id}
            className={`absolute cursor-pointer transform transition-all duration-300 hover:scale-110 ${
              isSelected ? 'scale-125 z-20' : 'z-10'
            }`}
            style={{
              left: `${x}px`,
              top: `${y}px`,
            }}
            onClick={() => onRestaurantSelect(restaurant)}
          >
            <div
              className={`relative flex items-center justify-center w-10 h-10 rounded-full shadow-lg ${
                isSelected
                  ? 'bg-gradient-to-r from-orange-500 to-red-500'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-orange-400 hover:to-red-400'
              } transition-all duration-300`}
            >
              <MapPin className="h-6 w-6 text-white" />
              {isSelected && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rotate-45"></div>
              )}
            </div>
            
            {/* Restaurant info popup */}
            {isSelected && (
              <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-48 border-2 border-orange-200">
                <div className="text-sm font-bold text-gray-900">{restaurant.name}</div>
                <div className="text-xs text-orange-600">{restaurant.cuisine}</div>
                <div className="flex items-center space-x-1 mt-1">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 ${
                          i < Math.floor(restaurant.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ★
                      </div>
                    ))}
                  </div>
                  <span className="text-xs text-gray-600">{restaurant.rating}</span>
                </div>
              </div>
            )}
          </div>
        );
      })}
      
      {/* Map Controls */}
      <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
        <button className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-3 transition-colors duration-200">
          <span className="text-xl font-bold text-gray-700">+</span>
        </button>
        <button className="bg-white hover:bg-gray-50 shadow-md rounded-lg p-3 transition-colors duration-200">
          <span className="text-xl font-bold text-gray-700">−</span>
        </button>
      </div>
    </div>
  );
};