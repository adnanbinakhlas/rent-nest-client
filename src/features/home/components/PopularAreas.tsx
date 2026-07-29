import { IconMapPin } from "@tabler/icons-react";

interface Area {
  name: string;
  city: string;
  count: number;
}

// TODO: replace with a group-by query on Property.area
const defaultAreas: Area[] = [
  { name: "Gulshan", city: "Dhaka", count: 1240 },
  { name: "Dhanmondi", city: "Dhaka", count: 980 },
  { name: "Bashundhara R/A", city: "Dhaka", count: 1510 },
  { name: "Uttara", city: "Dhaka", count: 1120 },
  { name: "Banani", city: "Dhaka", count: 760 },
  { name: "GEC Circle", city: "Chattogram", count: 430 },
];

interface PopularAreasProps {
  areas?: Area[];
}

export default function PopularAreas({
  areas = defaultAreas,
}: PopularAreasProps) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
        Popular areas to rent
      </h2>
      <p className="mt-2 max-w-lg text-muted-foreground">
        The neighborhoods renters search first, updated from real activity on
        RentNest.
      </p>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {areas.map((area) => (
          <a
            key={`${area.name}-${area.city}`}
            href="#"
            className="flex items-center justify-between rounded-xl border border-border bg-card px-5 py-4 transition-colors hover:border-primary/40"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                <IconMapPin className="h-4 w-4" />
              </span>
              <div>
                <p className="font-medium text-card-foreground">{area.name}</p>
                <p className="text-xs text-muted-foreground">{area.city}</p>
              </div>
            </div>
            <span className="text-sm text-muted-foreground">
              {area.count.toLocaleString()} listings
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
