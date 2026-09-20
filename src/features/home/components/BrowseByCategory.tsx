import Image from "next/image";
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
  imageUrl: string;
}

const categories: Category[] = [
  {
    name: "Apartments",
    count: "6,200+",
    icon: IconBuilding,
    span: "sm:col-span-2 sm:row-span-2",
    imageUrl: "https://picsum.photos/seed/apartments/600/400",
  },
  {
    name: "Family houses",
    count: "1,800+",
    icon: IconHome,
    span: "",
    imageUrl: "https://picsum.photos/seed/houses/600/400",
  },
  {
    name: "Bachelor / Sublet",
    count: "3,100+",
    icon: IconUsers,
    span: "",
    imageUrl: "https://picsum.photos/seed/bachelor/600/400",
  },
  {
    name: "Furnished units",
    count: "950+",
    icon: IconDoor,
    span: "",
    imageUrl: "https://picsum.photos/seed/furnished/600/400",
  },
  {
    name: "Commercial spaces",
    count: "420+",
    icon: IconBriefcase,
    span: "",
    imageUrl: "https://picsum.photos/seed/commercial/600/400",
  },
  {
    name: "Warehouses & storage",
    count: "180+",
    icon: IconBuildingWarehouse,
    span: "sm:col-span-2",
    imageUrl: "https://picsum.photos/seed/warehouse/600/400",
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
          {categories.map(({ name, count, icon: Icon, span, imageUrl }) => (
            <a
              key={name}
              href="#"
              className={`group relative flex flex-col justify-between rounded-2xl border border-border p-6 overflow-hidden ${span}`}
            >
              {/* Background image always visible */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={imageUrl}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              <Icon className="h-6 w-6 text-white" />
              <div className="mt-6">
                <h3 className="font-heading text-lg font-semibold text-white">
                  {name}
                </h3>
                <p className="text-sm text-gray-200">{count} listings</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
