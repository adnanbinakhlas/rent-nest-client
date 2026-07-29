import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="rounded-3xl bg-primary p-12 text-center text-primary-foreground">
        <h2 className="text-4xl font-bold">Ready to Find Your Next Home?</h2>

        <p className="mt-4">Join thousands of tenants and landlords today.</p>

        <Button variant="secondary" className="mt-6">
          Get Started
        </Button>
      </div>
    </section>
  );
}
