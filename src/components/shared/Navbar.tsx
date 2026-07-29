"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { IconMenu2, IconX } from "@tabler/icons-react";

import { useState } from "react";

import { Button } from "@/components/ui/button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/constants/navigations";

export default function Navbar() {
  const pathname = usePathname();

  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-background/90 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">
          RentNest
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href && "text-primary",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link href="/register">Register</Link>
          </Button>
        </div>

        {/* Mobile */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button size="icon" variant="ghost" className="md:hidden">
              <IconMenu2 size={22} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right">
            <div className="flex h-full flex-col">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-lg font-bold">RentNest</span>

                <Button
                  size="icon"
                  variant="ghost"
                  onClick={() => setOpen(false)}
                >
                  <IconX size={20} />
                </Button>
              </div>

              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-lg p-3 hover:bg-muted"
                    >
                      <Icon size={18} />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>

              <div className="mt-auto flex flex-col gap-2">
                <Button variant="outline" asChild>
                  <Link href="/login">Login</Link>
                </Button>

                <Button asChild>
                  <Link href="/register">Register</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
