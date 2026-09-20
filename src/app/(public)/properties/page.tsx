import { Suspense } from "react";

import { getProperties } from "@/lib/api/properties";
import PropertyCard from "@/components/shared/Property/PropertyCard";
import { PropertyFilters } from "@/components/shared/Property/PropertyFilters";
import { PropertiesSkeleton } from "@/components/shared/Property/PropertiesSkeleton";
import { PropertyPagination } from "@/components/shared/Property/PropertyPagination";

interface PageProps {
  searchParams: Promise<{
    q?: string;
    sortBy?: string;
    sortOrder?: string;
    page?: string;
  }>;
}

export default async function AllPropertiesPage({ searchParams }: PageProps) {
  const params = await searchParams;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            All Properties
          </h1>
          <p className="text-muted-foreground text-sm mt-1">
            Explore and find your ideal rental home from our available listings.
          </p>
        </div>
      </div>

      <PropertyFilters />

      {/* Keying on the params re-triggers Suspense (and the skeleton) on
          every filter/page change, instead of only on first load. */}
      <Suspense
        key={`${params.q ?? ""}-${params.sortBy ?? ""}-${params.sortOrder ?? ""}-${params.page ?? ""}`}
        fallback={<PropertiesSkeleton />}
      >
        <PropertyResults searchParams={params} />
      </Suspense>
    </div>
  );
}

async function PropertyResults({
  searchParams,
}: {
  searchParams: Awaited<PageProps["searchParams"]>;
}) {
  const { properties, meta } = await getProperties({
    page: searchParams.page ? Number(searchParams.page) : 1,
    q: searchParams.q,
    sortBy: searchParams.sortBy,
    sortOrder: searchParams.sortOrder as "asc" | "desc" | undefined,
  });

  if (properties.length === 0) {
    return (
      <div className="text-center py-16 border rounded-xl bg-card">
        <p className="text-lg font-medium text-foreground">
          No properties found
        </p>
        <p className="text-sm text-muted-foreground mt-1">
          Try adjusting your search criteria or clear active filters.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <PropertyPagination meta={meta} />
    </>
  );
}
