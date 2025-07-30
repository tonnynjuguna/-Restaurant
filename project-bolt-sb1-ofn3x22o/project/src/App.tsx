import React, { useState, useMemo } from 'react';
import { Header } from './components/Header';
import { FilterBar } from './components/FilterBar';
import { RestaurantList } from './components/RestaurantList';
import { Map } from './components/Map';
import { restaurants } from './data/restaurants';
import { Restaurant, MapCenter } from './types/restaurant';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisines');
  const [selectedPriceRange, setSelectedPriceRange] = useState('All Prices');
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  
  const mapCenter: MapCenter = { lat: 40.7589, lng: -73.9851 };

  const filteredRestaurants = useMemo(() => {
    return restaurants.filter((restaurant) => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          restaurant.cuisine.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          restaurant.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCuisine = selectedCuisine === 'All Cuisines' || restaurant.cuisine === selectedCuisine;
      const matchesPriceRange = selectedPriceRange === 'All Prices' || restaurant.priceRange === selectedPriceRange;
      
      return matchesSearch && matchesCuisine && matchesPriceRange;
    }).sort((a, b) => b.rating - a.rating);
  }, [searchTerm, selectedCuisine, selectedPriceRange]);

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(selectedRestaurant?.id === restaurant.id ? null : restaurant);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
      />
      
      <FilterBar
        selectedCuisine={selectedCuisine}
        selectedPriceRange={selectedPriceRange}
        onCuisineChange={setSelectedCuisine}
        onPriceRangeChange={setSelectedPriceRange}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Restaurant List */}
          <div className="space-y-6">
            <RestaurantList
              restaurants={filteredRestaurants}
              selectedRestaurant={selectedRestaurant}
              onRestaurantSelect={handleRestaurantSelect}
            />
          </div>
          
          {/* Map */}
          <div className="lg:sticky lg:top-8">
            <div className="h-[800px]">
              <Map
                restaurants={filteredRestaurants}
                selectedRestaurant={selectedRestaurant}
                onRestaurantSelect={handleRestaurantSelect}
                center={mapCenter}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">RestaurantFinder</h3>
            <p className="text-gray-400 mb-6">
              Discover amazing dining experiences in your city
            </p>
            <div className="flex justify-center space-x-8 text-sm text-gray-400">
              <span>© 2025 RestaurantFinder</span>
              <span>•</span>
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;