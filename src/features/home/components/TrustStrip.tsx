// TODO: source these from a lightweight aggregate query instead of hardcoding
const stats = [
  { label: "Verified listings", value: "12,400+" },
  { label: "Cities covered", value: "8" },
  { label: "Move-in satisfaction", value: "96%" },
  { label: "Avg. response time", value: "under 2 hrs" },
];

export default function TrustStrip() {
  return (
    <section className="border-y border-sidebar-border bg-sidebar">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-6 py-8 sm:grid-cols-4 sm:gap-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center sm:text-left">
            <p className="font-heading text-2xl font-semibold text-sidebar-primary sm:text-3xl">
              {stat.value}
            </p>
            <p className="mt-1 text-xs text-sidebar-foreground/70 sm:text-sm">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
