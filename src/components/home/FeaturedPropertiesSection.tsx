export default function FeaturedPropertiesSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Featured Properties
      </h2>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded-xl border p-4">
            <div className="aspect-video rounded-lg bg-muted" />

            <h3 className="mt-4 font-semibold">Luxury Apartment</h3>

            <p className="text-muted-foreground">Dhaka, Bangladesh</p>
          </div>
        ))}
      </div>
    </section>
  );
}
