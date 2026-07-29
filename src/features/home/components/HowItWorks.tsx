import {
  IconSearch,
  IconCalendarCheck,
  IconKey,
  IconFileInfinity,
} from "@tabler/icons-react";

const steps = [
  {
    number: "01",
    title: "Search & shortlist",
    description:
      "Filter by area, budget, and property type. Every listing shown is live and verified.",
    icon: IconSearch,
  },
  {
    number: "02",
    title: "Schedule a visit",
    description:
      "Book a viewing directly with the landlord or their agent, in-app.",
    icon: IconCalendarCheck,
  },
  {
    number: "03",
    title: "Verify & sign digitally",
    description:
      "Review the agreement, confirm identity, and sign — no printouts required.",
    icon: IconFileInfinity,
  },
  {
    number: "04",
    title: "Move in",
    description:
      "Pay the first month and deposit securely, then collect your keys.",
    icon: IconKey,
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-sidebar py-20 text-sidebar-foreground">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
          How renting works on RentNest
        </h2>
        <p className="mt-2 max-w-lg text-sidebar-foreground/70">
          Four steps, start to keys-in-hand — most renters finish in under a
          week.
        </p>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ number, title, description, icon: Icon }) => (
            <div key={number}>
              <div className="flex items-center gap-3">
                <span className="font-heading text-3xl font-semibold text-sidebar-primary">
                  {number}
                </span>
                <Icon className="h-5 w-5 text-sidebar-primary" />
              </div>
              <h3 className="font-heading mt-4 text-lg font-semibold">
                {title}
              </h3>
              <p className="mt-2 text-sm text-sidebar-foreground/70">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
