import {
  IconBuilding,
  IconHome,
  IconUsers,
  IconBuildingWarehouse,
  IconBriefcase,
  IconDoor,
  type TablerIcon,
} from "@tabler/icons-react";

interface Category {
  name: string;
  count: string;
  icon: TablerIcon;
  span: string;
}

// TODO: replace with counts aggregated from the Category model
const categories: Category[] = [
  {
    name: "Apartments",
    count: "6,200+",
    icon: IconBuilding,
    span: "sm:col-span-2 sm:row-span-2",
  },
  { name: "Family houses", count: "1,800+", icon: IconHome, span: "" },
  { name: "Bachelor / Sublet", count: "3,100+", icon: IconUsers, span: "" },
  { name: "Furnished units", count: "950+", icon: IconDoor, span: "" },
  { name: "Commercial spaces", count: "420+", icon: IconBriefcase, span: "" },
  {
    name: "Warehouses & storage",
    count: "180+",
    icon: IconBuildingWarehouse,
    span: "sm:col-span-2",
  },
];

export default function BrowseByCategory() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Browse by category
        </h2>
        <p className="mt-2 max-w-lg text-muted-foreground">
          Whatever the household looks like, there’s a listing type built for
          it.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          {categories.map(({ name, count, icon: Icon, span }) => (
            <a
              key={name}
              href="#"
              className={`group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40 hover:bg-accent/50 ${span}`}
            >
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-6">
                <h3 className="font-heading text-lg font-semibold text-card-foreground">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {count} listings
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
