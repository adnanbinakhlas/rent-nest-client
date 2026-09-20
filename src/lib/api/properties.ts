import { env } from "@/config/env";
import type { Property, MetaData } from "@/types/property";

export interface PropertiesQuery {
  page?: number;
  limit?: number;
  q?: string;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface PropertiesResponse {
  properties: Property[];
  meta: MetaData;
}

const DEFAULT_LIMIT = 10;

/**
 * Fetches a page of properties from the backend API.
 * Runs on the server (Server Component / Route Handler) — never call this from
 * client code, since it isn't guarded against leaking internal API details.
 */
export async function getProperties(
  query: PropertiesQuery,
): Promise<PropertiesResponse> {
  const params = new URLSearchParams({
    fields: "id,title,area,city,bedrooms,bathrooms,size,monthlyRent,images",
    page: String(query.page ?? 1),
    limit: String(query.limit ?? DEFAULT_LIMIT),
    sortBy: query.sortBy ?? "monthlyRent",
    sortOrder: query.sortOrder ?? "asc",
  });

  if (query.q) {
    params.set("q", query.q);
  }

  const res = await fetch(`${env.api_url_v1}/properties?${params.toString()}`, {
    // Cache for 60s and let Next revalidate in the background — avoids
    // hammering the API on every request while keeping listings fresh.
    next: { revalidate: 60 },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch properties: ${res.status} ${res.statusText}`,
    );
  }

  const json = await res.json();

  return {
    properties: json.data ?? [],
    meta: {
      page: json.page ?? json.meta?.page ?? query.page ?? 1,
      limit: json.limit ?? json.meta?.limit ?? query.limit ?? DEFAULT_LIMIT,
      totalPages: json.totalPages ?? json.meta?.totalPages ?? 1,
      totalProperties: json.totalProperties ?? json.meta?.totalProperties ?? 0,
      nextPage: json.nextPage ?? json.meta?.nextPage,
      prevPage: json.prevPage ?? json.meta?.prevPage,
    },
  };
}
