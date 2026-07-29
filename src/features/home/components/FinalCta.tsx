import Link from "next/link";
import { IconArrowRight, IconHome, IconBuilding } from "@tabler/icons-react";
import { Button } from "@/components/ui/button";

export default function FinalCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-6 rounded-3xl bg-sidebar p-10 text-sidebar-foreground sm:grid-cols-2 sm:p-14">
        <div>
          <IconHome className="h-8 w-8 text-sidebar-primary" />
          <h3 className="font-heading mt-4 text-2xl font-semibold">
            Looking for a place to rent?
          </h3>
          <p className="mt-2 text-sidebar-foreground/70">
            Browse verified apartments, studios, and houses across Bangladesh —
            free to search, no account required.
          </p>
          <Button asChild size="lg" className="mt-6 gap-2">
            <Link href="/properties">
              Find a home
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="border-t border-sidebar-border pt-6 sm:border-l sm:border-t-0 sm:pl-10 sm:pt-0">
          <IconBuilding className="h-8 w-8 text-sidebar-primary" />
          <h3 className="font-heading mt-4 text-2xl font-semibold">
            Have a property to rent out?
          </h3>
          <p className="mt-2 text-sidebar-foreground/70">
            List it in minutes, get verified renters, and manage payments and
            agreements in one dashboard.
          </p>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="mt-6 gap-2 border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent"
          >
            <Link href="/list-property">
              List your property
              <IconArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
