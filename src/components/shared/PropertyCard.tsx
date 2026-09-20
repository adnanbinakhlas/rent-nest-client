import Image from "next/image";
import {
  IconMapPin,
  IconBed,
  IconBath,
  IconRuler2,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Property } from "@/types/property";
import { log } from "console";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  // Find the primary image or fallback to the first one
  const primaryImage =
    property.images?.find((img) => img.isPrimary)?.imageUrl ||
    property.images?.[0]?.imageUrl;

  log("image", primaryImage);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg">
      {property.verified && (
        <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground shadow-sm">
          <IconShieldCheck className="h-3 w-3" />
          Verified
        </span>
      )}

      {/* Property Image */}
      <div className="relative h-40 w-full">
        {primaryImage ? (
          <Image
            src={primaryImage}
            alt={property.title}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-linear-to-br from-secondary via-accent to-primary/10">
            <span className="font-heading text-sm text-primary/50">
              No Image
            </span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-heading text-base font-semibold text-card-foreground">
          {property.title}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
          <IconMapPin className="h-3 w-3" />
          {property.area}, {property.city}
        </p>

        <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <IconBed className="h-3.5 w-3.5" />
            {property.bedrooms}
          </span>
          <span className="flex items-center gap-1">
            <IconBath className="h-3.5 w-3.5" />
            {property.bathrooms}
          </span>
          <span className="flex items-center gap-1">
            <IconRuler2 className="h-3.5 w-3.5" />
            {property.size} sqft
          </span>
        </div>

        <p className="mt-4 text-lg font-semibold text-foreground">
          ৳{property.monthlyRent}
          <span className="text-sm font-normal text-muted-foreground">/mo</span>
        </p>
      </div>
    </article>
  );
}
