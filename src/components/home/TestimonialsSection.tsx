export default function TestimonialsSection() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Testimonials</h2>

        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="rounded-xl border bg-background p-6">
              Excellent service and beautiful properties.
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
