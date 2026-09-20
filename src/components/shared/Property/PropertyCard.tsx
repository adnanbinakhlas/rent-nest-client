// components/property-card.tsx
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconBed, IconBath, IconRuler2, IconMapPin } from "@tabler/icons-react";

type PropertyImage = {
  id: string;
  imageUrl?: string;
  isPrimary?: boolean;
};

type Property = {
  id: string;
  title: string;
  area: string;
  city: string;
  bedrooms: number;
  bathrooms: number;
  size: number;
  monthlyRent: string;
  images: PropertyImage[];
};

export default function PropertyCard({ property }: { property: Property }) {
  const primary =
    property.images?.find((i) => i.isPrimary && i.imageUrl)?.imageUrl ||
    property.images?.[0]?.imageUrl ||
    "/placeholder-property.jpg";

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={primary}
          alt={property.title}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          fill
          loading="eager"
          className="object-cover"
        />
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-base font-semibold text-card-foreground">
              {property.title}
            </h3>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <IconMapPin className="h-3 w-3" />
              {property.area}, {property.city}
            </p>
          </div>

          <Badge variant="secondary" className="whitespace-nowrap">
            ৳{property.monthlyRent}/mo
          </Badge>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <IconBed className="h-3.5 w-3.5" /> {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <IconBath className="h-3.5 w-3.5" /> {property.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <IconRuler2 className="h-3.5 w-3.5" /> {property.size} sqft
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <Link href={`/properties/${property.id}`} className="flex-1">
            <Button size="sm" className="w-full">
              View Details
            </Button>
          </Link>
          <Button variant="outline" size="sm">
            Save
          </Button>
        </div>
      </div>
    </article>
  );
}
