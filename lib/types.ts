export interface Hut {
  id: string;
  name: string;
  location: string;
  description: string;
  price: number; // per night in PKR
  image: string;
  images: string[];
  rating: number;
  reviews: number;
  capacity: number;
  amenities: string[];
  featured: boolean;
}

export interface BookingFormData {
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  text: string;
  date: string;
}
