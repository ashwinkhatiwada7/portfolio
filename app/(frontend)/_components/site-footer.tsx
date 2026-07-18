"use client";
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navLinks, siteBrand } from "@/lib/nav-links";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-border bg-muted/40">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-4 py-12 sm:px-6">
        <div className="grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <div className="flex flex-col gap-3">
            <p className="font-sans text-lg font-semibold tracking-tight">
              {siteBrand.name}
            </p>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
              {siteBrand.role} building thoughtful product experiences.{" "}
              {siteBrand.tagline}
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium text-foreground">Explore</p>
            <nav className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/login"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign up
              </Link>
            </nav>
          </div>
        </div>

        <Separator />

        <p className="text-xs text-muted-foreground">
          © 2026 Ashwin Khatiwada.
        </p>
      </div>
    </footer>
  );
}
