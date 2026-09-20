interface PropertyImage {
  id: string;
  imageUrl: string;
  isPrimary: boolean;
}

interface Landlord {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  avatar: string;
  role: string;
  isVerified: boolean;
}

interface Category {
  id: string;
  name: string;
  description: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  address: string;
  city: string;
  area: string;
  latitude: string;
  longitude: string;
  monthlyRent: string;
  securityDeposit: string;
  bedrooms: number;
  bathrooms: number;
  floor: number;
  furnished: boolean;
  size: number;
  sizeUnit: string;
  availableFrom: string;
  available: boolean;
  status: string;
  landlord: Landlord;
  category: Category;
  images: PropertyImage[];
}
