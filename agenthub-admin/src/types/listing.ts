export type Listing = {
  id: string;
  title: string;
  location: string;
  category: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  image: string;
  images: string[];
  amenities: string[];
  host: {
    name: string;
    superhost: boolean;
  };
  description: string;
};
