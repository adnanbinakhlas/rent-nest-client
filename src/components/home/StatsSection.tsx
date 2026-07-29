export default function StatsSection() {
  const stats = [
    {
      label: "Properties",
      value: "10K+",
    },
    {
      label: "Tenants",
      value: "5K+",
    },
    {
      label: "Landlords",
      value: "1K+",
    },
    {
      label: "Bookings",
      value: "20K+",
    },
  ];

  return (
    <section className="bg-muted/40 py-16">
      <div className="container mx-auto grid gap-6 px-4 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border bg-background p-6 text-center"
          >
            <h3 className="text-3xl font-bold">{item.value}</h3>

            <p className="text-muted-foreground">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
