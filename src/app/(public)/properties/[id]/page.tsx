// app/properties/[id]/page.tsx
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  IconMapPin,
  IconBed,
  IconBath,
  IconRuler2,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Property } from "@/types/property";

const property: Property = {
  id: "fed98454-00a4-4129-b831-31df6247c58a",
  title: "catena vulnero varietas",
  description:
    "Atrox abeo tripudio occaecati. Spes thorax vergo adficio creptio voluptate antiquus commodo voluptate. Strenuus tantillus dicta odit vobis.\nAuctus sum somniculosus arto decens depono socius sophismata adsidue. Contego viridis casso speciosus capto voluptatum. Amaritudo adulatio inflammatio vicissitudo tollo surculus.",
  address: "445 Wilderman Walks",
  city: "South Victorfurt",
  area: "Connecticut",
  latitude: "-44.852574",
  longitude: "19.35897",
  monthlyRent: "4485.21",
  securityDeposit: "4623.4",
  bedrooms: 4,
  bathrooms: 1,
  floor: 13,
  furnished: false,
  size: 782,
  sizeUnit: "SQFT",
  availableFrom: "2027-07-05T18:43:17.329Z",
  available: true,
  status: "AVAILABLE",
  landlord: {
    id: "ad4a8541-eb9a-4b94-92a6-cb1a59330fa6",
    fullname: "Mrs. Delia Fay",
    email: "Constantin.Pagac17@gmail.com",
    phone: "862-914-7422 x28177",
    avatar:
      "https://cdn.jsdelivr.net/gh/faker-js/assets-person-portrait/male/512/36.jpg",
    role: "LANDLORD",
    isVerified: true,
  },
  category: {
    id: "b363ce5e-0532-453e-af18-4e3a2669795c",
    name: "Villa",
    description: "Tero creptio dedico.",
  },
  images: [
    {
      id: "aa7f6596-ed74-4c31-9a71-67408bb79dc9",
      imageUrl: "https://picsum.photos/seed/H5hkf4BuGu/3647/898",
      isPrimary: true,
    },
    {
      id: "e2a20e6b-004f-4691-b853-0c5b3ff7aa54",
      imageUrl: "https://picsum.photos/seed/QHv7CO/2108/3031",
      isPrimary: false,
    },
    {
      id: "19b1f9a2-0773-45bc-87a7-622439253413",
      imageUrl: "https://picsum.photos/seed/1Zl86CHbS0/1637/3631",
      isPrimary: false,
    },
  ],
};

export default function PropertyPage() {
  const primaryImage =
    property.images.find((img) => img.isPrimary)?.imageUrl ||
    property.images[0]?.imageUrl;

  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      {/* Hero image */}
      <div className="relative h-80 w-full rounded-2xl overflow-hidden">
        <Image
          src={primaryImage}
          alt={property.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {property.landlord.isVerified && (
          <Badge className="absolute top-4 left-4 bg-primary text-white flex items-center gap-1">
            <IconShieldCheck className="h-4 w-4" />
            Verified
          </Badge>
        )}
      </div>

      {/* Title + Category + Location */}
      <div className="mt-6 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <h1 className="font-heading text-3xl font-semibold text-foreground">
            {property.title}
          </h1>
          <Badge variant="secondary">{property.category.name}</Badge>
        </div>
        <p className="flex items-center gap-1 text-muted-foreground">
          <IconMapPin className="h-4 w-4" />
          {property.area}, {property.city}
        </p>
      </div>

      {/* Details */}
      <div className="mt-6 flex flex-wrap gap-6 text-muted-foreground">
        <span className="flex items-center gap-1">
          <IconBed className="h-5 w-5" /> {property.bedrooms} Bedrooms
        </span>
        <span className="flex items-center gap-1">
          <IconBath className="h-5 w-5" /> {property.bathrooms} Bathrooms
        </span>
        <span className="flex items-center gap-1">
          <IconRuler2 className="h-5 w-5" /> {property.size} {property.sizeUnit}
        </span>
        <span>Floor {property.floor}</span>
        <span>{property.furnished ? "Furnished" : "Unfurnished"}</span>
      </div>

      {/* Rent + Deposit */}
      <p className="mt-6 text-2xl font-semibold text-foreground">
        ৳{property.monthlyRent}
        <span className="ml-1 text-sm font-normal text-muted-foreground">
          /mo
        </span>
      </p>
      <p className="text-sm text-muted-foreground">
        Security deposit: ৳{property.securityDeposit}
      </p>

      {/* Actions */}
      <div className="mt-6 flex gap-4">
        <Button size="lg">Contact Landlord</Button>
        <Button variant="outline" size="lg">
          Save to Favorites
        </Button>
      </div>

      {/* Description */}
      <div className="mt-10">
        <h2 className="font-heading text-xl font-semibold">Description</h2>
        <p className="mt-2 text-muted-foreground whitespace-pre-line">
          {property.description}
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {property.images.map((img) => (
          <div
            key={img.id}
            className="relative h-48 w-full rounded-xl overflow-hidden"
          >
            <Image
              src={img.imageUrl}
              alt={property.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Landlord Info */}
      <div className="mt-10 flex items-center gap-4 rounded-xl border border-border bg-card p-6">
        <Image
          src={property.landlord.avatar}
          alt={property.landlord.fullname}
          width={64}
          height={64}
          className="rounded-full object-cover"
        />
        <div>
          <h3 className="font-heading text-lg font-semibold">
            {property.landlord.fullname}
          </h3>
          <p className="text-sm text-muted-foreground">
            {property.landlord.email}
          </p>
          <p className="text-sm text-muted-foreground">
            {property.landlord.phone}
          </p>
        </div>
      </div>
    </section>
  );
}
