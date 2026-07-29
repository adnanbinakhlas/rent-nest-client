import { IconStar, IconStarFilled } from "@tabler/icons-react";

const testimonials = [
  {
    name: "Nusrat Jahan",
    role: "Tenant, Dhanmondi",
    quote:
      "I found and signed for my apartment in four days, without ever paying a broker.",
    rating: 5,
  },
  {
    name: "Md. Rafiqul Islam",
    role: "Landlord, Uttara",
    quote:
      "Verified tenants and on-time digital payments have cut my vacancy time in half.",
    rating: 5,
  },
  {
    name: "Farzana Ahmed",
    role: "Tenant, Chattogram",
    quote:
      "The listings matched reality. What I saw in photos is what I moved into.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
          Renters and landlords, in their words
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < t.rating ? (
                    <IconStarFilled key={i} className="h-4 w-4 text-primary" />
                  ) : (
                    <IconStar
                      key={i}
                      className="h-4 w-4 text-muted-foreground/30"
                    />
                  ),
                )}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-card-foreground">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-5 text-sm">
                <span className="font-medium text-card-foreground">
                  {t.name}
                </span>
                <span className="block text-xs text-muted-foreground">
                  {t.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
