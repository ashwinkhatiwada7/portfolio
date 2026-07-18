"use client";
import { MenuIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
// Magic UI — animated dark/light theme toggle
import { AnimatedThemeToggler } from "@/components/magicui/animated-theme-toggler";

import { siteBrand } from "@/lib/nav-links";

import { NavMenus } from "./nav-menus";
import { AuthButton } from "./auth-buttons";
import { useSession } from "@/lib/authClient";
import { UserMenu } from "./user-menu";
import { NavLogo } from "./nav-logo";

export function SiteNavbar() {
  const session = useSession();
  return (
    <motion.header
      initial={{ y: -16, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md"
    >
      <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <NavLogo />

        {/* <nav className="hidden items-center gap-1 md:flex">
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
        </nav> */}
        <NavMenus className="hidden items-center gap-1 md:flex" />

        <div className="hidden items-center gap-2 md:flex">
          <AnimatedThemeToggler
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            variant="circle"
          />

          {session.data?.user ? (
            //
            <UserMenu
              username={session.data?.user?.name}
              email={session.data?.user?.email}
              imageUrl={session.data?.user?.image ?? ""}
            />
          ) : (
            <AuthButton />
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <AnimatedThemeToggler
            className="inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            variant="circle"
          />
          <Sheet>
            <SheetTrigger
              render={
                <Button
                  variant="outline"
                  size="icon-sm"
                  aria-label="Open menu"
                />
              }
            >
              <MenuIcon />
            </SheetTrigger>
            <SheetContent side="right" className="gap-0">
              <SheetHeader>
                <SheetTitle>{siteBrand.shortName}</SheetTitle>
              </SheetHeader>
              {/* <nav className="flex flex-col gap-1 px-4 pb-4">
                {navLinks.map((link) => (
                  <SheetTrigger
                    key={link.href}
                    render={
                      <Link
                        href={link.href}
                        className={cn(
                          "rounded-lg px-3 py-2.5 text-sm hover:bg-muted",
                          isLinkActive(link.href, pathname, hash)
                            ? "bg-accent text-accent-foreground"
                            : "text-foreground",
                        )}
                      />
                    }
                  >
                    {link.label}
                  </SheetTrigger>
                ))}
                <div className="mt-4 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    nativeButton={false}
                    render={<Link href="/login" />}
                  >
                    Login
                  </Button>
                  <Button nativeButton={false} render={<Link href="/signup" />}>
                    Sign up
                  </Button>
                </div>
              </nav> */}
              <NavMenus className="flex flex-col gap-1 px-4 pb-4" />
              <AuthButton className="mt-4 flex flex-col items-center justify-center gap-2 " />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
