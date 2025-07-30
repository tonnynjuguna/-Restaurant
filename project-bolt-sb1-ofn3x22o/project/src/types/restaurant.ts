export interface Restaurant {
  id: string;
  name: string;
  cuisine: string;
  rating: number;
  priceRange: '$' | '$$' | '$$$' | '$$$$';
  address: string;
  phone: string;
  image: string;
  description: string;
  hours: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  features: string[];
}

export interface MapCenter {
  lat: number;
  lng: number;
}