import { Listing } from "@/types/listing";

export const categories = [
  "Beach",
  "Cabin",
  "Countryside",
  "City",
  "Design",
  "Mountain",
  "Tiny Home",
];

export const listings: Listing[] = [
  {
    id: "casa-mar-1",
    title: "Oceanfront Escape with Sunset Deck",
    location: "Valparaiso, Chile",
    category: "Beach",
    pricePerNight: 148,
    rating: 4.91,
    reviews: 126,
    image: "https://picsum.photos/seed/airbnb-1/900/600",
    images: [
      "https://picsum.photos/seed/airbnb-1/900/600",
      "https://picsum.photos/seed/airbnb-11/900/600",
      "https://picsum.photos/seed/airbnb-12/900/600",
      "https://picsum.photos/seed/airbnb-13/900/600",
    ],
    amenities: ["Wifi", "Ocean view", "Kitchen", "Free parking", "Washer"],
    host: {
      name: "Camila",
      superhost: true,
    },
    description:
      "Bright apartment with full ocean views, spacious terrace, and easy access to restaurants and transport.",
  },
  {
    id: "cabin-forest-2",
    title: "Quiet Forest Cabin with Fireplace",
    location: "Pucón, Chile",
    category: "Cabin",
    pricePerNight: 112,
    rating: 4.86,
    reviews: 88,
    image: "https://picsum.photos/seed/airbnb-2/900/600",
    images: [
      "https://picsum.photos/seed/airbnb-2/900/600",
      "https://picsum.photos/seed/airbnb-21/900/600",
      "https://picsum.photos/seed/airbnb-22/900/600",
      "https://picsum.photos/seed/airbnb-23/900/600",
    ],
    amenities: ["Fireplace", "Hot tub", "Wifi", "BBQ", "Self check-in"],
    host: {
      name: "Diego",
      superhost: false,
    },
    description:
      "A minimalist cabin surrounded by native trees. Perfect for remote work and weekend disconnects.",
  },
  {
    id: "loft-city-3",
    title: "Modern Loft in Historic District",
    location: "Santiago, Chile",
    category: "City",
    pricePerNight: 95,
    rating: 4.73,
    reviews: 204,
    image: "https://picsum.photos/seed/airbnb-3/900/600",
    images: [
      "https://picsum.photos/seed/airbnb-3/900/600",
      "https://picsum.photos/seed/airbnb-31/900/600",
      "https://picsum.photos/seed/airbnb-32/900/600",
      "https://picsum.photos/seed/airbnb-33/900/600",
    ],
    amenities: ["Wifi", "Air conditioning", "Workspace", "Elevator", "Gym"],
    host: {
      name: "Valentina",
      superhost: true,
    },
    description:
      "Industrial style loft near cafes, museums, and metro lines. Includes high-speed internet and workspace.",
  },
  {
    id: "tiny-home-4",
    title: "Tiny Home with Mountain Views",
    location: "Cajon del Maipo, Chile",
    category: "Tiny Home",
    pricePerNight: 79,
    rating: 4.95,
    reviews: 64,
    image: "https://picsum.photos/seed/airbnb-4/900/600",
    images: [
      "https://picsum.photos/seed/airbnb-4/900/600",
      "https://picsum.photos/seed/airbnb-41/900/600",
      "https://picsum.photos/seed/airbnb-42/900/600",
      "https://picsum.photos/seed/airbnb-43/900/600",
    ],
    amenities: ["Mountain view", "Kitchen", "Deck", "Heating", "Breakfast"],
    host: {
      name: "Rocio",
      superhost: false,
    },
    description:
      "Compact design-forward tiny home with panoramic views and a private deck for sunrise coffee.",
  },
  {
    id: "design-studio-5",
    title: "Designer Studio with Private Patio",
    location: "Providencia, Chile",
    category: "Design",
    pricePerNight: 104,
    rating: 4.88,
    reviews: 139,
    image: "https://picsum.photos/seed/airbnb-5/900/600",
    images: [
      "https://picsum.photos/seed/airbnb-5/900/600",
      "https://picsum.photos/seed/airbnb-51/900/600",
      "https://picsum.photos/seed/airbnb-52/900/600",
      "https://picsum.photos/seed/airbnb-53/900/600",
    ],
    amenities: ["Patio", "Coffee maker", "Wifi", "Workspace", "Dryer"],
    host: {
      name: "Sebastian",
      superhost: true,
    },
    description:
      "A cozy design studio with curated furniture, natural light, and walking distance to parks and dining.",
  },
  {
    id: "country-house-6",
    title: "Country House Near Vineyards",
    location: "Colchagua Valley, Chile",
    category: "Countryside",
    pricePerNight: 167,
    rating: 4.9,
    reviews: 97,
    image: "https://picsum.photos/seed/airbnb-6/900/600",
    images: [
      "https://picsum.photos/seed/airbnb-6/900/600",
      "https://picsum.photos/seed/airbnb-61/900/600",
      "https://picsum.photos/seed/airbnb-62/900/600",
      "https://picsum.photos/seed/airbnb-63/900/600",
    ],
    amenities: ["Pool", "Garden", "Kitchen", "Parking", "Pet friendly"],
    host: {
      name: "Marcela",
      superhost: true,
    },
    description:
      "Spacious countryside house ideal for groups, with open-air dining and quick access to vineyards.",
  },
];
