export default function HowItWorksSection() {
  return (
    <section className="bg-muted/40 py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border bg-background p-6">
            Search Properties
          </div>

          <div className="rounded-xl border bg-background p-6">
            Schedule Visit
          </div>

          <div className="rounded-xl border bg-background p-6">
            Rent & Move In
          </div>
        </div>
      </div>
    </section>
  );
}
