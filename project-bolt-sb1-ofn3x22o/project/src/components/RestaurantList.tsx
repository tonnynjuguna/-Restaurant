import React from 'react';
import { Restaurant } from '../types/restaurant';
import { RestaurantCard } from './RestaurantCard';

interface RestaurantListProps {
  restaurants: Restaurant[];
  selectedRestaurant: Restaurant | null;
  onRestaurantSelect: (restaurant: Restaurant) => void;
}

export const RestaurantList: React.FC<RestaurantListProps> = ({
  restaurants,
  selectedRestaurant,
  onRestaurantSelect,
}) => {
  if (restaurants.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">🍽️</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">No restaurants found</h3>
        <p className="text-gray-600 text-center max-w-md">
          Try adjusting your search terms or filters to find more restaurants in your area.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">
          {restaurants.length} Restaurant{restaurants.length !== 1 ? 's' : ''} Found
        </h2>
        <div className="text-sm text-gray-500">
          Sorted by rating
        </div>
      </div>
      
      <div className="grid gap-6">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onSelect={onRestaurantSelect}
            isSelected={selectedRestaurant?.id === restaurant.id}
          />
        ))}
      </div>
    </div>
  );
};