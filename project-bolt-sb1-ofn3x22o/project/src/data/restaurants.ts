import { Restaurant } from '../types/restaurant';

export const restaurants: Restaurant[] = [
  {
    id: '1',
    name: 'Bella Vista Italian',
    cuisine: 'Italian',
    rating: 4.8,
    priceRange: '$$$',
    address: '123 Main Street, Downtown',
    phone: '(555) 123-4567',
    image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Authentic Italian cuisine with fresh pasta made daily and an extensive wine selection.',
    hours: 'Mon-Sun: 11:00 AM - 10:00 PM',
    coordinates: { lat: 40.7589, lng: -73.9851 },
    features: ['Outdoor Seating', 'Wine Bar', 'Romantic', 'Family Friendly']
  },
  {
    id: '2',
    name: 'Sakura Sushi House',
    cuisine: 'Japanese',
    rating: 4.6,
    priceRange: '$$',
    address: '456 Cherry Blossom Ave',
    phone: '(555) 234-5678',
    image: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fresh sushi and traditional Japanese dishes in a modern, zen-inspired atmosphere.',
    hours: 'Tue-Sun: 5:00 PM - 11:00 PM',
    coordinates: { lat: 40.7614, lng: -73.9776 },
    features: ['Fresh Fish', 'Sake Bar', 'Modern Decor', 'Takeout']
  },
  {
    id: '3',
    name: 'Farm & Table',
    cuisine: 'American',
    rating: 4.7,
    priceRange: '$$$$',
    address: '789 Organic Lane',
    phone: '(555) 345-6789',
    image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Farm-to-table dining featuring locally sourced ingredients and seasonal menus.',
    hours: 'Wed-Sun: 6:00 PM - 9:00 PM',
    coordinates: { lat: 40.7505, lng: -73.9934 },
    features: ['Farm-to-Table', 'Organic', 'Seasonal Menu', 'Chef\'s Table']
  },
  {
    id: '4',
    name: 'Spice Route',
    cuisine: 'Indian',
    rating: 4.5,
    priceRange: '$$',
    address: '321 Curry Street',
    phone: '(555) 456-7890',
    image: 'https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Authentic Indian flavors with traditional spices and modern presentation.',
    hours: 'Mon-Sun: 11:30 AM - 10:30 PM',
    coordinates: { lat: 40.7484, lng: -73.9857 },
    features: ['Vegetarian Options', 'Spicy Food', 'Traditional', 'Delivery']
  },
  {
    id: '5',
    name: 'Le Petit Bistro',
    cuisine: 'French',
    rating: 4.9,
    priceRange: '$$$$',
    address: '654 Francophile Boulevard',
    phone: '(555) 567-8901',
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Classic French cuisine with an intimate ambiance and exceptional wine pairings.',
    hours: 'Thu-Mon: 6:00 PM - 10:00 PM',
    coordinates: { lat: 40.7549, lng: -73.9840 },
    features: ['Wine Pairing', 'Romantic', 'Fine Dining', 'Reservations Required']
  },
  {
    id: '6',
    name: 'Taco Libre',
    cuisine: 'Mexican',
    rating: 4.4,
    priceRange: '$',
    address: '987 Salsa Street',
    phone: '(555) 678-9012',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Vibrant Mexican street food with fresh ingredients and bold flavors.',
    hours: 'Mon-Sun: 10:00 AM - 11:00 PM',
    coordinates: { lat: 40.7580, lng: -73.9855 },
    features: ['Street Food', 'Casual Dining', 'Late Night', 'Vegetarian Options']
  }
];

export const cuisineTypes = [
  'All Cuisines',
  'Italian',
  'Japanese',
  'American',
  'Indian',
  'French',
  'Mexican'
];

export const priceRanges = [
  'All Prices',
  '$',
  '$$',
  '$$$',
  '$$$$'
];