export interface PropertyImage {
  id: string;
  propertyId: string;
  imageUrl: string;
  isPrimary: boolean;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
}

export interface Property {
  id: string;
  title: string;
  area: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  size: number; // in sqft
  monthlyRent: string; // could be number if you want numeric operations
  images: PropertyImage[];
  verified?: boolean; // optional if not always present
}
