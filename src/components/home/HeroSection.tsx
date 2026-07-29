import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-5xl font-bold">Find Your Perfect Rental Home</h1>

        <p className="mt-6 text-lg text-muted-foreground">
          Discover verified properties, connect with landlords, and rent your
          next home with ease.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Button size="lg">Browse Properties</Button>

          <Button size="lg" variant="outline">
            Become a Landlord
          </Button>
        </div>
      </div>
    </section>
  );
}
