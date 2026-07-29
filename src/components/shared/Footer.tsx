import Link from "next/link";

import { FOOTER_LINKS } from "@/constants/footer";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-xl font-bold">RentNest</h2>

            <p className="mt-4 text-sm text-muted-foreground">
              Find verified rental properties and connect with trusted landlords
              across Bangladesh.
            </p>
          </div>

          {/* Dynamic Footer Columns */}
          {FOOTER_LINKS.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold">{section.title}</h3>

              <ul className="mt-4 space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} RentNest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
