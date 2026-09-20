import { Property } from "@/types/property";
import {
  IconMapPin,
  IconBed,
  IconBath,
  IconRuler2,
  IconShieldCheck,
} from "@tabler/icons-react";

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article
      key={property.id}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-shadow hover:shadow-lg"
    >
      {property.verified && (
        <span className="absolute right-3 top-3 z-10 flex items-center gap-1 rounded-full bg-primary px-2.5 py-1 text-[11px] font-medium text-primary-foreground shadow-sm">
          <IconShieldCheck className="h-3 w-3" />
          Verified
        </span>
      )}

      {/* TODO: swap for next/image pointed at the Cloudinary URL */}
      <div className="flex h-40 items-center justify-center bg-linear-to-br from-secondary via-accent to-primary/10">
        <span className="font-heading text-sm text-primary/50">Photo</span>
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
            {property.beds}
          </span>
          <span className="flex items-center gap-1">
            <IconBath className="h-3.5 w-3.5" />
            {property.baths}
          </span>
          <span className="flex items-center gap-1">
            <IconRuler2 className="h-3.5 w-3.5" />
            {property.size}
          </span>
        </div>

        <p className="mt-4 text-lg font-semibold text-foreground">
          {property.price}
          <span className="text-sm font-normal text-muted-foreground">/mo</span>
        </p>
      </div>
    </article>
  );
}
