"use client";

import { useState, useTransition } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { IconSearch } from "@tabler/icons-react";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDebouncedCallback } from "@/hooks/UseDeboucedCallback";

export function PropertyFilters() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [, startTransition] = useTransition();

  // Local state only so the input feels instant; the URL still owns the
  // committed value (debounced) so it stays shareable and bookmarkable.
  const [searchValue, setSearchValue] = useState(searchParams.get("q") ?? "");

  function updateParams(updates: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());

    for (const [key, value] of Object.entries(updates)) {
      if (value) {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    }

    // Any filter change resets pagination back to page 1.
    params.delete("page");

    startTransition(() => {
      router.push(`${pathname}?${params.toString()}`);
    });
  }

  const debouncedSearch = useDebouncedCallback((value: string) => {
    updateParams({ q: value || null });
  }, 400);

  return (
    <div className="bg-card p-4 rounded-xl border shadow-sm mb-8 grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
      <div className="relative md:col-span-6">
        <IconSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by city, area, or title..."
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
            debouncedSearch(e.target.value);
          }}
          className="pl-9"
        />
      </div>

      <div className="md:col-span-3">
        <Select
          value={searchParams.get("sortBy") ?? "monthlyRent"}
          onValueChange={(val) => updateParams({ sortBy: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Sort By" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthlyRent">Monthly Rent</SelectItem>
            <SelectItem value="size">Size (sqft)</SelectItem>
            <SelectItem value="bedrooms">Bedrooms</SelectItem>
            <SelectItem value="createdAt">Newest First</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="md:col-span-3">
        <Select
          value={searchParams.get("sortOrder") ?? "asc"}
          onValueChange={(val) => updateParams({ sortOrder: val })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Order" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="asc">Low to High</SelectItem>
            <SelectItem value="desc">High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
