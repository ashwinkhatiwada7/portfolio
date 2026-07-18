"use client";

import { getNavHash, navLinks } from "@/lib/nav-links";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function useActiveSection() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash.replace("#", ""));
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = ["home", "about", "contact"];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setHash(visible[0].target.id);
        }
      },
      {
        rootMargin: "-40% 0px -45% 0px",
        threshold: [0.1, 0.25, 0.5],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  return { pathname, hash };
}

function isLinkActive(href: string, pathname: string, hash: string) {
  const section = getNavHash(href);

  if (section) {
    if (pathname !== "/") return false;
    if (!hash) return section === "home";
    return hash === section;
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}
export function NavMenus({ className }: { className?: string }) {
  const { pathname, hash } = useActiveSection();
  return (
    <nav className={cn(className)}>
      {navLinks.map((link) => {
        const isActive = isLinkActive(link.href, pathname, hash);

        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm transition-colors flex flex-row justify-center items-center gap-1",
              isActive
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {link.icon && <link.icon className="w-4 h-4" />}
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
