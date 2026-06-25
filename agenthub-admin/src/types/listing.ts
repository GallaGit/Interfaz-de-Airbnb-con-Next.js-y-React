export type Host = {
  name: string;
  superhost: boolean;
};

/** Alojamiento listado en Home, Catálogo y Búsqueda. */
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
  host: Host;
  description: string;
};

/** Habitación en detalle — misma estructura que un alojamiento del catálogo. */
export type Room = Listing;
