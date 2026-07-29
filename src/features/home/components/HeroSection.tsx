import {
  IconSearch,
  IconMapPin,
  IconShieldCheck,
  IconHome,
} from "@tabler/icons-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// TODO: replace with the 3 most recent verified listings from the API
const heroListings = [
  {
    id: "1",
    title: "Lakeside 3BR Apartment",
    area: "Gulshan 2, Dhaka",
    price: "৳45,000",
    tag: "Verified",
  },
  {
    id: "2",
    title: "Cozy Studio near BUET",
    area: "Dhanmondi, Dhaka",
    price: "৳14,500",
    tag: "New",
  },
  {
    id: "3",
    title: "Family House with Garden",
    area: "Bashundhara R/A, Dhaka",
    price: "৳62,000",
    tag: "Verified",
  },
];

const CARD_ROTATION = ["-rotate-6", "rotate-2", "-rotate-2"];
const CARD_POSITION = [
  "left-0 top-10",
  "left-1/2 top-0 -translate-x-1/2",
  "right-0 top-16",
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
        {/* Copy + search */}
        <div className="relative z-10">
          <Badge
            variant="outline"
            className="mb-6 border-primary/30 bg-primary/5 text-primary"
          >
            Bangladesh’s rental marketplace
          </Badge>

          <h1 className="font-heading text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Find a home that’s actually
            <span className="text-primary"> yours to rent.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-muted-foreground">
            Verified listings, honest landlords, zero broker markups. Search
            apartments, studios, and family houses across Dhaka and beyond.
          </p>

          <form
            action="/properties"
            method="get"
            className="mt-10 rounded-2xl border border-border bg-card p-3 shadow-sm sm:flex sm:items-center sm:gap-2 sm:p-2"
          >
            <label className="sr-only" htmlFor="hero-location">
              Location
            </label>
            <div className="flex flex-1 items-center gap-2 rounded-xl px-3 py-2.5 sm:py-2">
              <IconMapPin className="h-4 w-4 shrink-0 text-muted-foreground" />
              <input
                id="hero-location"
                name="location"
                placeholder="Gulshan, Dhanmondi, Uttara…"
                className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
            </div>

            <div className="hidden h-6 w-px bg-border sm:block" />

            <label className="sr-only" htmlFor="hero-type">
              Property type
            </label>
            <select
              id="hero-type"
              name="type"
              defaultValue=""
              className="w-full rounded-xl bg-transparent px-3 py-2.5 text-sm text-foreground focus:outline-none sm:w-40 sm:py-2"
            >
              <option value="" disabled>
                Property type
              </option>
              <option value="apartment">Apartment</option>
              <option value="studio">Studio / Bachelor</option>
              <option value="house">Family house</option>
              <option value="commercial">Commercial</option>
            </select>

            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full gap-2 sm:mt-0 sm:w-auto"
            >
              <IconSearch className="h-4 w-4" />
              Search
            </Button>
          </form>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <IconShieldCheck className="h-4 w-4 text-primary" />
            Every listing is verified by the RentNest team before it goes live.
          </div>
        </div>

        {/* Signature element: a fanned stack of listing cards instead of a single hero image */}
        <div className="relative mx-auto h-105 w-full max-w-md lg:h-120">
          {heroListings.map((listing, i) => (
            <div
              key={listing.id}
              style={{ zIndex: 10 + i }}
              className={`absolute w-64 rounded-2xl border border-border bg-card p-4 shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:rotate-0 ${CARD_ROTATION[i]} ${CARD_POSITION[i]}`}
            >
              <div className="mb-3 flex h-32 items-center justify-center rounded-xl bg-linear-to-br from-primary/15 via-accent to-secondary">
                <IconHome className="h-8 w-8 text-primary/70" />
              </div>
              <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-[11px] font-medium text-primary">
                {listing.tag}
              </span>
              <h3 className="font-heading text-sm font-semibold text-card-foreground">
                {listing.title}
              </h3>
              <p className="text-xs text-muted-foreground">{listing.area}</p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                {listing.price}
                <span className="font-normal text-muted-foreground">/mo</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
