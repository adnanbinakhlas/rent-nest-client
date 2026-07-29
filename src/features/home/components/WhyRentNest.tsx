import {
  IconShieldCheck,
  IconReceipt,
  IconFileCheck,
  IconHeadphones,
} from "@tabler/icons-react";

const features = [
  {
    title: "Verified listings & landlords",
    description:
      "Every property and owner is checked before it’s published — no ghost listings.",
    icon: IconShieldCheck,
  },
  {
    title: "Zero hidden broker fees",
    description:
      "The price you see is the price you pay. No surprise commissions at signing.",
    icon: IconReceipt,
  },
  {
    title: "Secure digital agreements",
    description:
      "Contracts and payments happen in one place, with a clear paper trail.",
    icon: IconFileCheck,
  },
  {
    title: "Support when you need it",
    description:
      "A real team is reachable for move-in issues, disputes, or questions.",
    icon: IconHeadphones,
  },
];

export function WhyRentNest() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
        <div>
          <p className="text-sm font-medium text-primary">Why RentNest</p>
          <h2 className="font-heading mt-2 text-3xl font-semibold text-foreground sm:text-4xl">
            Renting, without the guesswork
          </h2>
          <p className="mt-4 text-muted-foreground">
            Built for a market where trust is the hardest part of renting. We
            verify what we can, and stay transparent about what’s left to you.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ title, description, icon: Icon }) => (
            <div
              key={title}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="font-heading mt-4 font-semibold text-card-foreground">
                {title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
