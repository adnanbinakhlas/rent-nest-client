import {
  IconMapPin,
  IconBed,
  IconBath,
  IconRuler2,
  IconShieldCheck,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

interface Property {
  id: string;
  title: string;
  area: string;
  city: string;
  price: string;
  beds: number;
  baths: number;
  size: string;
  verified: boolean;
}

// TODO: replace with `properties` fetched from the Property model (Prisma)
const defaultProperties: Property[] = [
  {
    id: "p1",
    title: "Riverside 2BR Apartment",
    area: "Bashundhara R/A",
    city: "Dhaka",
    price: "৳32,000",
    beds: 2,
    baths: 2,
    size: "1,150 sqft",
    verified: true,
  },
  {
    id: "p2",
    title: "Furnished Studio for Professionals",
    area: "Banani",
    city: "Dhaka",
    price: "৳21,500",
    beds: 1,
    baths: 1,
    size: "600 sqft",
    verified: true,
  },
  {
    id: "p3",
    title: "Family House with Rooftop",
    area: "GEC Circle",
    city: "Chattogram",
    price: "৳48,000",
    beds: 4,
    baths: 3,
    size: "2,400 sqft",
    verified: true,
  },
  {
    id: "p4",
    title: "Compact Bachelor Mess",
    area: "Shahjalal Uposhohor",
    city: "Sylhet",
    price: "৳9,000",
    beds: 1,
    baths: 1,
    size: "320 sqft",
    verified: false,
  },
];

interface FeaturedPropertiesProps {
  properties?: Property[];
}

export function FeaturedProperties({
  properties = defaultProperties,
}: FeaturedPropertiesProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm font-medium text-primary">
            Handpicked this week
          </p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Featured rentals
          </h2>
        </div>
        <Button
          variant="ghost"
          className="gap-1 self-start text-sm sm:self-auto"
        >
          View all listings →
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((property) => (
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
              <span className="font-heading text-sm text-primary/50">
                Photo
              </span>
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
                <span className="text-sm font-normal text-muted-foreground">
                  /mo
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
