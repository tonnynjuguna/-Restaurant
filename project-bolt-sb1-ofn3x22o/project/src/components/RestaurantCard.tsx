import React from 'react';
import { Star, Phone, Clock, MapPin, Tag } from 'lucide-react';
import { Restaurant } from '../types/restaurant';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onSelect: (restaurant: Restaurant) => void;
  isSelected: boolean;
}

export const RestaurantCard: React.FC<RestaurantCardProps> = ({
  restaurant,
  onSelect,
  isSelected,
}) => {
  return (
    <div
      onClick={() => onSelect(restaurant)}
      className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105 border-2 ${
        isSelected ? 'border-orange-500' : 'border-transparent'
      }`}
    >
      <div className="relative">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-48 object-cover rounded-t-xl"
        />
        <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{restaurant.rating}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{restaurant.name}</h3>
            <div className="flex items-center space-x-4">
              <span className="text-orange-600 font-medium">{restaurant.cuisine}</span>
              <span className="text-green-600 font-bold">{restaurant.priceRange}</span>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{restaurant.description}</p>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <MapPin className="h-4 w-4" />
            <span>{restaurant.address}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Phone className="h-4 w-4" />
            <span>{restaurant.phone}</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Clock className="h-4 w-4" />
            <span>{restaurant.hours}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {restaurant.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="inline-flex items-center space-x-1 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium"
            >
              <Tag className="h-3 w-3" />
              <span>{feature}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};