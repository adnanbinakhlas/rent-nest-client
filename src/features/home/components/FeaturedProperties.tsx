import { PropertyCard } from "@/components/shared/PropertyCard";
import { Button } from "@/components/ui/button";
import { Property } from "@/types/property";
import { defaultProperties } from "../data/mockData";

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
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
