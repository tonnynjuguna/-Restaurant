import React from 'react';
import { Filter } from 'lucide-react';
import { cuisineTypes, priceRanges } from '../data/restaurants';

interface FilterBarProps {
  selectedCuisine: string;
  selectedPriceRange: string;
  onCuisineChange: (cuisine: string) => void;
  onPriceRangeChange: (priceRange: string) => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedCuisine,
  selectedPriceRange,
  onCuisineChange,
  onPriceRangeChange,
}) => {
  return (
    <div className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Filters:</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-600">Cuisine:</label>
            <select
              value={selectedCuisine}
              onChange={(e) => onCuisineChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            >
              {cuisineTypes.map((cuisine) => (
                <option key={cuisine} value={cuisine}>
                  {cuisine}
                </option>
              ))}
            </select>
          </div>
          
          <div className="flex items-center space-x-2">
            <label className="text-sm font-medium text-gray-600">Price:</label>
            <select
              value={selectedPriceRange}
              onChange={(e) => onPriceRangeChange(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
            >
              {priceRanges.map((range) => (
                <option key={range} value={range}>
                  {range}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};