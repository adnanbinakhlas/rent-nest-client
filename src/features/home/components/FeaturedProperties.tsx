import { PropertyCard } from "@/components/shared/PropertyCard";
import { Button } from "@/components/ui/button";
import { env } from "@/config/env";
import { Property } from "@/types/property";
import Link from "next/link";

export async function FeaturedProperties() {
  const url = `${env.api_url_v1}/properties?limit=8&fields=id,title,area,city,bedrooms,bathrooms,size,monthlyRent,images`;
  const propertiesResponse = await fetch(url).then((res) => res.json());

  if (propertiesResponse.success !== true) {
    return <p>failed to fetch data</p>;
  }

  const properties = propertiesResponse.data;

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
          asChild
          variant="ghost"
          className="gap-1 self-start text-sm sm:self-auto"
        >
          <Link href="/properties">View all listings →</Link>
        </Button>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {properties.map((property: Property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
